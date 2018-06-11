import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
//import { NavController } from 'ionic-angular';

import { VideosPage } from '../pages/videos/videos';
import { LivrosPage } from '../pages/livros/livros';
import { TitulosPage } from '../pages/titulos/titulos';
import { HomePage } from '../pages/home/home';
import { AudiosPage } from '../pages/audios/audios';
import { PdfPage } from '../pages/pdf/pdf';
import { LoginPage } from '../pages/login/login';
import { SlidePage } from '../pages/slide/slide';

import { SocialSharing } from '@ionic-native/social-sharing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { StreamingMedia } from '@ionic-native/streaming-media';
import { DadosUsuarioProvider } from '../providers/dados-usuario/dados-usuario';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';
//import { PdfViewerComponent } from 'ng2-pdf-viewer';
//import { FileOpener } from '@ionic-native/file-opener';

import { AovivoVideosPage } from './../pages/aovivo-videos/aovivo-videos';
import { AreaUsuarioRestritaPage } from '../pages/area-usuario-restrita/area-usuario-restrita';
import { OntoartePage } from '../pages/ontoarte/ontoarte';
import { RevistaPlPage } from './../pages/revista-pl/revista-pl';
import { TitulosLivrosPage } from '../pages/titulos-livros/titulos-livros';
import { VerlivroPage } from '../pages/verlivro/verlivro';
import { PlListaPage } from '../pages/pl-lista/pl-lista';
import { VerPlPage } from '../pages/ver-pl/ver-pl';
import { EventosPage } from './../pages/eventos/eventos';
import { LojaPage } from '../pages/loja/loja';
import { LojaVerPage } from '../pages/loja-ver/loja-ver';
import { MinhaListaPage } from './../pages/minha-lista/minha-lista';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { AtendimentoPage } from '../pages/atendimento/atendimento';
import { DicionarioPage } from '../pages/dicionario/dicionario';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { OntoarteAlbumPage } from '../pages/ontoarte-album/ontoarte-album';
import { OntoarteVerPage } from '../pages/ontoarte-ver/ontoarte-ver';
import { PrivacidadePage } from '../pages/privacidade/privacidade';
import { SairPage } from '../pages/sair/sair';
import { DicionarioVerPage } from '../pages/dicionario-ver/dicionario-ver';
import { DicionarioModalPage } from '../pages/dicionario-modal/dicionario-modal';
import { EventosAntigosPage } from '../pages/eventos-antigos/eventos-antigos';
import { AudioServiceProvider } from '../providers/audio-service/audio-service';

import { MinhaListaOntoartePage } from './../pages/minha-lista-ontoarte/minha-lista-ontoarte';
import { MinhaListaAulasPage } from './../pages/minha-lista-aulas/minha-lista-aulas';
import { MinhaListaPlPage } from './../pages/minha-lista-pl/minha-lista-pl';
import { MinhaListaPublicacoesPage } from './../pages/minha-lista-publicacoes/minha-lista-publicacoes';
import { MinhaListaVerPage } from '../pages/minha-lista-ver/minha-lista-ver';
import { LojaModalPage } from '../pages/loja-modal/loja-modal';
import { LojaCdsPage } from '../pages/loja-cds/loja-cds';
import { LojaRevistaPage } from '../pages/loja-revista/loja-revista';
import { LojaSouvenirsPage } from '../pages/loja-souvenirs/loja-souvenirs';
import { HttpClientModule } from '@angular/common/http';
import { Audios2Page } from '../pages/audios2/audios2';

import { ComentariosPage } from '../pages/comentarios/comentarios';
import { EsqueceuSenhaPage } from '../pages/esqueceu-senha/esqueceu-senha';
import { OneSignal } from '@ionic-native/onesignal';
import { PlanosPage } from '../pages/planos/planos';
import { PagamentoEntregaPage } from '../pages/pagamento-entrega/pagamento-entrega';
import { AovivoProximasPage } from './../pages/aovivo-proximas/aovivo-proximas';
import { AovivoArquivoPage } from './../pages/aovivo-arquivo/aovivo-arquivo';
import { NotificacaoVerPage } from './../pages/notificacao-ver/notificacao-ver';
import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';
import { BuscaPage } from '../pages/busca/busca';
import { EventosVerPage } from '../pages/eventos-ver/eventos-ver';
import { EventosAntigosVerPage } from '../pages/eventos-antigos-ver/eventos-antigos-ver';
import { EditarMinhaListaPublicacoesPage } from '../pages/editar-minha-lista-publicacoes/editar-minha-lista-publicacoes';
import { AovivoVerPage } from '../pages/aovivo-ver/aovivo-ver';
import { EventosFormPage } from '../pages/eventos-form/eventos-form';
import { MinhaContaPage } from '../pages/minha-conta/minha-conta';
import { ModAulasPage } from '../pages/mod-aulas/mod-aulas';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { TermosPage } from '../pages/termos/termos';
import { EventosFotoVerPage } from '../pages/eventos-foto-ver/eventos-foto-ver';
import { EventoInfoVerPage } from '../pages/evento-info-ver/evento-info-ver';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { EditarMinhaOntoartePage } from '../pages/editar-minha-ontoarte/editar-minha-ontoarte';
import { EditarMinhaPlPage } from '../pages/editar-minha-pl/editar-minha-pl';
import { EditarMinhaAulasPage } from './../pages/editar-minha-aulas/editar-minha-aulas';
import { EditarMinhaAlbunsPage } from './../pages/editar-minha-albuns/editar-minha-albuns';
import { PrivacidadeVerPage } from '../pages/privacidade-ver/privacidade-ver';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { MinhasComprasPage } from '../pages/minhas-compras/minhas-compras';
import { MeusPlanosPage } from '../pages/meus-planos/meus-planos';
import { LojaAvisoPage } from './../pages/loja-aviso/loja-aviso';
import { MinhaContaDadosPage } from '../pages/minha-conta-dados/minha-conta-dados';
import { MinhaContaEnderecoPage } from '../pages/minha-conta-endereco/minha-conta-endereco';
import { MinhaContaFotoPage } from '../pages/minha-conta-foto/minha-conta-foto';
import { AudioPlayerPage } from '../pages/audio-player/audio-player';
import { MinhaListaAudioOntoartePage } from '../pages/minha-lista-audio-ontoarte/minha-lista-audio-ontoarte';

