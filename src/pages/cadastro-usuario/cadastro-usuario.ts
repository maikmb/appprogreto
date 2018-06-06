import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, App, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

import { PlanosPage } from '../planos/planos';
import { PagamentoEntregaPage } from '../pagamento-entrega/pagamento-entrega';

@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  data: any = {};  
  loading: Loading;

  QualNivel : any = {}; 
  QualNivelNome : any = {}; 
  QualNivelValor : any = {}; 

  QualUserEndereco : any = {}; 
  QualUserNumero : any = {}; 
  QualUserBairro : any = {}; 
  QualUserComplemento : any = {}; 
  QualUserCidade : any = {}; 
  QualUserEstado : any = {}; 
  QualUserPais : any = {}; 
  QualUserCep : any = {}; 

  constructor(
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, 
    public loadingCtrl: LoadingController, public storage:Storage,
    private http: Http, private alertCtrl: AlertController, private payPal: PayPal
  ){

  }
  escolherPagamentoEntrega() {    
    this.modalCtrl.create(PagamentoEntregaPage).present();
  }
  escolherPlano() {      
    this.modalCtrl.create(PlanosPage).present();
  }  
  
  public solicitar(dados) {
    // this.showLoading()

    this.storage.get('QualNivel').then((val) => { this.QualNivel = val; });
    this.storage.get('QualNivelNome').then((val) => { this.QualNivelNome = val; });
    this.storage.get('QualNivelValor').then((val) => { this.QualNivelValor = val; });

    this.storage.get('QualUserEndereco').then((val) => { this.QualUserEndereco = val; });

    var link = 'http://app.progettoapp.com.br/midias/cadastrar_user.php';
    var myData = JSON.stringify(
      { 
        //form contato
        NomeUser: this.data.NomeUser, SobrenomeUser: this.data.SobrenomeUser, EmpresaUser: this.data.EmpresaUser, 
        EmailUser: this.data.EmailUser, CelularUser: this.data.CelularUser, SenhaUser: this.data.SenhaUser, 
        SenhaConfirmar: this.data.SenhaConfirmar,
        EnderecoUser: this.QualUserEndereco, NumeroUser: this.QualUserEndereco, BairroUser: this.QualUserEndereco,
        ComplementoUser: this.QualUserEndereco, CidadeUser: this.QualUserEndereco, EstadoUser: this.QualUserEndereco,
        PaisUser: this.QualUserEndereco, CepUser: this.QualUserEndereco,
        PlanoSelecionado: this.QualNivel
      }
    );
    this.http.post(link, myData)
        .subscribe(data => {

           var dadosLogin =  JSON.parse(data["_body"]); 
           //console.log(dadosLogin);
                                    
              if(dadosLogin.rows[0].CadastroSituacao === '1'){

                let alert = this.alertCtrl.create({
                  title: 'Sucesso!',
                  subTitle: "Foi enviado um e-mail com sua nova senha.",
                  buttons: ['OK']
                });
                alert.present();

                this.data.NomeUser = '';
                this.data.SobrenomeUser = '';
                this.data.EmpresaUser = '';
                this.data.EmailUser = '';
                this.data.CelularUser = '';
                this.data.SenhaUser = '';
                this.data.SenhaConfirmar = '';
                
                this.payPal.init({
                  PayPalEnvironmentProduction: 'Afsqbs7RpxDtCUBcvfL55rwr6wikINE0CoEVBghJxTdF5ODaKXtvrA7bCTm5jVm3jziE8_aQH7ie5NJ4',
                  PayPalEnvironmentSandbox: 'AQeIrtsR6ML0MW7PPRjQNw3Yd4qGYu8j-lH2NTA2DRF1gyG6pLwamutWs1teUVtmzWFv5S73zVmsAmbC'
                }).then(() => {
                  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                  this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
                    // Only needed if you get an "Internal Service Error" after PayPal login!
                    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                  })).then(() => {
                    let payment = new PayPalPayment(this.QualNivelValor, 'BRL', this.QualNivelNome, 'sale');
                    this.payPal.renderSinglePaymentUI(payment).then(() => {
                        // Successfully paid
                  
                        // Example sandbox response
                        //
                        // {
                        //   "client": {
                        //     "environment": "sandbox",
                        //     "product_name": "PayPal iOS SDK",
                        //     "paypal_sdk_version": "2.16.0",
                        //     "platform": "iOS"
                        //   },
                        //   "response_type": "payment",
                        //   "response": {
                        //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                        //     "state": "approved",
                        //     "create_time": "2016-10-03T13:33:33Z",
                        //     "intent": "sale"
                        //   }
                        // }
                      }, () => {
                        // Error or render dialog closed without being successful
                      });
                    }, () => {
                      // Error in configuration
                    });
                  }, () => {
                    // Error in initialization, maybe PayPal isn't supported or something else
                  });                 

              }else if(dadosLogin.rows[0].CadastroSituacao === '2'){

                let alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: "Senha não conferem, favor digitar novamente.",
                  buttons: ['OK']
                });
                alert.present();                
                
              }else if(dadosLogin.rows[0].CadastroSituacao === '3'){

                let alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: "Dados de entrega não preenchidos, favor digitar os mesmos.",
                  buttons: ['OK']
                });
                alert.present();  
                
              }else if(dadosLogin.rows[0].CadastroSituacao === '4'){

                let alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: "Digite um e-mail válido.",
                  buttons: ['OK']
                });
                alert.present();                         

              }else{
                
                let alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: "E-mail inválido ou não existente em nosso banco de dados.",
                  buttons: ['OK']
                });
                alert.present();

              }
        },
        error => {
          this.showError(error);
        }); 
  }      
  showLoading() {
    this.loading = this.loadingCtrl.create({
        content: 'Aguarde...',
        dismissOnPageChange: true
    });
    this.loading.present();
  }
  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
        title: 'Acesso Negado',
        subTitle: text,
        buttons: ['OK']
    });
    alert.present();
  }  

}
