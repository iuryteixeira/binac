webpackJsonp([1],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/arithmetic/arithmetic.module": [
		265,
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arithmetic_arithmetic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__arithmetic_arithmetic__["a" /* ArithmeticPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/iury/ionic-workspace/binac/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Conversões" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Aritmética" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Sobre" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/iury/ionic-workspace/binac/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/iury/ionic-workspace/binac/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/iury/ionic-workspace/binac/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* unused harmony export ResultNumbers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.labelField = "Número";
        this.inpState = true;
    }
    /**
     * response to options of select
     */
    HomePage.prototype.selectClick = function () {
        this.changeLabel();
        this.inpState = false;
    };
    /**
     * change field label with base in the selection
     */
    HomePage.prototype.changeLabel = function () {
        this.results = null;
        if (this.selectedOption == 'bin') {
            this.labelField = "Insira o número em base 2";
        }
        if (this.selectedOption == 'oct') {
            this.labelField = "Insira o número em base 8";
        }
        if (this.selectedOption == 'dec') {
            this.labelField = "Insira o número em base 10";
        }
        if (this.selectedOption == 'hex') {
            this.labelField = "Insira o número em base 16";
        }
        this.textNumber = "";
    };
    HomePage.prototype.convert = function () {
        if (this.textNumber) {
            var loader = this.loadingCtrl.create({
                content: "Calculando..."
            });
            loader.present();
            this.results = new ResultNumbers();
            var n = this.textNumber;
            var decValue = null;
            if (this.selectedOption == 'bin') {
                decValue = this.numToDec(Number(n), 2);
                this.results.bin = Number(n);
                this.results.dec = decValue;
                this.results.oct = Number(this.decToBase(decValue, 8));
                this.results.hex = this.decToBase(decValue, 16);
            }
            if (this.selectedOption == 'oct') {
                decValue = this.numToDec(Number(n), 8);
                this.results.oct = Number(n);
                this.results.bin = Number(this.decToBase(decValue, 2));
                this.results.dec = decValue;
                this.results.hex = this.decToBase(decValue, 16);
            }
            if (this.selectedOption == 'hex') {
                decValue = this.numToDec(n, 16);
                this.results.hex = String(n).toUpperCase();
                this.results.bin = Number(this.decToBase(decValue, 2));
                this.results.oct = Number(this.decToBase(decValue, 8));
                this.results.dec = decValue;
            }
            if (this.selectedOption == 'dec') {
                var vdec = Number(n);
                this.results.bin = Number(this.decToBase(vdec, 2));
                this.results.oct = Number(this.decToBase(vdec, 8));
                this.results.dec = vdec;
                this.results.hex = this.decToBase(vdec, 16);
            }
            loader.dismiss();
        }
        else {
            //send alert message(toast)
            var toast = this.toastCtrl.create({
                message: 'Informe um número para ser convertido!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    HomePage.prototype.decToBase = function (dec, base) {
        var result = '';
        var current = Math.trunc(dec);
        if (base != 16) {
            while (current > 0) {
                result = result + (current % base);
                current = Math.trunc(current / base);
            }
        }
        else {
            while (current > 0) {
                result = result + (this.changeNumberByWord(current % base));
                current = Math.trunc(current / base);
            }
        }
        return result.split('').reverse().join('');
    };
    HomePage.prototype.numToDec = function (n, base) {
        var binNumber = String(n);
        var sum = 0;
        for (var index = 0; index < binNumber.length; index++) {
            var currentValue = 0;
            if (base == 16) {
                currentValue = this.changeWordByNumber(binNumber.charAt(index));
            }
            else {
                currentValue = Number(binNumber.charAt(index));
            }
            // calc expo
            var expo = currentValue * Math.pow(base, ((binNumber.length - 1) - index));
            // soma dos multiplos
            sum = sum + expo;
        }
        return sum;
    };
    HomePage.prototype.changeWordByNumber = function (value) {
        if (value == 'A' || value == 'a') {
            return 10;
        }
        else if (value == 'B' || value == 'b') {
            return 11;
        }
        else if (value == 'C' || value == 'c') {
            return 12;
        }
        else if (value == 'D' || value == 'd') {
            return 13;
        }
        else if (value == 'E' || value == 'e') {
            return 14;
        }
        else if (value == 'F' || value == 'f') {
            return 15;
        }
        return Number(value);
    };
    HomePage.prototype.changeNumberByWord = function (value) {
        if (value == 10) {
            return 'A';
        }
        else if (value == 11) {
            return 'B';
        }
        else if (value == 12) {
            return 'C';
        }
        else if (value == 13) {
            return 'D';
        }
        else if (value == 14) {
            return 'E';
        }
        else if (value == 15) {
            return 'F';
        }
        else {
            return String(value);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/iury/ionic-workspace/binac/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>Conversão de Bases</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h4>Escolha a base de entrada:</h4>\n  <ion-item>\n    <ion-label>Selecione a base de entrada</ion-label>\n    <ion-select [(ngModel)]="selectedOption" cancelText="VOLTAR" okText="OK" (ionChange)="selectClick()" interface="popover">\n      <ion-option value="bin">Binário (2)</ion-option>\n      <ion-option value="oct">Octal (8)</ion-option>\n      <ion-option value="dec">Decimal (10)</ion-option>\n      <ion-option value="hex">Hexa (16)</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>{{labelField}}</ion-label>\n      <ion-input [(ngModel)]="textNumber" disabled="{{inpState}}" type="text"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button block (click)="convert()" icon-left>\n      <ion-icon name="calculator"></ion-icon>\n      Converter\n  </button>\n  <ion-list>\n    <ion-list-header>\n      <h1>Resultados</h1>\n    </ion-list-header>\n    <ion-item>\n      <h2>Binário</h2>\n      <h2>{{results?.bin}}</h2>\n    </ion-item>\n    <ion-item>\n      <h2>Octal</h2>\n      <h2>{{results?.oct}}</h2>\n    </ion-item>\n    <ion-item>\n      <h2>Decimal</h2>\n      <h2>{{results?.dec}}</h2>\n    </ion-item>\n    <ion-item>\n      <h2>Hex</h2>\n      <h2>{{results?.hex}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/iury/ionic-workspace/binac/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], HomePage);

var ResultNumbers = (function () {
    function ResultNumbers() {
        this.bin = 0;
        this.oct = 0;
        this.dec = 0;
        this.hex = '0';
    }
    return ResultNumbers;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_arithmetic_arithmetic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_arithmetic_arithmetic__["a" /* ArithmeticPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/arithmetic/arithmetic.module#ArithmeticPageModule', name: 'ArithmeticPage', segment: 'arithmetic', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_arithmetic_arithmetic__["a" /* ArithmeticPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/iury/ionic-workspace/binac/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/iury/ionic-workspace/binac/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArithmeticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the ArithmeticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArithmeticPage = (function () {
    function ArithmeticPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArithmeticPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArithmeticPage');
    };
    return ArithmeticPage;
}());
ArithmeticPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-arithmetic',template:/*ion-inline-start:"/home/iury/ionic-workspace/binac/src/pages/arithmetic/arithmetic.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>Conversão de Bases</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/iury/ionic-workspace/binac/src/pages/arithmetic/arithmetic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ArithmeticPage);

//# sourceMappingURL=arithmetic.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map