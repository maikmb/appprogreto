webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventos_antigos_eventos_antigos__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventos_ver_eventos_ver__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EventosPage = /** @class */ (function () {
    function EventosPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
        this.pet = '';
        this.relEventos = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.relnovidades = '';
        this.pet = "proximos";
        this.getDados();
    }
    EventosPage_1 = EventosPage;
    EventosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    EventosPage.prototype.getDados = function () {
        var _this = this;
        this.service.getEventos()
            .subscribe(function (data) { return _this.relEventos = data.rows; }, function (err) { return console.log(err); });
    };
    EventosPage.prototype.selecionarEvento = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventos_ver_eventos_ver__["a" /* EventosVerPage */], { item: item });
    };
    EventosPage.prototype.abrirPaginaProximo = function () {
        this.navCtrl.setRoot(EventosPage_1);
    };
    EventosPage.prototype.abrirPaginaAnterior = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__eventos_antigos_eventos_antigos__["a" /* EventosAntigosPage */]);
    };
    EventosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    EventosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(EventosPage_1);
    };
    EventosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    EventosPage = EventosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\eventos\eventos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="card-eventos">\n\n    <p class="btn-novo" (click)="abrirPaginaAnterior()">\n\n      ANTERIORES\n\n    </p>          \n\n    <p class="btn-novo action_evento" (click)="abrirPaginaProximo()">\n\n      PRÓXIMOS\n\n    </p>\n\n  </ion-card>\n\n  <ion-card *ngFor="let item of relEventos" class="novidades-card">\n\n    <ion-card-content (click)="selecionarEvento(item)">\n\n      <h2 class="video-card-titulo">{{ item.Titulo }}</h2>\n\n      <p class="video-card-desc">{{ item.Data }}</p>\n\n    </ion-card-content>\n\n    <ion-card-content class="box-novidades" (click)="selecionarEvento(item)">\n\n      <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>     \n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\eventos\eventos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], EventosPage);
    return EventosPage;
    var EventosPage_1;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosUsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DadosUsuarioProvider = /** @class */ (function () {
    function DadosUsuarioProvider(http) {
        this.http = http;
        this.api = 'http://app.progettoapp.com.br/midias/';
    }
    DadosUsuarioProvider.prototype.getPlanos = function () {
        return this.http.get(this.api + 'planos.php').map(function (res) { return res.json(); });
    };
    // GERAIS
    DadosUsuarioProvider.prototype.getNotificacao = function () {
        return this.http.get(this.api + 'lista_notificacoes.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getBuscar = function () {
        return this.http.get(this.api + 'buscar.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getPrivacidade = function () {
        return this.http.get(this.api + 'privacidade.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getDicionario = function () {
        return this.http.get(this.api + 'dicio.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getEventos = function () {
        return this.http.get(this.api + 'eventos.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getEventosAntigos = function () {
        return this.http.get(this.api + 'eventos-antigos.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getEventosFotos = function () {
        return this.http.get(this.api + 'eventos-fotos.php').map(function (res) { return res.json(); });
    };
    // NOVIDADES
    DadosUsuarioProvider.prototype.getNovidades = function () {
        return this.http.get(this.api + 'lista_novi.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getCurtidas = function () {
        return this.http.get(this.api + 'curtidas.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getComentarios = function () {
        return this.http.get(this.api + 'comentarios.php').map(function (res) { return res.json(); });
    };
    // PUBLICACOES
    DadosUsuarioProvider.prototype.getLivros = function () {
        return this.http.get(this.api + 'lista_livros.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getLivrosCategorias = function () {
        return this.http.get(this.api + 'cat_livros.php').map(function (res) { return res.json(); });
    };
    // LIDER - PL
    DadosUsuarioProvider.prototype.getRevistaPl = function () {
        return this.http.get(this.api + 'lista_pl.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getPlCategorias = function () {
        return this.http.get(this.api + 'cat_pl.php').map(function (res) { return res.json(); });
    };
    // AULAS
    DadosUsuarioProvider.prototype.getData = function () {
        return this.http.get(this.api + 'lista_videos.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getVideosCategorias = function () {
        return this.http.get(this.api + 'cat_videos.php').map(function (res) { return res.json(); });
    };
    // ONTOARTE
    DadosUsuarioProvider.prototype.getConcerto = function () {
        return this.http.get(this.api + 'lista_concerto.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getAlbuns = function () {
        return this.http.get(this.api + 'lista_albuns.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider.prototype.getAudios = function () {
        return this.http.get(this.api + 'lista_audios.php').map(function (res) { return res.json(); });
    };
    // LOJA
    DadosUsuarioProvider.prototype.getCds_dvs = function () {
        return this.http.get(this.api + 'lista_cds_dvs.php').map(function (res) { return res.json(); });
    };
    DadosUsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DadosUsuarioProvider);
    return DadosUsuarioProvider;
}());

//# sourceMappingURL=dados-usuario.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__esqueceu_senha_esqueceu_senha__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_usuario_cadastro_usuario__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
        this.dataMinhaListaLivros = {};
        this.QualEmail = {};
        this.IdUserQual = {};
        this.EmailUserQual = {};
        this.NomeUserQual = {};
        this.NivelUserQual = {};
        this.PlanoUserQual = {};
        this.FotoUserQual = {};
        this.storage.get('QualEmail').then(function (val) {
            console.log(val);
            _this.QualEmail = val;
        });
        // --- STORAGE MINHA LISTA E CURTIR/CLASSIFICAR ------------------------------------------ //
        // -- LIVRO - PUBLICACAO --- //
        var dataMinhaListaLivros = [{ "idlivro": "0" }];
        this.storage.set("MinhaListaLivros", dataMinhaListaLivros).then(function () { });
        var dataClassficarLivro = [{ "idlivro": "0" }];
        this.storage.set("ClassficarLivro", dataClassficarLivro).then(function () { });
        // -- PL - LIDER --- //
        var dataMinhaListaPl = [{ "idpl": "0" }];
        this.storage.set("MinhaListaPl", dataMinhaListaPl).then(function () { });
        var dataClassficarPl = [{ "idpl": "0" }];
        this.storage.set("ClassficarPl", dataClassficarPl).then(function () { });
        // --- VIDEOS - AULAS --- //
        var dataMinhaListaAulas = [{ "idvideo": "0" }];
        this.storage.set("MinhaListaAulas", dataMinhaListaAulas).then(function () { });
        var dataClassficarAulas = [{ "idvideo": "0" }];
        this.storage.set("ClassficarAulas", dataClassficarAulas).then(function () { });
        // --- MUSICAS - ALBUM --- //
        var dataMinhaListaAlbum = [{ "idalbum": "0" }];
        this.storage.set("MinhaListaAlbum", dataMinhaListaAlbum).then(function () { });
        var dataClassficarAlbum = [{ "idalbum": "0" }];
        this.storage.set("ClassficarAlbum", dataClassficarAlbum).then(function () { });
        // --- MUSICAS - AUDIOS --- //
        var dataMinhaListaAudios = [{ "idaudio": "0" }];
        this.storage.set("MinhaListaAudios", dataMinhaListaAudios).then(function () { });
        var dataClassficarAudios = [{ "idaudio": "0" }];
        this.storage.set("ClassficarAudios", dataClassficarAudios).then(function () { });
        // --- COMPRAS - CARRINHO --- //
        var dataCompras = [{ "idqual": "0" }];
        this.storage.set("ComprasCarrinho", dataCompras).then(function () { });
    }
    LoginPage.prototype.login = function (dados) {
        var _this = this;
        // this.showLoading()
        var link = 'http://app.progettoapp.com.br/midias/login_apps.php';
        var myData = JSON.stringify({
            foto: this.data.foto, nome: this.data.nome, sobrenome: this.data.sobrenome, senha: this.data.senha, email: this.data.email,
            plano: this.data.plano, nivel: this.data.nivel
        });
        this.http.post(link, myData)
            .subscribe(function (data) {
            var dadosLogin = JSON.parse(data["_body"]);
            console.log(dadosLogin);
            if (dadosLogin.rows[0].Logado === '1') {
                _this.storage.set('Status', 'Logado');
                _this.storage.set('SlideOlhou', 'Sim');
                _this.storage.set('QualUser', dadosLogin.rows[0].iduser);
                _this.storage.set('QualEmail', _this.data.email);
                _this.storage.set('QualNome', dadosLogin.rows[0].nome);
                _this.storage.set('QualSobrenome', dadosLogin.rows[0].sobrenome);
                _this.storage.set('QualNivel', dadosLogin.rows[0].nivel);
                _this.storage.set('QualPlano', dadosLogin.rows[0].plano);
                _this.storage.set('QualFoto', dadosLogin.rows[0].foto);
                _this.storage.set('EnderecoUserFinal', dadosLogin.rows[0].endereco);
                _this.storage.set('NumeroUserFinal', dadosLogin.rows[0].numero);
                _this.storage.set('BairroUserFinal', dadosLogin.rows[0].bairro);
                _this.storage.set('ComplementoUserFinal', dadosLogin.rows[0].complemento);
                _this.storage.set('CidadeUserFinal', dadosLogin.rows[0].cidade);
                _this.storage.set('EstadoUserFinal', dadosLogin.rows[0].estado);
                _this.storage.set('PaisUserFinal', dadosLogin.rows[0].pais);
                _this.storage.set('CepUserFinal', dadosLogin.rows[0].cep);
                window.location.reload();
                setTimeout(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }, 100);
            }
            else if (dadosLogin.rows[0].Logado == '4') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "E-mail digitado é inválido!",
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Acesso Negado',
                    subTitle: "E-mail ou Senha incorretos.",
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.esqueceuSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__esqueceu_senha_esqueceu_senha__["a" /* EsqueceuSenhaPage */]);
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Acesso Negado',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.cadastroUser = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */], { item: item });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\login\login.html"*/'<ion-content class="login-content">\n\n  <div class="login-card">\n\n    <div class="login-logo">\n\n        <img src="assets/imgs/slide-intro/logo-intro.png">\n\n    </div>    \n\n    <div class="login-inputs">\n\n      <!--- value="{{QualEmail}}" -->\n\n      <ion-input class="input-btn" value="{{QualEmail}}" type="email" placeholder="Digite seu e-mail" name="Email" [(ngModel)]="data.email" required ></ion-input>\n\n      <ion-input class="input-btn" value="" type="password" placeholder="Digite sua senha" name="password" [(ngModel)]="data.senha" required ></ion-input>\n\n    </div> \n\n    <p class="login-texto" (click)="esqueceuSenha()">\n\n      Esqueceu a senha?\n\n    </p>\n\n    <p class="login-texto" (click)="cadastroUser(item)" style="text-align: right;">\n\n      Cadastre-se agora\n\n    </p>\n\n  </div>\n\n  <div class="login-btn-entrar">\n\n    <button ion-button (click)="login()" class="login-btn-entrar-button">Entrar</button>    \n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaOntoartePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audios2_audios2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_minha_ontoarte_editar_minha_ontoarte__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MinhaListaOntoartePage = /** @class */ (function () {
    function MinhaListaOntoartePage(loadingCtrl, modalCtrl, Storage, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.item = [];
        this.MinhaListaItens = [];
        this.ListaItens = [];
        this.getDados();
    }
    MinhaListaOntoartePage.prototype.getDados = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaAlbum").then(function (data) {
                _this.MinhaListaItens = data;
                console.log(_this.MinhaListaItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.MinhaListaItens.forEach(function (item, index) {
                        _this.ListaItens = item;
                    });
                }
                /*
                if(this.LivrosItens.length > 0){
                  this.LivrosItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
    };
    MinhaListaOntoartePage.prototype.abriMinhaLista = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__audios2_audios2__["a" /* Audios2Page */], { item: item });
    };
    MinhaListaOntoartePage.prototype.abrirMinhaListaAudio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__["a" /* MinhaListaAudioOntoartePage */]);
    };
    MinhaListaOntoartePage.prototype.AbrirEditarOntoarte = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__editar_minha_ontoarte_editar_minha_ontoarte__["a" /* EditarMinhaOntoartePage */]).present();
    };
    MinhaListaOntoartePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-ontoarte',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista-ontoarte\minha-lista-ontoarte.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <h2 class="meu-progeto-titulo">Minha Lista</h2>   \n\n      <div class="editar" (click)="AbrirEditarOntoarte()">\n\n        Editar\n\n      </div>\n\n      <div class="editar-img" (click)="AbrirEditarOntoarte()">\n\n        <img src="assets/imgs/ico-mais.png">\n\n      </div>    \n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n\n\n  <ion-card class="card-eventos">    \n\n      <p class="btn-novo action_evento">\n\n        Álbuns\n\n      </p>\n\n      <p class="btn-novo" (click)="abrirMinhaListaAudio()">\n\n        Áudios\n\n      </p>      \n\n    </ion-card>\n\n    <ion-card class="novidades-card">\n\n        <ion-row padding>\n\n          <ion-col col-12>\n\n            <div *ngFor= "let item of MinhaListaItens" (click)="abriMinhaLista(item)" style="max-width: 30%; margin-top: 20px; margin-right: 1%; margin-left: 1%; float:left;">\n\n              <ng-container *ngIf="item.idalbum != 0">\n\n                <img src="http://www.redeplaneje.com.br/app/arquivos/r/albuns/{{ item.Pasta }}/{{ item.Img }}_400.jpg" >\n\n                <h2 class="titulo">{{ item.Titulo }}</h2>\n\n              </ng-container>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista-ontoarte\minha-lista-ontoarte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MinhaListaOntoartePage);
    return MinhaListaOntoartePage;
}());

//# sourceMappingURL=minha-lista-ontoarte.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OntoartePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__audios2_audios2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var OntoartePage = /** @class */ (function () {
    function OntoartePage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
        this.relAlbuns = '';
        this.relConcerto = '';
        this.relnovidades = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
        this.getDados2();
    }
    OntoartePage_1 = OntoartePage;
    OntoartePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    OntoartePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    OntoartePage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getAlbuns()
            .subscribe(function (data) { return _this.relAlbuns = data.rows; }, function (err) { return console.log(err); });
    };
    OntoartePage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__audios2_audios2__["a" /* Audios2Page */], {
            item: item
        });
    };
    OntoartePage.prototype.getDados2 = function () {
        var _this = this;
        //retorno de Dados
        this.service.getConcerto()
            .subscribe(function (data) { return _this.relConcerto = data.rows; }, function (err) { return console.log(err); });
    };
    OntoartePage.prototype.selecionadoConcerto = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__videos_videos__["a" /* VideosPage */], {
            item: item
        });
    };
    OntoartePage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    OntoartePage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    OntoartePage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    OntoartePage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    OntoartePage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(OntoartePage_1);
    };
    OntoartePage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    OntoartePage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    OntoartePage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    OntoartePage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], OntoartePage.prototype, "productSlides", void 0);
    OntoartePage = OntoartePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ontoarte',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\ontoarte\ontoarte.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n    <ion-card class="card-back">\n\n        <img src="assets/imgs/background-header-audio.jpg" />  \n\n        <div class="titulo-card-back">\n\n          MÚSICAS\n\n        </div>\n\n        <div class="subtitulo-card-back">Álbuns e Concertos OntoArte</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="titulos-card">\n\n        <ion-card-content>\n\n            <ion-card-title class="titulos-card-chamadas">\n\n                <h2 class="titulos-card-titulo-chamadas">Álbuns Antonio Meneghetti</h2>\n\n            </ion-card-title>   \n\n        </ion-card-content>        \n\n    </ion-card>\n\n    <ion-card class="slide-card">\n\n      <ion-card-content>\n\n        <ion-slides loop="false" slidesPerView="3" speed="1000" pager="false" #productSlides>\n\n\n\n          <ion-slide class="slide-card-li" *ngFor= "let item of relAlbuns" (click)="selecionado(item)">\n\n            <img src="{{ api }}/albuns/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n            <p class="slide-card-texto">\n\n              <strong>{{ item.Titulo }}</strong>\n\n              <br>{{ item.Subtitulo }}\n\n            </p>\n\n          </ion-slide>\n\n\n\n        </ion-slides>            \n\n      </ion-card-content>\n\n    </ion-card> \n\n\n\n    <ion-card class="titulos-card" style="margin-top:-15px;">\n\n        <ion-card-content>\n\n            <ion-card-title class="titulos-card-chamadas">\n\n                <h2 class="titulos-card-titulo-chamadas">Concertos Antonio Meneghetti</h2>\n\n            </ion-card-title>   \n\n        </ion-card-content>        \n\n    </ion-card>\n\n    <ion-card class="slide-card">\n\n      <ion-card-content>\n\n        <ion-slides>\n\n\n\n          <ion-slide  *ngFor= "let item of relConcerto" (click)="selecionadoConcerto(item)">\n\n            <img src="{{ api }}/concerto/{{ item.Pasta }}/{{ item.Img }}_400.jpg">\n\n            <h3 class="titulo">{{ item.Titulo }}</h3>\n\n            <p class="subtitulo">{{ item.Subtitulo }}</p>\n\n          </ion-slide> \n\n            \n\n        </ion-slides>            \n\n      </ion-card-content>\n\n    </ion-card> \n\n                  \n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades-s.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto menu_footer_texto_novidades" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte-s.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto menu_footer_texto_ontoarte" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\ontoarte\ontoarte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], OntoartePage);
    return OntoartePage;
    var OntoartePage_1;
}());

//# sourceMappingURL=ontoarte.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevistaPlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pl_lista_pl_lista__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var RevistaPlPage = /** @class */ (function () {
    function RevistaPlPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
        this.relPl = '';
        this.relPlCats = '';
        this.relnovidades = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
        this.getDadosCat();
    }
    RevistaPlPage_1 = RevistaPlPage;
    RevistaPlPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    RevistaPlPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    RevistaPlPage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getRevistaPl()
            .subscribe(function (data) { return _this.relPl = data.rows; }, function (err) { return console.log(err); });
    };
    RevistaPlPage.prototype.getDadosCat = function () {
        var _this = this;
        //retorno de Dados
        this.service.getPlCategorias()
            .subscribe(function (data) { return _this.relPlCats = data.rows; }, function (err) { return console.log(err); });
    };
    RevistaPlPage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pl_lista_pl_lista__["a" /* PlListaPage */], {
            item: item
        });
    };
    RevistaPlPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    RevistaPlPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    RevistaPlPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    RevistaPlPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(RevistaPlPage_1);
    };
    RevistaPlPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    RevistaPlPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    RevistaPlPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    RevistaPlPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    RevistaPlPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], RevistaPlPage.prototype, "productSlides", void 0);
    RevistaPlPage = RevistaPlPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-revista-pl',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\revista-pl\revista-pl.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    \n\n    <ion-card class="card-back">\n\n        <img src="assets/imgs/background-header-pl.jpg" />  \n\n        <div class="titulo-card-back">PERFORMANCE LÍDER</div>\n\n        <div class="subtitulo-card-back">Uma nova abordagem sobre liderança</div>\n\n    </ion-card>\n\n\n\n    <ion-card class="slide-card">\n\n        <ion-card-content>\n\n\n\n            <ion-row *ngFor= "let itemCat of relPlCats">\n\n                <ion-card-title class="slide-card-chamadas">\n\n                    <h2 class="slide-card-titulo-chamadas">{{ itemCat.Categoria }}</h2>\n\n                </ion-card-title>   \n\n                <ion-col col12>\n\n\n\n                    <ion-slides loop="false" slidesPerView="3" parallax="true" speed="1000" pager="false" #productSlides>\n\n                        <ng-container *ngFor= "let item of relPl">\n\n                            <ion-slide *ngIf="itemCat.idpl_cat == item.Cat" class="slide-card-li">\n\n                                <div class="slide-card-li-fundo">\n\n                                  <img class="slide-card-li-img" (click)= "selecionado(item)" src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg"/>\n\n                                </div>\n\n                            </ion-slide>\n\n                        </ng-container>\n\n                    </ion-slides>  \n\n\n\n                </ion-col>\n\n            </ion-row> \n\n        </ion-card-content> \n\n    </ion-card>   \n\n\n\n  </ion-content>\n\n\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl-s.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto menu_footer_texto_pl" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\revista-pl\revista-pl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], RevistaPlPage);
    return RevistaPlPage;
    var RevistaPlPage_1;
}());

//# sourceMappingURL=revista-pl.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitulosLivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var TitulosLivrosPage = /** @class */ (function () {
    function TitulosLivrosPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
        this.relLivros = '';
        this.relLivrosCats = '';
        this.relnovidades = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
        this.getDadosCat();
    }
    TitulosLivrosPage_1 = TitulosLivrosPage;
    TitulosLivrosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    TitulosLivrosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    TitulosLivrosPage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivros()
            .subscribe(function (data) { return _this.relLivros = data.rows; }, function (err) { return console.log(err); });
    };
    TitulosLivrosPage.prototype.getDadosCat = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivrosCategorias()
            .subscribe(function (data) { return _this.relLivrosCats = data.rows; }, function (err) { return console.log(err); });
    };
    TitulosLivrosPage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__livros_livros__["a" /* LivrosPage */], {
            item: item
        });
    };
    TitulosLivrosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(TitulosLivrosPage_1);
    };
    TitulosLivrosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    TitulosLivrosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], TitulosLivrosPage.prototype, "productSlides", void 0);
    TitulosLivrosPage = TitulosLivrosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-titulos-livros',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\titulos-livros\titulos-livros.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n    <ion-card class="card-back">\n\n        <img src="assets/imgs/background-header-livros.jpg" />  \n\n        <div class="titulo-card-back">Publicações</div>\n\n        <div class="subtitulo-card-back">Ontopsicológica Editora Universitária</div>\n\n    </ion-card>\n\n    <ion-card class="slide-card">\n\n        <ion-card-content>\n\n\n\n            <ion-row *ngFor= "let itemCat of relLivrosCats">\n\n                <ion-card-title class="slide-card-chamadas">\n\n                    <h2 class="slide-card-titulo-chamadas">{{ itemCat.Categoria }}</h2>\n\n                </ion-card-title>   \n\n                <ion-col col12>\n\n\n\n                    <ion-slides loop="false" slidesPerView="3" parallax="true" speed="1000" pager="false" #productSlides>\n\n                        <ng-container *ngFor= "let item of relLivros">\n\n                            <ion-slide *ngIf="itemCat.idlivro_cat === item.Cat" class="slide-card-li">\n\n                              <div class="slide-card-li-fundo">\n\n                                <img class="slide-card-li-img" (click)= "selecionado(item)" src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg"/>\n\n                              </div>\n\n                              </ion-slide>\n\n                        </ng-container>\n\n                    </ion-slides>  \n\n\n\n                </ion-col>\n\n            </ion-row> \n\n        </ion-card-content> \n\n    </ion-card>   \n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes-s.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto menu_footer_texto_livros" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\titulos-livros\titulos-livros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TitulosLivrosPage);
    return TitulosLivrosPage;
    var TitulosLivrosPage_1;
}());

//# sourceMappingURL=titulos-livros.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaUsuarioRestritaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AreaUsuarioRestritaPage = /** @class */ (function () {
    function AreaUsuarioRestritaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AreaUsuarioRestritaPage_1 = AreaUsuarioRestritaPage;
    AreaUsuarioRestritaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__titulos_titulos__["a" /* TitulosPage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(AreaUsuarioRestritaPage_1);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__eventos_eventos__["a" /* EventosPage */]);
    };
    AreaUsuarioRestritaPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__busca_busca__["a" /* BuscaPage */]);
    };
    AreaUsuarioRestritaPage = AreaUsuarioRestritaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-area-usuario-restrita',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\area-usuario-restrita\area-usuario-restrita.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer">\n\n        <ion-badge item-end color="danger" class="menu-footer-bola">4</ion-badge>\n\n        <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Novidades\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n          Publicações\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n          Líder\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n          Aulas\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n            Músicas\n\n        </p>          \n\n    </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\area-usuario-restrita\area-usuario-restrita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AreaUsuarioRestritaPage);
    return AreaUsuarioRestritaPage;
    var AreaUsuarioRestritaPage_1;
}());

//# sourceMappingURL=area-usuario-restrita.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitulosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__eventos_eventos__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var TitulosPage = /** @class */ (function () {
    function TitulosPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
        this.resolucao = '';
        this.relVideos = '';
        this.relVideosCats = '';
        this.relnovidades = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r/videos/';
        this.getDados();
        this.getDadosCat();
    }
    TitulosPage_1 = TitulosPage;
    TitulosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    TitulosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    TitulosPage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getData()
            .subscribe(function (data) { return _this.relVideos = data.rows; }, function (err) { return console.log(err); });
        //const browser = this.iab.create('https://ionicframework.com/');
    };
    TitulosPage.prototype.getDadosCat = function () {
        var _this = this;
        //retorno de Dados
        this.service.getVideosCategorias()
            .subscribe(function (data) { return _this.relVideosCats = data.rows; }, function (err) { return console.log(err); });
    };
    TitulosPage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__videos_videos__["a" /* VideosPage */], {
            item: item
        });
    };
    TitulosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    TitulosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(TitulosPage_1);
    };
    TitulosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    TitulosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    TitulosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    TitulosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    TitulosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    TitulosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__eventos_eventos__["a" /* EventosPage */]);
    };
    TitulosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], TitulosPage.prototype, "productSlides", void 0);
    TitulosPage = TitulosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-titulos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\titulos\titulos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n    <ion-card class="card-back">\n\n        <img src="assets/imgs/background-header.jpg" />  \n\n        <div class="titulo-card-back">Aulas</div>\n\n    </ion-card>\n\n    <ion-card class="slide-card">\n\n        <ion-card-content>\n\n\n\n            <ion-row *ngFor= "let itemCat of relVideosCats">\n\n                <ion-card-title class="slide-card-chamadas">\n\n                    <h2 class="slide-card-titulo-chamadas">{{ itemCat.Categoria }}</h2>\n\n                </ion-card-title>   \n\n                <ion-col col12>\n\n\n\n                    <ion-slides loop="false" slidesPerView="1" speed="1000" pager="false" #productSlides>\n\n                        <ng-container *ngFor= "let item of relVideos">\n\n                            <ion-slide *ngIf="itemCat.idvideo_cat == item.Cat" class="slide-card-li">\n\n                                <img (click)= "selecionado(item)" src="{{ api }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg"/>\n\n                                <h3 class="titulo">{{ item.Titulo }}</h3>\n\n                                <p class="subtitulo">{{ item.Subtitulo }}</p>                                  \n\n                            </ion-slide>\n\n                        </ng-container>\n\n                    </ion-slides>  \n\n\n\n                </ion-col>\n\n            </ion-row> \n\n        </ion-card-content> \n\n    </ion-card>   \n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas-s.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto menu_footer_texto_aulas" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\titulos\titulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], TitulosPage);
    return TitulosPage;
    var TitulosPage_1;
}());

//# sourceMappingURL=titulos.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AovivoArquivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aovivo_proximas_aovivo_proximas__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AovivoArquivoPage = /** @class */ (function () {
    function AovivoArquivoPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.relnovidades = '';
    }
    AovivoArquivoPage_1 = AovivoArquivoPage;
    AovivoArquivoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    AovivoArquivoPage.prototype.abrirPaginaAovivoArquivo = function () {
        this.navCtrl.setRoot(AovivoArquivoPage_1);
    };
    AovivoArquivoPage.prototype.abrirPaginaAoVivoVideo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaAovivoProximas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__aovivo_proximas_aovivo_proximas__["a" /* AovivoProximasPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_titulos__["a" /* TitulosPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__eventos_eventos__["a" /* EventosPage */]);
    };
    AovivoArquivoPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__busca_busca__["a" /* BuscaPage */]);
    };
    AovivoArquivoPage = AovivoArquivoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aovivo-arquivo',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\aovivo-arquivo\aovivo-arquivo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content class="fundo">\n\n    <ion-card class="card-eventos">\n\n      <p class="btn-novo action_evento" (click)="abrirPaginaAovivoArquivo()">\n\n        ARQUIVO\n\n      </p>          \n\n      <p class="btn-novo" (click)="abrirPaginaAoVivoVideo()">\n\n        AO VIVO\n\n      </p>\n\n      <p class="btn-novo" (click)="abrirPaginaAovivoProximas()">\n\n        PRÓXIMOS\n\n      </p>\n\n    </ion-card>\n\n    <ion-card class="card-eventos">\n\n        <ion-row>\n\n          <ion-col col12 padding>\n\n            <h4></h4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n      \n\n  </ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\aovivo-arquivo\aovivo-arquivo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_13__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AovivoArquivoPage);
    return AovivoArquivoPage;
    var AovivoArquivoPage_1;
}());

//# sourceMappingURL=aovivo-arquivo.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AovivoProximasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aovivo_arquivo_aovivo_arquivo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AovivoProximasPage = /** @class */ (function () {
    function AovivoProximasPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.relnovidades = '';
    }
    AovivoProximasPage_1 = AovivoProximasPage;
    AovivoProximasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    AovivoProximasPage.prototype.abrirPaginaAovivoArquivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__aovivo_arquivo_aovivo_arquivo__["a" /* AovivoArquivoPage */]);
    };
    AovivoProximasPage.prototype.abrirPaginaAoVivoVideo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AovivoProximasPage.prototype.abrirPaginaAovivoProximas = function () {
        this.navCtrl.setRoot(AovivoProximasPage_1);
    };
    AovivoProximasPage = AovivoProximasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aovivo-proximas',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\aovivo-proximas\aovivo-proximas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content class="fundo">\n\n    <ion-card class="card-eventos">\n\n      <p class="btn-novo " (click)="abrirPaginaAovivoArquivo()">\n\n        ARQUIVO\n\n      </p>          \n\n      <p class="btn-novo" (click)="abrirPaginaAoVivoVideo()">\n\n        AO VIVO\n\n      </p>\n\n      <p class="btn-novo action_evento" (click)="abrirPaginaAovivoProximas()">\n\n        PRÓXIMOS\n\n      </p>\n\n    </ion-card>\n\n    <ion-card class="card-eventos">\n\n      <ion-row>\n\n        <ion-col col12 padding>\n\n          <h4>Sem transmissões agendadas no momento.</h4>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n      \n\n  </ion-content>\n\n <ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\aovivo-proximas\aovivo-proximas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AovivoProximasPage);
    return AovivoProximasPage;
    var AovivoProximasPage_1;
}());

//# sourceMappingURL=aovivo-proximas.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var EventosFormPage = /** @class */ (function () {
    function EventosFormPage(payPal, socialSharing, service, navCtrl, navParams, loadingCtrl, storage, http, alertCtrl) {
        this.payPal = payPal;
        this.socialSharing = socialSharing;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.item = [];
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
    }
    EventosFormPage.prototype.ionViewDidLoad = function () {
    };
    EventosFormPage.prototype.getDados = function () {
        this.service.getEventos();
        this.item = this.navParams.get('item');
    };
    EventosFormPage.prototype.solicitar = function (dados) {
        var _this = this;
        // this.showLoading()
        var link = 'http://app.progettoapp.com.br/midias/eventos_cadastrar.php';
        var myData = JSON.stringify({
            ideventoForm: this.data.ideventoForm, NomeForm: this.data.NomeForm, SobrenomeForm: this.data.SobrenomeForm,
            EmailForm: this.data.EmailForm, CelularForm: this.data.CelularForm,
            EnderecoForm: this.data.EnderecoForm, BairroForm: this.data.BairroForm, CepForm: this.data.CepForm,
            CidadeForm: this.data.CidadeForm, EstadoForm: this.data.EstadoForm, PaisForm: this.data.PaisForm
        });
        this.http.post(link, myData)
            .subscribe(function (data) {
            var dadosLogin = JSON.parse(data["_body"]);
            console.log(dadosLogin);
            if (dadosLogin.rows[0].CadastroSituacao === '1') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Sucesso!',
                    subTitle: "Foi enviado um e-mail com a confirmação do seu cadastro.",
                    buttons: ['OK']
                });
                alert_1.present();
                _this.data.NomeForm = '';
                _this.data.SobrenomeForm = '';
                _this.data.EmailForm = '';
                _this.data.CelularForm = '';
                _this.data.EnderecoForm = '';
                _this.data.BairroForm = '';
                _this.data.CepForm = '';
                _this.data.CidadeForm = '';
                _this.data.EstadoForm = '';
                _this.data.PaisForm = '';
                _this.payPal.init({
                    PayPalEnvironmentProduction: 'Afsqbs7RpxDtCUBcvfL55rwr6wikINE0CoEVBghJxTdF5ODaKXtvrA7bCTm5jVm3jziE8_aQH7ie5NJ4',
                    PayPalEnvironmentSandbox: 'AQeIrtsR6ML0MW7PPRjQNw3Yd4qGYu8j-lH2NTA2DRF1gyG6pLwamutWs1teUVtmzWFv5S73zVmsAmbC'
                }).then(function () {
                    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                    _this.payPal.prepareToRender('PayPalEnvironmentProduction', new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                        var payment = new __WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["c" /* PayPalPayment */]('10.00', 'BRL', 'Alta Formação Empresarial', 'sale');
                        _this.payPal.renderSinglePaymentUI(payment).then(function () {
                            // Successfully paid
                            // Example sandbox response
                            //
                            // {
                            //   "client": {
                            //     "environment": "sandbox",
                            //     "product_name": "PayPal iOS SDK",
                            //     "paypal_sdk_version": "2.16.0",
                            //     "platform": "iOS"
                            //   },
                            //   "response_type": "payment",
                            //   "response": {
                            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                            //     "state": "approved",
                            //     "create_time": "2016-10-03T13:33:33Z",
                            //     "intent": "sale"
                            //   }
                            // }
                        }, function () {
                            // Error or render dialog closed without being successful
                        });
                    }, function () {
                        // Error in configuration
                    });
                }, function () {
                    // Error in initialization, maybe PayPal isn't supported or something else
                });
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "Campo e-mail não pode estar vazio, favor preencher.",
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    EventosFormPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    EventosFormPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Acesso Negado',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    EventosFormPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    EventosFormPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventosFormPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventosFormPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventosFormPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventosFormPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventosFormPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventosFormPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__eventos_eventos__["a" /* EventosPage */]);
    };
    EventosFormPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__busca_busca__["a" /* BuscaPage */]);
    };
    EventosFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos-form',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\eventos-form\eventos-form.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="novidades-card">\n\n    <ion-card-content class="box-novidades">\n\n      <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <div class="form-inputs">\n\n    <ion-input class="input-btn" [(ngModel)]="data.NomeForm" type="text" placeholder="Nome" name="NomeForm" required ></ion-input>\n\n    <ion-input class="input-btn" [(ngModel)]="data.SobrenomeForm" type="text" placeholder="Sobrenome" name="SobrenomeForm" required ></ion-input>\n\n    <ion-input class="input-btn" [(ngModel)]="data.EmailForm" type="email" placeholder="E-mail" name="EmailForm" required ></ion-input>\n\n    <ion-input class="input-btn" [(ngModel)]="data.CelularForm" type="text" placeholder="Celular" name="CelularForm" required ></ion-input>\n\n    <ion-input [(ngModel)]="data.ideventoForm" type="hidden" value="{{ item.idevento }}"></ion-input>\n\n    <button ion-button round outline (click)="solicitar()" class="btn-inscreva-se">CADASTRAR</button>   \n\n  </div>  \n\n</ion-content>     '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\eventos-form\eventos-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EventosFormPage);
    return EventosFormPage;
}());

