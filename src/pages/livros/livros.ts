import { Storage } from '@ionic/storage';
import { Component } from '@angular/core'; 
import { NavParams, NavController, Platform } from 'ionic-angular'; 
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ToastController } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SocialSharing } from '@ionic-native/social-sharing';

import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario';
import { LoadingController } from 'ionic-angular';
//import { FileOpener } from '@ionic-native/file-opener';
import { PdfPage } from '../pdf/pdf';

import { VerlivroPage } from '../verlivro/verlivro';
import { LojaVerPage } from '../loja-ver/loja-ver';
import { VideosPage } from '../videos/videos';
import { LojaModalPage } from '../loja-modal/loja-modal';

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
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  relLivros = '';
  item = []; 
  
  teste = [];   
  teste2 = []; 
  
  icone : string = 'ico-mais';
  icoCurtir : string = 'Curtir';
  
  data:any ={};
  relBooks = '';
  relVideos = '';

   options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'no', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  constructor
  (
    private socialSharing: SocialSharing,
    public http: Http, public navCtrl: NavController, private Storage: Storage, 
    public platform: Platform, public service : DadosUsuarioProvider, private iab: InAppBrowser,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, public navParams: NavParams
  ){ 
    this.relLivros;
    this.getDados();
    this.getVincLivros();
    this.getVideosVinc();

  } 
  
  api : string =  'http://app.progettoapp.com.br/arquivos/r';
  api3 : string =  'http://app.progettoapp.com.br/arquivos/r';

   // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
      //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
      //return msg.concat(" \n sent from my awesome app");
    //}
    regularShare(msg, assunto, file, link){
      //var msg = this.compilemsg(msg);
      this.socialSharing.share(msg, assunto, file, link);
    }

    getDados() {

      this.service.getLivros();
      this.item = this.navParams.get('item');
      //console.log(this.item);
      
      var imgFinal = 'http://app.progettoapp.com.br/arquivos/r/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Img'] + '_400.jpg';
      //console.log(imgFinal);
      
      // ADD MINHA LISTA
      this.Storage.ready().then(()=>{
        this.Storage.get("MinhaListaLivros").then( (data)=>{
          
          let nedo=0;
          this.teste = data;

          if(data==null || data==false || data.length==0){
  
            //this.showEmptCartMessage= true;   
          
          }else{
            
            this.teste.forEach( (item, index)=>{

              if(this.item['idlivro'] == item['idlivro']){
                nedo=1;
              }

            })
            
          }

          if(nedo==1){
            this.icone = 'ico-correto';
          }else{
            this.icone = 'ico-mais';
          }

        })
      })

      // ADD CURTIR
      this.Storage.ready().then(()=>{
        this.Storage.get("ClassficarLivro").then( (data)=>{
          
          let nedo2=0;

          this.teste2 = data;
  
          if(data==null || data.length==0){
  
            //this.showEmptCartMessage= true;   
          
          }else{

            this.teste2.forEach( (item, index)=>{

              if(this.item['idlivro'] == item['idlivro']){
                nedo2=1;
              }

            })
            
          }

          if(nedo2==1){
            this.icoCurtir = 'Curtiu';
          }else{
            this.icoCurtir = 'Curtir';
          }

        })
      }) 
           
    }

    selecionado(item: string) {   
      this.navCtrl.push(VerlivroPage, { item });
    }

    selecionaLoja(item: string) {    
      this.navCtrl.push(LojaModalPage, { item });
    }   

    getVincLivros() {
      //retorno de Dados
      this.service.getLivros()
      .subscribe(
          data=> this.relBooks = data.rows,
          err=> console.log(err)
      );
    }
    selecionaVinc(item: string) {      
      this.navCtrl.push(LivrosPage, { item });
    }  

  getVideosVinc() {
    this.service.getData()
    .subscribe(
      data=> this.relVideos = data.rows,
      err=> console.log(err)
    );
  }

  selecionadoVideosVinc(item: string) {      
    this.navCtrl.push(VideosPage, { item });
  }

  AddMinhaLista(item){

    let added=0;

    this.Storage.get("MinhaListaLivros").then((data)=>{
              
      if(data==null || data.length==0){
          
        data = [];
        /*
        this.toastCtrl.create({
          message: "Públicação adicionada na sua lista!",
          duration: 2000,
          position: 'middle',
        }).present();*/
        
        data.push({
          "idlivro": item.idlivro,
          "Cat": item.Cat,
          "Arquivo": item.Arquivo,
          "arquivoCompleto": item.arquivoCompleto,
          "Data": item.Data,
          "Titulo": item.Titulo,
          "Subitulo": item.Subitulo,
          "Descricao": item.Descricao,
          "Caminho": item.Caminho,
          "Pasta": item.Pasta,
          "Img": item.Img,
          "paginas": item.paginas,
          "Valor": item.Valor,
          "Desconto": item.Desconto,          
          "Ativo": item.Ativo
        });

        added=1;

      }else{
         
        for(let i=0 ; i<data.length ; i++){

          if(item.idlivro == data[i].idlivro){
            /*
            this.toastCtrl.create({
              message: "Públicação removida da sua lista!",
              duration: 2000,
              position: 'middle',
            }).present();*/

            const query = data.find(item => item.idlivro === data[i].idlivro);

            const toremove = data.indexOf(query);

            data.splice(toremove,1);

            added=1;

          }

        }

      }
    
     if(added==0){

        this.icone = 'ico-correto';

        data.push({
          "idlivro": item.idlivro,
          "Cat": item.Cat,
          "Arquivo": item.Arquivo,
          "arquivoCompleto": item.arquivoCompleto,
          "Data": item.Data,
          "Titulo": item.Titulo,
          "Subitulo": item.Subitulo,
          "Descricao": item.Descricao,
          "Caminho": item.Caminho,
          "Pasta": item.Pasta,
          "Img": item.Img,
          "paginas": item.paginas,
          "Valor": item.Valor,
          "Desconto": item.Desconto,          
          "Ativo": item.Ativo
        });
        /*
        this.toastCtrl.create({
          message: "Públicação adicionada na sua lista!",
          duration: 2000,
          position: 'middle',
        }).present();*/

      }

      if(added==1){ this.icone = 'ico-mais'; }

      this.Storage.set("MinhaListaLivros", data).then( ()=>{} );
    
    });
  }

  ClassficarLivro(item){

    let added=0;

    this.Storage.get("ClassficarLivro").then((data)=>{

      if(data==null || data.length==0){
          
        data = [];
        
        this.toastCtrl.create({
          message: "Você marcou o gostei nessa públicação!",
          duration: 2000,
          position: 'middle',
        }).present();
        
        data.push({
          "idlivro": item.idlivro
        });

        added=1;

      }else{
         
        for(let i=0 ; i<data.length ; i++){

          if(item.idlivro == data[i].idlivro){

            this.toastCtrl.create({
              message: "Você desmarcou o gostei nessa públicação!",
              duration: 2000,
              position: 'middle',
            }).present();

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

        this.toastCtrl.create({
          message: "Você marcou o gostei nessa públicação!",
          duration: 2000,
          position: 'middle',
        }).present();
               
      }

      if(added==1){

        this.icoCurtir = 'Curtir'; 

        //ENVIA O INSERT
        let headerOptions: any = { 'Content-Type': 'application/json' };
        let headers = new Headers(headerOptions);
        var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
        this.http.post(link, JSON.stringify({
          idqual: item.idlivro,
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
          modulo: 'livros',
          acao: 'mais'
        })).subscribe(data => {
          //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
        });                
        this.icoCurtir = 'Curtiu';  
         
      }
     
      this.Storage.set("ClassficarLivro", data).then( ()=>{} );
    
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
  

/*public openWithSystemBrowser(url : string){
    let target = "_system";
    this.iab.create(url,target,this.options);
}
public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.iab.create(url,target,this.options);
}
public openWithCordovaBrowser(url : string){
    let target = "random_string";
    this.iab.create(url,target,this.options);
}      */
    



}
