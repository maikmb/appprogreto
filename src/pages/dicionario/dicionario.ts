import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { Storage } from '@ionic/storage';

import { DicionarioVerPage } from '../dicionario-ver/dicionario-ver';

import { HomePage } from '../home/home';
import { TitulosPage } from '../titulos/titulos';
import { TitulosLivrosPage } from '../titulos-livros/titulos-livros';
import { RevistaPlPage } from '../revista-pl/revista-pl';
import { OntoartePage } from '../ontoarte/ontoarte';
import { AreaUsuarioRestritaPage } from '../area-usuario-restrita/area-usuario-restrita';
import { EventosPage } from '../eventos/eventos';
import { BuscaPage } from '../busca/busca';
import { OntoarteVerPage } from './../ontoarte-ver/ontoarte-ver';
import { AovivoVideosPage } from '../aovivo-videos/aovivo-videos';

@Component({
  selector: 'page-dicionario',
  templateUrl: 'dicionario.html',
})
export class DicionarioPage {

   public technologies : Array<any>;

   relnovidades = ''; 
   qtdePublicacoes: any;
   numerosNovidades: any;
   numerosNovidadesAtual: any;   

   constructor
   (
     public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl : ViewController, public storage: Storage,
    public service : DadosUsuarioProvider, public loadingCtrl: LoadingController
  ){ 

    this.declareTechnologies(); 

   }

   ionViewDidLoad()
   {
    
   }
   declareTechnologies() : void{
    //retorno de Dados
    this.service.getDicionario()
    .subscribe(
        data=> this.technologies = data.rows,
        err=> console.log(err)
    );
     //const browser = this.iab.create('https://ionicframework.com/');
}
  selecionado(item: string) {     
    this.navCtrl.push(DicionarioVerPage,{
    item
      });
  } 

   filterTechnologies(param : any)
   {
      
      let val : string 	= param;
      if (val.trim() !== '')
      {
         this.technologies = this.technologies.filter((item) =>
         {
           return item.palavra.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1;
         })
      }else{
        let val : string 	= '0';
        this.declareTechnologies();
      }
   }

   /*onFilter(category : string) : void
   {
      this.declareTechnologies();

      // Only filter the technologies array IF the selection is NOT equal to value of all
      if (category.trim() !== 'all')
      {
         this.technologies = this.technologies.filter((item) =>
         {
           return item.tipo.toLowerCase().indexOf(category.toLowerCase()) > -1;
         })
      }
   }*/

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