//# sourceMappingURL=eventos-form.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OntoarteVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_audio_service_audio_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var OntoarteVerPage = /** @class */ (function () {
    function OntoarteVerPage(navCtrl, navParams, service, loadingCtrl, audioService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.audioService = audioService;
        this.data = {};
        this.item = [];
        this.position = 0;
        this.oldPosition = 0;
        this.totalMedia = 0;
        this.iconPlay = 'play';
        this.play = false;
        this.audio = null;
        this.indexAudio = 0;
        this.audioService.changePositionObservable.subscribe(function (value) {
            _this.audioPlayer.nativeElement.currentTime = value;
        });
        this.getAudios();
    }
    OntoarteVerPage.prototype.getAudios = function () {
        this.item = this.navParams.get('item');
    };
    OntoarteVerPage.prototype.durationChangeEventHandler = function () {
        this.totalMedia = this.audioPlayer.nativeElement.duration;
        this.audioService.emitTotalMedia(Math.round(this.totalMedia));
        console.log(this.totalMedia);
    };
    OntoarteVerPage.prototype.startCronometro = function () {
        var _this = this;
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            _this.oldPosition = _this.audioPlayer.nativeElement.currentTime;
            _this.position = _this.audioPlayer.nativeElement.currentTime;
            console.log(_this.position);
            _this.audioService.emitPosition(_this.position);
            if (_this.position >= _this.totalMedia) {
                console.log(_this.position + ' - ' + _this.totalMedia);
                _this.stopCronometro();
            }
        });
    };
    OntoarteVerPage.prototype.stopCronometro = function () {
        var _this = this;
        this.subscription.unsubscribe();
        setTimeout(function () {
            _this.relAudios[_this.indexAudio].iconplay = 'play';
            _this.indexAudio++;
            if (_this.indexAudio > _this.relAudios.length - 1) {
                _this.indexAudio = 0;
            }
            _this.relAudios[_this.indexAudio].iconplay = 'pause';
            _this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + _this.relAudios[_this.indexAudio].arquivo_audio;
            _this.audioPlayer.nativeElement.src = _this.audio;
            _this.audioPlay();
        }, 200);
    };
    OntoarteVerPage.prototype.next = function () {
        this.indexAudio++;
        if (this.indexAudio > this.relAudios.length - 1) {
            this.indexAudio = 0;
        }
        this.toogleIconPlayList();
        this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;
        this.audioPlayer.nativeElement.src = this.audio;
        this.relAudios[this.indexAudio].iconplay = 'pause';
        this.audioPlay();
    };
    OntoarteVerPage.prototype.back = function () {
        this.indexAudio--;
        if (this.indexAudio < 0) {
            this.indexAudio = this.relAudios.length - 1;
        }
        this.toogleIconPlayList();
        this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;
        this.audioPlayer.nativeElement.src = this.audio;
        this.relAudios[this.indexAudio].iconplay = 'pause';
        this.audioPlay();
    };
    OntoarteVerPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    OntoarteVerPage.prototype.random = function () {
        this.indexAudio = this.getRandomInt(0, this.relAudios.length - 1);
        this.toogleIconPlayList();
        this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.indexAudio].arquivo_audio;
        this.audioPlayer.nativeElement.src = this.audio;
        this.relAudios[this.indexAudio].iconplay = 'pause';
        this.audioPlay();
    };
    OntoarteVerPage.prototype.audioPlay = function () {
        this.audioPlayer.nativeElement.play();
        this.startCronometro();
        this.play = true;
        console.log('play');
    };
    OntoarteVerPage.prototype.audioPause = function () {
        console.log('pause');
        this.audioPlayer.nativeElement.pause();
    };
    OntoarteVerPage.prototype.tooglePlay = function () {
        if (!this.audio) {
            if (this.relAudios.length > 0) {
                this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[0].arquivo_audio;
                this.audioPlayer.nativeElement.src = this.audio;
                //this.audioPlayer.nativeElement.load();
            }
        }
        console.log(this.audio);
        this.play = !this.play;
        this.audioService.emitPlay(this.play);
        if (this.play) {
            this.iconPlay = 'pause';
            this.relAudios[this.indexAudio].iconplay = 'pause';
        }
        else {
            this.iconPlay = 'play';
            this.relAudios[this.indexAudio].iconplay = 'play';
        }
        if (this.audioPlayer.nativeElement.paused) {
            this.audioPlay();
        }
        else {
            this.audioPause();
        }
    };
    OntoarteVerPage.prototype.refreshPosition = function () {
        var delta = Math.abs(this.position - this.oldPosition);
        if (delta > 3) {
            console.log('mudou');
            this.audioService.changePosition(this.position);
        }
    };
    OntoarteVerPage.prototype.toogleIconPlayList = function () {
        for (var i = 0; i < this.relAudios.length; i++) {
            var element = this.relAudios[i];
            element.iconplay = 'play';
        }
    };
    OntoarteVerPage.prototype.startAudio = function (item, index) {
        this.toogleIconPlayList();
        item.iconplay = 'pause';
        this.indexAudio = index;
        this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + item['arquivo_audio'];
        this.audioPlayer.nativeElement.src = this.audio;
        this.audioPlayer.nativeElement.load();
        this.iconPlay = 'pause';
        this.audioPlay();
    };
    OntoarteVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_titulos__["a" /* TitulosPage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    OntoarteVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('audioPlayer'),
        __metadata("design:type", Object)
    ], OntoarteVerPage.prototype, "audioPlayer", void 0);
    OntoarteVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-ontoarte-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\ontoarte-ver\ontoarte-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <ion-card class="novidades-card">\n\n        <ion-card-content>\n\n          <h2 class="video-card-titulo">\n\n              {{ item.titulo }}\n\n          </h2> \n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer">\n\n        <ion-badge item-end color="danger" class="menu-footer-bola">4</ion-badge>\n\n        <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Novidades\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n          Publicações\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n          Líder\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n          Aulas\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n            Músicas\n\n        </p>          \n\n    </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\ontoarte-ver\ontoarte-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_audio_service_audio_service__["a" /* AudioServiceProvider */]])
    ], OntoarteVerPage);
    return OntoarteVerPage;
}());

//# sourceMappingURL=ontoarte-ver.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicionarioVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DicionarioVerPage = /** @class */ (function () {
    function DicionarioVerPage(navCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.data = {};
        this.item = [];
        this.urlVideo = '';
        this.getDados();
    }
    DicionarioVerPage.prototype.getDados = function () {
        this.item = this.navParams.get('item');
    };
    DicionarioVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__eventos_eventos__["a" /* EventosPage */]);
    };
    DicionarioVerPage.prototype.abrirPaginaBuscaGeral = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__busca_busca__["a" /* BuscaPage */]);
    };
    DicionarioVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dicionario-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\dicionario-ver\dicionario-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n      <ion-card class="novidades-card">\n\n          <ion-card-content>\n\n            <h2 class="video-card-titulo">\n\n                {{ item.palavra }}\n\n                <span class="video-card-tipo">{{ item.tipo }}</span>\n\n            </h2> \n\n            <div class="video-card-desc" [innerHTML]="item.descricao"></div>  \n\n            <div class="video-card-desc2" [innerHTML]="item.descricao2"></div>  \n\n          </ion-card-content>\n\n      </ion-card>\n\n        \n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\dicionario-ver\dicionario-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DicionarioVerPage);
    return DicionarioVerPage;
}());

//# sourceMappingURL=dicionario-ver.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__planos_planos__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagamento_entrega_pagamento_entrega__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CadastroUsuarioPage = /** @class */ (function () {
    function CadastroUsuarioPage(navCtrl, navParams, modalCtrl, loadingCtrl, storage, http, alertCtrl, payPal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.payPal = payPal;
        this.data = {};
        this.QualNivel = {};
        this.QualNivelNome = {};
        this.QualNivelValor = {};
        this.QualUserEndereco = {};
        this.QualUserNumero = {};
        this.QualUserBairro = {};
        this.QualUserComplemento = {};
        this.QualUserCidade = {};
        this.QualUserEstado = {};
        this.QualUserPais = {};
        this.QualUserCep = {};
    }
    CadastroUsuarioPage.prototype.escolherPagamentoEntrega = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pagamento_entrega_pagamento_entrega__["a" /* PagamentoEntregaPage */]).present();
    };
    CadastroUsuarioPage.prototype.escolherPlano = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__planos_planos__["a" /* PlanosPage */]).present();
    };
    CadastroUsuarioPage.prototype.solicitar = function (dados) {
        // this.showLoading()
        var _this = this;
        this.storage.get('QualNivel').then(function (val) { _this.QualNivel = val; });
        this.storage.get('QualNivelNome').then(function (val) { _this.QualNivelNome = val; });
        this.storage.get('QualNivelValor').then(function (val) { _this.QualNivelValor = val; });
        this.storage.get('QualUserEndereco').then(function (val) { _this.QualUserEndereco = val; });
        var link = 'http://app.progettoapp.com.br/midias/cadastrar_user.php';
        var myData = JSON.stringify({
            //form contato
            NomeUser: this.data.NomeUser, SobrenomeUser: this.data.SobrenomeUser, EmpresaUser: this.data.EmpresaUser,
            EmailUser: this.data.EmailUser, CelularUser: this.data.CelularUser, SenhaUser: this.data.SenhaUser,
            SenhaConfirmar: this.data.SenhaConfirmar,
            EnderecoUser: this.QualUserEndereco, NumeroUser: this.QualUserEndereco, BairroUser: this.QualUserEndereco,
            ComplementoUser: this.QualUserEndereco, CidadeUser: this.QualUserEndereco, EstadoUser: this.QualUserEndereco,
            PaisUser: this.QualUserEndereco, CepUser: this.QualUserEndereco,
            PlanoSelecionado: this.QualNivel
        });
        this.http.post(link, myData)
            .subscribe(function (data) {
            var dadosLogin = JSON.parse(data["_body"]);
            //console.log(dadosLogin);
            if (dadosLogin.rows[0].CadastroSituacao === '1') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Sucesso!',
                    subTitle: "Foi enviado um e-mail com sua nova senha.",
                    buttons: ['OK']
                });
                alert_1.present();
                _this.data.NomeUser = '';
                _this.data.SobrenomeUser = '';
                _this.data.EmpresaUser = '';
                _this.data.EmailUser = '';
                _this.data.CelularUser = '';
                _this.data.SenhaUser = '';
                _this.data.SenhaConfirmar = '';
                _this.payPal.init({
                    PayPalEnvironmentProduction: 'Afsqbs7RpxDtCUBcvfL55rwr6wikINE0CoEVBghJxTdF5ODaKXtvrA7bCTm5jVm3jziE8_aQH7ie5NJ4',
                    PayPalEnvironmentSandbox: 'AQeIrtsR6ML0MW7PPRjQNw3Yd4qGYu8j-lH2NTA2DRF1gyG6pLwamutWs1teUVtmzWFv5S73zVmsAmbC'
                }).then(function () {
                    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                    _this.payPal.prepareToRender('PayPalEnvironmentProduction', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                        var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](_this.QualNivelValor, 'BRL', _this.QualNivelNome, 'sale');
                        _this.payPal.renderSinglePaymentUI(payment).then(function () {
                            // Successfully paid
                            // Example sandbox response
                            //
                            // {
                            //   "client": {
                            //     "environment": "sandbox",
                            //     "product_name": "PayPal iOS SDK",
                            //     "paypal_sdk_version": "2.16.0",
                            //     "platform": "iOS"
                            //   },
                            //   "response_type": "payment",
                            //   "response": {
                            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                            //     "state": "approved",
                            //     "create_time": "2016-10-03T13:33:33Z",
                            //     "intent": "sale"
                            //   }
                            // }
                        }, function () {
                            // Error or render dialog closed without being successful
                        });
                    }, function () {
                        // Error in configuration
                    });
                }, function () {
                    // Error in initialization, maybe PayPal isn't supported or something else
                });
            }
            else if (dadosLogin.rows[0].CadastroSituacao === '2') {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "Senha não conferem, favor digitar novamente.",
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else if (dadosLogin.rows[0].CadastroSituacao === '3') {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "Dados de entrega não preenchidos, favor digitar os mesmos.",
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else if (dadosLogin.rows[0].CadastroSituacao === '4') {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "Digite um e-mail válido.",
                    buttons: ['OK']
                });
                alert_4.present();
            }
            else {
                var alert_5 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "E-mail inválido ou não existente em nosso banco de dados.",
                    buttons: ['OK']
                });
                alert_5.present();
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    CadastroUsuarioPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    CadastroUsuarioPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Acesso Negado',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CadastroUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-usuario',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\cadastro-usuario\cadastro-usuario.html"*/'<ion-content class="login-content">\n\n  <div class="login-card">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle start>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <div class="titulo">\n\n        Cadastro\n\n      </div>        \n\n    </ion-navbar>     \n\n    <div class="login-inputs">\n\n      <ion-input class="input-btn" [(ngModel)]="data.NomeUser" type="text" placeholder="Nome" name="nomeUser" required ></ion-input>\n\n      <ion-input class="input-btn" [(ngModel)]="data.SobrenomeUser" type="text" placeholder="Sobrenome" name="sobrenomeUser" required ></ion-input>\n\n      <ion-input class="input-btn" [(ngModel)]="data.EmpresaUser" type="text" placeholder="Empresa" name="empresaUser" ></ion-input>\n\n      <ion-input class="input-btn" [(ngModel)]="data.EmailUser" type="email" placeholder="E-mail" name="EmailUser" required ></ion-input>\n\n      <ion-input class="input-btn" [(ngModel)]="data.CelularUser" type="text" placeholder="Celular" name="celularUser" required ></ion-input>\n\n      <ion-input class="input-btn" [(ngModel)]="data.SenhaUser" type="password" placeholder="Digite a sua senha" name="SenhaUser" required ></ion-input>        \n\n      <ion-input class="input-btn" [(ngModel)]="data.SenhaConfirmar" type="password" placeholder="Confirme sua senha" name="ConfirmarSenhaUser" required ></ion-input>        \n\n    </div>\n\n    <div class="login-btn-outros">\n\n      <button ion-button (click)="escolherPlano()">PLANO DE ASSINATURA</button>\n\n      <button ion-button (click)="escolherPagamentoEntrega()">DADOS DE ENTREGA</button>\n\n    </div>\n\n  </div>\n\n  <div class="login-btn-entrar">\n\n    <button ion-button (click)="solicitar()" class="login-btn-entrar-button">Cadastrar</button>     \n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\cadastro-usuario\cadastro-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */]])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());

//# sourceMappingURL=cadastro-usuario.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaPublicacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editar_minha_lista_publicacoes_editar_minha_lista_publicacoes__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MinhaListaPublicacoesPage = /** @class */ (function () {
    function MinhaListaPublicacoesPage(loadingCtrl, modalCtrl, Storage, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.item = [];
        this.MinhaListaItens = [];
        this.ListaItens = [];
        this.getDados();
    }
    MinhaListaPublicacoesPage.prototype.getDados = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaLivros").then(function (data) {
                _this.MinhaListaItens = data;
                console.log(_this.MinhaListaItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.MinhaListaItens.forEach(function (item, index) {
                        _this.ListaItens = item;
                    });
                }
                /*
                if(this.LivrosItens.length > 0){
                  this.LivrosItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
    };
    MinhaListaPublicacoesPage.prototype.abriMinhaLista = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__livros_livros__["a" /* LivrosPage */], { item: item });
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_titulos__["a" /* TitulosPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__eventos_eventos__["a" /* EventosPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__busca_busca__["a" /* BuscaPage */]);
    };
    MinhaListaPublicacoesPage.prototype.abrirEditarLivros = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__editar_minha_lista_publicacoes_editar_minha_lista_publicacoes__["a" /* EditarMinhaListaPublicacoesPage */]).present();
    };
    MinhaListaPublicacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-publicacoes',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista-publicacoes\minha-lista-publicacoes.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <h2 class="meu-progeto-titulo">Minha Lista</h2>   \n\n      <div class="editar" (click)="abrirEditarLivros()">\n\n        Editar\n\n      </div>\n\n      <div class="editar-img" (click)="abrirEditarLivros()">\n\n        <img src="assets/imgs/ico-mais.png">\n\n      </div>    \n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n\n\n  <ion-card class="novidades-card">\n\n    <ion-row padding>\n\n      <ion-col col-12>\n\n        <h2 class="video-card-categoria">\n\n          Publicações\n\n        </h2>   \n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div *ngFor= "let item of MinhaListaItens" (click)="abriMinhaLista(item)" style="max-width: 30%; margin-top: 20px; margin-right: 1%; margin-left: 1%; float:left;">\n\n          <ng-container *ngIf="item.idlivro != 0">\n\n            <img src="http://www.redeplaneje.com.br/app/arquivos/r/livros/{{ item.Pasta }}/{{ item.Img }}_400.jpg" >\n\n            <h2 class="titulo">{{ item.Titulo }}</h2>\n\n          </ng-container>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista-publicacoes\minha-lista-publicacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaListaPublicacoesPage);
    return MinhaListaPublicacoesPage;
}());

//# sourceMappingURL=minha-lista-publicacoes.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaPlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pl_lista_pl_lista__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_minha_pl_editar_minha_pl__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MinhaListaPlPage = /** @class */ (function () {
    function MinhaListaPlPage(loadingCtrl, modalCtrl, Storage, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.item = [];
        this.MinhaListaItens = [];
        this.ListaItens = [];
        this.getDados();
    }
    MinhaListaPlPage.prototype.getDados = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaPl").then(function (data) {
                _this.MinhaListaItens = data;
                //console.log(this.MinhaListaItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.MinhaListaItens.forEach(function (item, index) {
                        _this.ListaItens = item;
                    });
                }
                /*
                if(this.LivrosItens.length > 0){
                  this.LivrosItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
    };
    MinhaListaPlPage.prototype.abriMinhaLista = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pl_lista_pl_lista__["a" /* PlListaPage */], { item: item });
    };
    MinhaListaPlPage.prototype.AbrirEditarPl = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__editar_minha_pl_editar_minha_pl__["a" /* EditarMinhaPlPage */]).present();
    };
    MinhaListaPlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-pl',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista-pl\minha-lista-pl.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <h2 class="meu-progeto-titulo">Minha Lista</h2>   \n\n      <div class="editar" (click)="AbrirEditarPl()">\n\n        Editar\n\n      </div>\n\n      <div class="editar-img" (click)="AbrirEditarPl()">\n\n        <img src="assets/imgs/ico-mais.png">\n\n      </div>    \n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n\n\n  <ion-card class="novidades-card">\n\n    <ion-row padding>\n\n      <ion-col col-12>\n\n        <h2 class="video-card-categoria">\n\n          Líder\n\n        </h2>   \n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div *ngFor= "let item of MinhaListaItens" (click)="abriMinhaLista(item)" style="max-width: 30%; margin-top: 20px; margin-right: 1%; margin-left: 1%; float:left;">\n\n          <ng-container *ngIf="item.idpl != 0">\n\n            <img src="http://www.redeplaneje.com.br/app/arquivos/r/pl/{{ item.Pasta }}/{{ item.Img }}_400.jpg" >\n\n            <h2 class="titulo">{{ item.Titulo }}</h2>\n\n          </ng-container>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista-pl\minha-lista-pl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MinhaListaPlPage);
    return MinhaListaPlPage;
}());

//# sourceMappingURL=minha-lista-pl.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaAudioOntoartePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audios2_audios2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minha_lista_ontoarte_minha_lista_ontoarte__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_audio_service_audio_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editar_minha_audio_ontoarte_editar_minha_audio_ontoarte__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MinhaListaAudioOntoartePage = /** @class */ (function () {
    function MinhaListaAudioOntoartePage(loadingCtrl, modalCtrl, Storage, navCtrl, navParams, alertCtrl, audioService) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.audioService = audioService;
        this.relAudios = [];
        this.position = 0;
        this.oldPosition = 0;
        this.iconPlay = 'play';
        this.getDados();
    }
    MinhaListaAudioOntoartePage.prototype.getDados = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaAudios").then(function (data) {
                _this.relAudios = data;
                console.log('Lista em Session Audios Root', data);
            });
        });
    };
    MinhaListaAudioOntoartePage.prototype.abriMinhaLista = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__audios2_audios2__["a" /* Audios2Page */], { item: item });
    };
    MinhaListaAudioOntoartePage.prototype.abrirMinhaListaAlbuns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__minha_lista_ontoarte_minha_lista_ontoarte__["a" /* MinhaListaOntoartePage */]);
    };
    MinhaListaAudioOntoartePage.prototype.AbrirEditarOntoarte = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__editar_minha_audio_ontoarte_editar_minha_audio_ontoarte__["a" /* EditarMinhaAudioOntoartePage */]).present();
    };
    MinhaListaAudioOntoartePage.prototype.toogleIconPlayList = function () {
        for (var i = 0; i < this.relAudios.length; i++) {
            var element = this.relAudios[i];
            element.iconplay = 'play';
        }
    };
    MinhaListaAudioOntoartePage.prototype.unsubscribePlayer = function () {
        this.subscription.unsubscribe();
    };
    MinhaListaAudioOntoartePage.prototype.startAudio = function (item, index) {
        debugger;
        //Verifica se o audio atual está executando a para a execução
        if (this.audioService.isExecuting() && this.audioService.isExecutingIndex(index)) {
            item.iconplay = 'play';
            this.iconPlay = 'play';
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
    };
    MinhaListaAudioOntoartePage.prototype.audioPlay = function () {
        this.audioService.audioPlayer.nativeElement.play();
        this.startCronometro();
        this.audioService.IsExecuting = true;
        //console.log('play');
    };
    MinhaListaAudioOntoartePage.prototype.startCronometro = function () {
        var _this = this;
        this.subscription = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(1000).subscribe(function (x) {
            _this.oldPosition = _this.audioService.audioPlayer.nativeElement.currentTime;
            _this.position = _this.audioService.audioPlayer.nativeElement.currentTime;
            console.log(_this.position);
            _this.audioService.emitPosition(_this.position);
            if (_this.audioService.totalMedia > 0) {
                if (_this.position >= _this.audioService.totalMedia) {
                    debugger;
                    console.log(_this.position + ' - ' + _this.audioService.totalMedia);
                    _this.executeNextAudio();
                }
            }
        });
    };
    MinhaListaAudioOntoartePage.prototype.executeNextAudio = function () {
        var _this = this;
        debugger;
        this.unsubscribePlayer();
        setTimeout(function () {
            _this.relAudios[_this.audioService.indexAudio].iconplay = 'play';
            _this.audioService.indexAudio++;
            if (_this.audioService.indexAudio == (_this.relAudios.length - 1)) {
                _this.audioService.indexAudio = 0;
            }
            _this.relAudios[_this.audioService.indexAudio].iconplay = 'pause';
            _this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + _this.relAudios[_this.audioService.indexAudio].arquivo_audio;
            _this.audioService.audioPlayer.nativeElement.src = _this.audioService.audio;
            _this.audioPlay();
        }, 200);
    };
    MinhaListaAudioOntoartePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-audio-ontoarte',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista-audio-ontoarte\minha-lista-audio-ontoarte.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <h2 class="meu-progeto-titulo">Minha Lista</h2>   \n\n      <div class="editar" (click)="AbrirEditarOntoarte()">\n\n        Editar\n\n      </div>\n\n      <div class="editar-img" (click)="AbrirEditarOntoarte()">\n\n        <img src="assets/imgs/ico-mais.png">    \n\n      </div>    \n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n\n\n  <ion-card class="card-eventos">    \n\n      <p class="btn-novo" (click)="abrirMinhaListaAlbuns()">\n\n        Álbuns\n\n      </p>\n\n      <p class="btn-novo action_evento" (click)="abrirMinhaListaAlbuns()">\n\n        Áudios\n\n      </p>      \n\n    </ion-card>\n\n    <ion-card *ngFor="let item of relAudios; let i = index" class="AudiosList">\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <img src="http://www.redeplaneje.com.br/app/arquivos/r/albuns/3eb2bc172952e01948012cbf3df66ed5/capa_29_04_18___03_49_07_400.jpg"\n\n            width="100%">\n\n        </ion-col>\n\n        <ion-col col-10 style="border: 0px; border-bottom: 1px solid #ebebeb;">\n\n          <ion-list class="listItem">\n\n            <ion-item class="listItem">\n\n              <ion-icon (click)="startAudio(item, i)" name="{{item.iconplay}}" item-start></ion-icon>\n\n              <h2 class="tituloFaixa" (click)="startAudio(item, i)">{{item.audio}}\n\n                <Br>\n\n                <span class="subtituloFaixa" (click)="startAudio(item, i)">{{item.artista}}</span>\n\n              </h2>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>        \n\n      </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista-audio-ontoarte\minha-lista-audio-ontoarte.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_audio_service_audio_service__["a" /* AudioServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_audio_service_audio_service__["a" /* AudioServiceProvider */]) === "function" && _g || Object])
    ], MinhaListaAudioOntoartePage);
    return MinhaListaAudioOntoartePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=minha-lista-audio-ontoarte.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaAulasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_minha_aulas_editar_minha_aulas__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MinhaListaAulasPage = /** @class */ (function () {
    function MinhaListaAulasPage(loadingCtrl, modalCtrl, Storage, navCtrl, navParams, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.item = [];
        this.MinhaListaItens = [];
        this.ListaItens = [];
        this.getDados();
    }
    MinhaListaAulasPage.prototype.getDados = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaAulas").then(function (data) {
                _this.MinhaListaItens = data;
                console.log(_this.MinhaListaItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.MinhaListaItens.forEach(function (item, index) {
                        _this.ListaItens = item;
                    });
                }
                /*
                if(this.LivrosItens.length > 0){
                  this.LivrosItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
    };
    MinhaListaAulasPage.prototype.abriMinhaLista = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__videos_videos__["a" /* VideosPage */], { item: item });
    };
    MinhaListaAulasPage.prototype.AbrirEditarAulas = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__editar_minha_aulas_editar_minha_aulas__["a" /* EditarMinhaAulasPage */]).present();
    };
    MinhaListaAulasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-aulas',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista-aulas\minha-lista-aulas.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <h2 class="meu-progeto-titulo">Minha Lista</h2>   \n\n      <div class="editar" (click)="AbrirEditarAulas()">\n\n        Editar\n\n      </div>\n\n      <div class="editar-img" (click)="AbrirEditarAulas()">\n\n        <img src="assets/imgs/ico-mais.png">\n\n      </div>    \n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n\n\n  <ion-card class="novidades-card">\n\n    <ion-row padding>\n\n      <ion-col col-12>\n\n        <h2 class="video-card-categoria">\n\n          Aulas\n\n        </h2>   \n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div *ngFor= "let item of MinhaListaItens" (click)="abriMinhaLista(item)" style="max-width: 47%; margin-top: 20px; margin-right: 1%; margin-left: 1%; float:left;">\n\n          <ng-container *ngIf="item.idvideo != 0">\n\n            <img src="http://www.redeplaneje.com.br/app/arquivos/r/videos/{{ item.Pasta }}/{{ item.Img }}_400.jpg" >\n\n            <h2 class="titulo">{{ item.Titulo }}</h2>\n\n          </ng-container>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista-aulas\minha-lista-aulas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MinhaListaAulasPage);
    return MinhaListaAulasPage;
}());

//# sourceMappingURL=minha-lista-aulas.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/minha-lista-audios/minha-lista-audios.module": [
		758,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerlivroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dicionario_modal_dicionario_modal__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var VerlivroPage = /** @class */ (function () {
    function VerlivroPage(navCtrl, sanitizer, loadingCtrl, navParams, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.item = [];
        this.urlVideo = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.item = this.navParams.get('item');
        this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url=' + this.api + '/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Arquivo']);
    }
    VerlivroPage.prototype.abrirModalDicio = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__dicionario_modal_dicionario_modal__["a" /* DicionarioModalPage */]).present();
    };
    VerlivroPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    VerlivroPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_titulos__["a" /* TitulosPage */]);
    };
    VerlivroPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    VerlivroPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    VerlivroPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    VerlivroPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    VerlivroPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    VerlivroPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__eventos_eventos__["a" /* EventosPage */]);
    };
    VerlivroPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__busca_busca__["a" /* BuscaPage */]);
    };
    VerlivroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verlivro',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\verlivro\verlivro.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n    <div class="box-icone-dicionario" (click)="abrirModalDicio()">\n\n      <img src="assets/imgs/ico-dicionario.jpg">\n\n      <p>Dicionário</p>\n\n    </div>\n\n    <iframe *ngIf="pdfLink" [src]="pdfLink" width="100%" height="100%" frameborder="0" ></iframe>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\verlivro\verlivro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], VerlivroPage);
    return VerlivroPage;
}());

//# sourceMappingURL=verlivro.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicionarioModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dicionario_ver_dicionario_ver__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DicionarioModalPage = /** @class */ (function () {
    function DicionarioModalPage(navCtrl, navParams, viewCtrl, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.declareTechnologies();
    }
    DicionarioModalPage.prototype.ionViewDidLoad = function () {
    };
    DicionarioModalPage.prototype.declareTechnologies = function () {
        var _this = this;
        //retorno de Dados
        this.service.getDicionario()
            .subscribe(function (data) { return _this.technologies = data.rows; }, function (err) { return console.log(err); });
        //const browser = this.iab.create('https://ionicframework.com/');
    };
    DicionarioModalPage.prototype.selecionado = function (item) {
        var loader = this.loadingCtrl.create({
            content: "Carregando",
            duration: 1000
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__dicionario_ver_dicionario_ver__["a" /* DicionarioVerPage */], {
            item: item
        });
    };
    DicionarioModalPage.prototype.filterTechnologies = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.technologies = this.technologies.filter(function (item) {
                return item.palavra.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            var val_1 = '0';
            this.declareTechnologies();
        }
    };
    DicionarioModalPage.prototype.onFilter = function (category) {
        this.declareTechnologies();
        // Only filter the technologies array IF the selection is NOT equal to value of all
        if (category.trim() !== 'all') {
            this.technologies = this.technologies.filter(function (item) {
                return item.tipo.toLowerCase().indexOf(category.toLowerCase()) > -1;
            });
        }
    };
    DicionarioModalPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    DicionarioModalPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_titulos__["a" /* TitulosPage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    DicionarioModalPage.prototype.abrirPaginaBuscaGeral = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    DicionarioModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dicionario-modal',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\dicionario-modal\dicionario-modal.html"*/'\n\n  <ion-content>\n\n\n\n        <ion-card class="card-back">\n\n                <img src="assets/imgs/background-dicio.jpg" />  \n\n                <div class="titulo-card-back">Dicionário</div>\n\n            </ion-card>\n\n\n\n      <button ion-button block (click)="fecharModal()" class="botao-retorna">Retornar à leitura</button>\n\n      \n\n      <ion-searchbar class="busca-input" placeholder="Digite a palavra..." (ionInput)="filterTechnologies($event.target.value)"></ion-searchbar>\n\n  \n\n      <ion-card *ngFor="let technology of technologies" (click)= "selecionado(technology)" class="novidades-card">\n\n          <ion-card-content>\n\n              <h2 class="video-card-titulo">\n\n                  {{ technology.palavra }}\n\n              </h2>\n\n          </ion-card-content>\n\n      </ion-card>\n\n        \n\n    </ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\dicionario-modal\dicionario-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DicionarioModalPage);
    return DicionarioModalPage;
}());

//# sourceMappingURL=dicionario-modal.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerPlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var VerPlPage = /** @class */ (function () {
    function VerPlPage(navCtrl, sanitizer, loadingCtrl, navParams, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.item = [];
        this.urlVideo = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.item = this.navParams.get('item');
        this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url=' + this.api + '/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Arquivo']);
    }
    VerPlPage.prototype.ionViewDidLoad = function () {
    };
    VerPlPage.prototype.selecionaLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__loja_modal_loja_modal__["a" /* LojaModalPage */], {
            item: item
        });
    };
    VerPlPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    VerPlPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_titulos__["a" /* TitulosPage */]);
    };
    VerPlPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    VerPlPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    VerPlPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    VerPlPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    VerPlPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    VerPlPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__eventos_eventos__["a" /* EventosPage */]);
    };
    VerPlPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__busca_busca__["a" /* BuscaPage */]);
    };
    VerPlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-pl',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\ver-pl\ver-pl.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n    <div class="box-icone-dicionario" (click)= "selecionaLoja(item)">\n\n      <img src="assets/imgs/ico-carrinho-off.jpg">\n\n    </div>\n\n    <iframe *ngIf="pdfLink" [src]="pdfLink" width="100%" height="100%" frameborder="0" ></iframe>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\ver-pl\ver-pl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], VerPlPage);
    return VerPlPage;
}());

//# sourceMappingURL=ver-pl.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosAntigosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventos_antigos_ver_eventos_antigos_ver__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var EventosAntigosPage = /** @class */ (function () {
    function EventosAntigosPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.data = {};
        this.pet = '';
        this.relEventos = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.relnovidades = '';
        this.pet = "proximos";
        this.getDados();
    }
    EventosAntigosPage_1 = EventosAntigosPage;
    EventosAntigosPage.prototype.getDados = function () {
        var _this = this;
        this.service.getEventosAntigos()
            .subscribe(function (data) { return _this.relEventos = data.rows; }, function (err) { return console.log(err); });
    };
    EventosAntigosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.Storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.Storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.Storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.Storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    EventosAntigosPage.prototype.selecionarEventoAntigo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__eventos_antigos_ver_eventos_antigos_ver__["a" /* EventosAntigosVerPage */], { item: item });
    };
    EventosAntigosPage.prototype.abrirPaginaProximo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__eventos_eventos__["a" /* EventosPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaAnterior = function () {
        this.navCtrl.setRoot(EventosAntigosPage_1);
    };
    EventosAntigosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__eventos_eventos__["a" /* EventosPage */]);
    };
    EventosAntigosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__busca_busca__["a" /* BuscaPage */]);
    };
    EventosAntigosPage = EventosAntigosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos-antigos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\eventos-antigos\eventos-antigos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card class="card-eventos">\n\n    <p class="btn-novo action_evento" (click)="abrirPaginaAnterior()">\n\n      ANTERIORES\n\n    </p>          \n\n    <p class="btn-novo" (click)="abrirPaginaProximo()">\n\n      PRÓXIMOS\n\n    </p>\n\n  </ion-card>\n\n  <ion-card *ngFor="let item of relEventos" class="novidades-card">\n\n    <ion-card-content (click)="selecionarEventoAntigo(item)">\n\n      <h2 class="video-card-titulo">{{ item.Titulo }}</h2>\n\n      <p class="video-card-desc">{{ item.Data }}</p>\n\n    </ion-card-content>\n\n    <ion-card-content class="box-novidades" (click)="selecionarEventoAntigo(item)">\n\n      <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>     \n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\eventos-antigos\eventos-antigos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventosAntigosPage);
    return EventosAntigosPage;
    var EventosAntigosPage_1;
}());

//# sourceMappingURL=eventos-antigos.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosAntigosVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventos_foto_ver_eventos_foto_ver__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var EventosAntigosVerPage = /** @class */ (function () {
    function EventosAntigosVerPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.relEventos = '';
        this.relEventosFotos = '';
        this.item = [];
        this.data = {};
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.relEventos;
        this.getDados();
        this.getDadosFotos();
    }
    EventosAntigosVerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    EventosAntigosVerPage.prototype.getDados = function () {
        this.service.getEventosAntigos();
        this.item = this.navParams.get('item');
    };
    EventosAntigosVerPage.prototype.getDadosFotos = function () {
        var _this = this;
        //retorno de Dados
        this.service.getEventosFotos()
            .subscribe(function (data) { return _this.relEventosFotos = data.rows; }, function (err) { return console.log(err); });
    };
    EventosAntigosVerPage.prototype.AbrirFoto = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__eventos_foto_ver_eventos_foto_ver__["a" /* EventosFotoVerPage */], { item: item });
    };
    EventosAntigosVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__eventos_eventos__["a" /* EventosPage */]);
    };
    EventosAntigosVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], EventosAntigosVerPage.prototype, "productSlides", void 0);
    EventosAntigosVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos-antigos-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\eventos-antigos-ver\eventos-antigos-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-card class="novidades-card">\n\n    <ion-card-content class="box-novidades">\n\n      <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n    </ion-card-content>\n\n    <ion-card-content nopadding nomargin>\n\n      <h2 class="eventoTitulo">{{ item.Titulo }}</h2> \n\n      <p class="eventoTexto" [innerHTML]="item.Descricao"></p>  \n\n\n\n        <ion-row nopadding nomargin>\n\n            <ion-card-title class="slide-card-chamadas">\n\n              <h2 class="slide-card-titulo-chamadas">Galeria de Fotos</h2>\n\n            </ion-card-title>    \n\n            <ion-col col-12 nopadding nomargin>\n\n\n\n                <ion-slides loop="false" slidesPerView="3" speed="1000" pager="false" #productSlides>\n\n                    <ng-container *ngFor= "let itemFotos of relEventosFotos">\n\n                        <ion-slide *ngIf="itemFotos.idevento == item.idevento" class="slide-card-li">\n\n                            <img (click)= "AbrirFoto(itemFotos)" src="{{ api }}/{{ itemFotos.Caminho }}/{{ itemFotos.Pasta }}/{{ itemFotos.Img }}_400.jpg"/>\n\n                        </ion-slide>\n\n                    </ng-container>\n\n                </ion-slides>  \n\n\n\n            </ion-col>\n\n        </ion-row> \n\n    </ion-card-content>   \n\n  </ion-card>\n\n</ion-content>     '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\eventos-antigos-ver\eventos-antigos-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventosAntigosVerPage);
    return EventosAntigosVerPage;
}());

