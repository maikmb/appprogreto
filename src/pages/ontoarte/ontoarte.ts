import { Component } from '@angular/core'; 
import { NavParams, NavController, Platform, LoadingController } from 'ionic-angular'; 
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { AudiosPage } from '../audios/audios';
import { Audios2Page } from '../audios2/audios2';
import { VideosPage } from '../videos/videos';

import { HomePage } from '../home/home';
import { TitulosPage } from '../titulos/titulos';
import { TitulosLivrosPage } from '../titulos-livros/titulos-livros';
import { RevistaPlPage } from '../revista-pl/revista-pl';
import { AreaUsuarioRestritaPage } from '../area-usuario-restrita/area-usuario-restrita';
import { EventosPage } from '../eventos/eventos';
import { BuscaPage } from '../busca/busca';
import { OntoarteVerPage } from './../ontoarte-ver/ontoarte-ver';
import { AovivoVideosPage } from '../aovivo-videos/aovivo-videos';

@Component({
  selector: 'page-ontoarte',
  templateUrl: 'ontoarte.html',
})
export class OntoartePage {
  
  @ViewChild('productSlides') productSlides: Slides;

  data:any ={};
  relAlbuns = '';
  relConcerto = '';

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
    this.getDados2();

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
    this.service.getAlbuns()
    .subscribe(
        data=> this.relAlbuns = data.rows,
        err=> console.log(err)
    );
  }
  selecionado(item: string) { 
    this.navCtrl.push(Audios2Page,{
      item
    });
  }

  getDados2() {
    //retorno de Dados
    this.service.getConcerto()
    .subscribe(
        data=> this.relConcerto = data.rows,
        err=> console.log(err)
    );
  }
  selecionadoConcerto(item: string) {    
      this.navCtrl.push(VideosPage,{
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
