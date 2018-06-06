import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AudioServiceProvider } from './../../providers/audio-service/audio-service';
import { Component, ViewChild } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

import { DadosUsuarioProvider } from '../../providers/dados-usuario/dados-usuario'
import { Observable } from 'rxjs/Rx';

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
import { LojaModalPage } from '../loja-modal/loja-modal';

@Component({
  selector: 'page-audios2',
  templateUrl: 'audios2.html',
})
export class Audios2Page {
  @ViewChild('audioPlayer') audioPlayer: any;

  subscription; 
  
  item = [];
  itemAlbum = [];

  teste = [];   
  teste2 = []; 
  teste3 = []; 
  teste4 = []; 

  icone : string = 'ico-mais';
  icoCurtir : string = 'Curtir';
  iconeAudio : string = 'ico-mais'; 

  indexAudioMinhaLista = 0;

  relAudios : any;
  position = 0;
  oldPosition = 0;
  totalMedia = 0;
  iconPlay = 'play';
  play = false
  audio = null;

  indexAudio = 0;

  constructor(
    private socialSharing: SocialSharing,
    public http: Http,
    private toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service : DadosUsuarioProvider,
    public loadingCtrl: LoadingController,
    private Storage: Storage,
    public audioService: AudioServiceProvider
  ) {

    this.audioService.changePositionObservable.subscribe(
      value => {
        this.audioPlayer.nativeElement.currentTime = value;
      }
    )

    this.getAlbum();
    this.getAudios();
    this.getDados();

      // ADD MINHA LISTA
      this.Storage.ready().then(()=>{
        this.Storage.get("MinhaListaAlbum").then( (data)=>{
          
          let nedo=0;
          this.teste = data;

          if(data==null || data==false || data.length==0){
  
            //this.showEmptCartMessage= true;   
          
          }else{
            
            this.teste.forEach( (item, index)=>{

              if(this.item['idalbum'] == item['idalbum']){
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

      /*this.Storage.ready().then(()=>{
        this.Storage.get("MinhaListaAudios").then( (data)=>{
          
          let nedo3=0;
          this.teste3 = data;

          if(data==null || data==false || data.length==0){
  
            //this.showEmptCartMessage= true;   
          
          }else{
            
            this.teste3.forEach( (item, index)=>{

              if(this.item['idaudio'] == item['idaudio']){
                nedo3=1;
              }

            })
            
          }

          if(nedo3==1){
            this.iconeAudio = 'ico-correto';
          }else{
            this.iconeAudio = 'ico-mais';
          }

        })
      })*/

      // ADD CURTIR
      this.Storage.ready().then(()=>{
        this.Storage.get("ClassficarAlbum").then( (data)=>{
          
          let nedo2=0;

          this.teste2 = data;
  
          if(data==null || data.length==0){
  
            //this.showEmptCartMessage= true;   
          
          }else{

            this.teste2.forEach( (item, index)=>{

              if(this.item['idalbum'] == item['idalbum']){
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

      this.Storage.ready().then(()=>{
        this.Storage.get("ClassficarAudios").then( (data)=>{
          
          let nedo4=0;

          this.teste4 = data;
  
          if(data==null || data.length==0){
  
            //this.showEmptCartMessage= true;   
          
          }else{

            this.teste4.forEach( (item, index)=>{

              if(this.item['idaudio'] == item['idaudio']){
                nedo4=1;
              }

            })
            
          }

          /*if(nedo4==1){
            this.icoCurtir = 'Curtiu';
          }else{
            this.icoCurtir = 'Curtir';
          }*/

        })
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

  getAlbum(){

    this.service.getAlbuns();
    this.itemAlbum = this.navParams.get('item');
    
    console.log(this.itemAlbum);

  }

  getAudios() {
     //retorno de Dados
    this.service.getAudios()
    .subscribe(
        data=> {
          this.relAudios = data.rows
          console.log(this.relAudios);
        },
        err=> console.log(err)
    );
  }

  durationChangeEventHandler() { 
    this.totalMedia = this.audioPlayer.nativeElement.duration;
    this.audioService.emitTotalMedia(Math.round(this.totalMedia));
    console.log(this.totalMedia);    
  }

  startCronometro(){    
    this.subscription = Observable.interval(1000).subscribe(x => {      

      this.oldPosition = this.audioPlayer.nativeElement.currentTime;
      this.position = this.audioPlayer.nativeElement.currentTime;

      console.log(this.position);
      
      this.audioService.emitPosition(this.position);
      if (this.position >= this.totalMedia) {
        
        console.log(this.position + ' - ' + this.totalMedia);
        this.stopCronometro();         
        
      }
    });    
  }

  stopCronometro() {
    this.subscription.unsubscribe();
    
    setTimeout(() => {
      this.relAudios[this.indexAudio].iconplay = 'play';
      this.indexAudio++
      
      if (this.indexAudio > this.relAudios.length -1) {
        this.indexAudio = 0;
      } 
      
      this.relAudios[this.indexAudio].iconplay = 'pause';

      this.audio = 'http://redeplaneje.com.br/app/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;   
      this.audioPlayer.nativeElement.src = this.audio;      
      this.audioPlay();      
    }, 200);
  }
  
  next() {
    this.indexAudio++;

    if (this.indexAudio > this.relAudios.length -1) {
      this.indexAudio = 0;
    } 
  
    this.toogleIconPlayList();
    
    this.audio = 'http://redeplaneje.com.br/app/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;   
    this.audioPlayer.nativeElement.src = this.audio;
    this.relAudios[this.indexAudio].iconplay = 'pause';
    this.audioPlay();

  }

  back() {
    this.indexAudio--;

    if (this.indexAudio < 0) {
      this.indexAudio = this.relAudios.length -1;
    } 
  
    this.toogleIconPlayList();

    this.audio = 'http://redeplaneje.com.br/app/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;   
    this.audioPlayer.nativeElement.src = this.audio;
    this.relAudios[this.indexAudio].iconplay = 'pause';
    this.audioPlay();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  random() {
    this.indexAudio = this.getRandomInt(0, this.relAudios.length -1);

    this.toogleIconPlayList();
    
    this.audio = 'http://redeplaneje.com.br/app/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;   
    this.audioPlayer.nativeElement.src = this.audio;
    this.relAudios[this.indexAudio].iconplay = 'pause';
    this.audioPlay();
  }


  audioPlay() {
    this.audioPlayer.nativeElement.play();
    this.startCronometro();
    this.play = true;    
    //console.log('play');
  }
  
  audioPause() {
    //console.log('pause');    
    this.audioPlayer.nativeElement.pause();
  }


  tooglePlay() {
  
    if (!this.audio) {
      if (this.relAudios.length > 0) {
        this.audio = 'http://redeplaneje.com.br/app/arquivos/r/audios/' + this.relAudios[0].arquivo_audio;   
        this.audioPlayer.nativeElement.src = this.audio;
        //this.audioPlayer.nativeElement.load();
      }
    }

    //console.log(this.audio);

    this.play = !this.play;
    this.audioService.emitPlay(this.play);

    if (this.play) {
      this.iconPlay = 'pause';
      this.relAudios[this.indexAudio].iconplay = 'pause';
    } else {
      this.iconPlay = 'play';
      this.relAudios[this.indexAudio].iconplay = 'play';
    }

    if (this.audioPlayer.nativeElement.paused) {
      this.audioPlay();
    } else {
      this.audioPause();
    }
  }

  getDados(){
    this.audio = this.navParams.get('musica');

  }

  refreshPosition() {
    
    let delta = Math.abs(this.position - this.oldPosition);

    if (delta > 3) {
      console.log('mudou');     
      this.audioService.changePosition(this.position);    
    }
    
  }

  toogleIconPlayList() {
    for (let i = 0; i < this.relAudios.length; i++) {
      const element = this.relAudios[i];
      element.iconplay = 'play';
    }
  }  


  startAudio(item, index) {
    this.toogleIconPlayList();
    item.iconplay = 'pause';
    this.indexAudio = index;

    this.audio = 'http://redeplaneje.com.br/midias/r/audios/' + item['arquivo_audio'];   
    this.audioPlayer.nativeElement.src = this.audio;
    this.audioPlayer.nativeElement.load();
    
    this.iconPlay = 'pause';
    this.audioPlay();
  }

    /*
    var musica = this.audio  
*/
  AbrirAudioAlbum(item: string) {    
      this.navCtrl.push(OntoarteVerPage,{
      item
        });
  } 
      

  /*favorito(item){
    this.color ="secondarys";
    console.log('FAVORITO', item)
  }*/

  AddMinhaLista(item){

    let added=0;

    this.Storage.get("MinhaListaAlbum").then((data)=>{
              
      if(data==null || data.length==0){
          
        data = [];

        data.push({
          "idalbum": item.idalbum,
          "Titulo": item.Titulo,
          "Subitulo": item.Subitulo,
          "Descricao": item.Descricao,
          "Pasta": item.Pasta,
          "Img": item.Img,
          "Caminho": item.Caminho,
          "Valor": item.Valor,          
          "Desconto": item.Desconto,
          "Ativo": item.Ativo            
        });

        added=1;

      }else{
         
        for(let i=0 ; i<data.length ; i++){

          if(item.idalbum == data[i].idalbum){

            const query = data.find(item => item.idalbum === data[i].idalbum);

            const toremove = data.indexOf(query);

            data.splice(toremove,1);

            added=1;

          }

        }

      }
    
     if(added==0){

        this.icone = 'ico-correto';

        data.push({
          "idalbum": item.idalbum,
          "Titulo": item.Titulo,
          "Subitulo": item.Subitulo,
          "Descricao": item.Descricao,
          "Pasta": item.Pasta,
          "Img": item.Img,
          "Caminho": item.Caminho,
          "Valor": item.Valor,          
          "Desconto": item.Desconto,
          "Ativo": item.Ativo        
        });

      }

      if(added==1){ this.icone = 'ico-mais'; }

      this.Storage.set("MinhaListaAlbum", data).then( ()=>{} );
    
    });
  }

  ClassficarAlbum(item){

    let added=0;

    this.Storage.get("ClassficarAlbum").then((data)=>{

      if(data==null || data.length==0){
          
        data = [];
        
        data.push({
          "idalbum": item.idalbum
        });

        added=1;

      }else{
         
        for(let i=0 ; i<data.length ; i++){

          if(item.idalbum == data[i].idalbum){

            this.toastCtrl.create({
              message: "Você desmarcou o gostei nesse álbum!",
              duration: 2000,
              position: 'middle',
            }).present();

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
       
      }

      if(added==1){

        this.icoCurtir = 'Curtir'; 

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

        this.icoCurtir = 'Curtiu';  
         
      }

      this.Storage.set("ClassficarAlbum", data).then( ()=>{} );
    
    });
  }

  AddMinhaListaAudio(item, index){

    this.indexAudioMinhaLista = index;
    
    let added=0;

    this.Storage.get("MinhaListaAudios").then((data)=>{
              
      if(data==null || data.length==0){
          
        data = [];
        
        data.push({
          "idaudio": item.idaudio,
          "arquivo_audio": item.arquivo_audio,
          "idalbum": item.idalbum,
          "audio": item.audio,
          "artista": item.artista,
          "iconplay": item.iconplay,
          "color": item.color,          
          "Tempo": item.tempo,
          "Ativo": item.Ativo            
        });

        added=1;

      }else{
         
        for(let i=0 ; i<data.length ; i++){

          if(item.idaudio == data[i].idaudio){

            const query = data.find(item => item.idaudio === data[i].idaudio);

            const toremove = data.indexOf(query);

            data.splice(toremove,1);

            added=1;

          }

        }

      }
    
     if(added==0){
      if(this.iconeAudio == null){
        console.log('aaa', this.iconeAudio);
      }
        //this.iconeAudio = 'ico-correto';
        this.relAudios[this.indexAudioMinhaLista].iconeAudio = 'ico-correto';
        console.log('idaudio: ', this.indexAudioMinhaLista);
        console.log('icone qual: ', this.relAudios[this.indexAudioMinhaLista].iconeAudio);

        data.push({
          "idaudio": item.idaudio,
          "arquivo_audio": item.arquivo_audio,
          "idalbum": item.idalbum,
          "audio": item.audio,
          "artista": item.artista,
          "iconplay": item.iconplay,
          "color": item.color,          
          "Tempo": item.tempo,
          "Ativo": item.Ativo         
        });

      }

      if(added==1){ 
        if(this.iconeAudio == null){
          console.log('bbb', this.iconeAudio);
        }
        //this.iconeAudio = 'ico-mais';
        this.relAudios[this.indexAudioMinhaLista].iconeAudio = 'ico-mais';
        console.log('idaudio: ', this.indexAudioMinhaLista);
        console.log('icone qual: ', this.relAudios[this.indexAudioMinhaLista].iconeAudio);

      }

      this.Storage.set("MinhaListaAudios", data).then( ()=>{} );
    
    });
  }

  ClassficarAudio(item){

    let added=0;

    this.Storage.get("ClassficarAudios").then((data)=>{

      if(data==null || data.length==0){
          
        data = [];
        
        this.toastCtrl.create({
          message: "Você marcou o gostei nesse áudio!",
          duration: 2000,
          position: 'middle',
        }).present();
        
        data.push({
          "idaudio": item.idaudio
        });

        added=1;

      }else{
         
        for(let i=0 ; i<data.length ; i++){

          if(item.idaudio == data[i].idaudio){

            this.toastCtrl.create({
              message: "Você desmarcou o gostei nesse áudio!",
              duration: 2000,
              position: 'middle',
            }).present();

            const query = data.find(item => item.idaudio === data[i].idaudio);

            const toremove = data.indexOf(query);

            data.splice(toremove,1);

            added=1;

          }

        }
 
      }
    
     if(added==0){

        data.push({
          "idaudio": item.idaudio
        });

        this.toastCtrl.create({
          message: "Você marcou o gostei nesse áudio!",
          duration: 2000,
          position: 'middle',
        }).present();
               
      }

      if(added==1){

        //this.icoCurtir = 'Curtir'; 

        //ENVIA O INSERT
        let headerOptions: any = { 'Content-Type': 'application/json' };
        let headers = new Headers(headerOptions);
        var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
        this.http.post(link, JSON.stringify({
          idqual: item.idaudio,
          modulo: 'audios',
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
          idqual: item.idaudio,
          modulo: 'audios',
          acao: 'mais'
        })).subscribe(data => {
          //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
        });                
        
        //this.icoCurtir = 'Curtiu';  
         
      }

      this.Storage.set("ClassficarAudios", data).then( ()=>{} );
    
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

  abrirModalLoja(item: string) {  
    this.navCtrl.push(LojaModalPage, { item });
  } 

}