//# sourceMappingURL=eventos-antigos-ver.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosFotoVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var EventosFotoVerPage = /** @class */ (function () {
    function EventosFotoVerPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.item = [];
        this.data = {};
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
    }
    EventosFotoVerPage.prototype.ionViewDidLoad = function () {
    };
    EventosFotoVerPage.prototype.getDados = function () {
        this.service.getEventosFotos();
        this.item = this.navParams.get('item');
    };
    EventosFotoVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__eventos_eventos__["a" /* EventosPage */]);
    };
    EventosFotoVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__busca_busca__["a" /* BuscaPage */]);
    };
    EventosFotoVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos-foto-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\eventos-foto-ver\eventos-foto-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card class="novidades-card">\n\n      <ion-card-content class="box-novidades">\n\n        <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n      </ion-card-content>\n\n      <ion-card-content nopadding nomargin>\n\n        <h2 class="eventoTitulo">{{ item.Titulo }}</h2> \n\n      </ion-card-content>   \n\n    </ion-card>\n\n  </ion-content> '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\eventos-foto-ver\eventos-foto-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventosFotoVerPage);
    return EventosFotoVerPage;
}());

//# sourceMappingURL=eventos-foto-ver.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventos_form_eventos_form__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__evento_info_ver_evento_info_ver__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var EventosVerPage = /** @class */ (function () {
    function EventosVerPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.relEventos = '';
        this.item = [];
        this.data = {};
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.relEventos;
        this.getDados();
    }
    EventosVerPage.prototype.ionViewDidLoad = function () {
    };
    EventosVerPage.prototype.getDados = function () {
        this.service.getEventos();
        this.item = this.navParams.get('item');
    };
    EventosVerPage.prototype.selecionaInfo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__evento_info_ver_evento_info_ver__["a" /* EventoInfoVerPage */], { item: item });
    };
    EventosVerPage.prototype.selecionaForm = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__eventos_form_eventos_form__["a" /* EventosFormPage */], { item: item });
    };
    EventosVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    EventosVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventosVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventosVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventosVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventosVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventosVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventosVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__eventos_eventos__["a" /* EventosPage */]);
    };
    EventosVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__busca_busca__["a" /* BuscaPage */]);
    };
    EventosVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventos-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\eventos-ver\eventos-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-card class="novidades-card">\n\n    <ion-card-content class="box-novidades">\n\n      <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" />\n\n    </ion-card-content>\n\n    <ion-card-content nopadding nomargin>\n\n      <h2 class="eventoTitulo">{{ item.Titulo }}</h2> \n\n      <p class="eventoTexto">{{ item.Subtitulo }}</p>  \n\n      <div style="width: 100%; height: 60px; margin: 20px 0px 0px 0px; padding:0px;">\n\n        <img src="assets/imgs/eventos-seta.jpg" class="eventos-seta-img">\n\n      </div> \n\n    </ion-card-content> \n\n    <ion-row nopadding nomargin style="margin: -30px 0px 20px 0px;">\n\n      <ion-col col-12>\n\n        <ion-row nopadding nomargin style="width: 100%;">\n\n          <div style="margin: 0 auto;">\n\n              <img src="assets/imgs/eventos-ico-calendar.jpg" class="eventos-icones">\n\n              <p class="eventos-texto-menor">{{ item.Data2 }}</p>\n\n          </div>\n\n        </ion-row>\n\n        <ion-row nopadding nomargin style="width: 100%;">\n\n          <div style="margin: 0 auto;">\n\n              <img src="assets/imgs/eventos-ico-map.jpg" class="eventos-icones">\n\n              <p class="eventos-texto-menor">{{ item.Endereco }}</p>\n\n          </div>\n\n          <br>\n\n          <div style="margin: 0 auto;">\n\n              <p class="eventos-texto-menor">{{ item.Bairro }}</p>\n\n          </div> \n\n          <br>     \n\n          <div style="margin: 0 auto;">\n\n              <p class="eventos-texto-menor">{{ item.Cidade }}</p>\n\n          </div>          \n\n        </ion-row>\n\n        <ion-row nopadding nomargin style="width: 100%;">\n\n          <div style="margin: 0 auto; padding:0px;">\n\n              <img src="assets/imgs/eventos-ico-money.jpg" class="eventos-icones">\n\n              <p class="eventos-texto-menor">{{ item.Valor }}</p>\n\n          </div>\n\n        </ion-row>        \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row nopadding nomargin style="margin: -30px 0px 20px 0px;">\n\n      <ion-col col-6 nopadding nomargin >\n\n        <button ion-button round outline (click)="selecionaInfo(item)" class="btn-inscreva-se">INFORMAÇÕES</button>\n\n      </ion-col>\n\n      <ion-col col-6 nopadding nomargin >\n\n        <button ion-button round outline (click)="selecionaForm(item)" class="btn-inscreva-se">INSCREVA-SE</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n  </ion-card>\n\n</ion-content>     '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\eventos-ver\eventos-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventosVerPage);
    return EventosVerPage;
}());

//# sourceMappingURL=eventos-ver.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoInfoVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventos_form_eventos_form__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var EventoInfoVerPage = /** @class */ (function () {
    function EventoInfoVerPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.relEventos = '';
        this.item = [];
        this.data = {};
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.relEventos;
        this.getDados();
    }
    EventoInfoVerPage_1 = EventoInfoVerPage;
    EventoInfoVerPage.prototype.ionViewDidLoad = function () {
    };
    EventoInfoVerPage.prototype.getDados = function () {
        this.service.getEventos();
        this.item = this.navParams.get('item');
    };
    EventoInfoVerPage.prototype.selecionaInfo = function (item) {
        this.navCtrl.push(EventoInfoVerPage_1, { item: item });
    };
    EventoInfoVerPage.prototype.selecionaForm = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__eventos_form_eventos_form__["a" /* EventosFormPage */], { item: item });
    };
    EventoInfoVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_titulos__["a" /* TitulosPage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__eventos_eventos__["a" /* EventosPage */]);
    };
    EventoInfoVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__busca_busca__["a" /* BuscaPage */]);
    };
    EventoInfoVerPage = EventoInfoVerPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evento-info-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\evento-info-ver\evento-info-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card class="novidades-card">\n\n    <ion-card-content nopadding nomargin>\n\n      <h2 class="eventoTitulo">{{ item.Titulo }}</h2> \n\n      <p class="eventoTexto" [innerHTML]="item.Descricao"></p>  \n\n    </ion-card-content> \n\n    <ion-row nopadding nomargin style="margin: -10px 0px 20px 0px;">\n\n      <ion-col col-12>\n\n        <ion-row nopadding nomargin style="width: 100%;">\n\n          <ion-col col-12>\n\n            <img src="assets/imgs/eventos-ico-calendar.jpg" class="eventos-icones">\n\n            <p class="eventos-texto-menor">{{ item.Data2 }}</p>\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="!!item.Endereco">   \n\n            <img src="assets/imgs/eventos-ico-map.jpg" class="eventos-icones">\n\n            <p class="eventos-texto-menor">{{ item.Endereco }}</p>\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="!!item.Bairro">         \n\n            <img src="assets/imgs/eventos-ico-map.jpg" class="eventos-icones">\n\n            <p class="eventos-texto-menor">Bairro {{ item.Bairro }}</p>\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="!!item.Cidade">       \n\n            <img src="assets/imgs/eventos-ico-map.jpg" class="eventos-icones">                \n\n            <p class="eventos-texto-menor">{{ item.Cidade }}</p>\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="!!item.Pais">      \n\n            <img src="assets/imgs/eventos-ico-map.jpg" class="eventos-icones">            \n\n            <p class="eventos-texto-menor">{{ item.Pais }}</p>\n\n          </ion-col>\n\n          <ion-col col-12 *ngIf="!!item.Cep">        \n\n            <img src="assets/imgs/eventos-ico-map.jpg" class="eventos-icones">            \n\n            <p class="eventos-texto-menor">CEP {{ item.Cep }}</p>\n\n          </ion-col>              \n\n          <ion-col col-12 *ngIf="!!item.Valor">   \n\n            <img src="assets/imgs/eventos-ico-money.jpg" class="eventos-icones">\n\n            <p class="eventos-texto-menor">{{ item.Valor }}</p>\n\n          </ion-col>\n\n        </ion-row>        \n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n  </ion-card>\n\n</ion-content>     \n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\evento-info-ver\evento-info-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EventoInfoVerPage);
    return EventoInfoVerPage;
    var EventoInfoVerPage_1;
}());

//# sourceMappingURL=evento-info-ver.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loja_souvenirs_loja_souvenirs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loja_revista_loja_revista__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loja_loja__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loja_modal_loja_modal__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LojaVerPage = /** @class */ (function () {
    function LojaVerPage(navCtrl, service, loadingCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    LojaVerPage.prototype.abrirModalLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__loja_modal_loja_modal__["a" /* LojaModalPage */], { item: item });
    };
    LojaVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LojaVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__busca_busca__["a" /* BuscaPage */]);
    };
    LojaVerPage.prototype.abrirLojaLivro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__loja_loja__["a" /* LojaPage */]);
    };
    LojaVerPage.prototype.abrirLojaRevista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__loja_revista_loja_revista__["a" /* LojaRevistaPage */]);
    };
    LojaVerPage.prototype.abrirLojaSouvenirs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */]);
    };
    LojaVerPage.prototype.abrirCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    LojaVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-loja-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja-ver\loja-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <div class="header_busca" (click)="abrirPaginaBusca()">\n\n          <img src="assets/imgs/ico-busca.png">     \n\n        </div>\n\n        <div class="header_logo" (click)="abrirPaginaHome()">\n\n          <img src="assets/imgs/logo-small-menu.png">\n\n        </div>\n\n        <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n          <img src="assets/imgs/ico-ao-vivo.png">\n\n        </div>\n\n        <div class="header_users" (click)="abrirPaginaEventos()">\n\n          <img src="assets/imgs/ico-users.png">\n\n        </div>    \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <ion-card class="card-back">\n\n          <img src="assets/imgs/background-header-livros.jpg" />  \n\n          <div class="titulo-card-back">\n\n            Ontopsicológica\n\n          </div>\n\n          <div class="subtitulo-card-back">Editoria Universitária</div>\n\n      </ion-card>\n\n      <ion-card class="card-back">\n\n      <ion-slides>\n\n        <ion-slide>\n\n          <img src="https://ionicframework.com/docs/demos/src/slides/www/assets/slide1.jpeg">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="https://ionicframework.com/docs/demos/src/slides/www/assets/slide2.jpeg">\n\n        </ion-slide>\n\n        <ion-slide>\n\n          <img src="https://ionicframework.com/docs/demos/src/slides/www/assets/slide3.jpeg">\n\n        </ion-slide>\n\n      </ion-slides>\n\n  </ion-card>\n\n    </ion-content>\n\n    \n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-inicio.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Início\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-livros-s.png" (click)="abrirLojaLivro()">   \n\n        <p class="menu_footer_texto texto_selecionado" (click)="abrirLojaLivro()">\n\n          Físicos\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-revista.png" (click)="abrirLojaRevista()">     \n\n        <p class="menu_footer_texto" (click)="abrirLojaRevista()">\n\n          Digitais\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-souvenirs.png" (click)="abrirLojaSouvenirs()">  \n\n        <p class="menu_footer_texto" (click)="abrirLojaSouvenirs()">\n\n          Souvenirs\n\n        </p>          \n\n    </div>      \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja-ver\loja-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
    ], LojaVerPage);
    return LojaVerPage;
}());

//# sourceMappingURL=loja-ver.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ComentariosPage = /** @class */ (function () {
    function ComentariosPage(storage, http, toastCtrl, navCtrl, service, loadingCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.data = {};
        this.idqualSel = [];
        this.moduloSel = [];
        this.relComentarios = '';
        this.IdUserQual = {};
        this.storage.get('QualUser').then(function (val) {
            _this.IdUserQual = val;
        });
        this.getDados();
        this.idqualSel = this.navParams.get('idqualSel');
        this.moduloSel = this.navParams.get('moduloSel');
        console.log(this.moduloSel);
    }
    ComentariosPage.prototype.EnviaComentario = function (dados) {
        var _this = this;
        var link = 'http://app.progettoapp.com.br/midias/comentarios_insert.php';
        var myData = JSON.stringify({
            comentario: this.data.Comentario,
            iduser: this.data.iduserComentario,
            idqual: this.data.idqualComentario,
            modulo: this.data.moduloComentario
        });
        this.http.post(link, myData)
            .subscribe(function (data) {
            var dadosLogin = JSON.parse(data["_body"]);
            if (dadosLogin.rows[0].comentarioSituacao === '1') {
                _this.toastCtrl.create({
                    message: "Comentário enviado com sucesso! Aguarde pela aprovação da nossa equipe.",
                    duration: 2000,
                    position: 'middle',
                }).present();
            }
            else {
                _this.toastCtrl.create({
                    message: "Erro! Campo comentário não por estar vazio.",
                    duration: 2000,
                    position: 'middle',
                }).present();
            }
        }, function (error) {
            //this.showError(error);
        });
        this.data.Comentario = '';
    };
    ComentariosPage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getComentarios()
            .subscribe(function (data) { return _this.relComentarios = data.rows; }, function (err) { return console.log(err); });
    };
    ComentariosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    ComentariosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    ComentariosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__eventos_eventos__["a" /* EventosPage */]);
    };
    ComentariosPage.prototype.abrirPaginaBuscaGeral = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__busca_busca__["a" /* BuscaPage */]);
    };
    ComentariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comentarios',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\comentarios\comentarios.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card *ngFor= "let itemComentario of relComentarios" class="novidades-card">\n\n    <ion-card-content *ngIf="itemComentario.Idqual == idqualSel && itemComentario.Modulo == moduloSel" class="novidades-card-borda">\n\n      <ion-item>\n\n        <ion-avatar item-start> \n\n          <img src="{{ itemComentario.FotoUser }}">\n\n        </ion-avatar>\n\n        <h2 class="video-card-titulo">{{ itemComentario.NomeUser }}</h2>\n\n        <p>{{ itemComentario.DataFinal }} </p>\n\n      </ion-item>         \n\n      <p>{{ itemComentario.Comentario }} </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-row>\n\n    <div style="width:90%; float: left">\n\n      <ion-input type="text" placeholder="Digite seu comentário..." name="Comentario" [(ngModel)]="data.Comentario" required class="input-btn" ></ion-input>\n\n      <ion-input type="hidden" value="{{IdUserQual}}" [(ngModel)]="data.iduserComentario" name="iduserComentario" ></ion-input>\n\n      <ion-input type="hidden" value="{{idqualSel}}" [(ngModel)]="data.idqualComentario" name="idqualComentario" ></ion-input>\n\n      <ion-input type="hidden" value="{{moduloSel}}" [(ngModel)]="data.moduloComentario" name="moduloComentario" ></ion-input>\n\n    </div>\n\n    <div style="width:10%; float: left">\n\n      <button ion-button (click)="EnviaComentario()" class="btn-envia"> > </button>\n\n    </div>\n\n  </ion-row>    \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\comentarios\comentarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ComentariosPage);
    return ComentariosPage;
}());

//# sourceMappingURL=comentarios.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqueceuSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EsqueceuSenhaPage = /** @class */ (function () {
    function EsqueceuSenhaPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.data = {};
    }
    EsqueceuSenhaPage.prototype.solicitar = function (dados) {
        var _this = this;
        // this.showLoading()
        var link = 'http://app.progettoapp.com.br/midias/esqueci_senha.php';
        var myData = JSON.stringify({
            email: this.data.email, emailConfirma: this.data.emailConfirma
        });
        this.http.post(link, myData)
            .subscribe(function (data) {
            var dadosLogin = JSON.parse(data["_body"]);
            console.log(dadosLogin);
            if (dadosLogin.rows[0].DeuCertoEsqueceuSenha == '1') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Sucesso!',
                    subTitle: "Foi enviado um e-mail com sua nova senha.",
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else if (dadosLogin.rows[0].DeuCertoEsqueceuSenha == '2') {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "E-mail não são iguais!",
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else if (dadosLogin.rows[0].DeuCertoEsqueceuSenha == '4') {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "E-mail digitado é inválido!",
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Erro!',
                    subTitle: "E-mail inválido ou não existente em nosso banco de dados.",
                    buttons: ['OK']
                });
                alert_4.present();
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    EsqueceuSenhaPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    EsqueceuSenhaPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Acesso Negado',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    EsqueceuSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-esqueceu-senha',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\esqueceu-senha\esqueceu-senha.html"*/'\n\n<ion-content class="login-content">\n\n  <div class="login-card">\n\n    <ion-navbar>\n\n      <button ion-button menuToggle start>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-navbar>    \n\n    <div class="login-logo">\n\n        <img src="assets/imgs/slide-intro/logo-intro.png">\n\n    </div>    \n\n    <div class="titulo">\n\n      Redefinição de Senha\n\n    </div>\n\n    <div class="login-inputs">\n\n      <ion-input class="input-btn" type="email" placeholder="E-mail" name="Email" [(ngModel)]="data.email" required ></ion-input>\n\n      <ion-input class="input-btn" type="email" placeholder="Confirmação de e-mail" name="EmailConfirma" [(ngModel)]="data.emailConfirma" required ></ion-input>\n\n    </div> \n\n  </div>\n\n  <div class="login-btn-entrar">\n\n    <button ion-button (click)="solicitar()" class="login-btn-entrar-button">Confirmar</button>    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\esqueceu-senha\esqueceu-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], EsqueceuSenhaPage);
    return EsqueceuSenhaPage;
}());

//# sourceMappingURL=esqueceu-senha.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanosPage = /** @class */ (function () {
    function PlanosPage(loadingCtrl, http, modalCtrl, navCtrl, navParams, storage, viewCtrl, alertCtrl, service, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.getPlanos2();
    }
    PlanosPage.prototype.getPlanos2 = function () {
        var _this = this;
        //retorno de Dados
        this.service.getPlanos()
            .subscribe(function (data) { return _this.relPlanos = data.rows; }, function (err) { return console.log(err); });
    };
    PlanosPage.prototype.selecionarPlano = function (idplano, nomeplano, valorplano) {
        this.storage.set("QualNivel", idplano).then(function () { });
        this.storage.set("QualNivelNome", nomeplano).then(function () { });
        this.storage.set("QualNivelValor", valorplano).then(function () { });
        this.toastCtrl.create({
            message: "Plano selecionado!",
            duration: 3000,
            position: 'middle',
        }).present();
        //this.navCtrl.push(CadastroUsuarioPage);
    };
    PlanosPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    PlanosPage.prototype.ionViewDidLoad = function () {
    };
    PlanosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-planos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\planos\planos.html"*/'<ion-content class="login-content">\n\n  <div class="login-card">\n\n    <ion-navbar>\n\n      <button ion-button block (click)="fecharModal()" class="bt-fecha-modal">X</button>\n\n      <div class="titulo">\n\n        Escolher Plano\n\n      </div>        \n\n    </ion-navbar>     \n\n    <div class="fundo">\n\n\n\n      <div class="caixa" *ngFor="let plano of relPlanos;" (click)="selecionarPlano(plano.idplano, plano.Titulo, plano.Valor)">\n\n        <h1 class="titulo-plano">{{plano.Titulo}}</h1>\n\n        <p class="subtitulo-plano">{{plano.Subtitulo}}</p>\n\n        <p class="preco-plano">{{plano.ValorEscrito}}</p>\n\n      </div>\n\n                \n\n    </div>\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\planos\planos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PlanosPage);
    return PlanosPage;
}());

//# sourceMappingURL=planos.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentoEntregaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagamentoEntregaPage = /** @class */ (function () {
    function PagamentoEntregaPage(modalCtrl, viewCtrl, formBuilder, loadingCtrl, navCtrl, navParams, storage, alertCtrl, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        // Validation error messages that will be displayed for each form field with errors.
        this.validation_messages = {
            'myField': [
                { type: 'pattern', message: 'Please enter a number like 12345678/00.' }
            ],
            'myField2': [
                { type: 'pattern', message: 'bbb' }
            ]
        };
        this.form = this.formBuilder.group({
            myField: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{8}/[0-9]{2}')],
        });
        // Initial value for the field
        //this.form.get('myField').setValue('11223344/55');
        // /this.form.get('myField2').setValue('aaa');
    }
    PagamentoEntregaPage.prototype.enviarEndereco = function () {
        this.storage.set("QualUserEndereco", this.data.endereco).then(function () { });
        this.storage.set("QualUserNumero", this.data.numero).then(function () { });
        this.storage.set("QualUserBairro", this.data.bairro).then(function () { });
        this.storage.set("QualUserComplemento", this.data.complemento).then(function () { });
        this.storage.set("QualUserCidade", this.data.cidade).then(function () { });
        this.storage.set("QualUserEstado", this.data.estado).then(function () { });
        this.storage.set("QualUserPais", this.data.pais).then(function () { });
        this.storage.set("QualUserCep", this.data.cep).then(function () { });
        this.toastCtrl.create({
            message: "Endereço enviado com sucesso!",
            duration: 3000,
            position: 'middle',
        }).present();
        //this.navCtrl.push(CadastroUsuarioPage);
    };
    PagamentoEntregaPage.prototype.save = function () {
        if (this.form.valid) {
            // Save your values, using this.form.get('myField').value;
        }
    };
    PagamentoEntregaPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    PagamentoEntregaPage.prototype.ionViewDidLoad = function () {
    };
    PagamentoEntregaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagamento-entrega',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\pagamento-entrega\pagamento-entrega.html"*/'<ion-content class="login-content">\n\n  <div class="login-card">\n\n    <ion-navbar>\n\n      <button ion-button block (click)="fecharModal()" class="bt-fecha-modal">X</button>\n\n      <div class="titulo">\n\n        Dados de Entrega\n\n      </div>        \n\n    </ion-navbar>     \n\n    <div class="fundo">\n\n      <div class="caixa">\n\n        <p class="titulo-entrega">Endereço de Entrega</p>        \n\n        <div class="login-inputs">\n\n        <form novalidate [formGroup]="form">            \n\n          <ion-input [(ngModel)]="data.endereco" formControlName="myField" placeholder="Endereço" class="caixa-input" type="text"></ion-input>\n\n          <div>\n\n            <ng-container *ngFor="let validation of validation_messages.myField" >\n\n              <div *ngIf="form.get(\'myField\').hasError(validation.type)">\n\n                <p>{{validation.message}}</p>\n\n              </div>\n\n            </ng-container>\n\n          </div>              \n\n            <ion-input class="caixa-input" [(ngModel)]="data.numero" type="text" placeholder="Número" name="numero" required ></ion-input>\n\n          <ion-input class="caixa-input" [(ngModel)]="data.bairro" type="text" placeholder="Bairro" name="bairro" required ></ion-input>\n\n          <ion-input class="caixa-input" [(ngModel)]="data.complemento" type="text" placeholder="Complemento" name="complemento" required ></ion-input>\n\n          <ion-input class="caixa-input" [(ngModel)]="data.cidade" type="text" placeholder="Cidade" name="cidade" required ></ion-input>\n\n          <ion-input class="caixa-input" [(ngModel)]="data.estado" type="text" placeholder="Estado" name="estado" required ></ion-input>\n\n          <ion-input class="caixa-input" [(ngModel)]="data.pais" type="text" placeholder="País" name="pais" required ></ion-input>\n\n          <ion-input class="caixa-input" [(ngModel)]="data.cep" type="text" placeholder="CEP" name="cep" required ></ion-input>\n\n\n\n\n\n\n\n          \n\n        </form>\n\n    \n\n        </div>\n\n        <div class="login-btn-entrar">\n\n          <button ion-button (click)="enviarEndereco()" class="login-btn-entrar-button">Enviar</button>     \n\n        </div>\n\n      </div>   \n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\pagamento-entrega\pagamento-entrega.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PagamentoEntregaPage);
    return PagamentoEntregaPage;
}());

//# sourceMappingURL=pagamento-entrega.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMinhaListaPublicacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minha_lista_publicacoes_minha_lista_publicacoes__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarMinhaListaPublicacoesPage = /** @class */ (function () {
    function EditarMinhaListaPublicacoesPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.minhaLista = [];
    }
    EditarMinhaListaPublicacoesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('MinhaListaLivros').then(function (val) {
            _this.minhaLista = val;
        });
    };
    EditarMinhaListaPublicacoesPage.prototype.apagar_publicacao = function (item) {
        var index = this.minhaLista.findIndex(function (it, i) {
            return it.idlivro === item['idlivro'];
        });
        this.minhaLista.splice(index, 1);
        this.storage.set('MinhaListaLivros', this.minhaLista);
        console.log(this.minhaLista);
    };
    EditarMinhaListaPublicacoesPage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Alerta ...',
            message: 'Deseja realmente remover?',
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        _this.apagar_publicacao(item);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarMinhaListaPublicacoesPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__["a" /* MinhaListaPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__minha_lista_publicacoes_minha_lista_publicacoes__["a" /* MinhaListaPublicacoesPage */]);
    };
    EditarMinhaListaPublicacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-minha-lista-publicacoes',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\editar-minha-lista-publicacoes\editar-minha-lista-publicacoes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <h2 class="meu-progeto-titulo">Minha Lista</h2>        \n\n  </ion-navbar>\n\n  <div class="btn-fechar" (click)="voltar()">X</div>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n  <ion-card class="novidades-card">\n\n    <h2 class="titulo">\n\n      Publicações\n\n    </h2>   \n\n  </ion-card>\n\n  <ion-card class="novidades-card">\n\n    <div class="subtitulo">\n\n      Itens Minha Lista\n\n    </div>  \n\n    <div *ngFor="let item of minhaLista; let i = index;"> \n\n      <div *ngIf="item.idlivro != 0">\n\n        <p class="conteudo">{{item.Titulo}}\n\n        <span class="btn-fechar-lista" (click)="showConfirm(item)">X</span>\n\n      </p>\n\n      </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\editar-minha-lista-publicacoes\editar-minha-lista-publicacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarMinhaListaPublicacoesPage);
    return EditarMinhaListaPublicacoesPage;
}());

//# sourceMappingURL=editar-minha-lista-publicacoes.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMinhaPlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minha_lista_pl_minha_lista_pl__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarMinhaPlPage = /** @class */ (function () {
    function EditarMinhaPlPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.minhaLista = [];
    }
    EditarMinhaPlPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('MinhaListaPl').then(function (val) {
            _this.minhaLista = val;
        });
    };
    EditarMinhaPlPage.prototype.apagar_publicacao = function (item) {
        var index = this.minhaLista.findIndex(function (it, i) {
            return it.idpl === item['idpl'];
        });
        this.minhaLista.splice(index, 1);
        this.storage.set('MinhaListaPl', this.minhaLista);
        console.log(this.minhaLista);
    };
    EditarMinhaPlPage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Alerta ...',
            message: 'Deseja realmente apagar essa Publicação?',
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        _this.apagar_publicacao(item);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarMinhaPlPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__["a" /* MinhaListaPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__minha_lista_pl_minha_lista_pl__["a" /* MinhaListaPlPage */]);
    };
    EditarMinhaPlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-minha-pl',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\editar-minha-pl\editar-minha-pl.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <h2 class="meu-progeto-titulo">Minha Lista</h2>        \n\n  </ion-navbar>\n\n  <div class="btn-fechar" (click)="voltar()">X</div>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n  <ion-card class="novidades-card">\n\n    <h2 class="titulo">\n\n      Líder\n\n    </h2>   \n\n  </ion-card>\n\n  <ion-card class="novidades-card">\n\n    <div class="subtitulo">\n\n      Itens Minha Lista\n\n    </div>  \n\n    <div *ngFor="let item of minhaLista; let i = index;"> \n\n      <div *ngIf="item.idpl != 0">\n\n        <p class="conteudo">{{item.Titulo}}\n\n        <span class="btn-fechar-lista" (click)="showConfirm(item)">X</span>\n\n      </p>\n\n      </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\editar-minha-pl\editar-minha-pl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarMinhaPlPage);
    return EditarMinhaPlPage;
}());

//# sourceMappingURL=editar-minha-pl.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMinhaOntoartePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_lista_ontoarte_minha_lista_ontoarte__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarMinhaOntoartePage = /** @class */ (function () {
    function EditarMinhaOntoartePage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.minhaLista = [];
    }
    EditarMinhaOntoartePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('MinhaListaAlbum').then(function (val) {
            _this.minhaLista = val;
        });
    };
    EditarMinhaOntoartePage.prototype.apagar_publicacao = function (item) {
        var index = this.minhaLista.findIndex(function (it, i) {
            return it.idalbum === item['idalbum'];
        });
        this.minhaLista.splice(index, 1);
        this.storage.set('MinhaListaAlbum', this.minhaLista);
        console.log(this.minhaLista);
    };
    EditarMinhaOntoartePage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Alerta ...',
            message: 'Deseja realmente remover?',
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        _this.apagar_publicacao(item);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarMinhaOntoartePage.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__minha_lista_ontoarte_minha_lista_ontoarte__["a" /* MinhaListaOntoartePage */]);
    };
    EditarMinhaOntoartePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-minha-ontoarte',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\editar-minha-ontoarte\editar-minha-ontoarte.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <h2 class="meu-progeto-titulo">Minha Lista</h2>        \n\n  </ion-navbar>\n\n  <div class="btn-fechar" (click)="voltar()">X</div>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n  <ion-card class="novidades-card">\n\n    <h2 class="titulo">\n\n      Álbuns / Músicas\n\n    </h2>   \n\n  </ion-card>\n\n  <ion-card class="novidades-card">\n\n    <div class="subtitulo">\n\n      Itens Minha Lista\n\n    </div>  \n\n    <div *ngFor="let item of minhaLista; let i = index;"> \n\n      <div *ngIf="item.idalbum != 0">\n\n        <p class="conteudo">{{item.Titulo}}\n\n        <span class="btn-fechar-lista" (click)="showConfirm(item)">X</span>\n\n      </p>\n\n      </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\editar-minha-ontoarte\editar-minha-ontoarte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarMinhaOntoartePage);
    return EditarMinhaOntoartePage;
}());

//# sourceMappingURL=editar-minha-ontoarte.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMinhaAudioOntoartePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarMinhaAudioOntoartePage = /** @class */ (function () {
    function EditarMinhaAudioOntoartePage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.minhaLista = [];
    }
    EditarMinhaAudioOntoartePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('MinhaListaAudios').then(function (val) {
            _this.minhaLista = val;
            console.log('Lista em Session Audios', _this.minhaLista);
        });
    };
    EditarMinhaAudioOntoartePage.prototype.apagar_publicacao = function (item) {
        var index = this.minhaLista.findIndex(function (it, i) {
            return it.idaudio === item['idaudio'];
        });
        this.minhaLista.splice(index, 1);
        this.storage.set('MinhaListaAudios', this.minhaLista);
        console.log(this.minhaLista);
    };
    EditarMinhaAudioOntoartePage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Alerta ...',
            message: 'Deseja realmente remover?',
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        _this.apagar_publicacao(item);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarMinhaAudioOntoartePage.prototype.voltar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__["a" /* MinhaListaAudioOntoartePage */]);
    };
    EditarMinhaAudioOntoartePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-minha-audio-ontoarte',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\editar-minha-audio-ontoarte\editar-minha-audio-ontoarte.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <h2 class="meu-progeto-titulo">Minha Lista</h2>        \n\n  </ion-navbar>\n\n  <div class="btn-fechar" (click)="voltar()">X</div>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n  <ion-card class="novidades-card">\n\n    <h2 class="titulo">\n\n      Álbuns / Músicas\n\n    </h2>   \n\n  </ion-card>\n\n  <ion-card class="novidades-card">\n\n    <div class="subtitulo">\n\n      Itens Minha Lista\n\n    </div>  \n\n    <div *ngFor="let item of minhaLista; let i = index;"> \n\n     \n\n        <p class="conteudo">{{item.artista}} - {{item.audio}}\n\n        <span class="btn-fechar-lista" (click)="showConfirm(item)">X</span>\n\n      </p>\n\n      \n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\editar-minha-audio-ontoarte\editar-minha-audio-ontoarte.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarMinhaAudioOntoartePage);
    return EditarMinhaAudioOntoartePage;
}());

//# sourceMappingURL=editar-minha-audio-ontoarte.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMinhaAulasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minha_lista_aulas_minha_lista_aulas__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarMinhaAulasPage = /** @class */ (function () {
    function EditarMinhaAulasPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.minhaLista = [];
    }
    EditarMinhaAulasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('MinhaListaAulas').then(function (val) {
            _this.minhaLista = val;
        });
    };
    EditarMinhaAulasPage.prototype.apagar_publicacao = function (item) {
        var index = this.minhaLista.findIndex(function (it, i) {
            return it.idvideo === item['idvideo'];
        });
        this.minhaLista.splice(index, 1);
        this.storage.set('MinhaListaAulas', this.minhaLista);
        console.log(this.minhaLista);
    };
    EditarMinhaAulasPage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Alerta ...',
            message: 'Deseja realmente remover?',
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        _this.apagar_publicacao(item);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarMinhaAulasPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__["a" /* MinhaListaPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__minha_lista_aulas_minha_lista_aulas__["a" /* MinhaListaAulasPage */]);
    };
    EditarMinhaAulasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-minha-aulas',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\editar-minha-aulas\editar-minha-aulas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <h2 class="meu-progeto-titulo">Minha Lista</h2>        \n\n  </ion-navbar>\n\n  <div class="btn-fechar" (click)="voltar()">X</div>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n  <ion-card class="novidades-card">\n\n    <h2 class="titulo">\n\n      Aulas\n\n    </h2>   \n\n  </ion-card>\n\n  <ion-card class="novidades-card">\n\n    <div class="subtitulo">\n\n      Itens Minha Lista\n\n    </div>  \n\n    <div *ngFor="let item of minhaLista; let i = index;"> \n\n      <div *ngIf="item.idvideo != 0">\n\n        <p class="conteudo">{{item.Titulo}}\n\n        <span class="btn-fechar-lista" (click)="showConfirm(item)">X</span>\n\n      </p>\n\n      </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\editar-minha-aulas\editar-minha-aulas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarMinhaAulasPage);
    return EditarMinhaAulasPage;
}());

