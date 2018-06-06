import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

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
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { PrivacidadeVerPage } from '../privacidade-ver/privacidade-ver';

@Component({
  selector: 'page-privacidade',
  templateUrl: 'privacidade.html',
})
export class PrivacidadePage {

  data:any ={};
  relPrivacidade = '';

  constructor
  (
    public navCtrl: NavController, 
    public service : DadosUsuarioProvider,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public modalCtrl : ModalController
  ){

    this.getDados();

  }

  ionViewDidLoad() {

  }

  getDados() {
    //retorno de Dados
    this.service.getPrivacidade()
    .subscribe(
        data=> this.relPrivacidade = data.rows,
        err=> console.log(err)
    );
  }

  abrirPrivacidade(item) {  
    this.navCtrl.push(PrivacidadeVerPage, { item });
  } 

  abrirPaginaHome(){
    this.navCtrl.setRoot(HomePage);
  }
  abrirPaginaAovivo(){
    this.navCtrl.setRoot(AovivoVideosPage);
  } 
  abrirPaginaEventos(){
    this.navCtrl.setRoot(EventosPage);
  }  
  abrirPaginaBusca(){
    this.navCtrl.setRoot(BuscaPage);
  }  
  
}
