import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController, ToastController, ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'page-planos',
  templateUrl: 'planos.html',
})
export class PlanosPage {
  
  relPlanos : any;  
  
  constructor(
    public loadingCtrl: LoadingController, private http:Http, public modalCtrl : ModalController, 
    public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public viewCtrl : ViewController,
    public alertCtrl: AlertController, public service : DadosUsuarioProvider, private toastCtrl: ToastController
  ){
    
    this.getPlanos2();

  }
  
  getPlanos2() {
    //retorno de Dados
    this.service.getPlanos()
    .subscribe(
        data=> this.relPlanos = data.rows,
        err=> console.log(err)        
    );
  }

  selecionarPlano(idplano, nomeplano, valorplano){

    this.storage.set("QualNivel", idplano).then( ()=>{} ); 
    this.storage.set("QualNivelNome", nomeplano).then( ()=>{} ); 
    this.storage.set("QualNivelValor", valorplano).then( ()=>{} );    

    this.toastCtrl.create({
      message: "Plano selecionado!",
      duration: 3000,
      position: 'middle',
    }).present();    

    //this.navCtrl.push(CadastroUsuarioPage);
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {

  }

}
