import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { VideosPage } from '../videos/videos';
import { PlListaPage } from '../pl-lista/pl-lista';
import { Audios2Page } from '../audios2/audios2';
import { LivrosPage } from '../livros/livros';

import { HomePage } from '../home/home';
import { TitulosPage } from '../titulos/titulos';
import { TitulosLivrosPage } from '../titulos-livros/titulos-livros';
import { RevistaPlPage } from '../revista-pl/revista-pl';
import { OntoartePage } from '../ontoarte/ontoarte';
import { AreaUsuarioRestritaPage } from '../area-usuario-restrita/area-usuario-restrita';
import { EventosPage } from '../eventos/eventos';
import { OntoarteVerPage } from './../ontoarte-ver/ontoarte-ver';
import { AovivoVideosPage } from '../aovivo-videos/aovivo-videos';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  public technologies : Array<any>;
  
  relnovidades = ''; 
  qtdePublicacoes: any;
  numerosNovidades: any;
  numerosNovidadesAtual: any; 
  
  constructor(
    public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,
    public service : DadosUsuarioProvider, public loadingCtrl: LoadingController, public storage: Storage
  ) { 

    this.declareTechnologies(); 

   }

   ionViewDidLoad()
   {
    
   }
   declareTechnologies() : void{
    //retorno de Dados
    this.service.getBuscar()
    .subscribe(
        data=> this.technologies = data.rows,
        err=> console.log(err)
    );
     //const browser = this.iab.create('https://ionicframework.com/');
}

   filterTechnologies(param : any)
   {
      
      let val : string 	= param;
      if (val.trim() !== '')
      {
         this.technologies = this.technologies.filter((item) =>
         {
           return item.Titulobusca.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Categoria.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Descricaobusca.toLowerCase().indexOf(val.toLowerCase()) > -1;
         })
      }else{
        let val : string 	= '0';
        this.declareTechnologies();
      }
   }

   selecionarBusca(item: string) {

		if (item['Tipo'] == 'video') {

			this.navCtrl.push(VideosPage, { item });

		} else if (item['Tipo'] == 'pl') {

			this.navCtrl.push(PlListaPage, { item });

		} else if (item['Tipo'] == 'musica') {

			this.navCtrl.push(Audios2Page, { item });

		} else {

			this.navCtrl.push(LivrosPage, { item });

		}

	}

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
  abrirPaginaBuscaGeral(){
    this.navCtrl.setRoot(BuscaPage);
  }  

}