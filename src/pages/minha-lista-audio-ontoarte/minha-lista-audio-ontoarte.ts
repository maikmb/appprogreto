import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, AlertController, Platform } from 'ionic-angular';
import { Audios2Page } from '../audios2/audios2';
import { Storage } from '@ionic/storage';
import { EditarMinhaOntoartePage } from '../editar-minha-ontoarte/editar-minha-ontoarte';
import { MinhaListaOntoartePage } from '../minha-lista-ontoarte/minha-lista-ontoarte';
import { AudioServiceProvider } from '../../providers/audio-service/audio-service';
import { Observable } from 'rxjs/Observable';
import { EditarMinhaAudioOntoartePage } from '../editar-minha-audio-ontoarte/editar-minha-audio-ontoarte';
import { HomePage } from '../home/home';
import { MusicControls } from '@ionic-native/music-controls';

@Component({
  selector: 'page-minha-lista-audio-ontoarte',
  templateUrl: 'minha-lista-audio-ontoarte.html',
})
export class MinhaListaAudioOntoartePage {
  relAudios = [];
  position = 0;
  oldPosition = 0;
  iconPlay = 'play';
  subscription;
  audioInfo: string = "--";
  artistaInfo: string = "--";

  constructor
    (
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private Storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public audioService: AudioServiceProvider,
    private musicControls: MusicControls,
    public platform: Platform
    ) {

    this.audioService.changePositionObservable
      .subscribe(value => this.audioService.audioPlayer.nativeElement.currentTime = value);

    this.getDados();
    


  }

  getTotalMediaPlayer() {
    return this.audioService.totalMedia;
  }

