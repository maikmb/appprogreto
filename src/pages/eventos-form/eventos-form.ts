import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

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
  selector: 'page-eventos-form',
  templateUrl: 'eventos-form.html',
})
export class EventosFormPage {

  data: any = {};  
  loading: Loading;
	item = []; 
  api : string =  'http://app.progettoapp.com.br/arquivos/r';
  
  constructor(
    private payPal: PayPal,
    private socialSharing: SocialSharing,
    public service : DadosUsuarioProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public storage:Storage,
    private http: Http,
    private alertCtrl: AlertController
  ){

    this.getDados();
    
  }

  ionViewDidLoad() {

  }

	getDados() {
		this.service.getEventos();
		this.item = this.navParams.get('item');
  }
  
  public solicitar(dados) {
    // this.showLoading()
    var link = 'http://app.progettoapp.com.br/midias/eventos_cadastrar.php';
    var myData = JSON.stringify(
      { 
        ideventoForm: this.data.ideventoForm, NomeForm: this.data.NomeForm, SobrenomeForm: this.data.SobrenomeForm,
        EmailForm: this.data.EmailForm, CelularForm: this.data.CelularForm,
        EnderecoForm: this.data.EnderecoForm, BairroForm: this.data.BairroForm, CepForm: this.data.CepForm, 
        CidadeForm: this.data.CidadeForm, EstadoForm: this.data.EstadoForm, PaisForm: this.data.PaisForm
      }
    );
    this.http.post(link, myData)
        .subscribe(data => {

           var dadosLogin =  JSON.parse(data["_body"]); 
           console.log(dadosLogin)  
                                    
              if(dadosLogin.rows[0].CadastroSituacao === '1'){

                let alert = this.alertCtrl.create({
                  title: 'Sucesso!',
                  subTitle: "Foi enviado um e-mail com a confirmação do seu cadastro.",
                  buttons: ['OK']
                });
                alert.present();

                this.data.NomeForm = '';
                this.data.SobrenomeForm = '';
                this.data.EmailForm = '';
                this.data.CelularForm = '';

                this.data.EnderecoForm = '';
                this.data.BairroForm = '';
                this.data.CepForm = '';
                this.data.CidadeForm = '';
                this.data.EstadoForm = '';
                this.data.PaisForm = '';           
              
                this.payPal.init({
                  PayPalEnvironmentProduction: 'Afsqbs7RpxDtCUBcvfL55rwr6wikINE0CoEVBghJxTdF5ODaKXtvrA7bCTm5jVm3jziE8_aQH7ie5NJ4',
                  PayPalEnvironmentSandbox: 'AQeIrtsR6ML0MW7PPRjQNw3Yd4qGYu8j-lH2NTA2DRF1gyG6pLwamutWs1teUVtmzWFv5S73zVmsAmbC'
                }).then(() => {
                  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                  this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
                    // Only needed if you get an "Internal Service Error" after PayPal login!
                    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                  })).then(() => {
                    let payment = new PayPalPayment('10.00', 'BRL', 'Alta Formação Empresarial', 'sale');
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
              


              }else{
                
                let alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: "Campo e-mail não pode estar vazio, favor preencher.",
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

  abrirPaginaHome() {
		this.navCtrl.setRoot(HomePage);
	}
	abrirPaginaTitulos() {
		this.navCtrl.setRoot(TitulosPage);
	}
	abrirPaginaPublicacoes() {
		this.navCtrl.setRoot(TitulosLivrosPage);
	}
	abrirPaginaPl() {
		this.navCtrl.setRoot(RevistaPlPage);
	}
	abrirPaginaOntoarte() {
		this.navCtrl.setRoot(OntoartePage);
	}
	abrirPaginaAovivo() {
		this.navCtrl.setRoot(AovivoVideosPage);
	}
	abrirPaginaAreaUsuarioRestrita() {
		this.navCtrl.setRoot(AreaUsuarioRestritaPage);
	}
	abrirPaginaEventos() {
		this.navCtrl.setRoot(EventosPage);
	}
	abrirPaginaBusca() {
		this.navCtrl.setRoot(BuscaPage);
	}
}
