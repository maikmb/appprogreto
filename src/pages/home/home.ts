import { Component, ViewChild} from '@angular/core';
import { Nav, NavController, ToastController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { VideosPage } from '../videos/videos';
import { LivrosPage } from './../livros/livros';

import { Storage } from '@ionic/storage';
import { PlListaPage } from '../pl-lista/pl-lista';
import { Audios2Page } from '../audios2/audios2';
import { ComentariosPage } from '../comentarios/comentarios';
import { SlidePage } from '../slide/slide';
import { LoginPage } from '../login/login';
import { DicionarioPage } from '../dicionario/dicionario';

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
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
      
  item = []; 

	data: any = {};
	resolucao = '';

	myDate: any = {};

	icoCurtirAulas: string = 'ico-curtir-off.jpg';
  icoCurtirPl: string = 'ico-curtir-off.jpg';
  icoCurtirLivros: string = 'ico-curtir-off.jpg';
  icoCurtirMusicas: string = 'ico-curtir-off.jpg';
  relCurtidas = '';

  testeAulas = []; 
  storeData = [];
	relnovidades = '';
	relnovidadesPega = '';
	relVideos = '';
	IdUserQual: any = {};
	EmailUserQual: any = {};
	NomeUserQual: any = {};
	NivelUserQual: any = {};
	PlanoUserQual: any = {};
	FotoUserQual: any = {};
	qtdePublicacoes: any;
	numerosNovidades: any;
	numerosNovidadesAtual: any;
   
	constructor(
		private socialSharing: SocialSharing,
		public http: Http, private Storage: Storage, private toastCtrl: ToastController,
		public navCtrl: Nav, public service: DadosUsuarioProvider,
		private storage: Storage,
		public loadingCtrl: LoadingController, private iab: InAppBrowser) {

		this.myDate = new Date().toISOString();

    this.userDadosGuardados();
    this.getDadosPega();
    this.getDadosCurtidas();

    this.storage.get('QualUser').then((val) => {
      this.IdUserQual = val;
    })
	}

   // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
      //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
      //return msg.concat(" \n sent from my awesome app");
    //}
    regularShare(msg, assunto, file, link){
      //var msg = this.compilemsg(msg);
      this.socialSharing.share(msg, assunto, file, link);
    }


  api : string =  'http://app.progettoapp.com.br/arquivos/r';

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
						this.nNovidades(this.numerosNovidadesAtual)
					}else{
						this.storage.set('numeroPublicacoes', this.relnovidades.length)
					}
				});		
			},
			err => console.log(err)
		);
	}

	nNovidades(dados){
		  //console.log('akiii',dados)
			this.qtdePublicacoes = this.relnovidades.length - dados;
			//console.log('akiii',this.qtdePublicacoes)

	}

	doInfinite(infiniteScroll) {
			this.storage.get('numeroPublicacoes').then((val) => {
				if(val != null){
					this.numerosNovidadesAtual = val;
				}else{
					this.storage.set('numeroPublicacoes', this.relnovidades.length)
				}
			});
			setTimeout(() => {
				//console.log(this.relnovidades.length)
        if(this.relnovidades.length >= this.numerosNovidadesAtual){
          this.storage.set('relNovidades', this.relnovidades);
          this.storage.set('numeroPublicacoes', this.relnovidades.length);
          //this.navCtrl.setRoot(HomePage)
        }
        infiniteScroll.complete();

		  }, 500);

	}

  getDadosPega() {
    this.service.getNovidades()
    .subscribe(
			data => {
        this.relnovidadesPega = data.rows;  
        /*if(data.rows[0].idnovidade == seu.storage.id){ 
          //faz algo
        }else{
          //faz algo
        }*/
			},
			err => console.log(err)
    );
  }

  getDadosCurtidas() {
    this.service.getCurtidas()
    .subscribe(
			data => {
        this.relCurtidas = data.rows;  
			},
			err => console.log(err)
    );
  }

  abrirComentarios(idqualSel: string, moduloSel: string) {    
    this.navCtrl.push(ComentariosPage, { idqualSel, moduloSel });
  }     

    selecionarNovidades(item: string) {    

      if(item['Tipo'] == 'video'){

        this.navCtrl.push(VideosPage, { item });
      }else if(item['Tipo'] == 'pl'){

          this.navCtrl.push(PlListaPage, { item });

        }else if(item['Tipo'] == 'musica'){

          this.navCtrl.push(Audios2Page, { item });

      }else{

        this.navCtrl.push(LivrosPage, { item });

      }

    } 

    ClassficarLivro(item){

      let added=0;
  
      this.Storage.get("ClassficarLivro").then((data)=>{
          
        if(data==null || data.length==0){
            
          data = [];

          data.push({
            "idlivro": item.idlivro
          });
  
          added=1;
  
        }else{

          for(let i=0 ; i<data.length ; i++){
  
            if(item.idlivro == data[i].idlivro){
  
              const query = data.find(item => item.idlivro === data[i].idlivro);
  
              const toremove = data.indexOf(query);
  
              data.splice(toremove,1);
  
              added=1;
  
            }
  
          }

        }
      
       if(added==0){
  
          data.push({
            "idlivro": item.idlivro
          });
         
        }
  
        if(added==1){

          this.icoCurtirLivros = 'ico-curtir-off.jpg';
  
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idlivro,
            user_id_qual: this.IdUserQual,
            modulo: 'livros',
            acao: 'menos'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          });  
  
        }else{
   
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idlivro,
            user_id_qual: this.IdUserQual,
            modulo: 'livros',
            acao: 'mais'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          }); 
    
          this.icoCurtirLivros = 'ico-curtir.jpg';
           
        }
  
        this.Storage.set("ClassficarLivro", data).then( ()=>{} );
      
      });
    }

    ClassficarPl(item){

      let added=0;
  
      this.Storage.get("ClassficarPl").then((data)=>{
          
        if(data==null || data.length==0){
            
          data = [];
          
          /*this.toastCtrl.create({
            message: "Você marcou o gostei nessa revista!",
            duration: 2000,
            position: 'middle',
          }).present();*/
          
          data.push({
            "idpl": item.idpl
          });
  
          added=1;
  
        }else{

          for(let i=0 ; i<data.length ; i++){
  
            if(item.idpl == data[i].idpl){
  
              /*this.toastCtrl.create({
                message: "Você desmarcou o gostei nessa revista!",
                duration: 2000,
                position: 'middle',
              }).present();*/
  
              const query = data.find(item => item.idpl === data[i].idpl);
  
              const toremove = data.indexOf(query);
  
              data.splice(toremove,1);
  
              added=1;
  
            }
  
          }

        }
      
       if(added==0){
  
          data.push({
            "idpl": item.idpl
          });
  
          /*this.toastCtrl.create({
            message: "Você marcou o gostei nessa revista!",
            duration: 2000,
            position: 'middle',
          }).present();*/
         
        }
  
        if(added==1){

          //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
          //icoCurtirPl: string = 'ico-curtir-pl.jpg';
          //icoCurtirLivros: string = 'ico-curtir.jpg';
          //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
  
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idpl,
            modulo: 'pl',
            acao: 'menos'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          });  
  
        }else{
   
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idpl,
            modulo: 'pl',
            acao: 'mais'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          }); 
  
          //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
          //icoCurtirPl: string = 'ico-curtir-pl.jpg';
          //icoCurtirLivros: string = 'ico-curtir.jpg';
          //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';

        }
  
        this.Storage.set("ClassficarPl", data).then( ()=>{} );
      
      });
    }

    ClassficarAula(item){

      let added=0;
  
      this.Storage.get("ClassficarAulas").then((data)=>{
          
        if(data==null || data.length==0){
            
          data = [];
          
          /*this.toastCtrl.create({
            message: "Você marcou o gostei nessa aula!",
            duration: 2000,
            position: 'middle',
          }).present();*/
          
          data.push({
            "idvideo": item.idvideo
          });
  
          added=1;
  
        }else{

          for(let i=0 ; i<data.length ; i++){
  
            if(item.idvideo == data[i].idvideo){
  
              /*this.toastCtrl.create({
                message: "Você desmarcou o gostei nessa aula!",
                duration: 2000,
                position: 'middle',
              }).present();*/
  
              const query = data.find(item => item.idvideo === data[i].idvideo);
  
              const toremove = data.indexOf(query);
  
              data.splice(toremove,1);
  
              added=1;
  
            }
  
          }

        }
      
       if(added==0){
  
          data.push({
            "idvideo": item.idvideo
          });
         
        }
  
        if(added==1){
  
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idvideo,
            modulo: 'videos',
            acao: 'menos'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          });  

          this.icoCurtirAulas = 'ico-curtir-off.jpg';
          console.log('vai', this.icoCurtirAulas);

        }else{
   
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idvideo,
            modulo: 'videos',
            acao: 'mais'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          }); 
  
          this.icoCurtirAulas = 'ico-curtir-aulas.jpg';
          console.log('vai', this.icoCurtirAulas);
          
        }
  
        this.Storage.set("ClassficarAulas", data).then( ()=>{} );
      
      });
    }

    ClassficarAlbum(item){

      let added=0;
  
      this.Storage.get("ClassficarAlbum").then((data)=>{
          
        if(data==null || data.length==0){
            
          data = [];
          
          /*this.toastCtrl.create({
            message: "Você marcou o gostei nesse álbum!",
            duration: 2000,
            position: 'middle',
          }).present();*/
          
          data.push({
            "idalbum": item.idalbum
          });
  
          added=1;
  
        }else{

          for(let i=0 ; i<data.length ; i++){
  
            if(item.idalbum == data[i].idalbum){
  
              /*this.toastCtrl.create({
                message: "Você desmarcou o gostei nesse álbum!",
                duration: 2000,
                position: 'middle',
              }).present();*/
  
              const query = data.find(item => item.idalbum === data[i].idalbum);
  
              const toremove = data.indexOf(query);
  
              data.splice(toremove,1);
  
              added=1;
  
            }
  
          }

        }
      
       if(added==0){
  
          data.push({
            "idalbum": item.idalbum
          });
  
          /*this.toastCtrl.create({
            message: "Você marcou o gostei nesse álbum!",
            duration: 2000,
            position: 'middle',
          }).present();*/
         
        }
  
        if(added==1){

          //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
          //icoCurtirPl: string = 'ico-curtir-pl.jpg';
          //icoCurtirLivros: string = 'ico-curtir.jpg';
          //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
  
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idalbum,
            modulo: 'albuns',
            acao: 'menos'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          });  
  
        }else{
   
          //ENVIA O INSERT
          let headerOptions: any = { 'Content-Type': 'application/json' };
          let headers = new Headers(headerOptions);
          var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
          this.http.post(link, JSON.stringify({
            idqual: item.idalbum,
            modulo: 'albuns',
            acao: 'mais'
          })).subscribe(data => {
            //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
          }); 
  
          //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
          //icoCurtirPl: string = 'ico-curtir-pl.jpg';
          //icoCurtirLivros: string = 'ico-curtir.jpg';
          //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
           
        }
  
        this.Storage.set("ClassficarAlbum", data).then( ()=>{} );
      
      });
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
    userDadosGuardados(){
      this.storage.get('QualUser').then((val) => {
        console.log(val)
        this.IdUserQual = val;
      })
      this.storage.get('QualEmail').then((val) => {
        console.log(val)
        this.EmailUserQual = val;
      })
      this.storage.get('QualNome').then((val) => {
        console.log(val)
        this.NomeUserQual = val;
      })
      this.storage.get('QualNivel').then((val) => {
        console.log(val)
        this.NivelUserQual = val;
      })
      this.storage.get('QualPlano').then((val) => {
        console.log(val)
        
        if (val == '0') { 
          this.PlanoUserQual = 'Plano Empresarial';
        } else { 
          this.PlanoUserQual = 'Plano Empresarial';
        }    
      })
      this.storage.get('QualFoto').then((val) => {
        
        this.FotoUserQual = val;
      })
    }
    menu(){ 
      //console.log('MENUUUU')
    }
  }
