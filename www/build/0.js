webpackJsonp([0],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhaListaAudiosPageModule", function() { return MinhaListaAudiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minha_lista_audios__ = __webpack_require__(759);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinhaListaAudiosPageModule = /** @class */ (function () {
    function MinhaListaAudiosPageModule() {
    }
    MinhaListaAudiosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__minha_lista_audios__["a" /* MinhaListaAudiosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__minha_lista_audios__["a" /* MinhaListaAudiosPage */]),
            ],
        })
    ], MinhaListaAudiosPageModule);
    return MinhaListaAudiosPageModule;
}());

//# sourceMappingURL=minha-lista-audios.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaListaAudiosPage; });
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


/**
 * Generated class for the MinhaListaAudiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinhaListaAudiosPage = /** @class */ (function () {
    function MinhaListaAudiosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MinhaListaAudiosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinhaListaAudiosPage');
    };
    MinhaListaAudiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-minha-lista-audios',template:/*ion-inline-start:"D:\GitHub\appprogetto\src\pages\minha-lista-audios\minha-lista-audios.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle start (click)="menu()">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div class="header_logo" (click)="abrirPaginaHome()">\n\n      <img src="assets/imgs/logo-small-menu.png">\n\n    </div>\n\n    <div class="header_aovivo" (click)="abrirPaginaAovivo()">\n\n      <img src="assets/imgs/ico-ao-vivo-off.jpg">\n\n    </div>\n\n    <div class="header_users" (click)="abrirPaginaEventos()">\n\n      <img src="assets/imgs/ico-calendario-off.jpg">\n\n    </div>\n\n    <div class="header_busca" (click)="abrirPaginaBusca()">\n\n      <img src="assets/imgs/ico-busca.png">\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\GitHub\appprogetto\src\pages\minha-lista-audios\minha-lista-audios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MinhaListaAudiosPage);
    return MinhaListaAudiosPage;
}());

//# sourceMappingURL=minha-lista-audios.js.map

/***/ })

});
//# sourceMappingURL=0.js.map