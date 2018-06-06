import { Component } from '@angular/core';
import { NavController, ToastController, Nav, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoadingController } from 'ionic-angular';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

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
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {

	data:any ={};
  idqualSel = [];
  moduloSel = [];
  inputComentario: any;
  relComentarios = '';
  IdUserQual : any = {};

  constructor(   
    private storage: Storage, 
    public http: Http,
    private toastCtrl: ToastController,
    public navCtrl: Nav, 
    public service : DadosUsuarioProvider, 
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ){

    this.storage.get('QualUser').then((val) => {
      this.IdUserQual = val;
    })

    this.getDados();
    this.idqualSel = this.navParams.get('idqualSel');
    this.moduloSel = this.navParams.get('moduloSel');
    console.log(this.moduloSel)
  }

  public EnviaComentario(dados) {

    var link = 'http://app.progettoapp.com.br/midias/comentarios_insert.php';
    var myData = JSON.stringify({
      comentario: this.data.Comentario, 
      iduser: this.data.iduserComentario,
      idqual: this.data.idqualComentario, 
      modulo: this.data.moduloComentario
    });

    this.http.post(link, myData)
    .subscribe(data => {

      var dadosLogin =  JSON.parse(data["_body"]); 
      if(dadosLogin.rows[0].comentarioSituacao ==='1'){

        this.toastCtrl.create({
          message: "Comentário enviado com sucesso! Aguarde pela aprovação da nossa equipe.",
          duration: 2000,
          position: 'middle',
        }).present();   

      }else{

        this.toastCtrl.create({
          message: "Erro! Campo comentário não por estar vazio.",
          duration: 2000,
          position: 'middle',
        }).present();  

      }
                                    
    },
    error => {
      //this.showError(error);
    }); 
    this.data.Comentario = '';  

}   

  getDados() {
    //retorno de Dados
    this.service.getComentarios()
    .subscribe(
        data=> this.relComentarios = data.rows,
        err=> console.log(err)
    );
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
  abrirPaginaBuscaGeral(){
    this.navCtrl.setRoot(BuscaPage);
  }   

}
