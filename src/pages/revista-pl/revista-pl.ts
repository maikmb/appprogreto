import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { Storage } from '@ionic/storage';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { LivrosPage } from '../livros/livros';
import { PlListaPage } from '../pl-lista/pl-lista';

import { HomePage } from '../home/home';
import { TitulosPage } from '../titulos/titulos';
import { TitulosLivrosPage } from '../titulos-livros/titulos-livros';
import { OntoartePage } from '../ontoarte/ontoarte';
import { AreaUsuarioRestritaPage } from '../area-usuario-restrita/area-usuario-restrita';
import { EventosPage } from '../eventos/eventos';
import { BuscaPage } from '../busca/busca';
import { OntoarteVerPage } from './../ontoarte-ver/ontoarte-ver';
import { AovivoVideosPage } from '../aovivo-videos/aovivo-videos';

@Component({
  selector: 'page-revista-pl',
  templateUrl: 'revista-pl.html',
})
export class RevistaPlPage {

  @ViewChild('productSlides') productSlides: Slides;

  data:any ={};

  relPl = '';
  relPlCats = '';

  relnovidades = ''; 
	qtdePublicacoes: any;
	numerosNovidades: any;
	numerosNovidadesAtual: any;

  constructor
  (
    public navCtrl: NavController, public service : DadosUsuarioProvider,
    public loadingCtrl: LoadingController, public storage: Storage
  ){

    this.getDados();
    this.getDadosCat();

  }

  ionViewDidLoad() {
    
    setInterval(()=> {
    
        if(this.productSlides.getActiveIndex() == this.productSlides.length() -1)
        this.productSlides.slideTo(0);
        this.productSlides.slideNext();
        
    },3000)

  }

  api : string =  'http://app.progettoapp.com.br/arquivos/r';

  ionViewWillEnter() {
		this.service.getNovidades().subscribe(
			data => {
				this.relnovidades = data.rows;				
				this.storage.get('relNovidades').then((val) => {
					if(val != null ){
						this.numerosNovidades = val.length;
					}else{
						this.storage.set('relNovidades', this.relnovidades)
					}
				});
				this.storage.get('numeroPublicacoes').then((val) => {
					if(val != null){
						this.numerosNovidadesAtual = val;
					}else{
						this.storage.set('numeroPublicacoes', this.relnovidades.length)
					}
				});
				setTimeout(() => {

					if(this.relnovidades.length > this.numerosNovidadesAtual){
						this.qtdePublicacoes = this.relnovidades.length - this.numerosNovidadesAtual;
					}
				}, 500);

			},
			err => console.log(err)
		);
	}

  getDados() {
    //retorno de Dados
    this.service.getRevistaPl()
    .subscribe(
        data=>   this.relPl = data.rows,
        err=> console.log(err)
    );
  }
  getDadosCat() {
    //retorno de Dados
    this.service.getPlCategorias()
    .subscribe(
        data=> this.relPlCats = data.rows,
        err=> console.log(err)        
    );
  }

  selecionado(item: string) {      
    this.navCtrl.push(PlListaPage,{
    item
      });
  }

  abrirPaginaHome(){
    this.navCtrl.setRoot(HomePage);
  }
  abrirPaginaTitulos(){
    this.navCtrl.setRoot(TitulosPage);
  }
  abrirPaginaPublicacoes(){
    this.navCtrl.setRoot(TitulosLivrosPage);
  }
  abrirPaginaPl(){
    this.navCtrl.setRoot(RevistaPlPage);
  }
  abrirPaginaOntoarte(){
    this.navCtrl.setRoot(OntoartePage);
  }  
  abrirPaginaAovivo(){
    this.navCtrl.setRoot(AovivoVideosPage);
  } 
  abrirPaginaAreaUsuarioRestrita(){
    this.navCtrl.setRoot(AreaUsuarioRestritaPage);
  } 
  abrirPaginaEventos(){
    this.navCtrl.setRoot(EventosPage);
  }  
  abrirPaginaBusca(){
    this.navCtrl.setRoot(BuscaPage);
  }
  
}