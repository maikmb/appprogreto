import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { Audios2Page } from '../audios2/audios2';
import { Storage } from '@ionic/storage';
import { EditarMinhaOntoartePage } from '../editar-minha-ontoarte/editar-minha-ontoarte';
import { MinhaListaOntoartePage } from '../minha-lista-ontoarte/minha-lista-ontoarte';

@Component({
  selector: 'page-minha-lista-audio-ontoarte',
  templateUrl: 'minha-lista-audio-ontoarte.html',
})
export class MinhaListaAudioOntoartePage {
  data:any ={};
  item = []; 

  MinhaListaItens = []; 
  ListaItens = [];

  constructor
  (
    public loadingCtrl: LoadingController, public modalCtrl : ModalController, private Storage: Storage,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController
  ){

    this. getDados();  
      
  }
  getDados() {

    this.Storage.ready().then(()=>{
      this.Storage.get("MinhaListaAlbum").then( (data)=>{

        this.MinhaListaItens = data;
        console.log(this.MinhaListaItens);

        if(data==null || data.length==0){

          //this.showEmptCartMessage= true;   
        
        }else{
          
          this.MinhaListaItens.forEach( (item, index)=>{
            this.ListaItens = item;
          })
          
        }
        /*
        if(this.LivrosItens.length > 0){
          this.LivrosItens.forEach( (item, index)=>{
            this.total = this.total + (item.product.price * item.qty);
          })
        } else {
          this.showEmptCartMessage= true;
        }
        */
      })
    })

  }

  abriMinhaLista(item: string){ 
    this.navCtrl.push(Audios2Page, { item } ); 
  }  

  abrirMinhaListaAlbuns(){
    this.navCtrl.push(MinhaListaOntoartePage);
  }

  AbrirEditarOntoarte(){
    this.modalCtrl.create(EditarMinhaOntoartePage).present();
  }

}
