import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { Audios2Page } from '../audios2/audios2';
import { Storage } from '@ionic/storage';
import { EditarMinhaOntoartePage } from '../editar-minha-ontoarte/editar-minha-ontoarte';
import { MinhaListaOntoartePage } from '../minha-lista-ontoarte/minha-lista-ontoarte';
import { AudioServiceProvider } from '../../providers/audio-service/audio-service';
import { Observable } from 'rxjs/Observable';
import { EditarMinhaAudioOntoartePage } from '../editar-minha-audio-ontoarte/editar-minha-audio-ontoarte';
import { HomePage } from '../home/home';

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

  constructor
    (
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private Storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public audioService: AudioServiceProvider
    ) {

    this.getDados();

  }

  getDados() {

    this.Storage.ready().then(() => {
      this.Storage.get("MinhaListaAudios").then((data) => {
        this.relAudios = data;
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

  unsubscribePlayer() {
    this.subscription.unsubscribe();
  }


  startAudio(item, index) {

    debugger;
    //Verifica se o audio atual está executando a para a execução
    if (this.audioService.isExecuting() && this.audioService.isExecutingIndex(index)) {
      item.iconplay = 'play';
      this.iconPlay = 'play'
      this.unsubscribePlayer();
      this.audioService.audioPlayer.nativeElement.pause();
      this.audioService.totalMedia = 0;
      return;
    }

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

          debugger;
          console.log(this.position + ' - ' + this.audioService.totalMedia);
          this.executeNextAudio();

        }
      }
    });
  }

  executeNextAudio() {
    debugger;
    this.unsubscribePlayer();

    setTimeout(() => {
      this.relAudios[this.audioService.indexAudio].iconplay = 'play';
      this.audioService.indexAudio++

      if (this.audioService.indexAudio == (this.relAudios.length - 1)) {
        this.audioService.indexAudio = 0;
      }

      this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
      this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
      this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
      this.audioPlay();
    }, 200);
  }

}
