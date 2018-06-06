import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

import { LoginPage } from '../login/login';

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
  selector: 'page-sair',
  templateUrl: 'sair.html',
})
export class SairPage {

  relnovidades = ''; 
  qtdePublicacoes: any;
  numerosNovidades: any;
  numerosNovidadesAtual: any;

  constructor
  (
    public navCtrl: NavController, public service : DadosUsuarioProvider,
    public loadingCtrl: LoadingController, public storage: Storage
  ){

 
  }
  ionViewDidLoad() {
    
    this.storage.get('Status').then((val) => {
      console.log(val)
       if (val == 'Logado') { 
        this.storage.set('Status', '');

        //this.storage.remove('Status');
        //this.storage.remove('QualFoto');
        //this.storage.remove('NivelUserQual');
        //this.storage.remove('QualPlano');

        this.navCtrl.setRoot(LoginPage);

      } else { 

        this.storage.set('Status', '');

        //this.storage.remove('Status');
        //this.storage.remove('QualFoto');
        //this.storage.remove('NivelUserQual');
        //this.storage.remove('QualPlano');

        this.navCtrl.setRoot(LoginPage);

      }    
    }); 

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
  abrirPaginaBusca(){
    this.navCtrl.setRoot(BuscaPage);
  }

}