@NgModule({
  declarations: [
    MyApp,
    VideosPage,
    LivrosPage,
    TitulosPage,
    HomePage,
    PdfPage,
    LoginPage,
    SlidePage,
    TitulosLivrosPage,
    AreaUsuarioRestritaPage,
    OntoartePage, AovivoVideosPage, Audios2Page, AudiosPage,
    RevistaPlPage, VerlivroPage, PlListaPage, VerPlPage,
    EventosPage, EventosVerPage, EventosAntigosVerPage, EventosFormPage, EventosFotoVerPage, EventoInfoVerPage,
    BuscaPage, MinhaContaDadosPage, MinhaContaEnderecoPage, MinhaContaFotoPage,
    MinhaContaPage, ConfiguracaoPage, TermosPage,
    ComentariosPage, ModAulasPage,
    LojaPage, LojaModalPage, LojaVerPage, MinhaListaPage, MinhaListaVerPage, LojaCdsPage, LojaRevistaPage, LojaSouvenirsPage,
    LojaAvisoPage,
    MinhaListaPublicacoesPage, MinhaListaPlPage, MinhaListaAulasPage, MinhaListaOntoartePage,
    EditarMinhaListaPublicacoesPage, 
    CadastroUsuarioPage, AtendimentoPage, ConfiguracoesPage, DicionarioPage, NotificacoesPage, OntoarteAlbumPage,
    OntoarteVerPage, PrivacidadePage, PrivacidadeVerPage,
    SairPage, DicionarioVerPage, DicionarioModalPage, SairPage, NotificacaoVerPage,
    EventosAntigosPage,
    AovivoArquivoPage, AovivoProximasPage, AovivoVerPage,
    EsqueceuSenhaPage, PlanosPage, PagamentoEntregaPage,
    EditarMinhaAlbunsPage, EditarMinhaOntoartePage, EditarMinhaAulasPage, EditarMinhaPlPage,
    CarrinhoPage, MinhasComprasPage, MeusPlanosPage,
    AudioPlayerPage,
    MinhaListaAudioOntoartePage
    
   // PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,        
    HttpClientModule,
    //IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({driverOrder:['localstorage']}),
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: '',
        },
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VideosPage,
    LivrosPage,
    TitulosPage,
    HomePage,
    PdfPage,
    LoginPage,
    SlidePage,
    TitulosLivrosPage,
    AreaUsuarioRestritaPage,
    OntoartePage, AovivoVideosPage, Audios2Page, AudiosPage,
    RevistaPlPage, VerlivroPage, PlListaPage, VerPlPage,
    EventosPage, EventosVerPage, EventosAntigosVerPage, EventosFormPage, EventosFotoVerPage, EventoInfoVerPage,
    BuscaPage, MinhaContaDadosPage, MinhaContaEnderecoPage, MinhaContaFotoPage,
    MinhaContaPage, ConfiguracaoPage, TermosPage,
    ComentariosPage, ModAulasPage,
    LojaPage, LojaModalPage, LojaVerPage, MinhaListaPage, MinhaListaVerPage, LojaCdsPage, LojaRevistaPage, LojaSouvenirsPage,
    LojaAvisoPage,
    MinhaListaPublicacoesPage, MinhaListaPlPage, MinhaListaAulasPage, MinhaListaOntoartePage,
    EditarMinhaListaPublicacoesPage, 
    CadastroUsuarioPage, AtendimentoPage, ConfiguracoesPage, DicionarioPage, NotificacoesPage, OntoarteAlbumPage,
    OntoarteVerPage, PrivacidadePage, PrivacidadeVerPage,
    SairPage, DicionarioVerPage, DicionarioModalPage, SairPage, NotificacaoVerPage,
    EventosAntigosPage,
    AovivoArquivoPage, AovivoProximasPage, AovivoVerPage,
    EsqueceuSenhaPage, PlanosPage, PagamentoEntregaPage,
    EditarMinhaAlbunsPage, EditarMinhaOntoartePage, EditarMinhaAulasPage, EditarMinhaPlPage,
    CarrinhoPage, MinhasComprasPage, MeusPlanosPage,
    AudioPlayerPage,
    MinhaListaAudioOntoartePage
    
  ],
  providers: [
    PayPal,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   // StreamingMedia,
    InAppBrowser,
    DadosUsuarioProvider,
    AudioServiceProvider, 
    OneSignal   
   // FileOpener,
    
  ]
})

export class AppModule {
 
}

