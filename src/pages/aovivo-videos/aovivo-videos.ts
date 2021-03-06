import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

import { AovivoArquivoPage } from '../aovivo-arquivo/aovivo-arquivo';
import { AovivoProximasPage } from './../aovivo-proximas/aovivo-proximas';

import { HomePage } from '../home/home';
import { TitulosPage } from '../titulos/titulos';
import { TitulosLivrosPage } from '../titulos-livros/titulos-livros';
import { RevistaPlPage } from '../revista-pl/revista-pl';
import { OntoartePage } from '../ontoarte/ontoarte';
import { AreaUsuarioRestritaPage } from '../area-usuario-restrita/area-usuario-restrita';
import { EventosPage } from '../eventos/eventos';
import { BuscaPage } from '../busca/busca';
import { OntoarteVerPage } from './../ontoarte-ver/ontoarte-ver';

@Component({
  selector: 'page-aovivo-videos',
  templateUrl: 'aovivo-videos.html',
})
export class AovivoVideosPage {

  relnovidades = ''; 
  qtdePublicacoes: any;
  numerosNovidades: any;
  numerosNovidadesAtual: any;

  constructor
  (
    public navCtrl: NavController, public navParams: NavParams, 
    public service : DadosUsuarioProvider, public storage: Storage
  ){

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


  abrirPaginaAovivoArquivo(){
    this.navCtrl.setRoot(AovivoArquivoPage);
  }
  abrirPaginaAoVivoVideo(){
    this.navCtrl.setRoot(AovivoVideosPage);
  }
  abrirPaginaAovivoProximas(){
    this.navCtrl.setRoot(AovivoProximasPage);
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
