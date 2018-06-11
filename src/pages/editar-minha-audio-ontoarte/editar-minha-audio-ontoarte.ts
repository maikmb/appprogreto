import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MinhaListaPage } from '../minha-lista/minha-lista';
import { MinhaListaOntoartePage } from '../minha-lista-ontoarte/minha-lista-ontoarte';
import { MinhaListaAudiosPage } from '../minha-lista-audios/minha-lista-audios';
import { MinhaListaAudioOntoartePage } from '../minha-lista-audio-ontoarte/minha-lista-audio-ontoarte';

@Component({
  selector: 'page-editar-minha-audio-ontoarte',
  templateUrl: 'editar-minha-audio-ontoarte.html',
})
export class EditarMinhaAudioOntoartePage {
  
  minhaLista: any = [];

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage, 
    public alertCtrl: AlertController
  ){
    
  }

  ionViewDidLoad() {

    this.storage.get('MinhaListaAudios').then((val) => {
      this.minhaLista = val;
      console.log('Lista em Session Audios', this.minhaLista);
    });
  }

  apagar_publicacao(item) {
    var index = this.minhaLista.findIndex(function (it, i) {
      return it.idaudio === item['idaudio']
    })
    this.minhaLista.splice(index, 1);
    this.storage.set('MinhaListaAudios', this.minhaLista)

    console.log(this.minhaLista)
  }

  showConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Alerta ...',
      message: 'Deseja realmente remover?',
      buttons: [
        {
          text: 'SIM',
          handler: () => {
            this.apagar_publicacao(item);          
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  voltar(){   
    this.navCtrl.push(MinhaListaAudioOntoartePage)
  }

}