//# sourceMappingURL=editar-minha-aulas.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var NotificacoesPage = /** @class */ (function () {
    function NotificacoesPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.relnovidades = '';
    }
    NotificacoesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    NotificacoesPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    NotificacoesPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_titulos__["a" /* TitulosPage */]);
    };
    NotificacoesPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    NotificacoesPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    NotificacoesPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    NotificacoesPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    NotificacoesPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    NotificacoesPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    NotificacoesPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    NotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificacoes',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\notificacoes\notificacoes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-row>\n\n      <ion-col col12 text-center>\n\n          <p>Sem notificações no momento.</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\notificacoes\notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NotificacoesPage);
    return NotificacoesPage;
}());

//# sourceMappingURL=notificacoes.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicionarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dicionario_ver_dicionario_ver__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var DicionarioPage = /** @class */ (function () {
    function DicionarioPage(navCtrl, navParams, viewCtrl, storage, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.relnovidades = '';
        this.declareTechnologies();
    }
    DicionarioPage.prototype.ionViewDidLoad = function () {
    };
    DicionarioPage.prototype.declareTechnologies = function () {
        var _this = this;
        //retorno de Dados
        this.service.getDicionario()
            .subscribe(function (data) { return _this.technologies = data.rows; }, function (err) { return console.log(err); });
        //const browser = this.iab.create('https://ionicframework.com/');
    };
    DicionarioPage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dicionario_ver_dicionario_ver__["a" /* DicionarioVerPage */], {
            item: item
        });
    };
    DicionarioPage.prototype.filterTechnologies = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.technologies = this.technologies.filter(function (item) {
                return item.palavra.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            var val_1 = '0';
            this.declareTechnologies();
        }
    };
    /*onFilter(category : string) : void
    {
       this.declareTechnologies();
 
       // Only filter the technologies array IF the selection is NOT equal to value of all
       if (category.trim() !== 'all')
       {
          this.technologies = this.technologies.filter((item) =>
          {
            return item.tipo.toLowerCase().indexOf(category.toLowerCase()) > -1;
          })
       }
    }*/
    DicionarioPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    DicionarioPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    DicionarioPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    DicionarioPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    DicionarioPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    DicionarioPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    DicionarioPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    DicionarioPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    DicionarioPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__eventos_eventos__["a" /* EventosPage */]);
    };
    DicionarioPage.prototype.abrirPaginaBuscaGeral = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__busca_busca__["a" /* BuscaPage */]);
    };
    DicionarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dicionario',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\dicionario\dicionario.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card class="card-back">\n\n        <img src="assets/imgs/background-dicio.jpg" />  \n\n        <div class="titulo-card-back">Dicionário</div>\n\n    </ion-card>\n\n\n\n    <ion-searchbar class="busca-input" placeholder="Digite a palavra..." (ionInput)="filterTechnologies($event.target.value)"></ion-searchbar>\n\n\n\n    <ion-card *ngFor="let technology of technologies" (click)= "selecionado(technology)" class="novidades-card">\n\n        <ion-card-content>\n\n            <h2 class="video-card-titulo">\n\n                {{ technology.palavra }}\n\n            </h2>\n\n        </ion-card-content>\n\n    </ion-card>\n\n      \n\n  </ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\dicionario\dicionario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DicionarioPage);
    return DicionarioPage;
}());

//# sourceMappingURL=dicionario.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtendimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AtendimentoPage = /** @class */ (function () {
    function AtendimentoPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.relnovidades = '';
    }
    AtendimentoPage.prototype.ionViewDidLoad = function () {
    };
    AtendimentoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    AtendimentoPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AtendimentoPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_titulos__["a" /* TitulosPage */]);
    };
    AtendimentoPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    AtendimentoPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    AtendimentoPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    AtendimentoPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AtendimentoPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    AtendimentoPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__eventos_eventos__["a" /* EventosPage */]);
    };
    AtendimentoPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__busca_busca__["a" /* BuscaPage */]);
    };
    AtendimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-atendimento',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\atendimento\atendimento.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <p>\n\n        <strong>Informações para contato. Mande sua mensagem abaixo, ligue ou mande um e-mail.</strong>\n\n        <Br><Br>\n\n        Nosso e-mail: <a href="mailto:contato@progettoapp.com.br">contato@progettoapp.com.br</a>.\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\atendimento\atendimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AtendimentoPage);
    return AtendimentoPage;
}());

//# sourceMappingURL=atendimento.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SairPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SairPage = /** @class */ (function () {
    function SairPage(navCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.relnovidades = '';
    }
    SairPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('Status').then(function (val) {
            console.log(val);
            if (val == 'Logado') {
                _this.storage.set('Status', '');
                //this.storage.remove('Status');
                //this.storage.remove('QualFoto');
                //this.storage.remove('NivelUserQual');
                //this.storage.remove('QualPlano');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.storage.set('Status', '');
                //this.storage.remove('Status');
                //this.storage.remove('QualFoto');
                //this.storage.remove('NivelUserQual');
                //this.storage.remove('QualPlano');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    SairPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    SairPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    SairPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_titulos__["a" /* TitulosPage */]);
    };
    SairPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    SairPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    SairPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    SairPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    SairPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    SairPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    SairPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    SairPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sair',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\sair\sair.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <p></p>\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\sair\sair.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SairPage);
    return SairPage;
}());

//# sourceMappingURL=sair.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacidade_ver_privacidade_ver__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrivacidadePage = /** @class */ (function () {
    function PrivacidadePage(navCtrl, service, loadingCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.relPrivacidade = '';
        this.getDados();
    }
    PrivacidadePage.prototype.ionViewDidLoad = function () {
    };
    PrivacidadePage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getPrivacidade()
            .subscribe(function (data) { return _this.relPrivacidade = data.rows; }, function (err) { return console.log(err); });
    };
    PrivacidadePage.prototype.abrirPrivacidade = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__privacidade_ver_privacidade_ver__["a" /* PrivacidadeVerPage */], { item: item });
    };
    PrivacidadePage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PrivacidadePage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    PrivacidadePage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__eventos_eventos__["a" /* EventosPage */]);
    };
    PrivacidadePage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__busca_busca__["a" /* BuscaPage */]);
    };
    PrivacidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacidade',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\privacidade\privacidade.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-row nomargin nopadding>\n\n\n\n      <ion-col col-12 style="margin: 0px; padding: 0px;">\n\n        <div class="conteudo" *ngFor= "let item of relPrivacidade; let i = index" (click)="abrirPrivacidade(item);" >\n\n          <span class="cont">{{i+1}}.</span>\n\n          {{item.Titulo}}\n\n        </div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\privacidade\privacidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PrivacidadePage);
    return PrivacidadePage;
}());

//# sourceMappingURL=privacidade.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacidadeVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacidadeVerPage = /** @class */ (function () {
    function PrivacidadeVerPage(navCtrl, service, loadingCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.item = [];
        this.getDados();
    }
    PrivacidadeVerPage.prototype.getDados = function () {
        this.item = this.navParams.get('item');
    };
    PrivacidadeVerPage.prototype.ionViewDidLoad = function () {
    };
    PrivacidadeVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacidade-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\privacidade-ver\privacidade-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-row nomargin nopadding>\n\n\n\n      <ion-col col-12 style="margin: 0px; padding: 0px;">\n\n        <div class="conteudo">\n\n          {{item.Titulo}}\n\n        </div>\n\n        <div class="descricao">\n\n          {{item.Descricao}}\n\n        </div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\privacidade-ver\privacidade-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], PrivacidadeVerPage);
    return PrivacidadeVerPage;
}());

//# sourceMappingURL=privacidade-ver.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__minha_conta_endereco_minha_conta_endereco__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__minha_conta_dados_minha_conta_dados__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__minha_conta_foto_minha_conta_foto__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MinhaContaPage = /** @class */ (function () {
    function MinhaContaPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.IdUserQual = {};
        this.EmailUserQual = {};
        this.NomeUserQual = {};
        this.SobrenomeUserQual = {};
        this.NivelUserQual = {};
        this.PlanoUserQual = {};
        this.FotoUserQual = {};
        this.EnderecoUserQual = {};
        this.NumeroUserQual = {};
        this.BairroUserQual = {};
        this.ComplementoUserQual = {};
        this.CidadeUserQual = {};
        this.EstadoUserQual = {};
        this.PaisUserQual = {};
        this.CepUserQual = {};
        this.userDadosGuardados();
    }
    MinhaContaPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MinhaContaPage');
    };
    MinhaContaPage.prototype.userDadosGuardados = function () {
        var _this = this;
        this.storage.get('QualUser').then(function (val) {
            _this.IdUserQual = val;
        });
        this.storage.get('QualEmail').then(function (val) {
            _this.EmailUserQual = val;
        });
        this.storage.get('QualNome').then(function (val) {
            _this.NomeUserQual = val;
        });
        this.storage.get('QualSobrenome').then(function (val) {
            _this.SobrenomeUserQual = val;
        });
        this.storage.get('QualNivel').then(function (val) {
            _this.NivelUserQual = val;
        });
        this.storage.get('QualPlano').then(function (val) {
            _this.PlanoUserQual = val;
        });
        this.storage.get('QualFoto').then(function (val) {
            _this.FotoUserQual = val;
        });
        this.storage.get('EnderecoUserFinal').then(function (val) {
            _this.EnderecoUserQual = val;
        });
        this.storage.get('NumeroUserFinal').then(function (val) {
            _this.NumeroUserQual = val;
        });
        this.storage.get('BairroUserFinal').then(function (val) {
            _this.BairroUserQual = val;
        });
        this.storage.get('ComplementoUserFinal').then(function (val) {
            _this.ComplementoUserQual = val;
        });
        this.storage.get('CidadeUserFinal').then(function (val) {
            _this.CidadeUserQual = val;
        });
        this.storage.get('EstadoUserFinal').then(function (val) {
            _this.EstadoUserQual = val;
        });
        this.storage.get('PaisUserFinal').then(function (val) {
            _this.PaisUserQual = val;
        });
        this.storage.get('CepUserFinal').then(function (val) {
            _this.CepUserQual = val;
        });
    };
    MinhaContaPage.prototype.mudarDados = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__minha_conta_dados_minha_conta_dados__["a" /* MinhaContaDadosPage */]);
    };
    MinhaContaPage.prototype.mudarFoto = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__minha_conta_foto_minha_conta_foto__["a" /* MinhaContaFotoPage */]);
    };
    MinhaContaPage.prototype.mudarEndereco = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__minha_conta_endereco_minha_conta_endereco__["a" /* MinhaContaEnderecoPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MinhaContaPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_titulos__["a" /* TitulosPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    MinhaContaPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__eventos_eventos__["a" /* EventosPage */]);
    };
    MinhaContaPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__busca_busca__["a" /* BuscaPage */]);
    };
    MinhaContaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-conta',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-conta\minha-conta.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="fundo">\n\n    <div class="caixa">\n\n      <p class="titulo-entrega">Meu Perfil</p>        \n\n      <div class="">\n\n\n\n        <ion-item class="caixa-user"> \n\n          <ion-avatar item-start> \n\n            <img src="{{ FotoUserQual }}">\n\n          </ion-avatar>\n\n          <h2 class="tituloPerfil">{{ NomeUserQual }} {{ SobrenomeUserQual }}</h2>\n\n        </ion-item>\n\n\n\n        <div class="caixa-links" (click)="mudarDados()">\n\n          Alterar Nome\n\n        </div>\n\n        <div class="caixa-links" (click)="mudarFoto()">\n\n          Alterar Foto\n\n        </div>\n\n\n\n      </div>\n\n    </div>   \n\n  </div>\n\n\n\n  <div class="fundo">\n\n    <div class="caixa">\n\n      <p class="titulo-entrega">Detalhes do Plano</p>        \n\n      <div class="">\n\n\n\n        <div class="caixa-user" style="border-bottom:0px;"> \n\n          <h2 class="tituloEntrega" style="padding: 0px; margin: 0px;">{{ PlanoUserQual }}</h2>\n\n        </div>\n\n\n\n      </div>\n\n    </div>   \n\n  </div>\n\n\n\n  <div class="fundo">\n\n    <div class="caixa">\n\n      <p class="titulo-entrega">Endereço de Entrega</p>        \n\n      <div class="">\n\n        <div class="textoEntrega">\n\n\n\n          <ng-container *ngIf="!!EnderecoUserQual">\n\n            {{EnderecoUserQual}}, \n\n          </ng-container>\n\n          <ng-container *ngIf="!!NumeroUserQual">\n\n            {{NumeroUserQual}}<Br>\n\n          </ng-container>\n\n          <ng-container *ngIf="!!BairroUserQual">\n\n            Bairro {{BairroUserQual}}<Br>\n\n          </ng-container>\n\n          <ng-container *ngIf="!!ComplementoUserQual">\n\n            {{ComplementoUserQual}}<Br>\n\n          </ng-container>\n\n          <ng-container *ngIf="!!CidadeUserQual">\n\n            {{CidadeUserQual}}<Br>  \n\n          </ng-container>                                        \n\n          <ng-container *ngIf="!!EstadoUserQual">\n\n            {{EstadoUserQual}}<Br> \n\n          </ng-container>      \n\n          <ng-container *ngIf="!!PaisUserQual">\n\n            {{PaisUserQual}}<Br> \n\n          </ng-container>      \n\n          <ng-container *ngIf="!!CepUserQual">\n\n            CEP {{CepUserQual}}   \n\n          </ng-container>                      \n\n         \n\n        </div>\n\n        <div class="caixa-links" style="border-top: 1px solid #b7b7b7; border-bottom: 1px solid #b7b7b7;" (click)="mudarEndereco()">\n\n          Alterar ou adicionar Endereço\n\n        </div>\n\n\n\n      </div>\n\n    </div>   \n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-conta\minha-conta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MinhaContaPage);
    return MinhaContaPage;
}());

//# sourceMappingURL=minha-conta.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinhaContaEnderecoPage = /** @class */ (function () {
    function MinhaContaEnderecoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinhaContaEnderecoPage.prototype.ionViewDidLoad = function () {
    };
    MinhaContaEnderecoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-conta-endereco',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-conta-endereco\minha-conta-endereco.html"*/'<!--\n\n  Generated template for the MinhaContaEnderecoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>MinhaContaEndereco</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-conta-endereco\minha-conta-endereco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaContaEnderecoPage);
    return MinhaContaEnderecoPage;
}());

//# sourceMappingURL=minha-conta-endereco.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaDadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinhaContaDadosPage = /** @class */ (function () {
    function MinhaContaDadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinhaContaDadosPage.prototype.ionViewDidLoad = function () {
    };
    MinhaContaDadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-conta-dados',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-conta-dados\minha-conta-dados.html"*/'<!--\n\n  Generated template for the MinhaContaDadosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>MinhaContaDados</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-conta-dados\minha-conta-dados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaContaDadosPage);
    return MinhaContaDadosPage;
}());

//# sourceMappingURL=minha-conta-dados.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinhaContaFotoPage = /** @class */ (function () {
    function MinhaContaFotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinhaContaFotoPage.prototype.ionViewDidLoad = function () {
    };
    MinhaContaFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-conta-foto',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-conta-foto\minha-conta-foto.html"*/'<!--\n\n  Generated template for the MinhaContaFotoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>MinhaContaFoto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-conta-foto\minha-conta-foto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaContaFotoPage);
    return MinhaContaFotoPage;
}());

//# sourceMappingURL=minha-conta-foto.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfiguracoesPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__titulos_titulos__["a" /* TitulosPage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__eventos_eventos__["a" /* EventosPage */]);
    };
    ConfiguracoesPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__busca_busca__["a" /* BuscaPage */]);
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\configuracoes\configuracoes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo.png">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-users.png">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <p>Sem conteúdo no momento.</p>\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer">\n\n        <ion-badge item-end color="danger" class="menu-footer-bola">4</ion-badge>\n\n        <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Novidades\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n          Publicações\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n          Líder\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n          Aulas\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n            Músicas\n\n        </p>          \n\n    </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\configuracoes\configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusPlanosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MeusPlanosPage = /** @class */ (function () {
    function MeusPlanosPage(loadingCtrl, Storage, service, navCtrl, navParams, http, storage, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.Storage = Storage;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.relnovidades = '';
        this.getDados();
        this.getPlanos2();
    }
    MeusPlanosPage.prototype.getDados = function () {
    };
    MeusPlanosPage.prototype.getPlanos2 = function () {
        var _this = this;
        //retorno de Dados
        this.service.getPlanos()
            .subscribe(function (data) { return _this.relPlanos = data.rows; }, function (err) { return console.log(err); });
    };
    MeusPlanosPage.prototype.selecionarPlano = function (idplano, nomeplano, valorplano) {
        this.storage.set("QualNivel", idplano).then(function () { });
        this.storage.set("QualNivelNome", nomeplano).then(function () { });
        this.storage.set("QualNivelValor", valorplano).then(function () { });
        this.toastCtrl.create({
            message: "Plano selecionado!",
            duration: 3000,
            position: 'middle',
        }).present();
    };
    MeusPlanosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.Storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.Storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.Storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.Storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    MeusPlanosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__home_home__["a" /* HomePage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__titulos_titulos__["a" /* TitulosPage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__eventos_eventos__["a" /* EventosPage */]);
    };
    MeusPlanosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__busca_busca__["a" /* BuscaPage */]);
    };
    MeusPlanosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-meus-planos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\meus-planos\meus-planos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n<ion-grid class="pb30 pt20">\n\n  <ion-row>\n\n    <ion-col col-12 text-center class="titulo-minhalista">\n\n      <h2>Meus Planos</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid class="pb30">\n\n  <ion-row>    \n\n    <ion-col col-12 text-center class="subtitulo-minhalista">\n\n        Adicione ou troque seu planos\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid class="pb30">\n\n  <ion-row padding>\n\n\n\n    <ion-col col-6 *ngFor="let plano of relPlanos;" (click)="selecionarPlano(plano.idplano, plano.Titulo, plano.Valor)">\n\n      <div class="ico-minhalista-col">\n\n          <img src="assets/imgs/ico-meus-planos.png">  \n\n          <p class="texto-minhalista">\n\n            {{plano.Titulo}}\n\n          </p>\n\n      </div>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\meus-planos\meus-planos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], MeusPlanosPage);
    return MeusPlanosPage;
}());

//# sourceMappingURL=meus-planos.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaAvisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LojaAvisoPage = /** @class */ (function () {
    function LojaAvisoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LojaAvisoPage.prototype.ionViewDidLoad = function () {
    };
    LojaAvisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loja-aviso',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja-aviso\loja-aviso.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <p>\n\n        <strong>Em breve você poderá comprar os livros pelo seu Progetto.</strong>\n\n        <Br><Br>\n\n        Conheça os nossos produtos em <a href="http://www.ontopsicologia.com.br">www.ontopsicologia.com.br</a>.\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja-aviso\loja-aviso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LojaAvisoPage);
    return LojaAvisoPage;
}());

//# sourceMappingURL=loja-aviso.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(418);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_audios_audios__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pdf_pdf__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_slide_slide__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_verlivro_verlivro__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pl_lista_pl_lista__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_ver_pl_ver_pl__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_loja_loja__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_loja_ver_loja_ver__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_minha_lista_minha_lista__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_cadastro_usuario_cadastro_usuario__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_atendimento_atendimento__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_dicionario_dicionario__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_notificacoes_notificacoes__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_ontoarte_album_ontoarte_album__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_ontoarte_ver_ontoarte_ver__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_privacidade_privacidade__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_sair_sair__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_dicionario_ver_dicionario_ver__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_dicionario_modal_dicionario_modal__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_eventos_antigos_eventos_antigos__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_audio_service_audio_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_minha_lista_ontoarte_minha_lista_ontoarte__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_minha_lista_aulas_minha_lista_aulas__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_minha_lista_pl_minha_lista_pl__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_minha_lista_publicacoes_minha_lista_publicacoes__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_minha_lista_ver_minha_lista_ver__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_loja_cds_loja_cds__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_loja_revista_loja_revista__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_loja_souvenirs_loja_souvenirs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__angular_common_http__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_audios2_audios2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_comentarios_comentarios__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_esqueceu_senha_esqueceu_senha__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_onesignal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_planos_planos__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_pagamento_entrega_pagamento_entrega__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_aovivo_proximas_aovivo_proximas__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_aovivo_arquivo_aovivo_arquivo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_notificacao_ver_notificacao_ver__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_configuracoes_configuracoes__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_eventos_ver_eventos_ver__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_eventos_antigos_ver_eventos_antigos_ver__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_editar_minha_lista_publicacoes_editar_minha_lista_publicacoes__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_aovivo_ver_aovivo_ver__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_eventos_form_eventos_form__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_minha_conta_minha_conta__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_mod_aulas_mod_aulas__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_configuracao_configuracao__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_termos_termos__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_eventos_foto_ver_eventos_foto_ver__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_evento_info_ver_evento_info_ver__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_editar_minha_ontoarte_editar_minha_ontoarte__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_editar_minha_pl_editar_minha_pl__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_editar_minha_aulas_editar_minha_aulas__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_editar_minha_albuns_editar_minha_albuns__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_privacidade_ver_privacidade_ver__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__ionic_native_paypal__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_minhas_compras_minhas_compras__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_meus_planos_meus_planos__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_loja_aviso_loja_aviso__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_minha_conta_dados_minha_conta_dados__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_minha_conta_endereco_minha_conta_endereco__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_minha_conta_foto_minha_conta_foto__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_audio_player_audio_player__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_editar_minha_audio_ontoarte_editar_minha_audio_ontoarte__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { NavController } from 'ionic-angular';











//import { StreamingMedia } from '@ionic-native/streaming-media';



