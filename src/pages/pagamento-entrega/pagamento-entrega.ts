import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController, ToastController, ViewController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'page-pagamento-entrega',
  templateUrl: 'pagamento-entrega.html',
})
export class PagamentoEntregaPage {

  data: any = {};  
  form : FormGroup;

  // Validation error messages that will be displayed for each form field with errors.
  validation_messages = {
    'myField': [
      { type: 'pattern', message: 'Please enter a number like 12345678/00.' }
    ],
    'myField2': [
      { type: 'pattern', message: 'bbb' }
    ]    
  }

  constructor(
    public modalCtrl : ModalController, public viewCtrl : ViewController, public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage, public alertCtrl: AlertController, private toastCtrl: ToastController
  ){

    this.form = this.formBuilder.group({
      myField: ['', Validators.pattern('[0-9]{8}/[0-9]{2}')],
      //myField2: ['', Validators.pattern('[0-9]{8}/[0-9]{2}')]
    });

    // Initial value for the field
    //this.form.get('myField').setValue('11223344/55');
    // /this.form.get('myField2').setValue('aaa');

  }

  enviarEndereco(){

    this.storage.set("QualUserEndereco", this.data.endereco).then( ()=>{} );    
    this.storage.set("QualUserNumero", this.data.numero).then( ()=>{} );  
    this.storage.set("QualUserBairro", this.data.bairro).then( ()=>{} );  
    this.storage.set("QualUserComplemento", this.data.complemento).then( ()=>{} );  
    this.storage.set("QualUserCidade", this.data.cidade).then( ()=>{} ); 
    this.storage.set("QualUserEstado", this.data.estado).then( ()=>{} ); 
    this.storage.set("QualUserPais", this.data.pais).then( ()=>{} );  
    this.storage.set("QualUserCep", this.data.cep).then( ()=>{} );  

    this.toastCtrl.create({
      message: "Endereço enviado com sucesso!",
      duration: 3000,
      position: 'middle',
    }).present();

    //this.navCtrl.push(CadastroUsuarioPage);

  }
    save() {
        if (this.form.valid) {
            // Save your values, using this.form.get('myField').value;
        }
      }
  fecharModal(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {

  }

}
