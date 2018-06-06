import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DadosUsuarioProvider {

  api : string ='http://app.progettoapp.com.br/midias/';

  constructor(public http: Http) {}

  getPlanos(){
    return this.http.get(this.api + 'planos.php').map(res=>res.json()) 
  }

  // GERAIS
  getNotificacao(){
    return this.http.get(this.api + 'lista_notificacoes.php').map(res=>res.json()) 
  }
  getBuscar() {
    return this.http.get(this.api + 'buscar.php').map(res=>res.json())
  }
  getPrivacidade() {
    return this.http.get(this.api + 'privacidade.php').map(res=>res.json())
  }
  getDicionario() {
    return this.http.get(this.api + 'dicio.php').map(res=>res.json())
  }
  getEventos() {
    return this.http.get(this.api + 'eventos.php').map(res=>res.json())
  }
  getEventosAntigos() {
    return this.http.get(this.api + 'eventos-antigos.php').map(res=>res.json())
  }
  getEventosFotos() {
    return this.http.get(this.api + 'eventos-fotos.php').map(res=>res.json())
  }

  // NOVIDADES
  getNovidades(){
    return this.http.get(this.api + 'lista_novi.php').map(res=>res.json()) 
  }
  getCurtidas(){
    return this.http.get(this.api + 'curtidas.php').map(res=>res.json()) 
  }
  getComentarios(){
    return this.http.get(this.api + 'comentarios.php').map(res=>res.json()) 
  }

  // PUBLICACOES
  getLivros() {
    return this.http.get(this.api + 'lista_livros.php').map(res=>res.json())
  }
  getLivrosCategorias() {
    return this.http.get(this.api + 'cat_livros.php').map(res=>res.json())
  }
 
  // LIDER - PL
  getRevistaPl() {
    return this.http.get(this.api + 'lista_pl.php').map(res=>res.json())
  }
  getPlCategorias() {
    return this.http.get(this.api + 'cat_pl.php').map(res=>res.json())
  }

  // AULAS
  getData() {
    return this.http.get(this.api + 'lista_videos.php').map(res=>res.json())
  }
  getVideosCategorias() {
    return this.http.get(this.api + 'cat_videos.php').map(res=>res.json())
  }

  // ONTOARTE
  getConcerto() {
    return this.http.get(this.api + 'lista_concerto.php').map(res=>res.json())
  }
  getAlbuns() {
    return this.http.get(this.api + 'lista_albuns.php').map(res=>res.json())
  }
  getAudios() {
    return this.http.get(this.api + 'lista_audios.php').map(res=>res.json())
  }

  // LOJA
  getCds_dvs() {
    return this.http.get(this.api + 'lista_cds_dvs.php').map(res=>res.json())
  }  

}