//import { PdfViewerComponent } from 'ng2-pdf-viewer';
//import { FileOpener } from '@ionic-native/file-opener';








































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__["a" /* LivrosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_titulos_titulos__["a" /* TitulosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ontoarte_ontoarte__["a" /* OntoartePage */], __WEBPACK_IMPORTED_MODULE_19__pages_aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */], __WEBPACK_IMPORTED_MODULE_53__pages_audios2_audios2__["a" /* Audios2Page */], __WEBPACK_IMPORTED_MODULE_9__pages_audios_audios__["a" /* AudiosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_revista_pl_revista_pl__["a" /* RevistaPlPage */], __WEBPACK_IMPORTED_MODULE_24__pages_verlivro_verlivro__["a" /* VerlivroPage */], __WEBPACK_IMPORTED_MODULE_25__pages_pl_lista_pl_lista__["a" /* PlListaPage */], __WEBPACK_IMPORTED_MODULE_26__pages_ver_pl_ver_pl__["a" /* VerPlPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_eventos_eventos__["a" /* EventosPage */], __WEBPACK_IMPORTED_MODULE_64__pages_eventos_ver_eventos_ver__["a" /* EventosVerPage */], __WEBPACK_IMPORTED_MODULE_65__pages_eventos_antigos_ver_eventos_antigos_ver__["a" /* EventosAntigosVerPage */], __WEBPACK_IMPORTED_MODULE_68__pages_eventos_form_eventos_form__["a" /* EventosFormPage */], __WEBPACK_IMPORTED_MODULE_73__pages_eventos_foto_ver_eventos_foto_ver__["a" /* EventosFotoVerPage */], __WEBPACK_IMPORTED_MODULE_74__pages_evento_info_ver_evento_info_ver__["a" /* EventoInfoVerPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_busca_busca__["a" /* BuscaPage */], __WEBPACK_IMPORTED_MODULE_85__pages_minha_conta_dados_minha_conta_dados__["a" /* MinhaContaDadosPage */], __WEBPACK_IMPORTED_MODULE_86__pages_minha_conta_endereco_minha_conta_endereco__["a" /* MinhaContaEnderecoPage */], __WEBPACK_IMPORTED_MODULE_87__pages_minha_conta_foto_minha_conta_foto__["a" /* MinhaContaFotoPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_minha_conta_minha_conta__["a" /* MinhaContaPage */], __WEBPACK_IMPORTED_MODULE_71__pages_configuracao_configuracao__["a" /* ConfiguracaoPage */], __WEBPACK_IMPORTED_MODULE_72__pages_termos_termos__["a" /* TermosPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_comentarios_comentarios__["a" /* ComentariosPage */], __WEBPACK_IMPORTED_MODULE_70__pages_mod_aulas_mod_aulas__["a" /* ModAulasPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_loja_loja__["a" /* LojaPage */], __WEBPACK_IMPORTED_MODULE_48__pages_loja_modal_loja_modal__["a" /* LojaModalPage */], __WEBPACK_IMPORTED_MODULE_29__pages_loja_ver_loja_ver__["a" /* LojaVerPage */], __WEBPACK_IMPORTED_MODULE_30__pages_minha_lista_minha_lista__["a" /* MinhaListaPage */], __WEBPACK_IMPORTED_MODULE_47__pages_minha_lista_ver_minha_lista_ver__["a" /* MinhaListaVerPage */], __WEBPACK_IMPORTED_MODULE_49__pages_loja_cds_loja_cds__["a" /* LojaCdsPage */], __WEBPACK_IMPORTED_MODULE_50__pages_loja_revista_loja_revista__["a" /* LojaRevistaPage */], __WEBPACK_IMPORTED_MODULE_51__pages_loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_loja_aviso_loja_aviso__["a" /* LojaAvisoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_minha_lista_publicacoes_minha_lista_publicacoes__["a" /* MinhaListaPublicacoesPage */], __WEBPACK_IMPORTED_MODULE_45__pages_minha_lista_pl_minha_lista_pl__["a" /* MinhaListaPlPage */], __WEBPACK_IMPORTED_MODULE_44__pages_minha_lista_aulas_minha_lista_aulas__["a" /* MinhaListaAulasPage */], __WEBPACK_IMPORTED_MODULE_43__pages_minha_lista_ontoarte_minha_lista_ontoarte__["a" /* MinhaListaOntoartePage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_editar_minha_lista_publicacoes_editar_minha_lista_publicacoes__["a" /* EditarMinhaListaPublicacoesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */], __WEBPACK_IMPORTED_MODULE_32__pages_atendimento_atendimento__["a" /* AtendimentoPage */], __WEBPACK_IMPORTED_MODULE_62__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */], __WEBPACK_IMPORTED_MODULE_33__pages_dicionario_dicionario__["a" /* DicionarioPage */], __WEBPACK_IMPORTED_MODULE_34__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */], __WEBPACK_IMPORTED_MODULE_35__pages_ontoarte_album_ontoarte_album__["a" /* OntoarteAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_ontoarte_ver_ontoarte_ver__["a" /* OntoarteVerPage */], __WEBPACK_IMPORTED_MODULE_37__pages_privacidade_privacidade__["a" /* PrivacidadePage */], __WEBPACK_IMPORTED_MODULE_80__pages_privacidade_ver_privacidade_ver__["a" /* PrivacidadeVerPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_sair_sair__["a" /* SairPage */], __WEBPACK_IMPORTED_MODULE_39__pages_dicionario_ver_dicionario_ver__["a" /* DicionarioVerPage */], __WEBPACK_IMPORTED_MODULE_40__pages_dicionario_modal_dicionario_modal__["a" /* DicionarioModalPage */], __WEBPACK_IMPORTED_MODULE_38__pages_sair_sair__["a" /* SairPage */], __WEBPACK_IMPORTED_MODULE_61__pages_notificacao_ver_notificacao_ver__["a" /* NotificacaoVerPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_eventos_antigos_eventos_antigos__["a" /* EventosAntigosPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_aovivo_arquivo_aovivo_arquivo__["a" /* AovivoArquivoPage */], __WEBPACK_IMPORTED_MODULE_59__pages_aovivo_proximas_aovivo_proximas__["a" /* AovivoProximasPage */], __WEBPACK_IMPORTED_MODULE_67__pages_aovivo_ver_aovivo_ver__["a" /* AovivoVerPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_esqueceu_senha_esqueceu_senha__["a" /* EsqueceuSenhaPage */], __WEBPACK_IMPORTED_MODULE_57__pages_planos_planos__["a" /* PlanosPage */], __WEBPACK_IMPORTED_MODULE_58__pages_pagamento_entrega_pagamento_entrega__["a" /* PagamentoEntregaPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_editar_minha_albuns_editar_minha_albuns__["a" /* EditarMinhaAlbunsPage */], __WEBPACK_IMPORTED_MODULE_76__pages_editar_minha_ontoarte_editar_minha_ontoarte__["a" /* EditarMinhaOntoartePage */], __WEBPACK_IMPORTED_MODULE_78__pages_editar_minha_aulas_editar_minha_aulas__["a" /* EditarMinhaAulasPage */], __WEBPACK_IMPORTED_MODULE_77__pages_editar_minha_pl_editar_minha_pl__["a" /* EditarMinhaPlPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_carrinho_carrinho__["a" /* CarrinhoPage */], __WEBPACK_IMPORTED_MODULE_82__pages_minhas_compras_minhas_compras__["a" /* MinhasComprasPage */], __WEBPACK_IMPORTED_MODULE_83__pages_meus_planos_meus_planos__["a" /* MeusPlanosPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_audio_player_audio_player__["a" /* AudioPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__["a" /* MinhaListaAudioOntoartePage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_editar_minha_audio_ontoarte_editar_minha_audio_ontoarte__["a" /* EditarMinhaAudioOntoartePage */]
                // PdfViewerComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_52__angular_common_http__["a" /* HttpClientModule */],
                //IonicModule.forRoot(MyApp),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot({ driverOrder: ['localstorage'] }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            backButtonText: '',
                        },
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/minha-lista-audios/minha-lista-audios.module#MinhaListaAudiosPageModule', name: 'MinhaListaAudiosPage', segment: 'minha-lista-audios', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_videos_videos__["a" /* VideosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_livros_livros__["a" /* LivrosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_titulos_titulos__["a" /* TitulosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ontoarte_ontoarte__["a" /* OntoartePage */], __WEBPACK_IMPORTED_MODULE_19__pages_aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */], __WEBPACK_IMPORTED_MODULE_53__pages_audios2_audios2__["a" /* Audios2Page */], __WEBPACK_IMPORTED_MODULE_9__pages_audios_audios__["a" /* AudiosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_revista_pl_revista_pl__["a" /* RevistaPlPage */], __WEBPACK_IMPORTED_MODULE_24__pages_verlivro_verlivro__["a" /* VerlivroPage */], __WEBPACK_IMPORTED_MODULE_25__pages_pl_lista_pl_lista__["a" /* PlListaPage */], __WEBPACK_IMPORTED_MODULE_26__pages_ver_pl_ver_pl__["a" /* VerPlPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_eventos_eventos__["a" /* EventosPage */], __WEBPACK_IMPORTED_MODULE_64__pages_eventos_ver_eventos_ver__["a" /* EventosVerPage */], __WEBPACK_IMPORTED_MODULE_65__pages_eventos_antigos_ver_eventos_antigos_ver__["a" /* EventosAntigosVerPage */], __WEBPACK_IMPORTED_MODULE_68__pages_eventos_form_eventos_form__["a" /* EventosFormPage */], __WEBPACK_IMPORTED_MODULE_73__pages_eventos_foto_ver_eventos_foto_ver__["a" /* EventosFotoVerPage */], __WEBPACK_IMPORTED_MODULE_74__pages_evento_info_ver_evento_info_ver__["a" /* EventoInfoVerPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_busca_busca__["a" /* BuscaPage */], __WEBPACK_IMPORTED_MODULE_85__pages_minha_conta_dados_minha_conta_dados__["a" /* MinhaContaDadosPage */], __WEBPACK_IMPORTED_MODULE_86__pages_minha_conta_endereco_minha_conta_endereco__["a" /* MinhaContaEnderecoPage */], __WEBPACK_IMPORTED_MODULE_87__pages_minha_conta_foto_minha_conta_foto__["a" /* MinhaContaFotoPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_minha_conta_minha_conta__["a" /* MinhaContaPage */], __WEBPACK_IMPORTED_MODULE_71__pages_configuracao_configuracao__["a" /* ConfiguracaoPage */], __WEBPACK_IMPORTED_MODULE_72__pages_termos_termos__["a" /* TermosPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_comentarios_comentarios__["a" /* ComentariosPage */], __WEBPACK_IMPORTED_MODULE_70__pages_mod_aulas_mod_aulas__["a" /* ModAulasPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_loja_loja__["a" /* LojaPage */], __WEBPACK_IMPORTED_MODULE_48__pages_loja_modal_loja_modal__["a" /* LojaModalPage */], __WEBPACK_IMPORTED_MODULE_29__pages_loja_ver_loja_ver__["a" /* LojaVerPage */], __WEBPACK_IMPORTED_MODULE_30__pages_minha_lista_minha_lista__["a" /* MinhaListaPage */], __WEBPACK_IMPORTED_MODULE_47__pages_minha_lista_ver_minha_lista_ver__["a" /* MinhaListaVerPage */], __WEBPACK_IMPORTED_MODULE_49__pages_loja_cds_loja_cds__["a" /* LojaCdsPage */], __WEBPACK_IMPORTED_MODULE_50__pages_loja_revista_loja_revista__["a" /* LojaRevistaPage */], __WEBPACK_IMPORTED_MODULE_51__pages_loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_loja_aviso_loja_aviso__["a" /* LojaAvisoPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_minha_lista_publicacoes_minha_lista_publicacoes__["a" /* MinhaListaPublicacoesPage */], __WEBPACK_IMPORTED_MODULE_45__pages_minha_lista_pl_minha_lista_pl__["a" /* MinhaListaPlPage */], __WEBPACK_IMPORTED_MODULE_44__pages_minha_lista_aulas_minha_lista_aulas__["a" /* MinhaListaAulasPage */], __WEBPACK_IMPORTED_MODULE_43__pages_minha_lista_ontoarte_minha_lista_ontoarte__["a" /* MinhaListaOntoartePage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_editar_minha_lista_publicacoes_editar_minha_lista_publicacoes__["a" /* EditarMinhaListaPublicacoesPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */], __WEBPACK_IMPORTED_MODULE_32__pages_atendimento_atendimento__["a" /* AtendimentoPage */], __WEBPACK_IMPORTED_MODULE_62__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */], __WEBPACK_IMPORTED_MODULE_33__pages_dicionario_dicionario__["a" /* DicionarioPage */], __WEBPACK_IMPORTED_MODULE_34__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */], __WEBPACK_IMPORTED_MODULE_35__pages_ontoarte_album_ontoarte_album__["a" /* OntoarteAlbumPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_ontoarte_ver_ontoarte_ver__["a" /* OntoarteVerPage */], __WEBPACK_IMPORTED_MODULE_37__pages_privacidade_privacidade__["a" /* PrivacidadePage */], __WEBPACK_IMPORTED_MODULE_80__pages_privacidade_ver_privacidade_ver__["a" /* PrivacidadeVerPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_sair_sair__["a" /* SairPage */], __WEBPACK_IMPORTED_MODULE_39__pages_dicionario_ver_dicionario_ver__["a" /* DicionarioVerPage */], __WEBPACK_IMPORTED_MODULE_40__pages_dicionario_modal_dicionario_modal__["a" /* DicionarioModalPage */], __WEBPACK_IMPORTED_MODULE_38__pages_sair_sair__["a" /* SairPage */], __WEBPACK_IMPORTED_MODULE_61__pages_notificacao_ver_notificacao_ver__["a" /* NotificacaoVerPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_eventos_antigos_eventos_antigos__["a" /* EventosAntigosPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_aovivo_arquivo_aovivo_arquivo__["a" /* AovivoArquivoPage */], __WEBPACK_IMPORTED_MODULE_59__pages_aovivo_proximas_aovivo_proximas__["a" /* AovivoProximasPage */], __WEBPACK_IMPORTED_MODULE_67__pages_aovivo_ver_aovivo_ver__["a" /* AovivoVerPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_esqueceu_senha_esqueceu_senha__["a" /* EsqueceuSenhaPage */], __WEBPACK_IMPORTED_MODULE_57__pages_planos_planos__["a" /* PlanosPage */], __WEBPACK_IMPORTED_MODULE_58__pages_pagamento_entrega_pagamento_entrega__["a" /* PagamentoEntregaPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_editar_minha_albuns_editar_minha_albuns__["a" /* EditarMinhaAlbunsPage */], __WEBPACK_IMPORTED_MODULE_76__pages_editar_minha_ontoarte_editar_minha_ontoarte__["a" /* EditarMinhaOntoartePage */], __WEBPACK_IMPORTED_MODULE_78__pages_editar_minha_aulas_editar_minha_aulas__["a" /* EditarMinhaAulasPage */], __WEBPACK_IMPORTED_MODULE_77__pages_editar_minha_pl_editar_minha_pl__["a" /* EditarMinhaPlPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_carrinho_carrinho__["a" /* CarrinhoPage */], __WEBPACK_IMPORTED_MODULE_82__pages_minhas_compras_minhas_compras__["a" /* MinhasComprasPage */], __WEBPACK_IMPORTED_MODULE_83__pages_meus_planos_meus_planos__["a" /* MeusPlanosPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_audio_player_audio_player__["a" /* AudioPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_minha_lista_audio_ontoarte_minha_lista_audio_ontoarte__["a" /* MinhaListaAudioOntoartePage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_editar_minha_audio_ontoarte_editar_minha_audio_ontoarte__["a" /* EditarMinhaAudioOntoartePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_81__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                // StreamingMedia,
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_16__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_audio_service_audio_service__["a" /* AudioServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_onesignal__["a" /* OneSignal */]
                // FileOpener,
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LojaModalPage = /** @class */ (function () {
    function LojaModalPage(navCtrl, loadingCtrl, navParams, Storage, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.Storage = Storage;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.item = [];
        this.qual = [];
        this.teste = [];
        this.teste2 = [];
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
        //qt carrinho
        this.Storage.ready().then(function () {
            _this.Storage.get("ComprasCarrinho").then(function (data) {
                _this.qtCarrinho = data.length - 1;
            });
        });
    }
    LojaModalPage.prototype.getDados = function () {
        this.item = this.navParams.get('item');
    };
    LojaModalPage.prototype.Comprar = function (item, qual) {
        var _this = this;
        var added = 0;
        this.Storage.get("ComprasCarrinho").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                if (item.Caminho == 'livros') {
                    data.push({
                        "idqual": item.idlivro,
                        "qual": qual,
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
                }
                else if (item.Caminho == 'pl') {
                    data.push({
                        "idqual": item.idpl,
                        "qual": qual,
                        "idpl": item.idpl,
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
                }
                else if (item.Caminho == 'videos') {
                    data.push({
                        "idqual": item.idvideo,
                        "qual": qual,
                        "idvideo": item.idvideo,
                        "Cat": item.Cat,
                        "Titulo": item.Titulo,
                        "Subitulo": item.Subitulo,
                        "Descricao": item.Descricao,
                        "link_240p": item.link_240p,
                        "link_360p": item.link_360p,
                        "link_480p": item.link_480p,
                        "link_720p": item.link_720p,
                        "iconplay": item.iconplay,
                        "Caminho": item.Caminho,
                        "Pasta": item.Pasta,
                        "Img": item.Img,
                        "Data": item.Data,
                        "Classificacao": item.Classificacao,
                        "Tempo": item.Tempo,
                        "Ativo": item.Ativo
                    });
                }
                else if (item.Caminho == 'albuns') {
                    data.push({
                        "idqual": item.idalbum,
                        "qual": qual,
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
                added = 1;
            }
            else {
                var _loop_1 = function (i) {
                    if (item.Caminho == 'livros') {
                        if (item.idlivro == data[i].idlivro) {
                            var query = data.find(function (item) { return item.idlivro === data[i].idlivro; });
                            var toremove = data.indexOf(query);
                            data.splice(toremove, 1);
                            added = 1;
                        }
                    }
                    else if (item.Caminho == 'pl') {
                        if (item.idpl == data[i].idpl) {
                            var query = data.find(function (item) { return item.idpl === data[i].idpl; });
                            var toremove = data.indexOf(query);
                            data.splice(toremove, 1);
                            added = 1;
                        }
                    }
                    else if (item.Caminho == 'videos') {
                        if (item.idvideo == data[i].idvideo) {
                            var query = data.find(function (item) { return item.idvideo === data[i].idvideo; });
                            var toremove = data.indexOf(query);
                            data.splice(toremove, 1);
                            added = 1;
                        }
                    }
                    else if (item.Caminho == 'albuns') {
                        if (item.idalbum == data[i].idalbum) {
                            var query = data.find(function (item) { return item.idalbum === data[i].idalbum; });
                            var toremove = data.indexOf(query);
                            data.splice(toremove, 1);
                            added = 1;
                        }
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            if (added == 0) {
                if (item.Caminho == 'livros') {
                    data.push({
                        "idqual": item.idlivro,
                        "qual": qual,
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
                        "qty": item.qty,
                        "Valor": item.Valor,
                        "Desconto": item.Desconto,
                        "Ativo": item.Ativo
                    });
                    _this.toastCtrl.create({
                        message: "Publicação adicionada no seu carrinho!",
                        duration: 2000,
                        position: 'middle',
                    }).present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
                }
                else if (item.Caminho == 'pl') {
                    data.push({
                        "idqual": item.idpl,
                        "qual": qual,
                        "idpl": item.idpl,
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
                        "qty": item.qty,
                        "Valor": item.Valor,
                        "Desconto": item.Desconto,
                        "Ativo": item.Ativo
                    });
                    _this.toastCtrl.create({
                        message: "Revista adicionada no seu carrinho!",
                        duration: 2000,
                        position: 'middle',
                    }).present();
                }
                else if (item.Caminho == 'videos') {
                    data.push({
                        "idqual": item.idvideo,
                        "qual": qual,
                        "idvideo": item.idvideo,
                        "Cat": item.Cat,
                        "Titulo": item.Titulo,
                        "Subitulo": item.Subitulo,
                        "Descricao": item.Descricao,
                        "link_240p": item.link_240p,
                        "link_360p": item.link_360p,
                        "link_480p": item.link_480p,
                        "link_720p": item.link_720p,
                        "iconplay": item.iconplay,
                        "Caminho": item.Caminho,
                        "Pasta": item.Pasta,
                        "Img": item.Img,
                        "Data": item.Data,
                        "Classificacao": item.Classificacao,
                        "Tempo": item.Tempo,
                        "Ativo": item.Ativo
                    });
                    _this.toastCtrl.create({
                        message: "Aula adicionada no seu carrinho!",
                        duration: 2000,
                        position: 'middle',
                    }).present();
                }
                else if (item.Caminho == 'albuns') {
                    data.push({
                        "idqual": item.idalbum,
                        "qual": qual,
                        "idalbum": item.idalbum,
                        "Titulo": item.Titulo,
                        "Subitulo": item.Subitulo,
                        "Descricao": item.Descricao,
                        "Pasta": item.Pasta,
                        "Img": item.Img,
                        "Caminho": item.Caminho,
                        "qty": item.qty,
                        "Valor": item.Valor,
                        "Desconto": item.Desconto,
                        "Ativo": item.Ativo
                    });
                    _this.toastCtrl.create({
                        message: "CD/DVD adicionado no seu carrinho!",
                        duration: 2000,
                        position: 'middle',
                    }).present();
                }
            }
            _this.Storage.set("ComprasCarrinho", data).then(function () { });
        });
    };
    LojaModalPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LojaModalPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__busca_busca__["a" /* BuscaPage */]);
    };
    LojaModalPage.prototype.abrirCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    LojaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loja-modal',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja-modal\loja-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_carrinho" (click)="abrirCarrinho()">\n\n      <ion-badge item-end color="danger" class="menu-loja-bola">{{qtCarrinho}}</ion-badge>\n\n      <ion-icon name="ios-cart-outline" class="header_carrinho2"></ion-icon> \n\n    </div>    \n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">     \n\n    </div>        \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    \n\n    <ion-card class="livros-card">\n\n        <ion-row>\n\n            <ion-col col12>\n\n                <h1 class="tituloGrande"><i>{{ item.Titulo }}</i></h1>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col12>\n\n                <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" class="img-capa"/> \n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="item.Caminho != \'videos\' && item.Caminho != \'albuns\'" class="mt10">\n\n            <ion-col col8 margin-left margin-right>\n\n                <div class="botao-comprar" (click)= "Comprar(item, \'ebook\')">\n\n                    Comprar E-book\n\n                </div>\n\n            </ion-col> \n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="item.Caminho == \'livros\'">                   \n\n            <ion-col col8 margin-left margin-right>\n\n                <div class="botao-comprar" (click)= "Comprar(item, \'fisico\')">\n\n                   Comprar Livro Impresso\n\n                </div>\n\n            </ion-col>            \n\n        </ion-row>\n\n        <ion-row *ngIf="item.Caminho == \'pl\'">                   \n\n            <ion-col col8 margin-left margin-right>\n\n                <div class="botao-comprar" (click)= "Comprar(item, \'fisico\')">\n\n                    Comprar Revista Impressa\n\n                </div>\n\n            </ion-col>            \n\n        </ion-row>\n\n\n\n        <ion-row *ngIf="item.Caminho == \'albuns\'">                   \n\n            <ion-col col8 margin-left margin-right>\n\n                <div class="botao-comprar" (click)= "Comprar(item, \'cd\')">\n\n                    Comprar CD/DVD Físico\n\n                </div>\n\n            </ion-col>            \n\n        </ion-row>\n\n        <ion-row *ngIf="item.Caminho == \'videos\'" class="mt10">\n\n            <ion-col col8 margin-left margin-right>\n\n                <div class="botao-comprar" (click)= "Comprar(item, \'video\')">\n\n                    Comprar Vídeos Aulas\n\n                </div>\n\n            </ion-col> \n\n        </ion-row>\n\n\n\n        <ion-row class="mb20">\n\n            <ion-col col12 padding>\n\n                <div class="desc" [innerHTML]="item.Descricao"></div>  \n\n            </ion-col>\n\n        </ion-row>        \n\n    </ion-card>\n\n\n\n       \n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja-modal\loja-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LojaModalPage);
    return LojaModalPage;
}());

//# sourceMappingURL=loja-modal.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_minha_lista_minha_lista__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dicionario_dicionario__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_atendimento_atendimento__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sair_sair__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_privacidade_privacidade__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_minha_conta_minha_conta__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_configuracoes_configuracoes__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_meus_planos_meus_planos__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_loja_aviso_loja_aviso__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var MyApp = /** @class */ (function () {
    function MyApp(oneSignal, platform, statusBar, splashScreen, storage) {
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.dados = {};
        this.data = {};
        this.page = {};
        this.link = {};
        this.IdUserQual = {};
        this.EmailUserQual = {};
        this.NomeUserQual = {};
        this.SobrenomeUserQual = {};
        this.NivelUserQual = {};
        this.PlanoUserQual = {};
        this.FotoUserQual = {};
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [{ title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] }];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.storage.get('Status').then(function (val) {
            if (val == 'Logado') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.storage.get('SlideOlhou').then(function (val) {
                    console.log(val);
                    if (val == 'Sim') {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                    }
                });
            }
        });
        this.platform.ready().then(function () {
            _this.userDadosGuardados();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
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
            }
            else {
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.userDadosGuardados = function () {
        var _this = this;
        this.storage.get('QualUser').then(function (val) {
            _this.IdUserQual = val;
        });
        this.storage.get('QualEmail').then(function (val) {
            _this.EmailUserQual = val;
        });
        this.storage.get('QualNome').then(function (val) {
            _this.NomeUserQual = val;
        });
        this.storage.get('QualSobrenome').then(function (val) {
            _this.SobrenomeUserQual = val;
        });
        this.storage.get('QualNivel').then(function (val) {
            _this.NivelUserQual = val;
        });
        this.storage.get('QualPlano').then(function (val) {
            _this.PlanoUserQual = val;
        });
        this.storage.get('QualFoto').then(function (val) {
            _this.FotoUserQual = val;
        });
    };
    MyApp.prototype.abrirPaginaLoja = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_loja_aviso_loja_aviso__["a" /* LojaAvisoPage */]);
    };
    MyApp.prototype.abrirPaginaNotificacao = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_notificacoes_notificacoes__["a" /* NotificacoesPage */]);
    };
    MyApp.prototype.abrirPaginaMeusPlanos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_meus_planos_meus_planos__["a" /* MeusPlanosPage */]);
    };
    MyApp.prototype.abrirPaginaMinhaCompras = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    MyApp.prototype.abrirPaginaMinhalista = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_minha_lista_minha_lista__["a" /* MinhaListaPage */]);
    };
    MyApp.prototype.abrirPaginaDicionario = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_dicionario_dicionario__["a" /* DicionarioPage */]);
    };
    MyApp.prototype.abrirPaginaAtendimento = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_atendimento_atendimento__["a" /* AtendimentoPage */]);
    };
    MyApp.prototype.abrirPaginaConfig = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
    };
    MyApp.prototype.abrirPaginaConta = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_minha_conta_minha_conta__["a" /* MinhaContaPage */]);
    };
    MyApp.prototype.abrirPaginaPrivacidade = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_privacidade_privacidade__["a" /* PrivacidadePage */]);
    };
    MyApp.prototype.abrirPaginaSair = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_sair_sair__["a" /* SairPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\GitHub\appprogetto\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-card class="side-menu-card">\n\n      <ion-item>\n\n        <ion-avatar item-start *ngIf="FotoUserQual">\n\n          <img src="{{ FotoUserQual }}">\n\n        </ion-avatar>\n\n        <h2>{{ NomeUserQual }} {{ SobrenomeUserQual }}</h2>\n\n        <p style="margin-top:-4px;">\n\n          <i>{{ PlanoUserQual }}</i>\n\n        </p>\n\n      </ion-item>\n\n    </ion-card>\n\n    <ion-list class="side-menu-novo">\n\n      <button menuClose ion-item (click)="abrirPaginaLoja()">\n\n        <img class="menu-icone-lado mr10" src="assets/imgs/ico-carrinho-off.jpg"> Loja\n\n      </button>\n\n      <button menuClose ion-item (click)="abrirPaginaDicionario()">\n\n        <img class="menu-icone-lado mr10" src="assets/imgs/ico-dicionario.jpg"> Dicionário\n\n      </button>\n\n      <button menuClose ion-item (click)="abrirPaginaMinhalista()">\n\n        <img class="menu-icone-lado mr10" src="assets/imgs/ico-correto-off.jpg"> Minha Lista\n\n      </button>\n\n      <button menuClose ion-item (click)="abrirPaginaNotificacao()">\n\n        <img class="menu-icone-lado mr10" src="assets/imgs/ico-notificacoes-off.jpg"> Notificações\n\n      </button>\n\n      <button menuClose ion-item (click)="abrirPaginaAtendimento()">\n\n        <img class="menu-icone-lado mr10" src="assets/imgs/ico-atendimento-off.jpg"> Atendimento\n\n      </button>\n\n    </ion-list>\n\n\n\n\n\n  </ion-content>\n\n\n\n  <ion-footer class="side-menu-footer">\n\n    <ion-list class="side-menu-footer-novo">\n\n\n\n      <button menuClose ion-item (click)="abrirPaginaConta()">\n\n        Conta\n\n      </button>\n\n      <button menuClose ion-item (click)="abrirPaginaPrivacidade()">\n\n        Termos de Uso\n\n      </button>\n\n      <button menuClose ion-item (click)="abrirPaginaSair()">\n\n        Sair\n\n      </button>\n\n\n\n    </ion-list>\n\n  </ion-footer>\n\n\n\n</ion-menu>\n\n\n\n<!-- Audio Player -->\n\n<page-audio-player></page-audio-player>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var VideosPage = /** @class */ (function () {
    function VideosPage(socialSharing, http, navCtrl, loadingCtrl, navParams, service, toastCtrl, storage) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.data = {};
        this.resolucao = '';
        this.resolucaoNova = '';
        this.item = [];
        this.urlVideo = '';
        this.urlIMG = '';
        this.pasta = [];
        this.padrao = '';
        this.teste = [];
        this.teste2 = [];
        this.icone = 'ico-mais-aulas';
        this.icoCurtir = 'Curtir';
        this.relBooks = '';
        this.relVideos = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.api2 = 'http://app.progettoapp.com.br/midias/';
        this.data.baixa = 'link_240p';
        this.data.media = 'link_360p';
        this.data.boa = 'link_480p';
        this.data.excelente = 'link_720p';
        this.storage.get('resolucao').then(function (val) {
            _this.resolucao = val;
            _this.getDados(_this.resolucao);
        });
        this.getVincLivros();
        this.getVideosVinc();
        this.storage.ready().then(function () {
            _this.storage.get("ClassficarVideo").then(function (data) {
                var nedo2 = 0;
                _this.teste2 = data;
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste2.forEach(function (item, index) {
                        if (_this.item['idvideo'] == item['idvideo']) {
                            nedo2 = 1;
                        }
                    });
                }
                if (nedo2 == 1) {
                    _this.icoCurtir = 'Curtiu';
                }
                else {
                    _this.icoCurtir = 'Curtir';
                }
            });
        });
    }
    VideosPage_1 = VideosPage;
    // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
    //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
    //return msg.concat(" \n sent from my awesome app");
    //}
    VideosPage.prototype.regularShare = function (msg, assunto, file, link) {
        //var msg = this.compilemsg(msg);
        this.socialSharing.share(msg, assunto, file, link);
    };
    VideosPage.prototype.getDados = function (resolucao) {
        var _this = this;
        this.item = this.navParams.get('item');
        if (resolucao == 'link_240p') {
            this.resolucao = this.item['link_240p'];
        }
        else if (resolucao == 'link_360p') {
            this.resolucao = this.item['link_360p'];
        }
        else if (resolucao == 'link_480p') {
            this.resolucao = this.item['link_480p'];
        }
        else if (resolucao == 'link_720p') {
            this.resolucao = this.item['link_720p'];
        }
        else {
            this.resolucao = this.item['link_360p'];
        }
        console.log(this.resolucao);
        this.urlVideo = this.api + '/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.resolucao;
        this.urlIMG = this.api + '/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Img'] + '_400.jpg';
        // ADD MINHA LISTA
        this.storage.ready().then(function () {
            _this.storage.get("MinhaListaAulas").then(function (data) {
                var nedo = 0;
                _this.teste = data;
                if (data == null || data == false || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste.forEach(function (item, index) {
                        if (_this.item['idvideo'] == item['idvideo']) {
                            nedo = 1;
                        }
                    });
                }
                if (nedo == 1) {
                    _this.icone = 'ico-correto-aulas';
                }
                else {
                    _this.icone = 'ico-mais-aulas';
                }
            });
        });
        // ADD CURTIR
        this.storage.ready().then(function () {
            _this.storage.get("ClassficarAulas").then(function (data) {
                var nedo2 = 0;
                _this.teste2 = data;
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste2.forEach(function (item, index) {
                        if (_this.item['idvideo'] == item['idvideo']) {
                            nedo2 = 1;
                        }
                    });
                }
                if (nedo2 == 1) {
                    _this.icoCurtir = 'Curtiu';
                }
                else {
                    _this.icoCurtir = 'Curtir';
                }
            });
        });
    };
    VideosPage.prototype.startVideo = function (item) {
        this.storage.set('resolucao', item);
        if (item == 'link_240p') {
            this.resolucaoNova = this.item['link_240p'];
        }
        else if (item == 'link_360p') {
            this.resolucaoNova = this.item['link_360p'];
        }
        else if (item == 'link_480p') {
            this.resolucaoNova = this.item['link_480p'];
        }
        else if (item == 'link_720p') {
            this.resolucaoNova = this.item['link_720p'];
        }
        else {
            this.resolucaoNova = this.item['link_360p'];
        }
        this.urlVideo = this.api + '/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.resolucaoNova;
        console.log(this.urlVideo);
    };
    VideosPage.prototype.getVincLivros = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivros()
            .subscribe(function (data) { return _this.relBooks = data.rows; }, function (err) { return console.log(err); });
    };
    VideosPage.prototype.selecionaVinc = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__livros_livros__["a" /* LivrosPage */], { item: item });
    };
    VideosPage.prototype.selecionadoVideosVinc = function (item) {
        this.navCtrl.push(VideosPage_1, { item: item });
    };
    VideosPage.prototype.getVideosVinc = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (data) { return _this.relVideos = data.rows; }, function (err) { return console.log(err); });
    };
    VideosPage.prototype.AddMinhaLista = function (item) {
        var _this = this;
        var added = 0;
        this.storage.get("MinhaListaAulas").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                /*
                this.toastCtrl.create({
                  message: "Aula adicionada com sucesso!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
                data.push({
                    "idvideo": item.idvideo,
                    "Cat": item.Cat,
                    "Titulo": item.Titulo,
                    "Subitulo": item.Subitulo,
                    "Descricao": item.Descricao,
                    "link_240p": item.link_240p,
                    "link_360p": item.link_360p,
                    "link_480p": item.link_480p,
                    "link_720p": item.link_720p,
                    "iconplay": item.iconplay,
                    "Caminho": item.Caminho,
                    "Pasta": item.Pasta,
                    "Img": item.Img,
                    "Data": item.Data,
                    "Classificacao": item.Classificacao,
                    "Tempo": item.Tempo,
                    "Ativo": item.Ativo
                });
                added = 1;
            }
            else {
                var _loop_1 = function (i) {
                    if (item.idvideo == data[i].idvideo) {
                        /*
                        this.toastCtrl.create({
                          message: "Aula removida com sucesso!",
                          duration: 2000,
                          position: 'middle',
                        }).present();*/
                        var query = data.find(function (item) { return item.idvideo === data[i].idvideo; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            if (added == 0) {
                _this.icone = 'ico-correto-aulas';
                data.push({
                    "idvideo": item.idvideo,
                    "Cat": item.Cat,
                    "Titulo": item.Titulo,
                    "Subitulo": item.Subitulo,
                    "Descricao": item.Descricao,
                    "link_240p": item.link_240p,
                    "link_360p": item.link_360p,
                    "link_480p": item.link_480p,
                    "link_720p": item.link_720p,
                    "iconplay": item.iconplay,
                    "Caminho": item.Caminho,
                    "Pasta": item.Pasta,
                    "Img": item.Img,
                    "Data": item.Data,
                    "Classificacao": item.Classificacao,
                    "Tempo": item.Tempo,
                    "Ativo": item.Ativo
                });
                /*
                this.toastCtrl.create({
                  message: "Aula adicionada com sucesso!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
            }
            if (added == 1) {
                _this.icone = 'ico-mais-aulas';
            }
            _this.storage.set("MinhaListaAulas", data).then(function () { });
        });
    };
    VideosPage.prototype.ClassficarVideo = function (item) {
        var _this = this;
        var added = 0;
        this.storage.get("ClassficarAulas").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nessa aula!",
                    duration: 2000,
                    position: 'middle',
                }).present();
                data.push({
                    "idvideo": item.idvideo
                });
                added = 1;
            }
            else {
                var _loop_2 = function (i) {
                    if (item.idvideo == data[i].idvideo) {
                        _this.toastCtrl.create({
                            message: "Você desmarcou o gostei nessa aula!",
                            duration: 2000,
                            position: 'middle',
                        }).present();
                        var query = data.find(function (item) { return item.idvideo === data[i].idvideo; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_2(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idvideo": item.idvideo
                });
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nessa aula!",
                    duration: 2000,
                    position: 'middle',
                }).present();
            }
            if (added == 1) {
                _this.icoCurtir = 'Curtir';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idvideo,
                    modulo: 'videos',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idvideo,
                    modulo: 'videos',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtir = 'Curtiu';
            }
            _this.storage.set("ClassficarAulas", data).then(function () { });
        });
    };
    VideosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    VideosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_titulos__["a" /* TitulosPage */]);
    };
    VideosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    VideosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    VideosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    VideosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    VideosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    VideosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__eventos_eventos__["a" /* EventosPage */]);
    };
    VideosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__busca_busca__["a" /* BuscaPage */]);
    };
    VideosPage = VideosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-videos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\videos\videos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content overflow-scroll="true">\n\n\n\n  <ion-card class="video-card">\n\n    <video src="{{ urlVideo }}" autobuffer controls played poster="{{ urlIMG }}" width="100%"></video>\n\n    <ion-row padding class="action-sheets-basic-page">\n\n        <ion-col style="color:#8f8f8d"> \n\n            <ion-icon name="ios-information-circle-outline" class="mr5"></ion-icon>\n\n            {{item.Classificacao}}\n\n        </ion-col>\n\n        <ion-col style="color:#8f8f8d" text-center >\n\n            <ion-icon name="ios-calendar-outline" class="mr5"></ion-icon>\n\n            {{ item.Data}}\n\n        </ion-col>\n\n        <ion-col style="color:#8f8f8d" text-right >\n\n          <ion-icon name="ios-clock-outline" class="mr5"></ion-icon>            \n\n          {{ item.Tempo}}\n\n        </ion-col>\n\n    </ion-row>    \n\n    <ion-card-content style="margin-top: -20px;">\n\n      <ion-card-title>\n\n        <h2 class="video-card-titulo">{{ item.Titulo }}</h2>\n\n        <p>{{ item.Subtitulo }}</p>\n\n      </ion-card-title>\n\n      <div style="color:#bbbbbb; margin-top:-10px;" [innerHTML]="item.Descricao"></div> \n\n    </ion-card-content>\n\n    \n\n    <ion-card-content *ngIf="item.Tipo != \'concerto\'">\n\n      <div class="icone-video-down" (click)="AddMinhaLista(item)">\n\n        <img src="assets/imgs/{{icone}}.png">\n\n        <p>Minha Lista</p>\n\n      </div>\n\n      <div class="icone-video-down" (click)="ClassficarVideo(item)">\n\n        <img src="assets/imgs/ico-curtir-aulas.jpg">\n\n        <p>{{ icoCurtir }}</p> \n\n      </div> \n\n      <div class="icone-video-down">\n\n        <img src="assets/imgs/ico-compartilhar-aulas.jpg">\n\n        <p>Compartilhar</p>\n\n      </div> \n\n      <div class="icone-video-down">\n\n        <img src="assets/imgs/ico-baixar-off.jpg">\n\n        <p style="color:#a9a9a9">Baixar para ver off-line</p>\n\n      </div> \n\n\n\n    </ion-card-content>\n\n    <ion-fab left class="video-resolucao">\n\n      <button ion-fab class="video-resolucao-btn">\n\n        <ion-icon name="md-more" class="video-resolucao-btn-icone"></ion-icon>\n\n      </button>\n\n      <ion-fab-list side="bottom" class="caixa-resolucao">\n\n        <button ion-button color="primary" class="botao-resolucao" small (click)="startVideo(data.baixa)" name="data.baixa" value="link_240p">Mobile</button>\n\n        <button ion-button color="primary" class="botao-resolucao" small  (click)="startVideo(data.media)" name="data.media" value="link_360p">Baixa</button>\n\n        <button ion-button color="primary" class="botao-resolucao" small (click)="startVideo(data.boa)" name="data.boa" value="link_480p">Média</button>\n\n        <button ion-button color="primary" class="botao-resolucao" small (click)="startVideo(data.excelente)" name="data.excelente" value="link_720p">Alta</button>\n\n      </ion-fab-list>\n\n    </ion-fab>\n\n  </ion-card>\n\n\n\n     <ion-card class="slide-card" *ngIf="item.Tipo != \'concerto\'">\n\n        <ion-card-content>\n\n          <ion-card-title class="slide-card-chamadas">\n\n            <h2 class="slide-card-titulo-chamadas">Aulas de Aprofundamento</h2>\n\n          </ion-card-title>   \n\n        </ion-card-content> \n\n        <ion-card-content style="margin-top:-10px;">\n\n            <ion-slides loop="true" autoplay="true">\n\n\n\n                <ion-slide *ngFor= "let item of relVideos" class="slide-card-li-video" (click)= "selecionadoVideosVinc(item)">\n\n                    \n\n                    <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" width="100%">\n\n                    <h3 class="titulo">{{ item.Titulo }}</h3>\n\n                                                   \n\n                </ion-slide>\n\n               \n\n                </ion-slides>\n\n          </ion-card-content>\n\n      </ion-card>\n\n\n\n    <ion-card class="slide-card" style="margin-top:-20px;" *ngIf="item.Tipo != \'concerto\'">\n\n        <ion-card-content>\n\n            <ion-card-title class="slide-card-chamadas">\n\n                <h2 class="slide-card-titulo-chamadas">Livros Relacionados</h2>\n\n            </ion-card-title>   \n\n        </ion-card-content> \n\n        <ion-card-content>\n\n            <ion-slides loop="true" autoplay="true" preloadSlide="true">\n\n                <ion-slide *ngFor= "let item of relBooks" class="slide-card-li"  (click)= "selecionaVinc(item)" >\n\n                    <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" width="105px" height="167px"/>\n\n                </ion-slide>\n\n            </ion-slides>            \n\n        </ion-card-content>\n\n    </ion-card> \n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\videos\videos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], VideosPage);
    return VideosPage;
    var VideosPage_1;
}());

//# sourceMappingURL=videos.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__verlivro_verlivro__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var LivrosPage = /** @class */ (function () {
    function LivrosPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.relLivros = '';
        this.item = [];
        this.teste = [];
        this.teste2 = [];
        this.icone = 'ico-mais';
        this.icoCurtir = 'Curtir';
        this.data = {};
        this.relBooks = '';
        this.relVideos = '';
        this.options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'no',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.api3 = 'http://app.progettoapp.com.br/arquivos/r';
        this.relLivros;
        this.getDados();
        this.getVincLivros();
        this.getVideosVinc();
    }
    LivrosPage_1 = LivrosPage;
    // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
    //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
    //return msg.concat(" \n sent from my awesome app");
    //}
    LivrosPage.prototype.regularShare = function (msg, assunto, file, link) {
        //var msg = this.compilemsg(msg);
        this.socialSharing.share(msg, assunto, file, link);
    };
    LivrosPage.prototype.getDados = function () {
        var _this = this;
        this.service.getLivros();
        this.item = this.navParams.get('item');
        //console.log(this.item);
        var imgFinal = 'http://app.progettoapp.com.br/arquivos/r/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Img'] + '_400.jpg';
        //console.log(imgFinal);
        // ADD MINHA LISTA
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaLivros").then(function (data) {
                var nedo = 0;
                _this.teste = data;
                if (data == null || data == false || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste.forEach(function (item, index) {
                        if (_this.item['idlivro'] == item['idlivro']) {
                            nedo = 1;
                        }
                    });
                }
                if (nedo == 1) {
                    _this.icone = 'ico-correto';
                }
                else {
                    _this.icone = 'ico-mais';
                }
            });
        });
        // ADD CURTIR
        this.Storage.ready().then(function () {
            _this.Storage.get("ClassficarLivro").then(function (data) {
                var nedo2 = 0;
                _this.teste2 = data;
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste2.forEach(function (item, index) {
                        if (_this.item['idlivro'] == item['idlivro']) {
                            nedo2 = 1;
                        }
                    });
                }
                if (nedo2 == 1) {
                    _this.icoCurtir = 'Curtiu';
                }
                else {
                    _this.icoCurtir = 'Curtir';
                }
            });
        });
    };
    LivrosPage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__verlivro_verlivro__["a" /* VerlivroPage */], { item: item });
    };
    LivrosPage.prototype.selecionaLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__loja_modal_loja_modal__["a" /* LojaModalPage */], { item: item });
    };
    LivrosPage.prototype.getVincLivros = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivros()
            .subscribe(function (data) { return _this.relBooks = data.rows; }, function (err) { return console.log(err); });
    };
    LivrosPage.prototype.selecionaVinc = function (item) {
        this.navCtrl.push(LivrosPage_1, { item: item });
    };
    LivrosPage.prototype.getVideosVinc = function () {
        var _this = this;
        this.service.getData()
            .subscribe(function (data) { return _this.relVideos = data.rows; }, function (err) { return console.log(err); });
    };
    LivrosPage.prototype.selecionadoVideosVinc = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__videos_videos__["a" /* VideosPage */], { item: item });
    };
    LivrosPage.prototype.AddMinhaLista = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("MinhaListaLivros").then(function (data) {
            if (data == null || data.length == 0) {
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
                added = 1;
            }
            else {
                var _loop_1 = function (i) {
                    if (item.idlivro == data[i].idlivro) {
                        /*
                        this.toastCtrl.create({
                          message: "Públicação removida da sua lista!",
                          duration: 2000,
                          position: 'middle',
                        }).present();*/
                        var query = data.find(function (item) { return item.idlivro === data[i].idlivro; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            if (added == 0) {
                _this.icone = 'ico-correto';
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
            if (added == 1) {
                _this.icone = 'ico-mais';
            }
            _this.Storage.set("MinhaListaLivros", data).then(function () { });
        });
    };
    LivrosPage.prototype.ClassficarLivro = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarLivro").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nessa públicação!",
                    duration: 2000,
                    position: 'middle',
                }).present();
                data.push({
                    "idlivro": item.idlivro
                });
                added = 1;
            }
            else {
                var _loop_2 = function (i) {
                    if (item.idlivro == data[i].idlivro) {
                        _this.toastCtrl.create({
                            message: "Você desmarcou o gostei nessa públicação!",
                            duration: 2000,
                            position: 'middle',
                        }).present();
                        var query = data.find(function (item) { return item.idlivro === data[i].idlivro; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_2(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idlivro": item.idlivro
                });
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nessa públicação!",
                    duration: 2000,
                    position: 'middle',
                }).present();
            }
            if (added == 1) {
                _this.icoCurtir = 'Curtir';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idlivro,
                    modulo: 'livros',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idlivro,
                    modulo: 'livros',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtir = 'Curtiu';
            }
            _this.Storage.set("ClassficarLivro", data).then(function () { });
        });
    };
    LivrosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
    };
    LivrosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__titulos_titulos__["a" /* TitulosPage */]);
    };
    LivrosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    LivrosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    LivrosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    LivrosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_19__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    LivrosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    LivrosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__eventos_eventos__["a" /* EventosPage */]);
    };
    LivrosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_18__busca_busca__["a" /* BuscaPage */]);
    };
    LivrosPage = LivrosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-livros',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\livros\livros.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n    <ion-card class="livros-card">\n\n        <ion-card-content style="margin:0px;">\n\n            <h1 class="tituloGrande"><i>{{ item.Titulo }}</i></h1>\n\n            <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" (click)= "selecionado(item)" class="img-capa"/>  \n\n            <ion-card-title>\n\n                <p class="detalhes"><strong>{{ item.Data }}</strong>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{ item.paginas }} páginas</p>\n\n                <div class="livros-card-btn-ler-mais" (click)= "selecionado(item)">LER</div>\n\n                <div class="desc" [innerHTML]="item.Descricao"></div> \n\n            </ion-card-title>              \n\n        </ion-card-content> \n\n        <ion-card-content>\n\n            <div class="icone-livros-down" (click)="AddMinhaLista(item)">\n\n                <img src="assets/imgs/{{ icone }}.png">\n\n                <p>Minha Lista</p>\n\n            </div>\n\n            <div class="icone-livros-down" (click)="ClassficarLivro(item)">\n\n                <img src="assets/imgs/ico-curtir.jpg">\n\n                <p>{{ icoCurtir }}</p> \n\n            </div> \n\n            <div class="icone-livros-down" (click)="regularShare(item.Titulo, \'PROGETTO APP\', imgFinal, \'app://br.com.hjweb.appprogetto\')">\n\n                <img src="assets/imgs/ico-compartilhar.jpg">\n\n                <p >Compartilhar</p>\n\n            </div> \n\n            <div class="icone-livros-down">\n\n                <img src="assets/imgs/ico-baixar-off.jpg">\n\n                <p style="color:#a29e9d">Baixar para ver off-line</p>\n\n            </div> \n\n            <div class="icone-livros-down" (click)= "selecionaLoja(item)">\n\n                <img src="assets/imgs/ico-carrinho.jpg">\n\n                <p>Comprar</p>\n\n            </div>             \n\n          </ion-card-content>            \n\n    </ion-card>\n\n\n\n    <ion-card class="slide-card" style="margin-top:10px;">\n\n        <ion-card-content>\n\n          <ion-card-title class="slide-card-chamadas">\n\n            <h2 class="slide-card-titulo-chamadas">Aulas de Aprofundamento</h2>\n\n          </ion-card-title>   \n\n        </ion-card-content> \n\n        <ion-card-content style="margin-top:-10px;">\n\n            <ion-slides loop="true" autoplay="true">\n\n\n\n                <ion-slide *ngFor= "let item of relVideos" class="slide-card-li-video" (click)= "selecionadoVideosVinc(item)">\n\n                    \n\n                    <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" width="100%">\n\n                    <h3 class="titulo">{{ item.Titulo }}</h3>\n\n                                                   \n\n                </ion-slide>\n\n               \n\n                </ion-slides>\n\n          </ion-card-content>\n\n      </ion-card>\n\n\n\n    <ion-card class="slide-card" style="margin-top:-20px;">\n\n        <ion-card-content>\n\n            <ion-card-title class="slide-card-chamadas">\n\n                <h2 class="slide-card-titulo-chamadas">Livros Relacionados</h2>\n\n            </ion-card-title>   \n\n        </ion-card-content> \n\n        <ion-card-content>\n\n            <ion-slides loop="true" autoplay="true" preloadSlide="true">\n\n                <ion-slide *ngFor= "let item of relBooks" class="slide-card-li"  (click)= "selecionaVinc(item)" >\n\n                    <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" width="105px" height="167px"/>\n\n                </ion-slide>\n\n            </ion-slides>            \n\n        </ion-card-content>\n\n    </ion-card> \n\n    \n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\livros\livros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], LivrosPage);
    return LivrosPage;
    var LivrosPage_1;
}());

