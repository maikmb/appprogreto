import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, App} from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';
import { AudiosPage } from '../audios/audios';
import { DicionarioPage } from '../dicionario/dicionario';
import { EsqueceuSenhaPage } from '../esqueceu-senha/esqueceu-senha';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data: any = {};  
  loading: Loading;
  dataMinhaListaLivros:any ={};

  QualEmail : any = {};

  IdUserQual : any = {}; 
  EmailUserQual : any= {};
  NomeUserQual : any = {};
  NivelUserQual : any = {};
  PlanoUserQual : any = {};
  FotoUserQual : any = {};

  constructor(
    public navCtrl: NavController, public navParams: NavParams, private http: Http,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController, 
    public storage:Storage
  ){

    this.storage.get('QualEmail').then((val) => {
      console.log(val)
      this.QualEmail = val;
    })

    // --- STORAGE MINHA LISTA E CURTIR/CLASSIFICAR ------------------------------------------ //
    
    // -- LIVRO - PUBLICACAO --- //

    var dataMinhaListaLivros = [{ "idlivro": "0" }];
    this.storage.set("MinhaListaLivros", dataMinhaListaLivros).then( ()=>{} );

    var dataClassficarLivro = [{ "idlivro": "0" }];
    this.storage.set("ClassficarLivro", dataClassficarLivro).then( ()=>{} );
    
    // -- PL - LIDER --- //

    var dataMinhaListaPl= [{ "idpl": "0" }];
    this.storage.set("MinhaListaPl", dataMinhaListaPl).then( ()=>{} );

    var dataClassficarPl = [{ "idpl": "0" }];
    this.storage.set("ClassficarPl", dataClassficarPl).then( ()=>{} );

    // --- VIDEOS - AULAS --- //

    var dataMinhaListaAulas= [{ "idvideo": "0" }];
    this.storage.set("MinhaListaAulas", dataMinhaListaAulas).then( ()=>{} );

    var dataClassficarAulas = [{ "idvideo": "0" }];
    this.storage.set("ClassficarAulas", dataClassficarAulas).then( ()=>{} );    

    // --- MUSICAS - ALBUM --- //

    var dataMinhaListaAlbum = [{ "idalbum": "0" }];
    this.storage.set("MinhaListaAlbum", dataMinhaListaAlbum).then( ()=>{} );

    var dataClassficarAlbum = [{ "idalbum": "0" }];
    this.storage.set("ClassficarAlbum", dataClassficarAlbum).then( ()=>{} );   
    
    // --- MUSICAS - AUDIOS --- //

    var dataMinhaListaAudios = [{ "idaudio": "0" }];
    this.storage.set("MinhaListaAudios", dataMinhaListaAudios).then( ()=>{} );

    var dataClassficarAudios = [{ "idaudio": "0" }];
    this.storage.set("ClassficarAudios", dataClassficarAudios).then( ()=>{} );       

    // --- COMPRAS - CARRINHO --- //

    var dataCompras = [{ "idqual": "0" }];
    this.storage.set("ComprasCarrinho", dataCompras).then( ()=>{} );

  }
  public login(dados) {
    // this.showLoading()
    var link = 'http://app.progettoapp.com.br/midias/login_apps.php';
    var myData = JSON.stringify({
      foto: this.data.foto, 
      nome: this.data.nome, 
      sobrenome: this.data.sobrenome, 
      senha: this.data.senha, 
      email: this.data.email, 
      plano: this.data.plano, 
      nivel: this.data.nivel
    });
    this.http.post(link, myData)
        .subscribe(data => {

          debugger;
           var dadosLogin =  JSON.parse(data["_body"]); 
           console.log(dadosLogin)  
                                    
               if(dadosLogin.rows[0].Logado === 1){

                this.storage.set('Status', 'Logado');
                this.storage.set('SlideOlhou', 'Sim');

                this.storage.set('QualUser', dadosLogin.rows[0].iduser);
                this.storage.set('QualEmail', this.data.email);

                this.storage.set('QualNome', dadosLogin.rows[0].nome);
                this.storage.set('QualSobrenome', dadosLogin.rows[0].sobrenome);
                this.storage.set('QualNivel', dadosLogin.rows[0].nivel);
                this.storage.set('QualPlano', dadosLogin.rows[0].plano);
                this.storage.set('QualFoto', dadosLogin.rows[0].foto);

                this.storage.set('EnderecoUserFinal', dadosLogin.rows[0].endereco);
                this.storage.set('NumeroUserFinal', dadosLogin.rows[0].numero);
                this.storage.set('BairroUserFinal', dadosLogin.rows[0].bairro);
                this.storage.set('ComplementoUserFinal', dadosLogin.rows[0].complemento);
                this.storage.set('CidadeUserFinal', dadosLogin.rows[0].cidade);
                this.storage.set('EstadoUserFinal', dadosLogin.rows[0].estado);
                this.storage.set('PaisUserFinal', dadosLogin.rows[0].pais);
                this.storage.set('CepUserFinal', dadosLogin.rows[0].cep);

                window.location.reload();
                    setTimeout(() => {
                      this.navCtrl.setRoot(HomePage)

                    }, 100);
                
              }else if(dadosLogin.rows[0].Logado === 4){

                let alert = this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: "E-mail digitado é inválido!",
                  buttons: ['OK']
                });
                alert.present();       

              }else{
                let alert = this.alertCtrl.create({
                  title: 'Acesso Negado',
                  subTitle: "E-mail ou Senha incorretos.",
                  buttons: ['OK']
              });
              alert.present();
              }
        },
        error => {
            this.showError(error);
        }); 
  }               
  esqueceuSenha(){
    this.navCtrl.push(EsqueceuSenhaPage);
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
  cadastroUser(item: string) {   
    this.navCtrl.push(CadastroUsuarioPage,{ item });
  }  
}
