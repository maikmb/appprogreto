import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Slide } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { Storage } from '@ionic/storage';

import { SlidePage } from '../pages/slide/slide';
import { HomePage } from '../pages/home/home';
import { LivrosPage } from '../pages/livros/livros';
import { TitulosPage } from '../pages/titulos/titulos';
import { AudiosPage } from '../pages/audios/audios';
import { LoginPage } from '../pages/login/login';

import { LojaPage } from '../pages/loja/loja';
import { LojaVerPage } from '../pages/loja-ver/loja-ver';
import { MinhaListaPage } from '../pages/minha-lista/minha-lista';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { DicionarioPage } from '../pages/dicionario/dicionario';
import { AtendimentoPage } from '../pages/atendimento/atendimento';
import { BuscaPage } from '../pages/busca/busca';
import { TitulosLivrosPage } from '../pages/titulos-livros/titulos-livros';
import { SairPage } from '../pages/sair/sair';
import { VideosPage } from '../pages/videos/videos';
import { EventosPage } from './../pages/eventos/eventos';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { PrivacidadePage } from '../pages/privacidade/privacidade';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { MeusPlanosPage } from '../pages/meus-planos/meus-planos';
import { LojaAvisoPage } from '../pages/loja-aviso/loja-aviso';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  dados: any = {};
	data:any = {};
	page:any={};
  link:any = {};
  
  IdUserQual : any = {}; 
  EmailUserQual : any= {};
  NomeUserQual : any = {};
  SobrenomeUserQual : any = {};    
  NivelUserQual : any = {};
  PlanoUserQual : any = {};
  FotoUserQual : any = {};

  pages: Array<{title: string, component: any}>;

  constructor(
    private oneSignal: OneSignal, 
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private storage: Storage
  ){  
      
    this.initializeApp();  

    // used for an example of ngFor and navigation
    this.pages = [ { title: 'Home', component: HomePage } ];

  }

  initializeApp() {
    this.storage.get('Status').then((val) => {
      if(val == 'Logado') { // verificando se o existe usuario com base no token, caso sim sera redirecionado para tela de menu
        this.rootPage = HomePage; 
     
      }else{ // caso não sera redirecionado para o login, pois o token não existe ou esta invalido
        
        this.storage.get('SlideOlhou').then((val) => {
          console.log(val)
          if(val == 'Sim') { 
            this.rootPage = LoginPage;
          } else { 
            this.rootPage = LoginPage;
          }    
        }); 
        
      }    
    }); 
		this.platform.ready().then(() => {  
      this.userDadosGuardados();
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    if (this.platform.is('cordova')) {
      /*
      ///this.oneSignal.startInit("SEU CODIGO NO ONESIGNAL ", "id ONESGNAL");
      this.oneSignal.startInit("e474ae13-b58d-4c19-b53b-1e99ebb0c5bb", "1015641030592");
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.setSubscription(true);
      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // handle received here how you wish.
      });
      this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
        // handle opened here how youwish.
        this.dados = JSON.stringify(jsonData);
        this.data = JSON.parse(this.dados);
        this.page = this.data.notification.payload.additionalData['router'];
        //this.link = this.data.notification.payload.additionalData['link'];
        //	console.log('link', this.link)
        console.log('router', this.page)
        // do something when a notification is opened
        setTimeout(() => {
          this.nav.push(VideosPage, {
            item: this.page
          });
        }, 4000);
      });
      this.oneSignal.enableVibrate(true);
      this.oneSignal.endInit();
      this.oneSignal.getIds().then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log("deu erro");
      });*/

    } else {

    }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
      
  }

   userDadosGuardados(){
    this.storage.get('QualUser').then((val) => {
      this.IdUserQual = val;
    })
    this.storage.get('QualEmail').then((val) => {
      this.EmailUserQual = val;
    })
    this.storage.get('QualNome').then((val) => {
      this.NomeUserQual = val;
    })
    this.storage.get('QualSobrenome').then((val) => {
      this.SobrenomeUserQual = val;
    })     
    this.storage.get('QualNivel').then((val) => {
      this.NivelUserQual = val;
    })
    this.storage.get('QualPlano').then((val) => {
      this.PlanoUserQual = val;  
    })
    this.storage.get('QualFoto').then((val) => {
      this.FotoUserQual = val;
    })
  } 

  abrirPaginaLoja(){
    this.nav.setRoot(LojaAvisoPage);
  }
  abrirPaginaNotificacao(){
    this.nav.setRoot(NotificacoesPage);
  }
  abrirPaginaMeusPlanos(){
    this.nav.setRoot(MeusPlanosPage);
  }
  abrirPaginaMinhaCompras(){
    this.nav.setRoot(CarrinhoPage);
  }    
  abrirPaginaMinhalista(){
    this.nav.setRoot(MinhaListaPage);
  }
  abrirPaginaDicionario(){
    this.nav.setRoot(DicionarioPage);
  }
  abrirPaginaAtendimento(){
    this.nav.setRoot(AtendimentoPage);
  }  
  abrirPaginaConfig(){
    this.nav.setRoot(ConfiguracoesPage);
  } 
  abrirPaginaConta(){
    this.nav.setRoot(MinhaContaPage);
  } 
  abrirPaginaPrivacidade(){
    this.nav.setRoot(PrivacidadePage);
  } 
  abrirPaginaSair(){
    this.nav.setRoot(SairPage);
  } 
}
