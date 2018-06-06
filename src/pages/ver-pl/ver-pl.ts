import { Component } from '@angular/core'; 
import { NavParams, NavController, Platform, LoadingController, ModalController, ToastController } from 'ionic-angular'; 
import { DomSanitizer } from '@angular/platform-browser';

import { LojaVerPage } from '../loja-ver/loja-ver';
import { LojaModalPage } from '../loja-modal/loja-modal';

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
  selector: 'page-ver-pl',
  templateUrl: 'ver-pl.html',
})
export class VerPlPage {

  pdfLink:any;
  data:any ={};
  item = [];
  urlVideo:any='';
  api : string =  'http://app.progettoapp.com.br/arquivos/r';

  constructor(
    public navCtrl: NavController, 
    private sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public modalCtrl : ModalController, 
    public toastCtrl : ToastController) {
    
    this.item = this.navParams.get('item');
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url=' + this.api + '/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Arquivo']);
   
  }

  ionViewDidLoad(){

  }
  selecionaLoja(item: string) {     
    this.navCtrl.push(LojaModalPage,{
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