  refreshPosition() {
    let delta = Math.abs(this.position - this.oldPosition);
    if (delta > 3) {
      this.audioService.changePosition(this.position);
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getIsExecuting(): boolean {
    return this.audioService.IsExecuting;
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

  random() {
    this.audioService.indexMinhaListaAudio = this.getRandomInt(0, this.relAudios.length - 1);
    this.toogleIconPlayList();

    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexMinhaListaAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
    
    this.relAudios[this.audioService.indexMinhaListaAudio].iconplay = 'pause';
    this.audioPlay();
  }

  getDados() {
    this.Storage.ready().then(() => {
      this.Storage.get("MinhaListaAudios").then((data) => {
        debugger;
        console.log("Lista de Audios Retornada", data);
        this.relAudios = data;
        this.loadExecutingAudio();
        console.log('Lista em Session Audios Root', data);
      })
    })

  }

  abriMinhaLista(item: string) {
    this.navCtrl.push(Audios2Page, { item });
  }

  abrirMinhaListaAlbuns() {
    this.navCtrl.push(MinhaListaOntoartePage);
  }

  AbrirEditarOntoarte() {
    this.modalCtrl.create(EditarMinhaAudioOntoartePage).present();
  }

  toogleIconPlayList() {
    for (let i = 0; i < this.relAudios.length; i++) {
      const element = this.relAudios[i];
      element.iconplay = 'play';
    }
  }

  loadExecutingAudio() {
    this.toogleIconPlayList();
    if (this.audioService.isExecuting()) {      
      
      this.relAudios[this.audioService.indexMinhaListaAudio].iconplay = 'pause';
      this.iconPlay = "pause";
      this.audioInfo = this.relAudios[this.audioService.indexMinhaListaAudio].audio;
      this.artistaInfo = this.relAudios[this.audioService.indexMinhaListaAudio].artista;
    }
  }

  unsubscribePlayer() {
    this.subscription.unsubscribe();
  }


  startAudio(item, index) {
    //Verifica se o audio atual está executando a para a execução
    if (this.audioService.isExecuting() && this.audioService.isExecutingIndexMyList(index)) {
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

    console.log('Musica Selecionada', item);
    this.toogleIconPlayList();
    this.audioService.indexMinhaListaAudio = index;
    this.audioInfo = item.audio;
    this.artistaInfo = item.artista;
    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexMinhaListaAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
    this.audioService.audioPlayer.nativeElement.load();

    
    item.iconplay = 'pause';
    this.iconPlay = 'pause';
    this.audioPlay();
  }

  audioPlay() {

    this.audioService.audioPlayer.nativeElement.play();
    this.startCronometro();
    this.audioService.IsExecuting = true;
    //console.log('play');
  }

  startCronometro() {
    this.subscription = Observable.interval(1000).subscribe(x => {

      this.oldPosition = this.audioService.audioPlayer.nativeElement.currentTime;
      this.position = this.audioService.audioPlayer.nativeElement.currentTime;

      console.log(this.position);

      this.audioService.emitPosition(this.position);
      if (this.audioService.totalMedia > 0) {
        if (this.position >= this.audioService.totalMedia) {
          this.executeNextAudio();
        }
      }
    });
  }

  executeNextAudio() {
    this.unsubscribePlayer();

    setTimeout(() => {

      
      this.relAudios[this.audioService.indexMinhaListaAudio].iconplay = 'play';
      this.audioService.indexMinhaListaAudio++

      if (this.audioService.indexMinhaListaAudio > (this.relAudios.length - 1)) {
        this.audioService.indexMinhaListaAudio = 0;
      }

      
      this.relAudios[this.audioService.indexMinhaListaAudio].iconplay = 'pause';
      this.audioService.audioPlayer.nativeElement.pause();
      this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexMinhaListaAudio].arquivo_audio;
      this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;

      this.audioPlay();
    }, 200);
  }

  next() {
    this.audioService.indexMinhaListaAudio++;

    if (this.audioService.indexMinhaListaAudio > this.relAudios.length - 1) {
      this.audioService.indexMinhaListaAudio = 0;
    }

    this.toogleIconPlayList();

    
    this.relAudios[this.audioService.indexMinhaListaAudio].iconplay = 'pause';
    this.audioService.audioPlayer.nativeElement.pause();
    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexMinhaListaAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;  
    this.audioInfo = this.relAudios[this.audioService.indexMinhaListaAudio].audio;
    this.artistaInfo = this.relAudios[this.audioService.indexMinhaListaAudio].artista; 
    this.audioPlay();

  }

  back() {
    this.audioService.indexMinhaListaAudio--;

    if (this.audioService.indexMinhaListaAudio < 0) {
      this.audioService.indexMinhaListaAudio = this.relAudios.length - 1;
    }

    this.toogleIconPlayList();

    this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexMinhaListaAudio].arquivo_audio;
    this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;

    
    this.relAudios[this.audioService.indexMinhaListaAudio].iconplay = 'pause';
    this.audioInfo = this.relAudios[this.audioService.indexMinhaListaAudio].audio;
    this.artistaInfo = this.relAudios[this.audioService.indexMinhaListaAudio].artista; 
    this.audioPlay();
  }

  initNativeMusicControl() {
    this.musicControls.create({
      track: this.audioInfo,
      artist: this.artistaInfo,      
      isPlaying: true,
      dismissable: false,
      hasPrev: true,
      hasNext: true,
      hasClose: true,

      // iOS only, optional
      album: '',
      duration: 0,
      elapsed: 0,
      hasSkipForward: true,
      hasSkipBackward: true,
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
                this.next();
                break;
            case 'music-controls-previous':
                this.back();
                break;
            case 'music-controls-pause':
            this.tooglePlay();
                break;
            case 'music-controls-play':
                this.tooglePlay();
                break;
            case 'music-controls-destroy':
                this.audioPause();
                break;

        // External controls (iOS only)
        case 'music-controls-toggle-play-pause' :
                this.tooglePlay();
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
          this.next();
          break;
        case 'music-controls-skip-backward':
          this.back();
          break;

            // Headset events (Android only)
            // All media button events are listed below
            case 'music-controls-media-button' :
                // Do something
                break;
            case 'music-controls-headset-unplugged':
                this.audioPause();
                this.stopNativeMusicControl();
                break;
            case 'music-controls-headset-plugged':
                this.audioPause();                
                break;
            default:
                break;
        }
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
        this.stopNativeMusicControl();
      }
    }

    audioPause() {
      //console.log('pause');    
      this.audioService.audioPlayer.nativeElement.pause();
      this.stopNativeMusicControl();
    }

    stopNativeMusicControl() {
      this.musicControls.updateIsPlaying(false);
      this.musicControls.destroy();
    }

}