//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loja_loja__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loja_revista_loja_revista__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loja_souvenirs_loja_souvenirs__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(loadingCtrl, storage, navCtrl, navParams, toastController) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.data = {};
        this.item = [];
        this.ListaItens = [];
        this.MinhaListaItens = [];
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.total = 0.0;
        this.totalNedo = 0.0;
        //this.getDados();  
        this.storage.ready().then(function () {
            _this.storage.get("ComprasCarrinho").then(function (data) {
                _this.MinhaListaItens = data;
                //console.log(this.MinhaListaItens);
                if (_this.MinhaListaItens.length > 0) {
                    _this.MinhaListaItens.forEach(function (item, index) {
                        if (item.idqual != 0) {
                            _this.total = _this.total + (item.Valor * item.qty);
                        }
                    });
                    _this.total = parseFloat(_this.total).toFixed(2);
                }
            });
        });
    }
    CarrinhoPage_1 = CarrinhoPage;
    CarrinhoPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price;
        price = item.Valor;
        var qty = item.qty;
        this.MinhaListaItens.splice(i, 1);
        this.storage.set("ComprasCarrinho", this.MinhaListaItens).then(function () {
            //this.total = this.total - (price * qty);
            _this.total = parseFloat(_this.total.toString()) - ((parseFloat(price.toString()) * qty));
            console.log('remove', _this.total);
        });
        if (this.total < 0) {
            this.total = 0.0;
        }
        if (this.MinhaListaItens.length == 0) {
            //this.showEmptyCartMessage = true;
        }
    };
    CarrinhoPage.prototype.checkout = function () {
        var _this = this;
        this.storage.get("userLoginInfo").then(function (data) {
            if (data != null) {
                _this.navCtrl.push('Checkout');
            }
            else {
                _this.navCtrl.push('Login', { next: 'Checkout' });
            }
        });
    };
    CarrinhoPage.prototype.changeQty = function (item, i, change) {
        var price;
        price = parseFloat(item.Valor);
        var qty = item.qty;
        if (change < 0 && item.qty == 1) {
            return;
        }
        if (change == 1) {
            qty++;
        }
        else {
            qty--;
        }
        item.qty = qty;
        item.amount = qty * price;
        this.MinhaListaItens[i] = item;
        this.MinhaListaItens[i] = item;
        this.storage.set("ComprasCarrinho", this.MinhaListaItens).then(function () {
        });
        this.total = (parseFloat(this.total.toString()) + (parseFloat(price.toString()) * change));
        this.total = parseFloat(this.total).toFixed(2);
    };
    CarrinhoPage.prototype.ionViewDidLoad = function () {
    };
    /*getDados() {
    
      this.storage.ready().then(()=>{
  
        this.storage.get("ComprasCarrinho").then( (data)=>{
  
          this.MinhaListaItens = data;
  
          if(data==null || data.lengt==0){
  
          }else{
  
            this.MinhaListaItens.forEach( (item, index)=>{
              this.ListaItens = item;
            })
            
          }
  
        })
      })
  
    }*/
    CarrinhoPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    CarrinhoPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__busca_busca__["a" /* BuscaPage */]);
    };
    CarrinhoPage.prototype.abrirLojaLivro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__loja_loja__["a" /* LojaPage */]);
    };
    CarrinhoPage.prototype.abrirLojaRevista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__loja_revista_loja_revista__["a" /* LojaRevistaPage */]);
    };
    CarrinhoPage.prototype.abrirLojaSouvenirs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */]);
    };
    CarrinhoPage.prototype.abrirCarrinho = function () {
        this.navCtrl.push(CarrinhoPage_1);
    };
    CarrinhoPage = CarrinhoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\carrinho\carrinho.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background: #f1ecf2;">\n\n\n\n  <ion-card class="novidades-card" *ngFor= "let item of MinhaListaItens; let i = index" >\n\n    <ion-row *ngIf="item.idqual != 0">\n\n\n\n      <ion-col col-4>\n\n        <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" >\n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n      <ion-col col-7>\n\n        <span class="btn-fechar-lista" (click)="removeFromCart(item, i)">X</span>\n\n        \n\n        <h2 class="titulo">{{ item.Titulo }}</h2>\n\n        <p class="titulo">{{ item.Tipo }}</p>\n\n        <p class="quantidade">Quantidade</p>\n\n        \n\n        <div class="bt-remove">\n\n          <p class="ico-novo" (click)="changeQty(item, i, -1)">-</p>\n\n        </div>\n\n        <div class="bt-num">{{ item.qty }}</div>\n\n        <div class="bt-add">\n\n          <p class="ico-novo" (click)="changeQty(item, i, 1)">+</p>\n\n        </div>         \n\n        \n\n        <div class="valorItemQual">R$ {{item.Valor}}</div>\n\n      </ion-col>               \n\n\n\n    </ion-row>\n\n  </ion-card>\n\n  \n\n</ion-content>\n\n<ion-footer class="menu_footer" style="background: #fff; padding: 0px; margin:0px; ">\n\n  <div class="totalCarrinho" style="border-bottom: 1px solid #f1ecf2; margin-bottom: 10px;">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <span class="carrinho-valor-titulo">Total</span>\n\n        <p class="carrinho-valor-total">R$ {{ total }}</p>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <button ion-button round (click)="Finalizar()" class="btn-comprar">COMPRAR</button> \n\n      </ion-col>               \n\n    </ion-row>    \n\n  </div>     \n\n      <div class="ico-menu-footer" style="margin-left: 9%;">\n\n          <img src="assets/imgs/ico-loja-menu-inicio.png" (click)="abrirPaginaHome()">  \n\n          <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n            Início\n\n          </p>\n\n      </div>\n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-loja-menu-livros.png" (click)="abrirLojaLivro()">   \n\n          <p class="menu_footer_texto" (click)="abrirLojaLivro()">\n\n            Físicos\n\n          </p>          \n\n      </div> \n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-loja-menu-revista.png" (click)="abrirLojaRevista()">     \n\n          <p class="menu_footer_texto" (click)="abrirLojaRevista()">\n\n            Digitais\n\n          </p>         \n\n      </div> \n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-loja-menu-souvenirs.png" (click)="abrirLojaSouvenirs()">  \n\n          <p class="menu_footer_texto" (click)="abrirLojaSouvenirs()">\n\n            Souvenirs\n\n          </p>          \n\n      </div>      \n\n  </ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], CarrinhoPage);
    return CarrinhoPage;
    var CarrinhoPage_1;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ver_pl_ver_pl__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loja_ver_loja_ver__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var PlListaPage = /** @class */ (function () {
    function PlListaPage(socialSharing, http, navCtrl, Storage, platform, service, iab, loadingCtrl, toastCtrl, navParams) {
        this.socialSharing = socialSharing;
        this.http = http;
        this.navCtrl = navCtrl;
        this.Storage = Storage;
        this.platform = platform;
        this.service = service;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.data = {};
        this.relLivros = '';
        this.item = [];
        this.relBooks = '';
        this.teste = [];
        this.teste2 = [];
        this.icone = 'ico-mais-pl';
        this.icoCurtir = 'Curtir';
        this.relVideos = '';
        this.options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'no',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.api3 = 'http://app.progettoapp.com.br/arquivos/r';
        this.relLivros;
        this.getDados();
        this.getVincLivros();
        this.getVideosVinc();
    }
    // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
    //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
    //return msg.concat(" \n sent from my awesome app");
    //}
    PlListaPage.prototype.regularShare = function (msg, assunto, file, link) {
        //var msg = this.compilemsg(msg);
        this.socialSharing.share(msg, assunto, file, link);
    };
    PlListaPage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getRevistaPl();
        this.item = this.navParams.get('item');
        var imgFinal = 'http://app.progettoapp.com.br/arquivos/r/' + this.item['Caminho'] + '/' + this.item['Pasta'] + '/' + this.item['Img'] + '_400.jpg';
        console.log(imgFinal);
        // ADD MINHA LISTA
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaPl").then(function (data) {
                var nedo = 0;
                _this.teste = data;
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste.forEach(function (item, index) {
                        if (_this.item['idpl'] == item['idpl']) {
                            nedo = 1;
                        }
                    });
                }
                if (nedo == 1) {
                    _this.icone = 'ico-correto-pl';
                }
                else {
                    _this.icone = 'ico-mais-pl';
                }
            });
        });
        // ADD CURTIR
        this.Storage.ready().then(function () {
            _this.Storage.get("ClassficarPl").then(function (data) {
                var nedo2 = 0;
                _this.teste2 = data;
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste2.forEach(function (item, index) {
                        if (_this.item['idpl'] == item['idpl']) {
                            nedo2 = 1;
                        }
                    });
                }
                if (nedo2 == 1) {
                    _this.icoCurtir = 'Curtiu';
                }
                else {
                    _this.icoCurtir = 'Curtir';
                }
            });
        });
    };
    PlListaPage.prototype.selecionado = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__ver_pl_ver_pl__["a" /* VerPlPage */], {
            item: item
        });
    };
    PlListaPage.prototype.abrirPaginaRevistaSlide = function () {
    };
    PlListaPage.prototype.selecionaLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__loja_modal_loja_modal__["a" /* LojaModalPage */], {
            item: item
        });
    };
    PlListaPage.prototype.selecionado2 = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__loja_ver_loja_ver__["a" /* LojaVerPage */], {
            item: item
        });
    };
    PlListaPage.prototype.getVincLivros = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivros()
            .subscribe(function (data) { return _this.relBooks = data.rows; }, function (err) { return console.log(err); });
    };
    PlListaPage.prototype.selecionaVinc = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__livros_livros__["a" /* LivrosPage */], {
            item: item
        });
    };
    PlListaPage.prototype.getVideosVinc = function () {
        var _this = this;
        //retorno de Dados
        this.service.getData()
            .subscribe(function (data) { return _this.relVideos = data.rows; }, function (err) { return console.log(err); });
    };
    PlListaPage.prototype.selecionadoVideosVinc = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__videos_videos__["a" /* VideosPage */], {
            item: item
        });
    };
    PlListaPage.prototype.AddMinhaLista = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("MinhaListaPl").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                /*
                this.toastCtrl.create({
                  message: "Publicação adicionada na sua lista!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
                data.push({
                    "idpl": item.idpl,
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
                added = 1;
            }
            else {
                var _loop_1 = function (i) {
                    if (item.idpl == data[i].idpl) {
                        /*
                        this.toastCtrl.create({
                          message: "Revista removida da sua lista!",
                          duration: 2000,
                          position: 'middle',
                        }).present();*/
                        var query = data.find(function (item) { return item.idpl === data[i].idpl; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            if (added == 0) {
                _this.icone = 'ico-correto-pl';
                data.push({
                    "idpl": item.idpl,
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
                  message: "Revista adicionada na sua lista!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
            }
            if (added == 1) {
                _this.icone = 'ico-mais-pl';
            }
            _this.Storage.set("MinhaListaPl", data).then(function () { });
        });
    };
    PlListaPage.prototype.ClassficarPl = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarPl").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nessa revista!",
                    duration: 2000,
                    position: 'middle',
                }).present();
                data.push({
                    "idpl": item.idpl
                });
                added = 1;
            }
            else {
                var _loop_2 = function (i) {
                    if (item.idpl == data[i].idpl) {
                        _this.toastCtrl.create({
                            message: "Você desmarcou o gostei nessa revista!",
                            duration: 2000,
                            position: 'middle',
                        }).present();
                        var query = data.find(function (item) { return item.idpl === data[i].idpl; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_2(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idpl": item.idpl
                });
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nessa revista!",
                    duration: 2000,
                    position: 'middle',
                }).present();
            }
            if (added == 1) {
                _this.icoCurtir = 'Curtir';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idpl,
                    modulo: 'pl',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idpl,
                    modulo: 'pl',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtir = 'Curtiu';
            }
            _this.Storage.set("ClassficarPl", data).then(function () { });
        });
    };
    PlListaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__home_home__["a" /* HomePage */]);
    };
    PlListaPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__titulos_titulos__["a" /* TitulosPage */]);
    };
    PlListaPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    PlListaPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    PlListaPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    PlListaPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_21__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    PlListaPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_18__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    PlListaPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_19__eventos_eventos__["a" /* EventosPage */]);
    };
    PlListaPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__busca_busca__["a" /* BuscaPage */]);
    };
    PlListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-pl-lista',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\pl-lista\pl-lista.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  \n\n    <ion-card class="livros-card">\n\n        <ion-card-content style="margin:0px;">\n\n            <h1 class="tituloGrande"><i>{{ item.Titulo }}</i></h1>\n\n            <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" (click)= "selecionado(item)" class="img-capa"/>  \n\n            <ion-card-title >\n\n                <p class="detalhes"><strong>{{ item.Data }}</strong>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{ item.paginas }} páginas</p>\n\n                <div class="livros-card-btn-ler-mais" (click)= "selecionado(item)">LER</div>\n\n                <div class="desc" [innerHTML]="item.Descricao"></div>                                  \n\n            </ion-card-title>              \n\n        </ion-card-content> \n\n        <ion-card-content>\n\n            <div class="icone-livros-down" (click)="AddMinhaLista(item)">\n\n                <img src="assets/imgs/{{icone}}.png">\n\n                <p>Minha Lista</p>\n\n            </div>\n\n            <div class="icone-livros-down" (click)="ClassficarPl(item)">\n\n                <img src="assets/imgs/ico-curtir-pl.jpg">\n\n                <p>{{ icoCurtir }}</p> \n\n            </div> \n\n            <div class="icone-livros-down" (click)="regularShare(item.Titulo, \'PROGETTO APP\', imgFinal, \'app://br.com.hjweb.appprogetto\')">\n\n                <img src="assets/imgs/ico-compartilhar-pl.jpg">\n\n                <p>Compartilhar</p>\n\n            </div> \n\n            <div class="icone-livros-down">\n\n                <img src="assets/imgs/ico-baixar-off.jpg">\n\n                <p style="color:#a29e9d">Baixar para ver off-line</p>\n\n            </div> \n\n            <div class="icone-livros-down" (click)= "selecionaLoja(item)">\n\n                <img src="assets/imgs/ico-carrinho-pl.jpg">\n\n                <p>Comprar</p>\n\n            </div>             \n\n          </ion-card-content>            \n\n    </ion-card>\n\n\n\n    <ion-card class="slide-card">\n\n        <ion-card-content>\n\n          <ion-card-title class="slide-card-chamadas">\n\n            <h2 class="slide-card-titulo-chamadas">Aulas de Aprofundamento</h2>\n\n          </ion-card-title>   \n\n        </ion-card-content> \n\n        <ion-card-content style="margin-top:-10px;">\n\n            <ion-slides loop="true" autoplay="true">\n\n\n\n                <ion-slide *ngFor= "let item of relVideos" class="slide-card-li-video" (click)= "selecionadoVideosVinc(item)">\n\n                    \n\n                    <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg">\n\n                    <h3 class="titulo">{{ item.Titulo }}</h3>\n\n                                                   \n\n                </ion-slide>\n\n               \n\n                </ion-slides>\n\n          </ion-card-content>\n\n      </ion-card>\n\n    \n\n      <ion-card class="slide-card"  style="margin-top:-20px;">\n\n          <ion-card-content>\n\n              <ion-card-title class="slide-card-chamadas">\n\n                <h2 class="slide-card-titulo-chamadas">Livros Relacionados</h2>\n\n              </ion-card-title>   \n\n            </ion-card-content> \n\n          <ion-card-content>\n\n              <ion-slides loop="true" autoplay="true" preloadSlide="true">\n\n                  <ion-slide *ngFor= "let item of relBooks" class="slide-card-li" (click)= "selecionaVinc(item)" >\n\n                      <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg" width="105px" height="167px"/>\n\n                  </ion-slide>\n\n                </ion-slides>            \n\n            </ion-card-content>\n\n        </ion-card> \n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\pl-lista\pl-lista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], PlListaPage);
    return PlListaPage;
}());

//# sourceMappingURL=pl-lista.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Audios2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_audio_service_audio_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ontoarte_ver_ontoarte_ver__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__loja_modal_loja_modal__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var Audios2Page = /** @class */ (function () {
    function Audios2Page(socialSharing, http, toastCtrl, navCtrl, navParams, service, loadingCtrl, Storage, audioService) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.Storage = Storage;
        this.audioService = audioService;
        this.item = [];
        this.itemAlbum = [];
        this.teste = [];
        this.teste2 = [];
        this.teste3 = [];
        this.teste4 = [];
        this.icone = 'ico-mais';
        this.icoCurtir = 'Curtir';
        this.iconeAudio = 'ico-mais';
        this.indexAudioMinhaLista = 0;
        this.position = 0;
        this.oldPosition = 0;
        this.iconPlay = 'play';
        this.audioInfo = "--";
        this.artistaInfo = "--";
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.Storage.get("MinhaListaAudios").then(function (data) { return _this.minhaListaAudio = data; });
        this.audioService.changePositionObservable
            .subscribe(function (value) { return _this.audioService.audioPlayer.nativeElement.currentTime = value; });
        this.getAlbum();
        this.getAudios();
        this.getDados();
        // ADD MINHA LISTA
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaAlbum").then(function (data) {
                var nedo = 0;
                _this.teste = data;
                if (data == null || data == false || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste.forEach(function (item, index) {
                        if (_this.item['idalbum'] == item['idalbum']) {
                            nedo = 1;
                        }
                    });
                }
                if (nedo == 1) {
                    _this.icone = 'ico-correto';
                }
                else {
                    _this.icone = 'ico-mais';
                }
            });
        });
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
        this.Storage.ready().then(function () {
            _this.Storage.get("ClassficarAlbum").then(function (data) {
                var nedo2 = 0;
                _this.teste2 = data;
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.teste2.forEach(function (item, index) {
                        if (_this.item['idalbum'] == item['idalbum']) {
                            nedo2 = 1;
                        }
                    });
                }
                if (nedo2 == 1) {
                    _this.icoCurtir = 'Curtiu';
                }
                else {
                    _this.icoCurtir = 'Curtir';
                }
            });
        });
        this.carregarListaCurtirFromStorage();
    }
    Audios2Page.prototype.carregarListaCurtirFromStorage = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("ClassficarAudios").then(function (data) {
                _this.minhaListaCurtir = data;
            });
        });
    };
    // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
    //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
    //return msg.concat(" \n sent from my awesome app");
    //}
    Audios2Page.prototype.regularShare = function (msg, assunto, file, link) {
        //var msg = this.compilemsg(msg);
        this.socialSharing.share(msg, assunto, file, link);
    };
    Audios2Page.prototype.getAlbum = function () {
        this.service.getAlbuns();
        this.itemAlbum = this.navParams.get('item');
        console.log(this.itemAlbum);
    };
    Audios2Page.prototype.getAudios = function () {
        var _this = this;
        //retorno de Dados
        this.service.getAudios()
            .subscribe(function (data) {
            _this.relAudios = data.rows;
            _this.loadExecutingAudio();
            console.log(_this.relAudios);
        }, function (err) { return console.log(err); });
    };
    // durationChangeEventHandler() { 
    //   this.totalMedia = this.audioService.audioPlayer.nativeElement.duration;
    //   this.audioService.emitTotalMedia(Math.round(this.totalMedia));
    //   console.log(this.totalMedia);    
    // }
    Audios2Page.prototype.startCronometro = function () {
        var _this = this;
        this.subscription = __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            _this.oldPosition = _this.audioService.audioPlayer.nativeElement.currentTime;
            _this.position = _this.audioService.audioPlayer.nativeElement.currentTime;
            console.log(_this.position);
            _this.audioService.emitPosition(_this.position);
            if (_this.audioService.totalMedia > 0) {
                if (_this.position >= _this.audioService.totalMedia) {
                    debugger;
                    console.log(_this.position + ' - ' + _this.audioService.totalMedia);
                    _this.executeNextAudio();
                }
            }
        });
    };
    Audios2Page.prototype.unsubscribePlayer = function () {
        this.subscription.unsubscribe();
    };
    Audios2Page.prototype.executeNextAudio = function () {
        var _this = this;
        debugger;
        this.unsubscribePlayer();
        setTimeout(function () {
            _this.relAudios[_this.audioService.indexAudio].iconplay = 'play';
            _this.audioService.indexAudio++;
            if (_this.audioService.indexAudio == (_this.relAudios.length - 1)) {
                _this.audioService.indexAudio = 0;
            }
            _this.relAudios[_this.audioService.indexAudio].iconplay = 'pause';
            _this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + _this.relAudios[_this.audioService.indexAudio].arquivo_audio;
            _this.audioService.audioPlayer.nativeElement.src = _this.audioService.audio;
            _this.audioPlay();
        }, 200);
    };
    Audios2Page.prototype.next = function () {
        this.audioService.indexAudio++;
        if (this.audioService.indexAudio > this.relAudios.length - 1) {
            this.audioService.indexAudio = 0;
        }
        this.toogleIconPlayList();
        this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
        this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
        this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
        this.audioPlay();
    };
    Audios2Page.prototype.back = function () {
        this.audioService.indexAudio--;
        if (this.audioService.indexAudio < 0) {
            this.audioService.indexAudio = this.relAudios.length - 1;
        }
        this.toogleIconPlayList();
        this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
        this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
        this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
        this.audioPlay();
    };
    Audios2Page.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Audios2Page.prototype.random = function () {
        this.audioService.indexAudio = this.getRandomInt(0, this.relAudios.length - 1);
        this.toogleIconPlayList();
        this.audioService.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + this.relAudios[this.audioService.indexAudio].arquivo_audio;
        this.audioService.audioPlayer.nativeElement.src = this.audioService.audio;
        this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
        this.audioPlay();
    };
    Audios2Page.prototype.audioPlay = function () {
        this.audioService.audioPlayer.nativeElement.play();
        this.startCronometro();
        this.audioService.IsExecuting = true;
        //console.log('play');
    };
    Audios2Page.prototype.audioPause = function () {
        //console.log('pause');    
        this.audioService.audioPlayer.nativeElement.pause();
    };
    Audios2Page.prototype.tooglePlay = function () {
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
        }
        else {
            this.iconPlay = 'play';
            this.relAudios[this.audioService.indexAudio].iconplay = 'play';
        }
        if (this.audioService.audioPlayer.nativeElement.paused) {
            this.audioPlay();
        }
        else {
            this.audioPause();
        }
    };
    Audios2Page.prototype.getDados = function () {
        this.audioService.audio = this.navParams.get('musica');
    };
    Audios2Page.prototype.refreshPosition = function () {
        var delta = Math.abs(this.position - this.oldPosition);
        if (delta > 3) {
            console.log('mudou');
            this.audioService.changePosition(this.position);
        }
    };
    Audios2Page.prototype.toogleIconPlayList = function () {
        for (var i = 0; i < this.relAudios.length; i++) {
            var element = this.relAudios[i];
            element.iconplay = 'play';
        }
    };
    Audios2Page.prototype.loadExecutingAudio = function () {
        if (this.audioService.isExecuting()) {
            this.relAudios[this.audioService.indexAudio].iconplay = 'pause';
            this.iconPlay = "pause";
        }
    };
    Audios2Page.prototype.startAudio = function (item, index) {
        debugger;
        //Verifica se o audio atual está executando a para a execução
        if (this.audioService.isExecuting() && this.audioService.isExecutingIndex(index)) {
            item.iconplay = 'play';
            this.iconPlay = 'play';
            this.unsubscribePlayer();
            this.audioService.audioPlayer.nativeElement.pause();
            this.audioService.totalMedia = 0;
            this.audioInfo = "--";
            this.artistaInfo = "--";
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
    };
    /*
    var musica = this.audio
  */
    Audios2Page.prototype.AbrirAudioAlbum = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__ontoarte_ver_ontoarte_ver__["a" /* OntoarteVerPage */], {
            item: item
        });
    };
    /*favorito(item){
      this.color ="secondarys";
      console.log('FAVORITO', item)
    }*/
    Audios2Page.prototype.AddMinhaLista = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("MinhaListaAlbum").then(function (data) {
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
            }
            else {
                var _loop_1 = function (i) {
                    if (item.idalbum == data[i].idalbum) {
                        var query = data.find(function (item) { return item.idalbum === data[i].idalbum; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            if (added == 0) {
                _this.icone = 'ico-correto';
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
            if (added == 1) {
                _this.icone = 'ico-mais';
            }
            _this.Storage.set("MinhaListaAlbum", data).then(function () { });
        });
    };
    Audios2Page.prototype.ClassficarAlbum = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarAlbum").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "idalbum": item.idalbum
                });
                added = 1;
            }
            else {
                var _loop_2 = function (i) {
                    if (item.idalbum == data[i].idalbum) {
                        _this.toastCtrl.create({
                            message: "Você desmarcou o gostei nesse álbum!",
                            duration: 2000,
                            position: 'middle',
                        }).present();
                        var query = data.find(function (item) { return item.idalbum === data[i].idalbum; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_2(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idalbum": item.idalbum
                });
            }
            if (added == 1) {
                _this.icoCurtir = 'Curtir';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idalbum,
                    modulo: 'albuns',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idalbum,
                    modulo: 'albuns',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtir = 'Curtiu';
            }
            _this.Storage.set("ClassficarAlbum", data).then(function () { });
        });
    };
    Audios2Page.prototype.AddMinhaListaAudio = function (item, index) {
        var _this = this;
        var indexToRemove = 0;
        this.indexAudioMinhaLista = index;
        this.Storage.get("MinhaListaAudios").then(function (data) {
            debugger;
            if (data == null || data == undefined) {
                data = [];
            }
            var filteredAudio = data.filter(function (audio, idx) {
                if (audio.idaudio == item.idaudio) {
                    indexToRemove = idx;
                    return true;
                }
                return false;
            });
            if (filteredAudio.length > 0) {
                data.splice(indexToRemove, 1);
                _this.minhaListaAudio = data;
                _this.Storage.set("MinhaListaAudios", data).then(function (data) {
                    var toast = _this.toastCtrl.create({
                        message: 'Música removida de sua lista!',
                        duration: 3000
                    });
                    toast.present();
                });
            }
            else {
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
                _this.minhaListaAudio = data;
                _this.Storage.set("MinhaListaAudios", data).then(function (data) {
                    var toast = _this.toastCtrl.create({
                        message: 'Música salva em sua lista!',
                        duration: 3000
                    });
                    toast.present();
                });
            }
        });
    };
    Audios2Page.prototype.getIconFav = function (idAudio) {
        var filteredAudio = this.minhaListaAudio.filter(function (audio) { return audio.idaudio == idAudio; });
        if (filteredAudio.length > 0) {
            return 'ico-correto';
        }
        else {
            return 'ico-mais';
        }
    };
    Audios2Page.prototype.getCurtirIcon = function (idAudio) {
        var filteredAudio = this.minhaListaCurtir.filter(function (audio) { return audio.idaudio == idAudio; });
        if (filteredAudio.length > 0) {
            return 'ico-curtir';
        }
        else {
            return 'ico-curtir-off';
        }
    };
    Audios2Page.prototype.ClassficarAudio = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarAudios").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nesse áudio!",
                    duration: 2000,
                    position: 'middle',
                }).present();
                data.push({
                    "idaudio": item.idaudio
                });
                added = 1;
            }
            else {
                var _loop_3 = function (i) {
                    if (item.idaudio == data[i].idaudio) {
                        _this.toastCtrl.create({
                            message: "Você desmarcou o gostei nesse áudio!",
                            duration: 2000,
                            position: 'middle',
                        }).present();
                        var query = data.find(function (item) { return item.idaudio === data[i].idaudio; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_3(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idaudio": item.idaudio
                });
                _this.toastCtrl.create({
                    message: "Você marcou o gostei nesse áudio!",
                    duration: 2000,
                    position: 'middle',
                }).present();
            }
            if (added == 1) {
                //this.icoCurtir = 'Curtir'; 
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idaudio,
                    modulo: 'audios',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idaudio,
                    modulo: 'audios',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                //this.icoCurtir = 'Curtiu';  
            }
            _this.minhaListaCurtir = data;
            _this.Storage.set("ClassficarAudios", data).then(function () { });
        });
    };
    Audios2Page.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    Audios2Page.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_titulos__["a" /* TitulosPage */]);
    };
    Audios2Page.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    Audios2Page.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    Audios2Page.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    Audios2Page.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_18__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    Audios2Page.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    Audios2Page.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__eventos_eventos__["a" /* EventosPage */]);
    };
    Audios2Page.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__busca_busca__["a" /* BuscaPage */]);
    };
    Audios2Page.prototype.abrirModalLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__loja_modal_loja_modal__["a" /* LojaModalPage */], { item: item });
    };
    Audios2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-audios2',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\audios2\audios2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>\n\n      <img src="http://www.redeplaneje.com.br/app/arquivos/r/albuns/3eb2bc172952e01948012cbf3df66ed5/capa_29_04_18___03_49_07_400.jpg">\n\n    </ion-col>\n\n    <ion-col col-7>\n\n      <h2 class="albumTitulo">{{ itemAlbum.Titulo }}</h2>\n\n      <h6 class="albumSubtitulo">{{ itemAlbum.Subtitulo }}</h6>\n\n      <div class="albumDesc" [innerHTML]="itemAlbum.Descricao"></div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row nomargin nopadding style="margin:0px; padding:0px;">\n\n    <ion-col col-12 text-center>\n\n      <ion-card-content nomargin nopadding style="margin:0px; padding:0px;">\n\n        <div class="icone-livros-down" (click)="AddMinhaLista(itemAlbum)">\n\n          <img src="assets/imgs/{{ icone }}.png">\n\n          <p>Minha Lista</p>\n\n        </div>\n\n        <div class="icone-livros-down" (click)="ClassficarAlbum(itemAlbum)">\n\n          <img src="assets/imgs/ico-curtir.jpg">\n\n          <p>{{ icoCurtir }}</p>\n\n        </div>\n\n        <div class="icone-livros-down" (click)="regularShare(itemAlbum.Titulo, \'PROGETTO APP\', \'http://www.redeplaneje.com.br/app/arquivos/r/albuns/3eb2bc172952e01948012cbf3df66ed5/capa_29_04_18___03_49_07_400.jpg\', \'app://br.com.hjweb.appprogetto\')">\n\n          <img src="assets/imgs/ico-compartilhar.jpg">\n\n          <p>Compartilhar</p>\n\n        </div>\n\n        <div class="icone-livros-down">\n\n          <img src="assets/imgs/ico-baixar-off.jpg">\n\n          <p style="color:#e6e6e6">Off-line</p>\n\n        </div>\n\n        <div class="icone-livros-down" (click)="abrirModalLoja(itemAlbum)">\n\n          <img src="assets/imgs/ico-carrinho.jpg">\n\n          <p>Comprar CD</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row style="margin-top: -20px;">\n\n    <ion-col col-6 text-center>\n\n      <img src="assets/imgs/{{iconPlay}}-maior.jpg" (click)="tooglePlay()">\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <img src="assets/imgs/musica-aleatorio-maior.jpg" (click)="random()">\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card *ngFor="let item of relAudios; let i = index" class="AudiosList">\n\n      <ng-container *ngIf="itemAlbum.idalbum == item.idalbum">\n\n    <ion-row>\n\n      <ion-col col-2>\n\n        <img src="http://www.redeplaneje.com.br/app/arquivos/r/albuns/3eb2bc172952e01948012cbf3df66ed5/capa_29_04_18___03_49_07_400.jpg"\n\n          width="100%">\n\n      </ion-col>\n\n      <ion-col col-8 style="border: 0px; border-bottom: 1px solid #ebebeb;">\n\n        <ion-list class="listItem">\n\n          <ion-item class="listItem">\n\n            <ion-icon (click)="startAudio(item, i)" name="{{item.iconplay}}" item-start></ion-icon>\n\n            <h2 class="tituloFaixa" (click)="startAudio(item, i)">{{item.audio}}\n\n              <Br>\n\n              <span class="subtituloFaixa" (click)="startAudio(item, i)">{{item.artista}}</span>\n\n            </h2>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-2 style="border: 0px; border-bottom: 1px solid #ebebeb;">\n\n        <div style="max-width: 50%; float: left; padding: 5px;" (click)="AddMinhaListaAudio(item, item.idaudio)">\n\n          <img src="assets/imgs/{{ getIconFav(item.idaudio) }}.png">\n\n        </div>\n\n        <div style="max-width: 50%; float: left; padding: 5px;" (click)="ClassficarAudio(item)">\n\n          <img src="assets/imgs/{{getCurtirIcon(item.idaudio)}}.jpg">\n\n        </div>\n\n        <div style="width: 100%; float: left;">\n\n          <p (click)="startAudio(item, i)">{{item.Tempo}}</p>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ng-container>\n\n  </ion-card>\n\n\n\n  <br>\n\n  <br>\n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <ion-grid class="div_player">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!-- <input type="range" min="0" max="{{totalMedia}}" [(ngModel)]="position" (change)="refreshPosition()">  -->\n\n        <ion-range class="randNedo" min="0" max="{{totalMedia}}" [(ngModel)]="position" (ionChange)="refreshPosition()">\n\n        </ion-range>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <img src="assets/imgs/random.jpg" class="imgControl" (click)="random()">\n\n      </ion-col>\n\n      <ion-col col-8 class="player_texto_musica">\n\n        {{audioInfo}}\n\n        <span class="span_texto">- {{artistaInfo}}</span>\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <img src="assets/imgs/back.jpg" class="imgControl" (click)="back()">\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <img src="assets/imgs/{{iconPlay}}.jpg" class="imgControl" (click)="tooglePlay()">\n\n      </ion-col>\n\n      <ion-col col-1>\n\n        <img src="assets/imgs/next.jpg" class="imgControl" (click)="next()">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\audios2\audios2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__providers_audio_service_audio_service__["a" /* AudioServiceProvider */]])
    ], Audios2Page);
    return Audios2Page;
}());

