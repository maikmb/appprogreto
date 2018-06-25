import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AudioServiceProvider } from './../../providers/audio-service/audio-service';
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
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
import { MusicControls } from '@ionic-native/music-controls';

@Component({
  selector: 'page-audios2',
  templateUrl: 'audios2.html',
})
export class Audios2Page {

  subscription;

  item = [];
  itemAlbum: any = [];

  teste = [];
  teste2 = [];
  teste3 = [];
  teste4 = [];

  icone: string = 'ico-mais';
  icoCurtir: string = 'Curtir';
  iconeAudio: string = 'ico-mais';

  indexAudioMinhaLista = 0;
  minhaListaAudio: any;
  minhaListaCurtir: any;

  relAudios: any;
  position = 0;
  oldPosition = 0;
  iconPlay = 'play';
  audioInfo: string;
  artistaInfo: string;
  albumInfo: string;



  constructor(
    private socialSharing: SocialSharing,
    public http: Http,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: DadosUsuarioProvider,
    public loadingCtrl: LoadingController,
    private Storage: Storage,
    public audioService: AudioServiceProvider,
    private musicControls: MusicControls
  ) {

    this.Storage.get("MinhaListaAudios").then((data) => this.minhaListaAudio = data);
    this.audioService.changePositionObservable
      .subscribe(value => this.audioService.audioPlayer.nativeElement.currentTime = value);

    this.getAlbum();
    this.getAudios();
    this.getDados();

    // ADD MINHA LISTA
    this.Storage.ready().then(() => {
      this.Storage.get("MinhaListaAlbum").then((data) => {

        let nedo = 0;
        this.teste = data;

        if (data == null || data == false || data.length == 0) {
          //this.showEmptCartMessage= true;   

        } else {
          this.teste.forEach((item, index) => {
            if (this.item['idalbum'] == item['idalbum']) {
              nedo = 1;
            }

          })

        }

        if (nedo == 1) {
          this.icone = 'ico-correto';
        } else {
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
    this.Storage.ready().then(() => {
      this.Storage.get("ClassficarAlbum").then((data) => {

        let nedo2 = 0;

        this.teste2 = data;

        if (data == null || data.length == 0) {

          //this.showEmptCartMessage= true;   

        } else {

          this.teste2.forEach((item, index) => {

            if (this.item['idalbum'] == item['idalbum']) {
              nedo2 = 1;
            }

          })

        }

        if (nedo2 == 1) {
          this.icoCurtir = 'Curtiu';
        } else {
          this.icoCurtir = 'Curtir';
        }

      })
    })

    this.carregarListaCurtirFromStorage();
  }

  carregarListaCurtirFromStorage() {
    this.Storage.ready().then(() => {
      this.Storage.get("ClassficarAudios").then((data) => {
        this.minhaListaCurtir = data;
      })
    });
  }

  getFormatedCurrentDuration(): string {
    return this.readableDuration(this.position);
  }

  readableDuration(seconds) {
    let sec: any = Math.floor(seconds);
    let min: any = Math.floor(sec / 60);
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  }

  // --- COMPARTILHAR --- // 
  //compilemsg(index):string{
  //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
  //return msg.concat(" \n sent from my awesome app");
  //}
  regularShare(msg, assunto, file, link) {
    //var msg = this.compilemsg(msg);
    this.socialSharing.share(msg, assunto, file, link);
  }

  api: string = 'http://app.progettoapp.com.br/arquivos/r';

  getAlbum() {

    this.service.getAlbuns();
    this.itemAlbum = this.navParams.get('item');

    console.log(this.itemAlbum);

  }

  getAudios() {
    //retorno de Dados
    this.service.getAudios()
      .subscribe(
        data => {
          //this.relAudios = data.rows;
          this.relAudios = data.rows.filter(audio => audio.idalbum == this.itemAlbum.idalbum);
          this.loadExecutingAudio();
          // console.log('Current Audio List', data.rows);
          // console.log("Current Album List", this.itemAlbum);
        },
        err => console.log(err)
      );
  }

  // durationChangeEventHandler() { 
  //   this.totalMedia = this.audioService.audioPlayer.nativeElement.duration;
  //   this.audioService.emitTotalMedia(Math.round(this.totalMedia));
  //   console.log(this.totalMedia);    
  // }

  startCronometro() {
    this.subscription = Observable.interval(1000).subscribe(x => {

      this.oldPosition = this.audioService.audioPlayer.nativeElement.currentTime;
      this.position = this.audioService.audioPlayer.nativeElement.currentTime;

      console.log(this.position);

      this.audioService.emitPosition(this.position);
      if (this.audioService.totalMedia > 0) {
        if (this.position >= this.audioService.totalMedia) {
          console.log(this.position + ' - ' + this.audioService.totalMedia);
          this.executeNextAudio();

        }
      }
    });
  }

  unsubscribePlayer() {
    this.subscription.unsubscribe();
  }

  executeNextAudio() {
    this.unsubscribePlayer();

    setTimeout(() => {
      this.relAudios[this.audioService.indexAudio].iconplay = 'play';
      this.audioService.indexAudio++

      if (this.audioService.indexAudio > (this.relAudios.length - 1)) {
        this.audioService.indexAudio = 0;
      }

      this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
      this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
      this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
      this.audioPlay();
    }, 200);
  }

  next() {
    this.audioService.indexAudio++;

    if (this.audioService.indexAudio > this.relAudios.length - 1) {
      this.audioService.indexAudio = 0;
    }

    this.toogleIconPlayList();

    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
    this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
    this.audioInfo = this.relAudios[this.audioService.indexAudio].audio;
    this.artistaInfo = this.relAudios[this.audioService.indexAudio].artista;
    this.audioPlay();

  }

  back() {
    this.audioService.indexAudio--;
    if (this.audioService.indexAudio < 0) {
      this.audioService.indexAudio = this.relAudios.length - 1;
    }

    this.toogleIconPlayList();

    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
    this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
    this.audioInfo = this.relAudios[this.audioService.indexAudio].audio;
    this.artistaInfo = this.relAudios[this.audioService.indexAudio].artista;
    this.audioPlay();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  random() {
    this.audioService.indexAudio = this.getRandomInt(0, this.relAudios.length - 1);

    this.toogleIconPlayList();

    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
    this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
    this.audioPlay();
  }

  initNativeMusicControl() {
    this.musicControls.create({
      track: this.audioInfo,
      artist: this.artistaInfo,
      cover: "",
      isPlaying: true,
      dismissable: false,
      hasPrev: true,
      hasNext: true,
      hasClose: true,

      // iOS only, optional
      album: this.albumInfo,
      duration: 0,
      elapsed: 0,
      hasSkipForward: false,
      hasSkipBackward: false,
      skipForwardInterval: 0,
      skipBackwardInterval: 0,
      hasScrubbing: false,

      // Android only, optional      
      ticker: `Agora você está escutando "${this.audioInfo}"`,
      playIcon: 'media_play',
      pauseIcon: 'media_pause',
      prevIcon: 'media_prev',
      nextIcon: 'media_next',
      closeIcon: 'media_close',
      notificationIcon: 'notification'
    });

    this.musicControls.subscribe().subscribe(action => {
      this.ionicNativMusicEvents(action);
    });

    this.musicControls.listen();
    this.musicControls.updateIsPlaying(true);
  }

 ionicNativMusicEvents(action) {
    const message = JSON.parse(action).message;
        switch(message) {
            case 'music-controls-next':
                // Do something
                break;
            case 'music-controls-previous':
                // Do something
                break;
            case 'music-controls-pause':
                // Do something
                break;
            case 'music-controls-play':
                // Do something
                break;
            case 'music-controls-destroy':
                // Do something
                break;

        // External controls (iOS only)
        case 'music-controls-toggle-play-pause' :
                // Do something
                break;
        case 'music-controls-seek-to':
          const seekToInSeconds = JSON.parse(action).position;
          this.musicControls.updateElapsed({
            elapsed: seekToInSeconds,
            isPlaying: true
          });
          // Do something
          break;
        case 'music-controls-skip-forward':
          // Do something
          break;
        case 'music-controls-skip-backward':
          // Do something
          break;

            // Headset events (Android only)
            // All media button events are listed below
            case 'music-controls-media-button' :
                // Do something
                break;
            case 'music-controls-headset-unplugged':
                // Do something
                break;
            case 'music-controls-headset-plugged':
                // Do something
                break;
            default:
                break;
        }
    }


  audioPlay() {

    this.audioService.audioPlayer.nativeElement.play();
    this.startCronometro();
    this.audioService.IsExecuting = true;
    //console.log('play');
  }

  getIsExecuting(): boolean {
    return this.audioService.IsExecuting;
  }

  audioPause() {
    //console.log('pause');    
    this.audioService.audioPlayer.nativeElement.pause();
  }


  tooglePlay() {

    if (!this.audioService.audio) {
      if (this.relAudios.length > 0) {
        this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[0].arquivo_audio;
        this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
        //this.audioService.audioPlayer.nativeElement.load();
      }
    }
    //console.log(this.audio);

    this.audioService.IsExecuting = !this.audioService.IsExecuting;
    this.audioService.emitPlay(this.audioService.IsExecuting);

    if (this.audioService.IsExecuting) {
      this.iconPlay = 'pause';
      this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
    } else {
      this.iconPlay = 'play';
      this.relAudios[this.audioService.indexAudio].iconplay = 'play';
    }

    if (this.audioService.audioPlayer.nativeElement.paused) {
      this.audioPlay();
    } else {
      this.audioPause();
    }
  }

  getDados() {
    this.audioService.audio = this.navParams.get('musica');

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

  loadExecutingAudio() {
    if (this.audioService.isExecuting()) {
      this.toogleIconPlayList();
      this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
      this.iconPlay = "pause";
      this.audioInfo = this.relAudios[this.audioService.indexAudio].audio;
      this.artistaInfo = this.relAudios[this.audioService.indexAudio].artista;
    }
  }

  getTotalMediaPlayer() {
    return this.audioService.totalMedia;
  }

  startAudio(item, index) {
    //Verifica se o audio atual está executando a para a execução
    if (this.audioService.isExecuting() && this.audioService.isExecutingIndex(index)) {
      item.iconplay = 'play';
      this.iconPlay = 'play'
      this.unsubscribePlayer();
      this.audioService.audioPlayer.nativeElement.pause();
      this.audioService.totalMedia = 0;
      this.audioInfo = "--";
      this.artistaInfo = "--";
      this.audioService.IsExecuting = false;
      return;
    }

    this.audioInfo = item.audio;
    this.artistaInfo = item.artista;

    console.log('Musica Selecionada', item);
    this.toogleIconPlayList();
    this.audioService.indexAudio = index;

    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
    this.audioService.audioPlayer.nativeElement.load();

    item.iconplay = 'pause';
    this.iconPlay = 'pause';
    this.audioPlay();
  }

  /*
  var musica = this.audio  
*/
  AbrirAudioAlbum(item: string) {
    this.navCtrl.push(OntoarteVerPage, {
      item
    });
  }


  /*favorito(item){
    this.color ="secondarys";
    console.log('FAVORITO', item)
  }*/

  AddMinhaLista(item) {

    let added = 0;

    this.Storage.get("MinhaListaAlbum").then((data) => {

      if (data == null || data.length == 0) {

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

        added = 1;
      } else {
        for (let i = 0; i < data.length; i++) {
          if (item.idalbum == data[i].idalbum) {
            const query = data.find(item => item.idalbum === data[i].idalbum);
            const toremove = data.indexOf(query);
            data.splice(toremove, 1);
            added = 1;
          }
        }
      }

      if (added == 0) {
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

      if (added == 1) { this.icone = 'ico-mais'; }
      this.Storage.set("MinhaListaAlbum", data).then(() => { });

    });
  }

  ClassficarAlbum(item) {

    let added = 0;
    this.Storage.get("ClassficarAlbum").then((data) => {
      if (data == null || data.length == 0) {
        data = [];
        data.push({
          "idalbum": item.idalbum
        });
        added = 1;
      } else {
        for (let i = 0; i < data.length; i++) {
          if (item.idalbum == data[i].idalbum) {
            this.toastCtrl.create({
              message: "Você desmarcou o gostei nesse álbum!",
              duration: 2000,
              position: 'middle',
            }).present();
            const query = data.find(item => item.idalbum === data[i].idalbum);
            const toremove = data.indexOf(query);
            data.splice(toremove, 1);
            added = 1;
          }
        }
      }

      if (added == 0) {
        data.push({
          "idalbum": item.idalbum
        });
      }

      if (added == 1) {
        this.icoCurtir = 'Curtir';
        this.CurtirSenderRequest(item, 'menos');

      } else {
        this.CurtirSenderRequest(item, 'mais');
        this.icoCurtir = 'Curtiu';
      }

      this.Storage.set("ClassficarAlbum", data).then(() => { });

    });
  }

  CurtirSenderRequest(item, type) {
    var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
    this.http.post(link, JSON.stringify({
      idqual: item.idalbum,
      modulo: 'albuns',
      acao: type
    })).subscribe();
  }

  AddMinhaListaAudio(item, index) {
    let indexToRemove = 0;
    this.indexAudioMinhaLista = index;
    this.Storage.get("MinhaListaAudios").then((data) => {

      if (data == null || data == undefined) {
        data = [];
      }

      var filteredAudio = data.filter((audio, idx) => {
        if (audio.idaudio == item.idaudio) {
          indexToRemove = idx;
          return true;
        }
        return false;
      });

      if (filteredAudio.length > 0) {
        data.splice(indexToRemove, 1);
        this.minhaListaAudio = data;
        this.Storage.set("MinhaListaAudios", data).then(data => {
          const toast = this.toastCtrl.create({
            message: 'Música removida de sua lista!',
            duration: 3000
          });
          toast.present();
        });

      } else {
        data.push({
          "idaudio": item.idaudio,
          "arquivo_audio": item.arquivo_audio,
          "idalbum": item.idalbum,
          "audio": item.audio,
          "artista": item.artista,
          "iconplay": 'play',
          "color": item.color,
          "Tempo": item.tempo,
          "Ativo": item.Ativo
        });

        this.minhaListaAudio = data;
        this.Storage.set("MinhaListaAudios", data).then(data => {
          const toast = this.toastCtrl.create({
            message: 'Música salva em sua lista!',
            duration: 3000
          });
          toast.present();
        });
      }
    });
  }

  getIconFav(idAudio) {
    var filteredAudio = this.minhaListaAudio.filter((audio) => audio.idaudio == idAudio)
    if (filteredAudio.length > 0) {
      return 'ico-correto';
    } else {
      return 'ico-mais';
    }
  }

  getCurtirIcon(idAudio) {
    var filteredAudio = this.minhaListaCurtir.filter((audio) => audio.idaudio == idAudio)
    if (filteredAudio.length > 0) {
      return 'ico-curtir';
    } else {
      return 'ico-curtir-off';
    }
  }

  ClassficarAudio(item) {

    let added = 0;
    this.Storage.get("ClassficarAudios").then((data) => {
      if (data == null || data.length == 0) {
        data = [];
        this.toastCtrl.create({
          message: "Você marcou o gostei nesse áudio!",
          duration: 2000,
          position: 'middle',
        }).present();

        data.push({
          "idaudio": item.idaudio
        });

        added = 1;

      } else {

        for (let i = 0; i < data.length; i++) {

          if (item.idaudio == data[i].idaudio) {

            this.toastCtrl.create({
              message: "Você desmarcou o gostei nesse áudio!",
              duration: 2000,
              position: 'middle',
            }).present();

            const query = data.find(item => item.idaudio === data[i].idaudio);
            const toremove = data.indexOf(query);
            data.splice(toremove, 1);
            added = 1;

          }

        }

      }

      if (added == 0) {
        data.push({
          "idaudio": item.idaudio
        });

        this.toastCtrl.create({
          message: "Você marcou o gostei nesse áudio!",
          duration: 2000,
          position: 'middle',
        }).present();

      }

      var urlCurtir = 'http://app.progettoapp.com.br/midias/curtir_update.php';

      if (added == 1) {

        //this.icoCurtir = 'Curtir'; 

        //ENVIA O INSERT        
        this.http.post(urlCurtir, JSON.stringify({
          idqual: item.idaudio,
          modulo: 'audios',
          acao: 'menos'
        })).subscribe(data => {
          //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
        });

      } else {

        //ENVIA O INSERT
        this.http.post(urlCurtir, JSON.stringify({
          idqual: item.idaudio,
          modulo: 'audios',
          acao: 'mais'
        })).subscribe(data => {
          //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
        });

        //this.icoCurtir = 'Curtiu';  

      }

      this.minhaListaCurtir = data;
      this.Storage.set("ClassficarAudios", data).then(() => { });

    });
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

  abrirModalLoja(item: string) {
    this.navCtrl.push(LojaModalPage, { item });
  }

}

