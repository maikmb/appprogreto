import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private Storage: Storage) {
  }
  ionViewDidLoad() {
    
    this.Storage.set('SlideOlhou', '');

  }
  
  continue(item: string) {     
      this.navCtrl.push(LoginPage,{
       item
        });
  }
  cadastroUser(item: string) {   
    this.navCtrl.push(CadastroUsuarioPage,{
     item
      });
}  
  pular() {   
      this.navCtrl.push(LoginPage);
   }

    /*<ion-header>
	<ion-navbar>
		<ion-buttons end>
			<button ion-button color="primary" (click)= "pular()">Pular Introduçao</button>
		</ion-buttons>
	</ion-navbar>
</ion-header>*/

}