//# sourceMappingURL=audios2.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioServiceProvider = /** @class */ (function () {
    function AudioServiceProvider() {
        this.audio = null;
        this.totalMedia = 0;
        this.positionObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.changePositionObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.totalMediaObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.playObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.IsExecuting = false;
        this.indexAudio = 0;
        console.log('Hello AudioServiceProvider Provider');
    }
    AudioServiceProvider.prototype.emitPosition = function (val) {
        this.positionObservable.next(val);
    };
    AudioServiceProvider.prototype.changePosition = function (val) {
        this.changePositionObservable.next(val);
    };
    AudioServiceProvider.prototype.emitTotalMedia = function (val) {
        this.totalMediaObservable.next(val);
    };
    AudioServiceProvider.prototype.emitPlay = function (val) {
        this.playObservable.next(val);
    };
    AudioServiceProvider.prototype.isExecuting = function () {
        return this.IsExecuting;
    };
    AudioServiceProvider.prototype.isExecutingIndex = function (index) {
        return index == this.indexAudio;
    };
    AudioServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AudioServiceProvider);
    return AudioServiceProvider;
}());

//# sourceMappingURL=audio-service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loja_souvenirs_loja_souvenirs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loja_revista_loja_revista__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var LojaPage = /** @class */ (function () {
    function LojaPage(navCtrl, service, loadingCtrl, navParams, modalCtrl, Storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.data = {};
        this.relLivros = '';
        this.relLivrosCats = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados();
        this.getDadosCat();
        //qt carrinho
        this.Storage.ready().then(function () {
            _this.Storage.get("ComprasCarrinho").then(function (data) {
                _this.qtCarrinho = data.length - 1;
            });
        });
    }
    LojaPage_1 = LojaPage;
    LojaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0);
            _this.productSlides.slideNext();
        }, 3000);
    };
    LojaPage.prototype.getDados = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivros()
            .subscribe(function (data) { return _this.relLivros = data.rows; }, function (err) { return console.log(err); });
    };
    LojaPage.prototype.getDadosCat = function () {
        var _this = this;
        //retorno de Dados
        this.service.getLivrosCategorias()
            .subscribe(function (data) { return _this.relLivrosCats = data.rows; }, function (err) { return console.log(err); });
    };
    LojaPage.prototype.abrirModalLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__loja_modal_loja_modal__["a" /* LojaModalPage */], { item: item });
    };
    LojaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    LojaPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__busca_busca__["a" /* BuscaPage */]);
    };
    LojaPage.prototype.abrirLojaLivro = function () {
        this.navCtrl.setRoot(LojaPage_1);
    };
    LojaPage.prototype.abrirLojaRevista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__loja_revista_loja_revista__["a" /* LojaRevistaPage */]);
    };
    LojaPage.prototype.abrirLojaSouvenirs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */]);
    };
    LojaPage.prototype.abrirCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], LojaPage.prototype, "productSlides", void 0);
    LojaPage = LojaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loja',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja\loja.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_carrinho" (click)="abrirCarrinho()">\n\n      <ion-badge item-end color="danger" class="menu-loja-bola">{{qtCarrinho}}</ion-badge>\n\n      <ion-icon name="ios-cart-outline" class="header_carrinho2"></ion-icon> \n\n    </div>    \n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">     \n\n    </div>        \n\n  </ion-navbar>\n\n</ion-header> \n\n<ion-content>\n\n\n\n  <ion-card class="card-back">\n\n    <img src="assets/imgs/background-header-livros.jpg" />  \n\n    <div class="titulo-card-back">Loja</div>\n\n  </ion-card>\n\n  <ion-card class="slide-card">\n\n      <ion-card-content>\n\n\n\n          <ion-row *ngFor= "let itemCat of relLivrosCats">\n\n              <ion-card-title class="slide-card-chamadas">\n\n                  <h2 class="slide-card-titulo-chamadas">{{ itemCat.Categoria }}</h2>\n\n              </ion-card-title>   \n\n              <ion-col col12>\n\n\n\n                    <ion-slides loop="false" slidesPerView="3" parallax="true" speed="1000" pager="false" #productSlides>\n\n                      <ng-container *ngFor= "let item of relLivros">\n\n                          <ion-slide *ngIf="itemCat.idlivro_cat === item.Cat" class="slide-card-li">\n\n                            <div class="slide-card-li-fundo">\n\n                              <img class="slide-card-li-img" (click)= "abrirModalLoja(item)" src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg"/>\n\n                            </div>\n\n                              <h3 (click)= "abrirModalLoja(item)" class="livro-h3">{{ item.Titulo }}</h3>\n\n                              <div (click)= "abrirModalLoja(item)" class="livro-p">{{ item.Valor }}</div>\n\n                          </ion-slide>\n\n                      </ng-container>\n\n                  </ion-slides>  \n\n\n\n              </ion-col>\n\n          </ion-row> \n\n      </ion-card-content> \n\n  </ion-card>   \n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer" style="margin-left: 9%;">\n\n        <img src="assets/imgs/ico-loja-menu-inicio.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Início\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-livros-s.png" (click)="abrirLojaLivro()">   \n\n        <p class="menu_footer_texto texto_selecionado" (click)="abrirLojaLivro()">\n\n          Físicos\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-revista.png" (click)="abrirLojaRevista()">     \n\n        <p class="menu_footer_texto" (click)="abrirLojaRevista()">\n\n          Digitais\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-souvenirs.png" (click)="abrirLojaSouvenirs()">  \n\n        <p class="menu_footer_texto" (click)="abrirLojaSouvenirs()">\n\n          Souvenirs\n\n        </p>          \n\n    </div>      \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja\loja.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]])
    ], LojaPage);
    return LojaPage;
    var LojaPage_1;
}());

//# sourceMappingURL=loja.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaSouvenirsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loja_revista_loja_revista__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loja_loja__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carrinho_carrinho__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LojaSouvenirsPage = /** @class */ (function () {
    function LojaSouvenirsPage(navCtrl, service, loadingCtrl, navParams, modalCtrl, Storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.data = {};
        this.relAlbuns = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getAlbunsFor();
        //qt carrinho
        this.Storage.ready().then(function () {
            _this.Storage.get("ComprasCarrinho").then(function (data) {
                _this.qtCarrinho = data.length - 1;
            });
        });
    }
    LojaSouvenirsPage_1 = LojaSouvenirsPage;
    LojaSouvenirsPage.prototype.getAlbunsFor = function () {
        var _this = this;
        //retorno de Dados
        this.service.getAlbuns()
            .subscribe(function (data) {
            _this.relAlbuns = data.rows;
            console.log('album', _this.relAlbuns);
        }, function (err) { return console.log(err); });
    };
    LojaSouvenirsPage.prototype.abrirModalLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loja_modal_loja_modal__["a" /* LojaModalPage */], { item: item });
    };
    LojaSouvenirsPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LojaSouvenirsPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__busca_busca__["a" /* BuscaPage */]);
    };
    LojaSouvenirsPage.prototype.abrirLojaLivro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__loja_loja__["a" /* LojaPage */]);
    };
    LojaSouvenirsPage.prototype.abrirLojaRevista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__loja_revista_loja_revista__["a" /* LojaRevistaPage */]);
    };
    LojaSouvenirsPage.prototype.abrirLojaSouvenirs = function () {
        this.navCtrl.setRoot(LojaSouvenirsPage_1);
    };
    LojaSouvenirsPage.prototype.abrirCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    LojaSouvenirsPage = LojaSouvenirsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-loja-souvenirs',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja-souvenirs\loja-souvenirs.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_carrinho" (click)="abrirCarrinho()">\n\n      <ion-badge item-end color="danger" class="menu-loja-bola">{{qtCarrinho}}</ion-badge>\n\n      <ion-icon name="ios-cart-outline" class="header_carrinho2"></ion-icon> \n\n    </div>    \n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">     \n\n    </div>        \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  \n\n    <ion-card class="card-back">\n\n      <img src="assets/imgs/background-header-livros.jpg" />  \n\n      <div class="titulo-card-back">Loja</div>\n\n    </ion-card>\n\n    \n\n    <ion-card class="slide-card">\n\n      <ion-row padding>\n\n        <ion-col col-12 class="slide-card-chamadas mb30">\n\n          <h2 class="slide-card-titulo-chamadas">\n\n            <strong>CD / DVDs</strong> \n\n          </h2>\n\n        </ion-col>\n\n        <ion-col col-4 *ngFor= "let item of relAlbuns" (click)="abrirModalLoja(item)" class="caixa-itens">\n\n          <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg"/>\n\n          <h3 class="livro-h3">{{ item.Titulo }}</h3>\n\n          <div class="livro-p">{{ item.Valor }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card> \n\n  \n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer" style="margin-left: 9%;">\n\n        <img src="assets/imgs/ico-loja-menu-inicio.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Início\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-livros.png" (click)="abrirLojaLivro()">   \n\n        <p class="menu_footer_texto" (click)="abrirLojaLivro()">\n\n          Físicos\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-revista.png" (click)="abrirLojaRevista()">     \n\n        <p class="menu_footer_texto" (click)="abrirLojaRevista()">\n\n          Digitais\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-souvenirs-s.png" (click)="abrirLojaSouvenirs()">  \n\n        <p class="menu_footer_texto texto_selecionado" (click)="abrirLojaSouvenirs()">\n\n          Souvenirs\n\n        </p>          \n\n    </div>      \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja-souvenirs\loja-souvenirs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], LojaSouvenirsPage);
    return LojaSouvenirsPage;
    var LojaSouvenirsPage_1;
}());

//# sourceMappingURL=loja-souvenirs.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaRevistaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loja_souvenirs_loja_souvenirs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loja_loja__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carrinho_carrinho__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LojaRevistaPage = /** @class */ (function () {
    function LojaRevistaPage(navCtrl, service, loadingCtrl, navParams, modalCtrl, Storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Storage = Storage;
        this.data = {};
        this.relBooks = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados1();
        //qt carrinho
        this.Storage.ready().then(function () {
            _this.Storage.get("ComprasCarrinho").then(function (data) {
                _this.qtCarrinho = data.length - 1;
            });
        });
    }
    LojaRevistaPage_1 = LojaRevistaPage;
    LojaRevistaPage.prototype.getDados1 = function () {
        var _this = this;
        //retorno de Dados
        this.service.getRevistaPl()
            .subscribe(function (data) { return _this.relBooks = data.rows; }, function (err) { return console.log(err); });
    };
    LojaRevistaPage.prototype.abrirModalLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__loja_modal_loja_modal__["a" /* LojaModalPage */], { item: item });
    };
    LojaRevistaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LojaRevistaPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__busca_busca__["a" /* BuscaPage */]);
    };
    LojaRevistaPage.prototype.abrirLojaLivro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__loja_loja__["a" /* LojaPage */]);
    };
    LojaRevistaPage.prototype.abrirLojaRevista = function () {
        this.navCtrl.setRoot(LojaRevistaPage_1);
    };
    LojaRevistaPage.prototype.abrirLojaSouvenirs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */]);
    };
    LojaRevistaPage.prototype.abrirCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    LojaRevistaPage = LojaRevistaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-loja-revista',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja-revista\loja-revista.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_carrinho" (click)="abrirCarrinho()">\n\n      <ion-badge item-end color="danger" class="menu-loja-bola">{{qtCarrinho}}</ion-badge>\n\n      <ion-icon name="ios-cart-outline" class="header_carrinho2"></ion-icon> \n\n    </div>    \n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">     \n\n    </div>        \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  \n\n    <ion-card class="card-back">\n\n      <img src="assets/imgs/background-header-livros.jpg" />  \n\n      <div class="titulo-card-back">Loja</div>\n\n    </ion-card>\n\n    \n\n    <ion-card class="slide-card">\n\n      <ion-row nomargin padding>\n\n        <ion-col col-12 class="slide-card-chamadas mb30">\n\n          <h2 class="slide-card-titulo-chamadas">\n\n            <strong>Entrevistas de Capa</strong> \n\n          </h2>\n\n        </ion-col>\n\n        <ion-col col-4 *ngFor= "let item of relBooks" (click)="abrirModalLoja(item)" class="caixa-itens">\n\n          <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Img }}_400.jpg"/>\n\n          <h3 class="livro-h3">{{ item.Titulo }}</h3>\n\n          <div class="livro-p">{{ item.Valor }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card> \n\n  \n\n  \n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer" style="margin-left: 9%;">\n\n        <img src="assets/imgs/ico-loja-menu-inicio.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Início\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-livros.png" (click)="abrirLojaLivro()">   \n\n        <p class="menu_footer_texto" (click)="abrirLojaLivro()">\n\n          Físicos\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-revista-s.png" (click)="abrirLojaRevista()">     \n\n        <p class="menu_footer_texto texto_selecionado" (click)="abrirLojaRevista()">\n\n          Digitais\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-souvenirs.png" (click)="abrirLojaSouvenirs()">  \n\n        <p class="menu_footer_texto" (click)="abrirLojaSouvenirs()">\n\n          Souvenirs\n\n        </p>          \n\n    </div>      \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja-revista\loja-revista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], LojaRevistaPage);
    return LojaRevistaPage;
    var LojaRevistaPage_1;
}());

//# sourceMappingURL=loja-revista.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pl_lista_pl_lista__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audios2_audios2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comentarios_comentarios__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var HomePage = /** @class */ (function () {
    function HomePage(socialSharing, http, Storage, toastCtrl, navCtrl, service, storage, loadingCtrl, iab) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.http = http;
        this.Storage = Storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.service = service;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.item = [];
        this.data = {};
        this.resolucao = '';
        this.myDate = {};
        this.icoCurtirAulas = 'ico-curtir-off.jpg';
        this.icoCurtirPl = 'ico-curtir-off.jpg';
        this.icoCurtirLivros = 'ico-curtir-off.jpg';
        this.icoCurtirMusicas = 'ico-curtir-off.jpg';
        this.relCurtidas = '';
        this.testeAulas = [];
        this.storeData = [];
        this.relnovidades = '';
        this.relnovidadesPega = '';
        this.relVideos = '';
        this.IdUserQual = {};
        this.EmailUserQual = {};
        this.NomeUserQual = {};
        this.NivelUserQual = {};
        this.PlanoUserQual = {};
        this.FotoUserQual = {};
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.myDate = new Date().toISOString();
        this.userDadosGuardados();
        this.getDadosPega();
        this.getDadosCurtidas();
        this.storage.get('QualUser').then(function (val) {
            _this.IdUserQual = val;
        });
    }
    HomePage_1 = HomePage;
    // --- COMPARTILHAR --- // 
    //compilemsg(index):string{
    //var msg = this.quotes[index].content + "-" + this.quotes[index].title ;
    //return msg.concat(" \n sent from my awesome app");
    //}
    HomePage.prototype.regularShare = function (msg, assunto, file, link) {
        //var msg = this.compilemsg(msg);
        this.socialSharing.share(msg, assunto, file, link);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                    _this.nNovidades(_this.numerosNovidadesAtual);
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
        }, function (err) { return console.log(err); });
    };
    HomePage.prototype.nNovidades = function (dados) {
        //console.log('akiii',dados)
        this.qtdePublicacoes = this.relnovidades.length - dados;
        //console.log('akiii',this.qtdePublicacoes)
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.storage.get('numeroPublicacoes').then(function (val) {
            if (val != null) {
                _this.numerosNovidadesAtual = val;
            }
            else {
                _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
            }
        });
        setTimeout(function () {
            //console.log(this.relnovidades.length)
            if (_this.relnovidades.length >= _this.numerosNovidadesAtual) {
                _this.storage.set('relNovidades', _this.relnovidades);
                _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                //this.navCtrl.setRoot(HomePage)
            }
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.getDadosPega = function () {
        var _this = this;
        this.service.getNovidades()
            .subscribe(function (data) {
            _this.relnovidadesPega = data.rows;
            /*if(data.rows[0].idnovidade == seu.storage.id){
              //faz algo
            }else{
              //faz algo
            }*/
        }, function (err) { return console.log(err); });
    };
    HomePage.prototype.getDadosCurtidas = function () {
        var _this = this;
        this.service.getCurtidas()
            .subscribe(function (data) {
            _this.relCurtidas = data.rows;
        }, function (err) { return console.log(err); });
    };
    HomePage.prototype.abrirComentarios = function (idqualSel, moduloSel) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__comentarios_comentarios__["a" /* ComentariosPage */], { idqualSel: idqualSel, moduloSel: moduloSel });
    };
    HomePage.prototype.selecionarNovidades = function (item) {
        if (item['Tipo'] == 'video') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__videos_videos__["a" /* VideosPage */], { item: item });
        }
        else if (item['Tipo'] == 'pl') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pl_lista_pl_lista__["a" /* PlListaPage */], { item: item });
        }
        else if (item['Tipo'] == 'musica') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__audios2_audios2__["a" /* Audios2Page */], { item: item });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__livros_livros__["a" /* LivrosPage */], { item: item });
        }
    };
    HomePage.prototype.ClassficarLivro = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarLivro").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "idlivro": item.idlivro
                });
                added = 1;
            }
            else {
                var _loop_1 = function (i) {
                    if (item.idlivro == data[i].idlivro) {
                        var query = data.find(function (item) { return item.idlivro === data[i].idlivro; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idlivro": item.idlivro
                });
            }
            if (added == 1) {
                _this.icoCurtirLivros = 'ico-curtir-off.jpg';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idlivro,
                    user_id_qual: _this.IdUserQual,
                    modulo: 'livros',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idlivro,
                    user_id_qual: _this.IdUserQual,
                    modulo: 'livros',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtirLivros = 'ico-curtir.jpg';
            }
            _this.Storage.set("ClassficarLivro", data).then(function () { });
        });
    };
    HomePage.prototype.ClassficarPl = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarPl").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                /*this.toastCtrl.create({
                  message: "Você marcou o gostei nessa revista!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
                data.push({
                    "idpl": item.idpl
                });
                added = 1;
            }
            else {
                var _loop_2 = function (i) {
                    if (item.idpl == data[i].idpl) {
                        /*this.toastCtrl.create({
                          message: "Você desmarcou o gostei nessa revista!",
                          duration: 2000,
                          position: 'middle',
                        }).present();*/
                        var query = data.find(function (item) { return item.idpl === data[i].idpl; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_2(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idpl": item.idpl
                });
                /*this.toastCtrl.create({
                  message: "Você marcou o gostei nessa revista!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
            }
            if (added == 1) {
                //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
                //icoCurtirPl: string = 'ico-curtir-pl.jpg';
                //icoCurtirLivros: string = 'ico-curtir.jpg';
                //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idpl,
                    modulo: 'pl',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idpl,
                    modulo: 'pl',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
                //icoCurtirPl: string = 'ico-curtir-pl.jpg';
                //icoCurtirLivros: string = 'ico-curtir.jpg';
                //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
            }
            _this.Storage.set("ClassficarPl", data).then(function () { });
        });
    };
    HomePage.prototype.ClassficarAula = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarAulas").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                /*this.toastCtrl.create({
                  message: "Você marcou o gostei nessa aula!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
                data.push({
                    "idvideo": item.idvideo
                });
                added = 1;
            }
            else {
                var _loop_3 = function (i) {
                    if (item.idvideo == data[i].idvideo) {
                        /*this.toastCtrl.create({
                          message: "Você desmarcou o gostei nessa aula!",
                          duration: 2000,
                          position: 'middle',
                        }).present();*/
                        var query = data.find(function (item) { return item.idvideo === data[i].idvideo; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_3(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idvideo": item.idvideo
                });
            }
            if (added == 1) {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idvideo,
                    modulo: 'videos',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtirAulas = 'ico-curtir-off.jpg';
                console.log('vai', _this.icoCurtirAulas);
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idvideo,
                    modulo: 'videos',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                _this.icoCurtirAulas = 'ico-curtir-aulas.jpg';
                console.log('vai', _this.icoCurtirAulas);
            }
            _this.Storage.set("ClassficarAulas", data).then(function () { });
        });
    };
    HomePage.prototype.ClassficarAlbum = function (item) {
        var _this = this;
        var added = 0;
        this.Storage.get("ClassficarAlbum").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                /*this.toastCtrl.create({
                  message: "Você marcou o gostei nesse álbum!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
                data.push({
                    "idalbum": item.idalbum
                });
                added = 1;
            }
            else {
                var _loop_4 = function (i) {
                    if (item.idalbum == data[i].idalbum) {
                        /*this.toastCtrl.create({
                          message: "Você desmarcou o gostei nesse álbum!",
                          duration: 2000,
                          position: 'middle',
                        }).present();*/
                        var query = data.find(function (item) { return item.idalbum === data[i].idalbum; });
                        var toremove = data.indexOf(query);
                        data.splice(toremove, 1);
                        added = 1;
                    }
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_4(i);
                }
            }
            if (added == 0) {
                data.push({
                    "idalbum": item.idalbum
                });
                /*this.toastCtrl.create({
                  message: "Você marcou o gostei nesse álbum!",
                  duration: 2000,
                  position: 'middle',
                }).present();*/
            }
            if (added == 1) {
                //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
                //icoCurtirPl: string = 'ico-curtir-pl.jpg';
                //icoCurtirLivros: string = 'ico-curtir.jpg';
                //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idalbum,
                    modulo: 'albuns',
                    acao: 'menos'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
            }
            else {
                //ENVIA O INSERT
                var headerOptions = { 'Content-Type': 'application/json' };
                var headers = new Headers(headerOptions);
                var link = 'http://app.progettoapp.com.br/midias/curtir_update.php';
                _this.http.post(link, JSON.stringify({
                    idqual: item.idalbum,
                    modulo: 'albuns',
                    acao: 'mais'
                })).subscribe(function (data) {
                    //this.submitDetalhePedido(this.numero_pedido, gUsuario.email);
                });
                //icoCurtirAulas: string = 'ico-curtir-aulas.jpg';
                //icoCurtirPl: string = 'ico-curtir-pl.jpg';
                //icoCurtirLivros: string = 'ico-curtir.jpg';
                //icoCurtirMusicas: string = 'ico-curtir-musica.jpg';
            }
            _this.Storage.set("ClassficarAlbum", data).then(function () { });
        });
    };
    HomePage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__titulos_titulos__["a" /* TitulosPage */]);
    };
    HomePage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    HomePage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    HomePage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    HomePage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    HomePage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_17__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    HomePage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_18__eventos_eventos__["a" /* EventosPage */]);
    };
    HomePage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_19__busca_busca__["a" /* BuscaPage */]);
    };
    HomePage.prototype.userDadosGuardados = function () {
        var _this = this;
        this.storage.get('QualUser').then(function (val) {
            console.log(val);
            _this.IdUserQual = val;
        });
        this.storage.get('QualEmail').then(function (val) {
            console.log(val);
            _this.EmailUserQual = val;
        });
        this.storage.get('QualNome').then(function (val) {
            console.log(val);
            _this.NomeUserQual = val;
        });
        this.storage.get('QualNivel').then(function (val) {
            console.log(val);
            _this.NivelUserQual = val;
        });
        this.storage.get('QualPlano').then(function (val) {
            console.log(val);
            if (val == '0') {
                _this.PlanoUserQual = 'Plano Empresarial';
            }
            else {
                _this.PlanoUserQual = 'Plano Empresarial';
            }
        });
        this.storage.get('QualFoto').then(function (val) {
            _this.FotoUserQual = val;
        });
    };
    HomePage.prototype.menu = function () {
        //console.log('MENUUUU')
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <ion-card *ngFor= "let item of relnovidadesPega" class="novidades-card" (ionChange)="checkFocus(item)">\n\n        <ion-item (click)= "selecionarNovidades(item)" >\n\n          \n\n          <img class="avatar" src="assets/imgs/{{ item.Icone }}">\n\n          \n\n        <h2 class="video-card-categoria">\n\n          {{ item.Categoria }} \n\n        </h2>   \n\n        <span class="data_hora_timeline">\n\n          <ion-icon name="ios-clock-outline" style="margin-right:3px;"></ion-icon>\n\n          {{ item.DataNovidade }}\n\n        </span>\n\n        </ion-item>\n\n        <ion-card-content (click)= "selecionarNovidades(item)" >\n\n            <h2 class="video-card-titulo">{{ item.TituloNovidade }}</h2>\n\n            <div class="video-card-desc" [innerHTML]="item.DescricaoNovidade"></div> \n\n        </ion-card-content>\n\n        <ion-card-content class="box-novidades" (click)= "selecionarNovidades(item)" >\n\n          <img src="{{ api }}/novidades/{{ item.PastaNovidade }}/{{ item.ImgNovidade }}_400.jpg" />\n\n        </ion-card-content>\n\n\n\n        <div *ngIf="item.Tipo == \'video\'">\n\n          <ion-item class="video-play-card">\n\n              <div class="video-play-card-btn">\n\n                <img src="assets/imgs/ico-btn-play-red.png">\n\n              </div>\n\n              <div class="video-play-card-tempo">{{ item.Tempo }}</div>\n\n              <div class="video-play-card-views">{{ item.ContCurtir }} Curtidas</div>\n\n          </ion-item>\n\n          <ion-row style="margin: -45px 0px 8px 0px;">\n\n              <div class="ico-curtir-img">\n\n                <img src="assets/imgs/{{ icoCurtirAulas }}" (click)="ClassficarAula(item)">\n\n              </div>\n\n              <div class="ico-curtir-m" (click)="ClassficarAula(item)">\n\n                {{ item.ContCurtir }}\n\n              </div>\n\n              <div class="barra-down"></div>\n\n              <div class="ico-comentarios-img">\n\n                <img src="assets/imgs/ico-comentarios-m.jpg" (click)="abrirComentarios(item.idvideo, \'videos\')">\n\n              </div>\n\n              <div class="ico-comentarios-m" (click)="abrirComentarios(item.idvideo, \'videos\')">\n\n                {{ item.ContComentarios }}\n\n              </div>\n\n              <div class="barra-down"></div> \n\n              <div class="ico-compartilhar-img">\n\n                <img src="assets/imgs/ico-compartilhar-m.jpg" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n              </div>\n\n              <div class="ico-compartilhar-m" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n                \n\n              </div>\n\n            </ion-row>            \n\n        </div>\n\n\n\n        <div *ngIf="item.Tipo == \'pl\'">\n\n          <ion-row style="margin: 8px 0px 8px 0px;">\n\n            <div class="ico-curtir-img">\n\n                <img src="assets/imgs/{{ icoCurtirPl }}" (click)="ClassficarPl(item)">\n\n            </div>\n\n            <div class="ico-curtir-m" (click)="ClassficarPl(item)">\n\n              {{ item.ContCurtir }}\n\n            </div>\n\n            <div class="barra-down"></div>\n\n            <div class="ico-comentarios-img">\n\n              <img src="assets/imgs/ico-comentarios-m.jpg" (click)="abrirComentarios(item.idpl, \'pl\')">\n\n            </div>\n\n            <div class="ico-comentarios-m" (click)="abrirComentarios(item.idpl, \'pl\')">\n\n              {{ item.ContComentarios }}\n\n            </div>\n\n            <div class="barra-down"></div> \n\n            <div class="ico-compartilhar-img">\n\n              <img src="assets/imgs/ico-compartilhar-m.jpg" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n            </div>\n\n            <div class="ico-compartilhar-m" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n              \n\n            </div>\n\n          </ion-row>          \n\n        </div>\n\n          \n\n        <div *ngIf="item.Tipo == \'livros\'">\n\n          <ion-row style="margin: 8px 0px 8px 0px;">\n\n            <div class="ico-curtir-img">\n\n                <img src="assets/imgs/{{ icoCurtirLivros }}" (click)="ClassficarLivro(item)">\n\n            </div>\n\n            <div class="ico-curtir-m" (click)="ClassficarLivro(item)">\n\n              {{ item.ContCurtir }}\n\n            </div>\n\n            <div class="barra-down"></div>\n\n            <div class="ico-comentarios-img">\n\n              <img src="assets/imgs/ico-comentarios-m.jpg" (click)="abrirComentarios(item.idlivro, \'livros\')">\n\n            </div>\n\n            <div class="ico-comentarios-m" (click)="abrirComentarios(item.idlivro, \'livros\')">\n\n              {{ item.ContComentarios }}\n\n            </div>\n\n            <div class="barra-down"></div> \n\n            <div class="ico-compartilhar-img">\n\n              <img src="assets/imgs/ico-compartilhar-m.jpg" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n            </div>\n\n            <div class="ico-compartilhar-m" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n              \n\n            </div>\n\n          </ion-row>\n\n        </div>\n\n        \n\n        <div *ngIf="item.Tipo == \'musica\'">\n\n          <ion-row style="margin: 8px 0px 8px 0px;">\n\n            <div class="ico-curtir-img">\n\n              <img src="assets/imgs/{{ icoCurtirMusicas }}" (click)="ClassficarAlbum(item)">\n\n            </div>\n\n            <div class="ico-curtir-m" (click)="ClassficarAlbum(item)">\n\n              {{ item.ContCurtir }}\n\n            </div>\n\n            <div class="barra-down"></div>\n\n            <div class="ico-comentarios-img">\n\n              <img src="assets/imgs/ico-comentarios-m.jpg" (click)="abrirComentarios(item.idalbum, \'musica\')">\n\n            </div>\n\n            <div class="ico-comentarios-m" (click)="abrirComentarios(item.idalbum, \'musica\')">\n\n              {{ item.ContComentarios }}\n\n            </div>\n\n            <div class="barra-down"></div> \n\n            <div class="ico-compartilhar-img">\n\n              <img src="assets/imgs/ico-compartilhar-m.jpg" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n            </div>\n\n            <div class="ico-compartilhar-m" (click)="regularShare(item.Titulo, \'PROGETTO APP\', \'\', \'app://br.com.hjweb.appprogetto\')">\n\n              \n\n            </div>\n\n          </ion-row>           \n\n        </div>\n\n\n\n    </ion-card>  \n\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles" >\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades-s.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto menu_footer_texto_novidades" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */], __WEBPACK_IMPORTED_MODULE_2__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__minha_lista_publicacoes_minha_lista_publicacoes__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__minha_lista_pl_minha_lista_pl__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__minha_lista_ontoarte_minha_lista_ontoarte__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__minha_lista_aulas_minha_lista_aulas__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MinhaListaPage = /** @class */ (function () {
    function MinhaListaPage(loadingCtrl, Storage, service, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.Storage = Storage;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.rel1 = '';
        this.rel2 = '';
        this.rel3 = '';
        this.item = [];
        this.LivrosItens = [];
        this.plItens = [];
        this.VideoItens = [];
        this.OntoItens = [];
        this.relnovidades = '';
        this.getDados();
    }
    MinhaListaPage.prototype.getDados = function () {
    };
    MinhaListaPage.prototype.abriLivro = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__livros_livros__["a" /* LivrosPage */], {
            item: item
        });
    };
    MinhaListaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.Storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.Storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.Storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.Storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    MinhaListaPage.prototype.abrirPaginaMinhaListaPublicacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__minha_lista_publicacoes_minha_lista_publicacoes__["a" /* MinhaListaPublicacoesPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaMinhaListaAulas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__minha_lista_aulas_minha_lista_aulas__["a" /* MinhaListaAulasPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaMinhaListaPl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__minha_lista_pl_minha_lista_pl__["a" /* MinhaListaPlPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaMinhaListaOntoarte = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__minha_lista_ontoarte_minha_lista_ontoarte__["a" /* MinhaListaOntoartePage */]);
    };
    MinhaListaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__home_home__["a" /* HomePage */]);
    };
    MinhaListaPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__titulos_titulos__["a" /* TitulosPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    MinhaListaPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__eventos_eventos__["a" /* EventosPage */]);
    };
    MinhaListaPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__busca_busca__["a" /* BuscaPage */]);
    };
    MinhaListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista\minha-lista.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n<ion-grid class="pb30 pt20">\n\n  <ion-row>\n\n    <ion-col col-12 text-center class="titulo-minhalista">\n\n      <h2>Minha Lista</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid class="pb30">\n\n  <ion-row>    \n\n    <ion-col col-12 text-center class="subtitulo-minhalista">\n\n        Selecione o que você<Br>\n\n        salvou anteriomente\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid class="pb30">\n\n  <ion-row>\n\n    <ion-col col-2></ion-col>\n\n    <ion-col col-4>\n\n      <div class="ico-minhalista-col">\n\n          <img src="assets/imgs/ico-menu-footer-publicacoes-s.png" (click)="abrirPaginaMinhaListaPublicacao()">  \n\n          <p class="texto-minhalista menu_footer_texto_livros" (click)="abrirPaginaMinhaListaPublicacao()">\n\n            Públicações\n\n          </p>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-4>\n\n      <div class="ico-minhalista-col">\n\n          <img src="assets/imgs/ico-menu-footer-pl-s.png" (click)="abrirPaginaMinhaListaPl()">  \n\n          <p class="texto-minhalista menu_footer_texto_pl" (click)="abrirPaginaMinhaListaPl()">\n\n            Líder\n\n          </p>\n\n      </div>\n\n    </ion-col> \n\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid>\n\n  <ion-row>    \n\n    <ion-col col-2></ion-col>\n\n    <ion-col col-4>\n\n      <div class="ico-minhalista-col">\n\n          <img src="assets/imgs/ico-menu-footer-aulas-s.png" (click)="abrirPaginaMinhaListaAulas()">  \n\n          <p class="texto-minhalista menu_footer_texto_aulas" (click)="abrirPaginaMinhaListaAulas()">\n\n            Aulas\n\n          </p>\n\n      </div>\n\n    </ion-col>  \n\n    <ion-col col-4>\n\n      <div class="ico-minhalista-col">\n\n          <img src="assets/imgs/ico-menu-footer-ontoarte-s.png" (click)="abrirPaginaMinhaListaOntoarte()">  \n\n          <p class="texto-minhalista menu_footer_texto_ontoarte" (click)="abrirPaginaMinhaListaOntoarte()">\n\n            Músicas\n\n          </p>\n\n      </div>\n\n    </ion-col>     \n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista\minha-lista.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaListaPage);
    return MinhaListaPage;
}());

//# sourceMappingURL=minha-lista.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_audio_service_audio_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__busca_busca__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AudiosPage = /** @class */ (function () {
    function AudiosPage(navCtrl, navParams, service, loadingCtrl, audioService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.audioService = audioService;
        this.item = [];
        this.relAudios = '';
        this.position = 0;
        this.api = "http://www.adautobulhoes.com.br/vinhetas-gratis/";
        this.audio = "";
        this.color = 'primary';
        this.audioService.changePositionObservable.subscribe(function (value) {
        });
        this.getAudios();
        this.getDados();
    }
    AudiosPage.prototype.getAudios = function () {
        var _this = this;
        //retorno de Dados
        this.service.getAudios()
            .subscribe(function (data) { return _this.relAudios = data.rows; }, function (err) { return console.log(err); });
    };
    AudiosPage.prototype.getDados = function () {
        this.audio = this.navParams.get('musica');
    };
    AudiosPage.prototype.startAudio = function (item) {
        this.audio = 'http://app.progettoapp.com.br/arquivos/r/audios/' + item['arquivo_audio'];
        this.audioPlayer.nativeElement.src = this.audio;
        this.audioPlayer.nativeElement.load();
        /*
        var musica = this.audio
    
        let loader = this.loadingCtrl.create({
          content: "Carregando",
          duration: 300
        });
        loader.present();
          this.navCtrl.setRoot(AudiosPage,{
            musica
          });
          */
    };
    AudiosPage.prototype.favorito = function (item) {
        this.color = "secondarys";
        console.log('FAVORITO', item);
    };
    AudiosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AudiosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__titulos_titulos__["a" /* TitulosPage */]);
    };
    AudiosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    AudiosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    AudiosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    AudiosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AudiosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    AudiosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__eventos_eventos__["a" /* EventosPage */]);
    };
    AudiosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__busca_busca__["a" /* BuscaPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('audioPlayer'),
        __metadata("design:type", Object)
    ], AudiosPage.prototype, "audioPlayer", void 0);
    AudiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-audios',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\audios\audios.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n        <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n        <img src="assets/imgs/ico-calendario.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n        <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content> \n\n\n\n<!-- <ion-grid>\n\n    <ion-row>\n\n            <div style="float:left; width:35%; padding: 20px;">\n\n                    <img src="http://www.redeplaneje.com.br/midias/r/albuns/capa_nova.jpg" width="100%">\n\n                </div>\n\n                <div style="float:left; width:65%;">\n\n                    <h2 class="albumTitulo">Albúm Metafísica Brasiliana</h2>\n\n                    <h6 class="albumSubtitulo">Antonio Meneghetti\n\n                    <Br>Volume I</h6>\n\n                    <p class="albumDesc">Nossas emoções, através da música, nos levam a caminhos\n\n                            percorridos entre lágrimas, sorrisos, dor, prazer metafísico.\n\n                            O Maestro Antonio Meneghetti fala através da música todas\n\n                            essas emoções vividas na existência.\n\n                            O ritmo torna-se fenômeno ocasional para entrar na pura\n\n                            percepção do ser.</p> \n\n                </div>\n\n    </ion-row>\n\n</ion-grid> -->\n\n\n\n<!-- \n\n<div style="position: relative; width: 100%;">\n\n    <div style="float:left; width:35%; padding: 20px;">\n\n        <img src="http://www.redeplaneje.com.br/midias/r/albuns/capa_nova.jpg" width="100%">\n\n    </div>\n\n    <div style="float:left; width:65%;">\n\n        <h2 class="albumTitulo">Albúm Metafísica Brasiliana</h2>\n\n        <h6 class="albumSubtitulo">Antonio Meneghetti\n\n        <Br>Volume I</h6>\n\n        <p class="albumDesc">Nossas emoções, através da música, nos levam a caminhos\n\n                percorridos entre lágrimas, sorrisos, dor, prazer metafísico.\n\n                O Maestro Antonio Meneghetti fala através da música todas\n\n                essas emoções vividas na existência.\n\n                O ritmo torna-se fenômeno ocasional para entrar na pura\n\n                percepção do ser.</p> \n\n    </div>\n\n</div> -->\n\n\n\n<!-- <div style="position: relative; width: 100%;">\n\n    <img src="assets/imgs/musica-banner.png">\n\n</div>\n\n -->\n\n\n\n<ion-card *ngFor="let item of relAudios">\n\n        <ion-row>\n\n                <ion-col col-2>\n\n                    <img src="http://www.redeplaneje.com.br/midias/r/albuns/capa_nova.jpg" width="100%">\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <!-- <ion-list class="listItem"> -->\n\n                        <ion-item (click)="startAudio(item)" class="listItem">\n\n                            <ion-icon name="play" item-start></ion-icon>\n\n                            <h2 class="tituloFaixa">{{item.audio}}<Br><span class="subtituloFaixa"> {{item.artista}}</span></h2>\n\n                        </ion-item>\n\n                    <!-- </ion-list> -->\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                   <p >{{item.Tempo}}</p> \n\n                </ion-col>\n\n            </ion-row>\n\n</ion-card>\n\n\n\n<!-- <ion-grid>\n\n    <ion-card *ngFor="let item of relAudios">\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <img src="http://www.redeplaneje.com.br/midias/r/albuns/capa_nova.jpg" width="100%">\n\n            </ion-col>\n\n            <ion-col col-8 style="border: 0px; border-bottom: 1px solid #ebebeb;">\n\n                \n\n                    <ion-item (click)="startAudio(item)" class="listItem">\n\n                        <ion-icon name="play" item-start></ion-icon>\n\n                        <h2 class="tituloFaixa">{{item.audio}}<Br><span class="subtituloFaixa"> {{item.artista}}</span></h2>\n\n                    </ion-item>\n\n                \n\n            </ion-col>\n\n            <ion-col col-2>\n\n               <p >{{item.Tempo}}</p> \n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-grid> -->\n\n\n\n<audio #audioPlayer autoplay="autoplay" style="width: 100%; border:0px;">\n\n    <source src="{{audio}} " type="audio/mp3" />\n\n</audio>                   \n\n\n\n<!-- <div class="" style="background:#fff; margin-top:30px;">\n\n    <div text-center padding style="width: 100%; padding: 0px; margin: 0px; ">\n\n        <ion-card style="width: 100%; padding: 0px; margin: 0px; ">\n\n        </ion-card>           \n\n    </div> \n\n</div> -->\n\n\n\n<ion-content>\n\n    \n\n    <ion-footer>\n\n        <ion-range [(ngModel)]="position">\n\n            \n\n        </ion-range>\n\n    </ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\audios\audios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_audio_service_audio_service__["a" /* AudioServiceProvider */]])
    ], AudiosPage);
    return AudiosPage;
}());

//# sourceMappingURL=audios.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfPage = /** @class */ (function () {
    function PdfPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.get('item');
        this.pdfSrc = 'http://www.redeplaneje.com.br/midias/r/livros/' + this.item['Arquivo'];
    }
    PdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pdf',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\pdf\pdf.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n <!--  <pdf-viewer [src]="pdfSrc" \n\n              [render-text]="true"\n\n              style="display: block; width:100%; height: 100%"\n\n  ></pdf-viewer> -->\n\n\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer">\n\n        <div class="menu-footer-bola">8</div>\n\n        <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">    \n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">     \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">      \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">    \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">    \n\n    </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\pdf\pdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PdfPage);
    return PdfPage;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_usuario_cadastro_usuario__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SlidePage = /** @class */ (function () {
    function SlidePage(navCtrl, navParams, loadingCtrl, Storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.Storage = Storage;
    }
    SlidePage.prototype.ionViewDidLoad = function () {
        this.Storage.set('SlideOlhou', '');
    };
    SlidePage.prototype.continue = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], {
            item: item
        });
    };
    SlidePage.prototype.cadastroUser = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */], {
            item: item
        });
    };
    SlidePage.prototype.pular = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\slide\slide.html"*/'<ion-content class="slide-intro">\n\n	<ion-slides pager>\n\n\n\n		<ion-slide>\n\n			<div class="slide-intro-logo1">\n\n				<img src="assets/imgs/slide-intro/logo-intro.png">\n\n			</div>			\n\n			<h2 class="tela1-titulo">\n\n				Entre para o <br>\n\n				Portal de Conteúdo<Br>\n\n				de Ontopsicologia.</h2>\n\n			<p class="tela1-texto"><strong>Aplicativo Progetto.</strong> Para lhe aproximar ainda mais do estudo e aprofundamento da  Ciência Ontopsicológica.</p>\n\n			<div class="intro-tela1-img">\n\n				<img src="assets/imgs/slide-intro/tela1.png">\n\n			</div>\n\n		</ion-slide>\n\n\n\n		<ion-slide>\n\n			<div class="slide-intro-logo2">\n\n				<img src="assets/imgs/slide-intro/logo-intro.png">\n\n			</div>			\n\n			<p class="tela2-texto">\n\n				No seu <span>progetto</span> tem tudo.\n\n			</p>\n\n			<div class="intro-tela2-img">\n\n				<img src="assets/imgs/slide-intro/tela2.png">\n\n			</div>\n\n		</ion-slide>\n\n\n\n		<ion-slide>				\n\n			<div class="slide-intro-logo3">\n\n				<img src="assets/imgs/slide-intro/logo-intro.png">\n\n			</div>\n\n			<div class="intro-tela3-img">\n\n				<img src="assets/imgs/slide-intro/tela3.png">\n\n			</div>								\n\n			<p class="tela3-texto">\n\n				Livros. Revistas. Aulas. Músicas OntoArte. Eventos. Transmissão ao vivo.\n\n			</p>\n\n			<p class="tela3-texto2">\n\n				Tudo em um só lugar!\n\n			</p>\n\n		</ion-slide>\n\n\n\n		<ion-slide>\n\n			<div class="slide-intro-logo4">\n\n				<img src="assets/imgs/slide-intro/logo-intro.png">\n\n			</div>			\n\n			<p class="tela4-texto">\n\n				Escolha <span>seu plano</span> e acesse onde estiver.\n\n			</p>\n\n			<div class="intro-tela4-img">\n\n				<img src="assets/imgs/slide-intro/tela4.png">\n\n			</div>\n\n		</ion-slide>\n\n\n\n		<ion-slide class="slide-tela5">\n\n			<div class="slide-intro-logo5">\n\n				<img src="assets/imgs/slide-intro/logo-intro-white.png">\n\n			</div>		\n\n			<p class="tela5-texto">\n\n				Seja bem-vindo <Br>ao seu <span>Progetto.</span>\n\n			</p>\n\n			<button ion-button icon-end color="primary" (click)= "cadastroUser(item)" class="tela5-btn1">\n\n				CADASTRE-SE\n\n			</button>						\n\n			<button ion-button icon-end color="primary" (click)= "continue(item)" class="tela5-btn2">\n\n				LOGIN\n\n			</button>\n\n		</ion-slide>\n\n\n\n	</ion-slides>	\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\slide\slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OntoarteAlbumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OntoarteAlbumPage = /** @class */ (function () {
    function OntoarteAlbumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OntoarteAlbumPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__titulos_titulos__["a" /* TitulosPage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__eventos_eventos__["a" /* EventosPage */]);
    };
    OntoarteAlbumPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__busca_busca__["a" /* BuscaPage */]);
    };
    OntoarteAlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ontoarte-album',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\ontoarte-album\ontoarte-album.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n      <p>Sem conteúdo no momento.</p>\n\n  </ion-content>\n\n  <ion-footer class="menu_footer">\n\n      <div class="ico-menu-footer">\n\n          <div class="menu-footer-bola">4</div>\n\n          <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">    \n\n      </div>\n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">     \n\n      </div> \n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">      \n\n      </div> \n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">    \n\n      </div> \n\n      <div class="ico-menu-footer">\n\n          <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">    \n\n      </div>       \n\n  </ion-footer>\n\n  '/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\ontoarte-album\ontoarte-album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OntoarteAlbumPage);
    return OntoarteAlbumPage;
}());

//# sourceMappingURL=ontoarte-album.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pl_lista_pl_lista__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ontoarte_ver_ontoarte_ver__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MinhaListaVerPage = /** @class */ (function () {
    function MinhaListaVerPage(loadingCtrl, Storage, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.Storage = Storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.rel1 = '';
        this.rel2 = '';
        this.rel3 = '';
        this.item = [];
        this.LivrosItens = [];
        this.plItens = [];
        this.VideoItens = [];
        this.OntoItens = [];
        this.getDados();
    }
    MinhaListaVerPage.prototype.getDados = function () {
        var _this = this;
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaLivros").then(function (data) {
                _this.LivrosItens = data;
                console.log(_this.LivrosItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.LivrosItens.forEach(function (item, index) {
                        _this.rel1 = item;
                    });
                }
                /*
                if(this.LivrosItens.length > 0){
                  this.LivrosItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaPl").then(function (data) {
                _this.plItens = data;
                console.log(_this.plItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.plItens.forEach(function (item, index) {
                        _this.rel2 = item;
                    });
                }
                /*
                if(this.plItens.length > 0){
                  this.plItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaPl").then(function (data) {
                _this.VideoItens = data;
                console.log(_this.VideoItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.VideoItens.forEach(function (item, index) {
                        _this.rel2 = item;
                    });
                }
                /*
                if(this.VideoItens.length > 0){
                  this.VideoItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
        this.Storage.ready().then(function () {
            _this.Storage.get("MinhaListaPl").then(function (data) {
                _this.OntoItens = data;
                console.log(_this.OntoItens);
                if (data == null || data.length == 0) {
                    //this.showEmptCartMessage= true;   
                }
                else {
                    _this.OntoItens.forEach(function (item, index) {
                        _this.rel2 = item;
                    });
                }
                /*
                if(this.OntoItens.length > 0){
                  this.OntoItens.forEach( (item, index)=>{
                    this.total = this.total + (item.product.price * item.qty);
                  })
                } else {
                  this.showEmptCartMessage= true;
                }
                */
            });
        });
    };
    MinhaListaVerPage.prototype.abriLivro = function (item) {
        var loader = this.loadingCtrl.create({
            content: "Carregando",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__livros_livros__["a" /* LivrosPage */], {
            item: item
        });
    };
    MinhaListaVerPage.prototype.abriPl = function (item) {
        var loader = this.loadingCtrl.create({
            content: "Carregando",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pl_lista_pl_lista__["a" /* PlListaPage */], {
            item: item
        });
    };
    MinhaListaVerPage.prototype.abriVideo = function (item) {
        var loader = this.loadingCtrl.create({
            content: "Carregando",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__videos_videos__["a" /* VideosPage */], {
            item: item
        });
    };
    MinhaListaVerPage.prototype.abriOnto = function (item) {
        var loader = this.loadingCtrl.create({
            content: "Carregando",
            duration: 3000
        });
        loader.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__ontoarte_ver_ontoarte_ver__["a" /* OntoarteVerPage */], {
            item: item
        });
    };
    MinhaListaVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__eventos_eventos__["a" /* EventosPage */]);
    };
    MinhaListaVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__busca_busca__["a" /* BuscaPage */]);
    };
    MinhaListaVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minha-lista-ver\minha-lista-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n    <ion-card class="novidades-card">\n\n      <ion-item>\n\n        <h2 class="video-card-categoria">\n\n          Publicações\n\n        </h2>       \n\n      </ion-item>\n\n      <ion-card-content *ngFor= "let LivrosItens of LivrosItens" (click)="abriLivro(LivrosItens.idlivro)">\n\n        <ion-item >\n\n          <ion-avatar item-start>\n\n            <img src="http://www.redeplaneje.com.br/midias/r/livros/{{ LivrosItens.thumbLivro }}" >\n\n          </ion-avatar>\n\n        <h2 class="video-card-categoria">\n\n            {{ LivrosItens.tituloLivro }}\n\n          </h2>       \n\n          <p style="color:#bbbbbb;">\n\n            {{ LivrosItens.descricaoLivro }}\n\n          </p>\n\n        </ion-item>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card class="novidades-card">\n\n        <ion-item>\n\n          <h2 class="video-card-categoria">\n\n            Líder\n\n          </h2>       \n\n        </ion-item>\n\n        <ion-card-content *ngFor= "let plItens of plItens" (click)="abriPl(plItens.idpl)">\n\n          <ion-item >\n\n            <ion-avatar item-start>\n\n              <img src="http://www.redeplaneje.com.br/midias/r/pl/{{ plItens.thumbPl }}" >\n\n            </ion-avatar>\n\n          <h2 class="video-card-categoria">\n\n              {{ plItens.tituloPl }}\n\n            </h2>       \n\n            <p style="color:#bbbbbb;">\n\n              {{ plItens.descricaoPl }}\n\n            </p>\n\n          </ion-item>\n\n  \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n      <ion-card class="novidades-card">\n\n          <ion-item>\n\n            <h2 class="video-card-categoria">\n\n              Aulas\n\n            </h2>       \n\n          </ion-item>\n\n          <ion-card-content *ngFor= "let VideoItens of VideoItens" (click)="abriVideo(VideoItens)">\n\n            <ion-item >\n\n              <ion-avatar item-start>\n\n                <img src="http://www.redeplaneje.com.br/midias/r/pl/{{ VideoItens.thumbVideo }}" >\n\n              </ion-avatar>\n\n            <h2 class="video-card-categoria">\n\n                {{ VideoItens.tituloVideo }}\n\n              </h2>       \n\n              <p style="color:#bbbbbb;">\n\n                {{ VideoItens.descricaoVideo }}\n\n              </p>\n\n            </ion-item>\n\n    \n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card class="novidades-card">\n\n            <ion-item>\n\n              <h2 class="video-card-categoria">\n\n                Músicas\n\n              </h2>       \n\n            </ion-item>\n\n            <ion-card-content *ngFor= "let OntoItens of OntoItens" (click)="abriOnto(OntoItens)">\n\n              <ion-item >\n\n                <ion-avatar item-start>\n\n                  <img src="http://www.redeplaneje.com.br/midias/r/audios/capa.jpg" >\n\n                </ion-avatar>\n\n              <h2 class="video-card-categoria">\n\n                  {{ OntoItens.tituloOntoarte }}\n\n                </h2>       \n\n                <p style="color:#bbbbbb;">\n\n                  {{ OntoItens.descricaoOntoarte }}\n\n                </p>\n\n              </ion-item>\n\n      \n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minha-lista-ver\minha-lista-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaListaVerPage);
    return MinhaListaVerPage;
}());

//# sourceMappingURL=minha-lista-ver.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaCdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loja_modal_loja_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loja_souvenirs_loja_souvenirs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loja_revista_loja_revista__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loja_loja__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LojaCdsPage = /** @class */ (function () {
    function LojaCdsPage(navCtrl, service, loadingCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.relBooks = '';
        this.relOutro = '';
        this.api = 'http://app.progettoapp.com.br/arquivos/r';
        this.getDados1();
        this.getDados2();
    }
    LojaCdsPage_1 = LojaCdsPage;
    LojaCdsPage.prototype.getDados1 = function () {
        var _this = this;
        //retorno de Dados
        this.service.getAlbuns()
            .subscribe(function (data) { return _this.relBooks = data.rows; }, function (err) { return console.log(err); });
    };
    LojaCdsPage.prototype.getDados2 = function () {
        var _this = this;
        //retorno de Dados
        this.service.getAlbuns()
            .subscribe(function (data) { return _this.relOutro = data.rows; }, function (err) { return console.log(err); });
    };
    LojaCdsPage.prototype.abrirModalLoja = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__loja_modal_loja_modal__["a" /* LojaModalPage */], {
            item: item
        });
    };
    LojaCdsPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LojaCdsPage.prototype.abrirLojaLivro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__loja_loja__["a" /* LojaPage */]);
    };
    LojaCdsPage.prototype.abrirLojaRevista = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__loja_revista_loja_revista__["a" /* LojaRevistaPage */]);
    };
    LojaCdsPage.prototype.abrirLojaCds = function () {
        this.navCtrl.setRoot(LojaCdsPage_1);
    };
    LojaCdsPage.prototype.abrirLojaSouvenirs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__loja_souvenirs_loja_souvenirs__["a" /* LojaSouvenirsPage */]);
    };
    LojaCdsPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__busca_busca__["a" /* BuscaPage */]);
    };
    LojaCdsPage = LojaCdsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loja-cds',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\loja-cds\loja-cds.html"*/'<ion-header>\n\n  <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <div class="header_logo" (click)="abrirPaginaHome()">\n\n          <img src="assets/imgs/logo-small-menu.png">\n\n        </div>\n\n        <div class="header_carrinho" (click)="abrirCarrinho()">\n\n          <ion-icon name="ios-cart-outline" class="header_carrinho2"></ion-icon> \n\n        </div>    \n\n        <div class="header_busca" (click)="abrirPaginaBusca()">\n\n          <img src="assets/imgs/ico-busca.png">     \n\n        </div>        \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  \n\n    <ion-card class="card-back">\n\n      <img src="assets/imgs/background-header-livros.jpg" />  \n\n      <div class="titulo-card-back">Loja</div>\n\n    </ion-card>\n\n    \n\n    <ion-card class="slide-card">\n\n      <ion-row padding>\n\n        <ion-col col-12 class="slide-card-chamadas mb30">\n\n          <h2 class="slide-card-titulo-chamadas">\n\n            <strong>CDs</strong> Música OntoArte\n\n          </h2>\n\n        </ion-col>\n\n        <ion-col col-4 *ngFor= "let item of relBooks" (click)="abrirModalLoja(item)" class="caixa-itens">\n\n          <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Capa }}_400.jpg"/>\n\n          <h3 class="livro-h3">{{ item.Titulo }}</h3>\n\n          <div class="livro-p">{{ item.Valor }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card> \n\n  \n\n    <ion-card class="slide-card">\n\n      <ion-row padding>\n\n        <ion-col col-12 class="slide-card-chamadas mb30">\n\n          <h2 class="slide-card-titulo-chamadas">\n\n            <strong>DVDs</strong> Música OntoArte\n\n          </h2>\n\n        </ion-col>\n\n        <ion-col col-4 *ngFor= "let item of relOutro" (click)="abrirModalLoja(item)" class="caixa-itens">\n\n          <img src="{{ api }}/{{ item.Caminho }}/{{ item.Pasta }}/{{ item.Capa }}_400.jpg"/>\n\n          <h3 class="livro-h3">{{ item.Titulo }}</h3>\n\n          <div class="livro-p">{{ item.Valor }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card> \n\n\n\n  \n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer" style="margin-left: 9%;">\n\n        <img src="assets/imgs/ico-loja-menu-inicio.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Início\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-livros.png" (click)="abrirLojaLivro()">   \n\n        <p class="menu_footer_texto" (click)="abrirLojaLivro()">\n\n          Físicos\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-revista.png" (click)="abrirLojaRevista()">     \n\n        <p class="menu_footer_texto" (click)="abrirLojaRevista()">\n\n          Digitais\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-loja-menu-souvenirs.png" (click)="abrirLojaSouvenirs()">  \n\n        <p class="menu_footer_texto" (click)="abrirLojaSouvenirs()">\n\n          Souvenirs\n\n        </p>          \n\n    </div>      \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\loja-cds\loja-cds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], LojaCdsPage);
    return LojaCdsPage;
    var LojaCdsPage_1;
}());

//# sourceMappingURL=loja-cds.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ontoarte_ontoarte__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificacaoVerPage = /** @class */ (function () {
    function NotificacaoVerPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ontoarte_ontoarte__["a" /* OntoartePage */]);
    }
    NotificacaoVerPage.prototype.ionViewDidLoad = function () {
    };
    NotificacaoVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notificacao-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\notificacao-ver\notificacao-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\notificacao-ver\notificacao-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NotificacaoVerPage);
    return NotificacaoVerPage;
}());

//# sourceMappingURL=notificacao-ver.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AovivoVerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__busca_busca__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AovivoVerPage = /** @class */ (function () {
    function AovivoVerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AovivoVerPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AovivoVerPage');
    };
    AovivoVerPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AovivoVerPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__titulos_titulos__["a" /* TitulosPage */]);
    };
    AovivoVerPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    AovivoVerPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    AovivoVerPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    AovivoVerPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    AovivoVerPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    AovivoVerPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__eventos_eventos__["a" /* EventosPage */]);
    };
    AovivoVerPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__busca_busca__["a" /* BuscaPage */]);
    };
    AovivoVerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aovivo-ver',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\aovivo-ver\aovivo-ver.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="fundo">\n\n    <iframe src="http://beta.ciclano.io/embed/juliane130" width="100%" height="300px" frameborder="0" scrolling="auto" allowtransparency="true"  style="background: url(assets/imgs/carregando.gif) center center no-repeat;"></iframe>\n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n    <div class="ico-menu-footer">\n\n        <ion-badge item-end color="danger" class="menu-footer-bola">4</ion-badge>\n\n        <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n          Novidades\n\n        </p>\n\n    </div>\n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n          Publicações\n\n        </p>          \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n        <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n          Líder\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n        <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n          Aulas\n\n        </p>         \n\n    </div> \n\n    <div class="ico-menu-footer">\n\n        <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n        <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n            Músicas\n\n        </p>          \n\n    </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\aovivo-ver\aovivo-ver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AovivoVerPage);
    return AovivoVerPage;
}());

//# sourceMappingURL=aovivo-ver.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModAulasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModAulasPage = /** @class */ (function () {
    function ModAulasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModAulasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModAulasPage');
    };
    ModAulasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mod-aulas',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\mod-aulas\mod-aulas.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\mod-aulas\mod-aulas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModAulasPage);
    return ModAulasPage;
}());

//# sourceMappingURL=mod-aulas.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfiguracaoPage = /** @class */ (function () {
    function ConfiguracaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfiguracaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracaoPage');
    };
    ConfiguracaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracao',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\configuracao\configuracao.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\configuracao\configuracao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ConfiguracaoPage);
    return ConfiguracaoPage;
}());

//# sourceMappingURL=configuracao.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermosPage = /** @class */ (function () {
    function TermosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermosPage');
    };
    TermosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\termos\termos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\termos\termos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TermosPage);
    return TermosPage;
}());

//# sourceMappingURL=termos.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMinhaAlbunsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditarMinhaAlbunsPage = /** @class */ (function () {
    function EditarMinhaAlbunsPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.minhaLista = [];
    }
    EditarMinhaAlbunsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('MinhaListaAudios').then(function (val) {
            _this.minhaLista = val;
        });
    };
    EditarMinhaAlbunsPage.prototype.apagar_publicacao = function (item) {
        var index = this.minhaLista.findIndex(function (it, i) {
            return it.idaudio === item['idaudio'];
        });
        this.minhaLista.splice(index, 1);
        this.storage.set('MinhaListaAudios', this.minhaLista);
        console.log(this.minhaLista);
    };
    EditarMinhaAlbunsPage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Alerta ...',
            message: 'Deseja realmente remover?',
            buttons: [
                {
                    text: 'SIM',
                    handler: function () {
                        _this.apagar_publicacao(item);
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarMinhaAlbunsPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__minha_lista_minha_lista__["a" /* MinhaListaPage */]);
        //this.navCtrl.push(MinhaListaAlbunsPage)
    };
    EditarMinhaAlbunsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-minha-albuns',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\editar-minha-albuns\editar-minha-albuns.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <h2 class="meu-progeto-titulo">Minha Lista</h2>        \n\n  </ion-navbar>\n\n  <div class="btn-fechar" (click)="voltar()">X</div>\n\n</ion-header>\n\n<ion-content padding>\n\n    \n\n  <ion-card class="novidades-card">\n\n    <h2 class="titulo">\n\n      Áudios / Músicas\n\n    </h2>   \n\n  </ion-card>\n\n  <ion-card class="novidades-card">\n\n    <div class="subtitulo">\n\n      Itens Minha Lista\n\n    </div>  \n\n    <div *ngFor="let item of minhaLista; let i = index;"> \n\n      <div *ngIf="item.idaudio != 0">\n\n        <p class="conteudo">{{item.Titulo}}\n\n        <span class="btn-fechar-lista" (click)="showConfirm(item)">X</span>\n\n      </p>\n\n      </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\editar-minha-albuns\editar-minha-albuns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarMinhaAlbunsPage);
    return EditarMinhaAlbunsPage;
}());

//# sourceMappingURL=editar-minha-albuns.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhasComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinhasComprasPage = /** @class */ (function () {
    function MinhasComprasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinhasComprasPage.prototype.ionViewDidLoad = function () {
    };
    MinhasComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minhas-compras',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\minhas-compras\minhas-compras.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\minhas-compras\minhas-compras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhasComprasPage);
    return MinhasComprasPage;
}());

//# sourceMappingURL=minhas-compras.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_service_audio_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudioPlayerPage = /** @class */ (function () {
    /**
     *
     */
    function AudioPlayerPage(audioService) {
        this.audioService = audioService;
    }
    AudioPlayerPage.prototype.ngAfterViewInit = function () {
        this.audioService.audioPlayer = this.audioPlayer;
    };
    AudioPlayerPage.prototype.durationChangeEventHandler = function () {
        debugger;
        this.audioService.totalMedia = this.audioPlayer.nativeElement.duration;
        this.audioService.emitTotalMedia(Math.round(this.audioService.totalMedia));
        console.log(this.audioService.totalMedia);
    };
    AudioPlayerPage.prototype.getAudio = function () {
        return this.audioService.audio;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('audioPlayer'),
        __metadata("design:type", Object)
    ], AudioPlayerPage.prototype, "audioPlayer", void 0);
    AudioPlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-audio-player',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\audio-player\audio-player.html"*/'<audio #audioPlayer controls class="player" (durationchange)="durationChangeEventHandler()">\n\n    <source src="{{audio}}" title="APP Progetto" type="audio/mp3" />\n\n</audio>\n\n\n\n<p>AUSHDAUSDHAIUSD</p>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\audio-player\audio-player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_audio_service_audio_service__["a" /* AudioServiceProvider */]])
    ], AudioPlayerPage);
    return AudioPlayerPage;
}());

//# sourceMappingURL=audio-player.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__videos_videos__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pl_lista_pl_lista__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audios2_audios2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__livros_livros__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var BuscaPage = /** @class */ (function () {
    function BuscaPage(navCtrl, navParams, viewCtrl, service, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.relnovidades = '';
        this.declareTechnologies();
    }
    BuscaPage_1 = BuscaPage;
    BuscaPage.prototype.ionViewDidLoad = function () {
    };
    BuscaPage.prototype.declareTechnologies = function () {
        var _this = this;
        //retorno de Dados
        this.service.getBuscar()
            .subscribe(function (data) { return _this.technologies = data.rows; }, function (err) { return console.log(err); });
        //const browser = this.iab.create('https://ionicframework.com/');
    };
    BuscaPage.prototype.filterTechnologies = function (param) {
        var val = param;
        if (val.trim() !== '') {
            this.technologies = this.technologies.filter(function (item) {
                return item.Titulobusca.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Categoria.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Descricaobusca.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            var val_1 = '0';
            this.declareTechnologies();
        }
    };
    BuscaPage.prototype.selecionarBusca = function (item) {
        if (item['Tipo'] == 'video') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__videos_videos__["a" /* VideosPage */], { item: item });
        }
        else if (item['Tipo'] == 'pl') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pl_lista_pl_lista__["a" /* PlListaPage */], { item: item });
        }
        else if (item['Tipo'] == 'musica') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__audios2_audios2__["a" /* Audios2Page */], { item: item });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__livros_livros__["a" /* LivrosPage */], { item: item });
        }
    };
    BuscaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    BuscaPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    BuscaPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__titulos_titulos__["a" /* TitulosPage */]);
    };
    BuscaPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    BuscaPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    BuscaPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    BuscaPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__aovivo_videos_aovivo_videos__["a" /* AovivoVideosPage */]);
    };
    BuscaPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    BuscaPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__eventos_eventos__["a" /* EventosPage */]);
    };
    BuscaPage.prototype.abrirPaginaBuscaGeral = function () {
        this.navCtrl.setRoot(BuscaPage_1);
    };
    BuscaPage = BuscaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busca',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\busca\busca.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card class="card-back">\n\n      <img src="assets/imgs/background-busca.jpg" />  \n\n      <div class="titulo-card-back">Buscar</div>\n\n  </ion-card>\n\n\n\n  <ion-searchbar class="busca-input" placeholder="Digite a palavra..." (ionInput)="filterTechnologies($event.target.value)"></ion-searchbar>\n\n  \n\n  <ion-card *ngFor="let technology of technologies" (click)= "selecionarBusca(technology)" class="novidades-card">\n\n      <ion-card-content *ngIf="technology.Titulobusca != null" style="margin: 0px; padding: 0px;">\n\n          <h2 class="video-card-titulo">\n\n            {{ technology.Titulobusca }}\n\n          </h2>\n\n          <p class="video-card-tipo">\n\n            {{ technology.Categoria }}\n\n          </p>\n\n      </ion-card-content>\n\n  </ion-card>\n\n    \n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">\n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">\n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">\n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">\n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">\n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\busca\busca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], BuscaPage);
    return BuscaPage;
    var BuscaPage_1;
}());

//# sourceMappingURL=busca.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AovivoVideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aovivo_arquivo_aovivo_arquivo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aovivo_proximas_aovivo_proximas__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__titulos_titulos__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__eventos_eventos__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__busca_busca__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AovivoVideosPage = /** @class */ (function () {
    function AovivoVideosPage(navCtrl, navParams, service, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.storage = storage;
        this.relnovidades = '';
    }
    AovivoVideosPage_1 = AovivoVideosPage;
    AovivoVideosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.getNovidades().subscribe(function (data) {
            _this.relnovidades = data.rows;
            _this.storage.get('relNovidades').then(function (val) {
                if (val != null) {
                    _this.numerosNovidades = val.length;
                }
                else {
                    _this.storage.set('relNovidades', _this.relnovidades);
                }
            });
            _this.storage.get('numeroPublicacoes').then(function (val) {
                if (val != null) {
                    _this.numerosNovidadesAtual = val;
                }
                else {
                    _this.storage.set('numeroPublicacoes', _this.relnovidades.length);
                }
            });
            setTimeout(function () {
                if (_this.relnovidades.length > _this.numerosNovidadesAtual) {
                    _this.qtdePublicacoes = _this.relnovidades.length - _this.numerosNovidadesAtual;
                }
            }, 500);
        }, function (err) { return console.log(err); });
    };
    AovivoVideosPage.prototype.abrirPaginaAovivoArquivo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__aovivo_arquivo_aovivo_arquivo__["a" /* AovivoArquivoPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaAoVivoVideo = function () {
        this.navCtrl.setRoot(AovivoVideosPage_1);
    };
    AovivoVideosPage.prototype.abrirPaginaAovivoProximas = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__aovivo_proximas_aovivo_proximas__["a" /* AovivoProximasPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaTitulos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__titulos_titulos__["a" /* TitulosPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaPublicacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__titulos_livros_titulos_livros__["a" /* TitulosLivrosPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaPl = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__revista_pl_revista_pl__["a" /* RevistaPlPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaOntoarte = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__ontoarte_ontoarte__["a" /* OntoartePage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaAovivo = function () {
        this.navCtrl.setRoot(AovivoVideosPage_1);
    };
    AovivoVideosPage.prototype.abrirPaginaAreaUsuarioRestrita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__area_usuario_restrita_area_usuario_restrita__["a" /* AreaUsuarioRestritaPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaEventos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__eventos_eventos__["a" /* EventosPage */]);
    };
    AovivoVideosPage.prototype.abrirPaginaBusca = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__busca_busca__["a" /* BuscaPage */]);
    };
    AovivoVideosPage = AovivoVideosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aovivo-videos',template:/*ion-inline-start:"C:\GitHub\appprogetto\src\pages\aovivo-videos\aovivo-videos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="fundo">\n\n  <ion-card class="card-eventos">\n\n    <p class="btn-novo" (click)="abrirPaginaAovivoArquivo()">\n\n      ARQUIVO\n\n    </p>          \n\n    <p class="btn-novo action_evento" (click)="abrirPaginaAoVivoVideo()">\n\n      AO VIVO\n\n    </p>\n\n    <p class="btn-novo" (click)="abrirPaginaAovivoProximas()">\n\n      PRÓXIMOS\n\n    </p>\n\n  </ion-card>\n\n  <ion-card class="card-eventos">\n\n    <img src="assets/imgs/ico-back-aovivo.png">\n\n  </ion-card>\n\n    \n\n</ion-content>\n\n<ion-footer class="menu_footer">\n\n  <div class="ico-menu-footer">\n\n    <ng-container *ngIf="qtdePublicacoes > 0">\n\n      <ion-badge item-end color="danger" class="menu-footer-bola">{{qtdePublicacoes}}</ion-badge>\n\n    </ng-container>\n\n    <img src="assets/imgs/ico-menu-footer-novidades.png" (click)="abrirPaginaHome()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaHome()">\n\n      Novidades\n\n    </p>\n\n  </div>\n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-publicacoes.png" (click)="abrirPaginaPublicacoes()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPublicacoes()">\n\n      Publicações\n\n    </p>          \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-pl.png" (click)="abrirPaginaPl()">     \n\n    <p class="menu_footer_texto" (click)="abrirPaginaPl()">\n\n      Líder\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-aulas.png" (click)="abrirPaginaTitulos()">   \n\n    <p class="menu_footer_texto" (click)="abrirPaginaTitulos()">\n\n      Aulas\n\n    </p>         \n\n  </div> \n\n  <div class="ico-menu-footer">\n\n    <img src="assets/imgs/ico-menu-footer-ontoarte.png" (click)="abrirPaginaOntoarte()">  \n\n    <p class="menu_footer_texto" (click)="abrirPaginaOntoarte()">\n\n      Músicas\n\n    </p>          \n\n  </div>       \n\n</ion-footer>'/*ion-inline-end:"C:\GitHub\appprogetto\src\pages\aovivo-videos\aovivo-videos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AovivoVideosPage);
    return AovivoVideosPage;
    var AovivoVideosPage_1;
}());

//# sourceMappingURL=aovivo-videos.js.map

/***/ })

},[413]);
//# sourceMappingURL=main.js.map