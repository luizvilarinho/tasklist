(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideLight, taskAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideLight", function() { return slideLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskAnimations", function() { return taskAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideLight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideLight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-10px)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
        ])
    ])
];
var taskAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500)
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeout', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-10px)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-10px)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300)
        ])
    ])
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_add_lista_modal_add_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-add-lista/modal-add-lista.component */ "./src/app/modal-add-lista/modal-add-lista.component.ts");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "./src/app/edit-item/edit-item.component.ts");
/* harmony import */ var _edit_list_name_edit_list_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-list-name/edit-list-name.component */ "./src/app/edit-list-name/edit-list-name.component.ts");






var routes = [
    {
        path: 'addLista',
        component: _modal_add_lista_modal_add_lista_component__WEBPACK_IMPORTED_MODULE_3__["ModalAddListaComponent"]
    },
    {
        path: 'edit-item',
        component: _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_4__["EditItemComponent"]
    },
    {
        path: 'edit-name',
        component: _edit_list_name_edit_list_name_component__WEBPACK_IMPORTED_MODULE_5__["EditListNameComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<main class=\"center\">\n  <app-header></app-header>\n\n  <div class=\"grid grid-template-columns-3\">\n\n    <app-menu (passingName)=\"selectList($event)\"></app-menu>\n\n    <app-list-mode [nomeLista]=\"selectedList\"></app-list-mode>\n    <app-list-info></app-list-info>\n\n  </div>\n\n\n  \n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listas.service */ "./src/app/listas.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(listas) {
        this.listas = listas;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.listas.isEmptyLists) {
            return false;
        }
        else {
            this.selectedList = this.listas.getListas()[0].nome;
        }
    };
    AppComponent.prototype.selectList = function (nomeLista) {
        this.selectedList = nomeLista;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _list_mode_list_mode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-mode/list-mode.component */ "./src/app/list-mode/list-mode.component.ts");
/* harmony import */ var _list_info_list_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-info/list-info.component */ "./src/app/list-info/list-info.component.ts");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var _modal_add_lista_modal_add_lista_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-add-lista/modal-add-lista.component */ "./src/app/modal-add-lista/modal-add-lista.component.ts");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "./src/app/edit-item/edit-item.component.ts");
/* harmony import */ var _edit_list_name_edit_list_name_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-list-name/edit-list-name.component */ "./src/app/edit-list-name/edit-list-name.component.ts");
/* harmony import */ var _subtask_porcentagem_subtask_porcentagem_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subtask-porcentagem/subtask-porcentagem.component */ "./src/app/subtask-porcentagem/subtask-porcentagem.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _list_mode_list_mode_component__WEBPACK_IMPORTED_MODULE_8__["ListModeComponent"],
                _list_info_list_info_component__WEBPACK_IMPORTED_MODULE_9__["ListInfoComponent"],
                _modal_add_lista_modal_add_lista_component__WEBPACK_IMPORTED_MODULE_11__["ModalAddListaComponent"],
                _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_12__["EditItemComponent"],
                _edit_list_name_edit_list_name_component__WEBPACK_IMPORTED_MODULE_13__["EditListNameComponent"],
                _subtask_porcentagem_subtask_porcentagem_component__WEBPACK_IMPORTED_MODULE_14__["SubtaskPorcentagemComponent"],
                _notes_notes_component__WEBPACK_IMPORTED_MODULE_15__["NotesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [
                _listas_service__WEBPACK_IMPORTED_MODULE_10__["ListasService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-item/edit-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-item/edit-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    z-index:10;\r\n  }\r\n  div.modal-container{\r\n    position: absolute;\r\n    top:calc(50% - 250px);\r\n    left: calc(50% - 250px);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 450px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top: 20vh;\r\n    opacity: 1;\r\n    padding: 25px;\r\n    z-index: 20;\r\n  \r\n  }\r\n  div.modal-container h3{\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n  }\r\n  div.btn-container{\r\n    text-align: center;\r\n  }\r\n  div.container-input{\r\n    width: auto;\r\n    height: auto;\r\n    margin-top:25px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n  div.container-input input{\r\n    width: 425px;\r\n    border:1px solid #c1c1c1;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n  div.modal-container button{\r\n    width: 100px;\r\n    height: auto;\r\n    padding:10px;\r\n    border: 1px, solid;\r\n    margin-right:15px;\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    border-radius: 5px;\r\n  }\r\n  .btn-primary{\r\n    background-color: #5f9ea0ff;\r\n    color:white;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n  }\r\n  .btn{\r\n    background-color: white;\r\n    border: 1px solid #c1c1c1;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #c1c1c1;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .btn:active{\r\n    background-color: #b0e0e6ff;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pdGVtL2VkaXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXOztFQUViO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7RUFFdkI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaXRlbS9lZGl0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHotaW5kZXg6MTA7XHJcbiAgfVxyXG4gIGRpdi5tb2RhbC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6Y2FsYyg1MCUgLSAyNTBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICBcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lciBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBkaXYuYnRuLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZGl2LmNvbnRhaW5lci1pbnB1dHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZGl2LmNvbnRhaW5lci1pbnB1dCBpbnB1dHtcclxuICAgIHdpZHRoOiA0MjVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lciBidXR0b257XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXI6IDFweCwgc29saWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCwgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/edit-item/edit-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-item/edit-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n\n<div @fade @slideLight class=\"modal-container\">\n  <h3>Editar</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"reescreva o item\" maxlength=\"120\"/>\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"editItem(inputEditItem.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit-item/edit-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-item/edit-item.component.ts ***!
  \**************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");





var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(listasService) {
        this.listasService = listasService;
        this.subscribeItemId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.edit = this.listasService.edit;
    }
    EditItemComponent.prototype.ngOnInit = function () {
        if (this.edit == "subitem") {
            var itemActive = this.listasService.getListas()[this.listasService.idxListActive].itens.filter(function (item) {
                return item.checked == true;
            })[0];
            var subitemChecked = itemActive.subItens.filter(function (sub) {
                return sub.checked == true;
            })[0];
            this._selectedSubitem = subitemChecked;
            this.itemEditValue = subitemChecked.text;
        }
        else {
            this.initListener();
        }
    };
    EditItemComponent.prototype.initListener = function () {
        var _this = this;
        this.subscribeItemId.add(this.listasService.selectedItemId$.subscribe(function (itemId) {
            var itens = _this.listasService.getListas()[_this.listasService.idxListActive].itens;
            //let lista = this.listasService.getListByName(activeName).itens;
            for (var i = 0; i < itens.length; i++) {
                if (itens[i].checked == true) {
                    _this._selectedItem = itens[i];
                    _this.itemEditValue = itens[i].text;
                }
            }
        }));
    };
    EditItemComponent.prototype.editItem = function (newValue) {
        if (this.listasService.edit == "subitem") {
            this._selectedSubitem.text = newValue;
        }
        else {
            this._selectedItem.text = newValue;
        }
        this.listasService.gravarDados(this.listasService.getListas());
    };
    EditItemComponent.prototype.ngOnDestroy = function () {
        this.subscribeItemId.unsubscribe();
        this.listasService.edit = "";
    };
    EditItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-item',
            template: __webpack_require__(/*! ./edit-item.component.html */ "./src/app/edit-item/edit-item.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_4__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./edit-item.component.css */ "./src/app/edit-item/edit-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "./src/app/edit-list-name/edit-list-name.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-list-name/edit-list-name.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    z-index:10;\r\n  }\r\n  div.modal-container{\r\n    position: absolute;\r\n    top:calc(50% - 250px);\r\n    left: calc(50% - 250px);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 450px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top: 20vh;\r\n    opacity: 1;\r\n    padding: 25px;\r\n    z-index: 20;\r\n  \r\n  }\r\n  div.modal-container h3{\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n  }\r\n  div.btn-container{\r\n    text-align: center;\r\n  }\r\n  div.container-input{\r\n    width: auto;\r\n    height: auto;\r\n    margin-top:25px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n  div.container-input input{\r\n    width: 425px;\r\n    border:1px solid #c1c1c1;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n  div.modal-container button{\r\n    width: 100px;\r\n    height: auto;\r\n    padding:10px;\r\n    border: 1px, solid;\r\n    margin-right:15px;\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    border-radius: 5px;\r\n  }\r\n  .btn-primary{\r\n    background-color: #5f9ea0ff;\r\n    color:white;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n  }\r\n  .btn{\r\n    background-color: white;\r\n    border: 1px solid #c1c1c1;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #c1c1c1;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .btn:active{\r\n    background-color: #b0e0e6ff;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1saXN0LW5hbWUvZWRpdC1saXN0LW5hbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVzs7RUFFYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztFQUNiO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0VBRXZCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWxpc3QtbmFtZS9lZGl0LWxpc3QtbmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgei1pbmRleDoxMDtcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDpjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gIFxyXG4gIH1cclxuICBkaXYubW9kYWwtY29udGFpbmVyIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGRpdi5idG4tY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYuY29udGFpbmVyLWlucHV0e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYuY29udGFpbmVyLWlucHV0IGlucHV0e1xyXG4gICAgd2lkdGg6IDQyNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzFjMWMxO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBkaXYubW9kYWwtY29udGFpbmVyIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlcjogMXB4LCBzb2xpZDtcclxuICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwLCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwZmY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICAgIGNvbG9yOiM1ZjllYTBmZjtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5idG46YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTBlNmZmO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/edit-list-name/edit-list-name.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-list-name/edit-list-name.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n\n<div @fade @slideLight @fadeout class=\"modal-container\">\n  <h3>Editar Nome</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputEditItem [value]=\"listName\" maxlength=\"14\"/>\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"editItemName(inputEditItem.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit-list-name/edit-list-name.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-list-name/edit-list-name.component.ts ***!
  \************************************************************/
/*! exports provided: EditListNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListNameComponent", function() { return EditListNameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");




var EditListNameComponent = /** @class */ (function () {
    function EditListNameComponent(listasService) {
        this.listasService = listasService;
    }
    EditListNameComponent.prototype.ngOnInit = function () {
        this.initComponent();
    };
    EditListNameComponent.prototype.initComponent = function () {
        this.listName = this.listasService.getListas()[this.listasService.idxListActive].nome;
    };
    EditListNameComponent.prototype.editItemName = function (newName) {
        this.listasService.getListas()[this.listasService.idxListActive].nome = newName;
        this.listasService.emitIndexList();
        this.listasService.gravarDados(this.listasService.getListas());
    };
    EditListNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-list-name',
            template: __webpack_require__(/*! ./edit-list-name.component.html */ "./src/app/edit-list-name/edit-list-name.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_3__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_3__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./edit-list-name.component.css */ "./src/app/edit-list-name/edit-list-name.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], EditListNameComponent);
    return EditListNameComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".version{\r\n    color:#b0e0e6ff;\r\n    text-align:right;\r\n    margin-right: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyc2lvbntcclxuICAgIGNvbG9yOiNiMGUwZTZmZjtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"menuPrincipal\" class=\"grid grid-template-columns-1\" style=\"height: 15px;\">\n  <h5 class=\"version\">Version 1.3.1</h5>\n  <nav class=\"menu\">\n    <!-- <ul>\n      <li>luiz vilarinho\n        <i class=\"material-icons vertical-align-middle\">account_circle</i>\n      </li>\n      <li>tasks</li>\n      <li>notes</li>\n      <li>task-mode</li>\n    </ul> -->\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-info/list-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-info/list-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#listInformation .wrapCheckBox{\r\n    width: 25px;\r\n    height: 24px;\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n#listInformation .itemContainer {\r\n    padding: 8px 20px 2px 23px;\r\n}\r\n#listInformation div.wrapCheckBox:before{\r\n    width: 15px;\r\n    height: 15px;\r\n    border:1px solid #b0e0e6ff;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    content: \"\";\r\n    margin-right: 12px;\r\n    vertical-align: middle;\r\n    margin-bottom: 3px;\r\n    cursor:pointer;\r\n  }\r\n#listInformation input[type='checkbox']:checked ~ div.wrapCheckBox:before{\r\n      font-family: 'Material Icons';\r\n       content: \"check\";\r\n       font-weight: 800;\r\n       color:#5f9ea0ff;\r\n       text-align: center;\r\n  }\r\n#subItemControllers{\r\n    margin: 0px 20px 0px 30px;\r\n    text-align: right;\r\n}\r\n#subItemControllers button{\r\n    padding: 4px;\r\n    width: auto;\r\n    color:#246c6e;\r\n    border: 1px solid #33878a;\r\n    margin:0px 5px 0px 5px;\r\n    pointer-events: none;\r\n}\r\n#subItemControllers button.active{\r\n    background-color: #b0e0e6ff;\r\n    color: #5f9ea0ff;\r\n    border: 1px solid #5f9ea0ff;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n}\r\n#subItemControllers button.active:active{\r\n    background-color:#b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n}\r\n#subItemControllers button.active:hover{\r\n    background-color:rgb(147, 190, 196);\r\n}\r\n.completed{\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pbmZvL2xpc3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUVBO01BQ0ksNkJBQTZCO09BQzVCLGdCQUFnQjtPQUNoQixnQkFBZ0I7T0FDaEIsZUFBZTtPQUNmLGtCQUFrQjtFQUN2QjtBQUNGO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1pbmZvL2xpc3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpc3RJbmZvcm1hdGlvbiAud3JhcENoZWNrQm94e1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4jbGlzdEluZm9ybWF0aW9uIC5pdGVtQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4IDJweCAyM3B4O1xyXG59XHJcbiNsaXN0SW5mb3JtYXRpb24gZGl2LndyYXBDaGVja0JveDpiZWZvcmV7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2IwZTBlNmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNsaXN0SW5mb3JtYXRpb24gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIH4gZGl2LndyYXBDaGVja0JveDpiZWZvcmV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgICAgY29udGVudDogXCJjaGVja1wiO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgIGNvbG9yOiM1ZjllYTBmZjtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiNzdWJJdGVtQ29udHJvbGxlcnN7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI3N1Ykl0ZW1Db250cm9sbGVycyBidXR0b257XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGNvbG9yOiMyNDZjNmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM4NzhhO1xyXG4gICAgbWFyZ2luOjBweCA1cHggMHB4IDVweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiNzdWJJdGVtQ29udHJvbGxlcnMgYnV0dG9uLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICAgIGNvbG9yOiAjNWY5ZWEwZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNWY5ZWEwZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcbiNzdWJJdGVtQ29udHJvbGxlcnMgYnV0dG9uLmFjdGl2ZTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiMGUwZTZmZjtcclxuICAgIGNvbG9yOiM1ZjllYTBmZjtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNDcsIDE5MCwgMTk2KTtcclxufVxyXG4uY29tcGxldGVke1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-info/list-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-info/list-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @slideLight @fadeout *ngIf=\"listInfoShow == true\" id=\"listInformation\" class=\"background-blue\">\n  \n  <div class=\"titleContainer\">\n    <h2>SubTask</h2>\n  </div>\n  <div class=\"inputContainer\">\n    <input type=\"text\" #inputSubitem name=\"inputItem\" placeholder=\"new item\"/><button (click)=\"addSubItem(inputSubitem)\">OK</button>\n  </div>\n  \n<app-subtask-porcentagem></app-subtask-porcentagem>\n\n  <ng-container>\n    <section @fade id=\"subItemControllers\">\n      <button *ngIf=\"showDoneBtn; else undoneBtn\" [class.active]=\"activateButton\" (click)=\"markToDone()\">done</button>\n      <ng-template #undoneBtn>\n        <button [class.active]=\"activateButton\" (click)=\"markToUndone()\">undone</button>\n      </ng-template>\n      <button [class.active]=\"activateButton\" (click)=\"deleteSubItens()\">delete</button>\n      <button [class.active]=\"activateButtonEdit\" #editButton (click)=\"changeEditParam()\" routerLink=\"edit-item\">edit</button>\n    </section>\n  </ng-container>\n\n  <div class=\"listContainer\">\n    <div *ngFor=\"let subitem of subItens\" class=\"itemContainer\" (click)=\"subItemClicked(subitem._id)\">\n      <input type=\"checkbox\" id=\"subitem._id\" [checked]=\"subitem.checked\" />\n      <div class=\"wrapCheckBox\">\n        <span></span>\n       </div>\n      <p class=\"item\" [class.completed]=\"subitem.complete\">{{ subitem.text }}</p>\n    </div>\n  </div>\n\n  <app-notes></app-notes>\n</section>\n"

/***/ }),

/***/ "./src/app/list-info/list-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-info/list-info.component.ts ***!
  \**************************************************/
/*! exports provided: ListInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInfoComponent", function() { return ListInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");





var ListInfoComponent = /** @class */ (function () {
    function ListInfoComponent(listasService) {
        this.listasService = listasService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ListInfoComponent.prototype.ngOnInit = function () {
        this.componentInit();
        this.initSubscription();
    };
    ListInfoComponent.prototype.componentInit = function () {
        this.initSubscription();
        this.activateButton = false;
        this.showDoneBtn = true;
    };
    ListInfoComponent.prototype.initSubscription = function () {
        var _this = this;
        this.subscriptions.add(this.listasService.showSubtasks$.subscribe(function (subtasksShowHide) {
            _this.listInfoShow = _this.listasService.showSubtasks;
        }));
        this.subscriptions.add(this.listasService.idxList$.subscribe(function (idx) {
            _this.indexList = idx;
        }));
        this.subscriptions.add(this.listasService.subtaskActive$.subscribe(function (subitensListaService) {
            _this.subItens = subitensListaService;
        }));
    };
    ListInfoComponent.prototype.subItemClicked = function (subItemId) {
        var subitem = this.subItens.filter(function (sub) {
            if (sub._id == subItemId) {
                return sub;
            }
        })[0];
        if (subitem.complete) {
            this.showDoneBtn = false;
        }
        else {
            this.showDoneBtn = true;
        }
        var subitemChecked = subitem.checked;
        subitem.checked = !subitemChecked;
        this.checkedActivateButtons();
    };
    ListInfoComponent.prototype.gravarSubitens = function () {
        /*Gravar*/
        this.listasService.getListas()[this.listasService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].subItens = this.subItens;
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListInfoComponent.prototype.addSubItem = function (inputSuitem) {
        if (inputSuitem.value == '') {
            return false;
        }
        var subitem = {
            _id: Math.floor(Math.random() * 10000),
            text: inputSuitem.value,
            complete: false,
            checked: false
        };
        this.listasService.subtaskActive.push(subitem);
        this.subItens = this.listasService.subtaskActive;
        inputSuitem.value = "";
        var itensCompletes = this.subItens.filter(function (sub) {
            return sub.complete == true;
        });
        var itensUncomplete = this.subItens.filter(function (sub) {
            return sub.complete == false;
        });
        this.subItens = itensUncomplete.concat(itensCompletes);
        this.listasService.calcularPorcentagemConcluida();
        /*Gravar*/
        this.gravarSubitens();
    };
    ListInfoComponent.prototype.checkedActivateButtons = function () {
        if (this.subItens == undefined) {
            return false;
        }
        var checkedSubitens = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        if (checkedSubitens.length == 1) {
            this.activateButton = true;
            this.activateButtonEdit = true;
        }
        ;
        if (checkedSubitens.length == 0) {
            this.activateButton = false;
            this.activateButtonEdit = false;
            this.showDoneBtn = true;
        }
        if (checkedSubitens.length > 1) {
            this.activateButton = true;
            this.activateButtonEdit = false;
        }
    };
    ListInfoComponent.prototype.markToDone = function () {
        var _this = this;
        var subItensChecked = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        subItensChecked.forEach(function (sub, index) {
            sub.complete = true;
            sub.checked = false;
            var idx = _this.subItens.indexOf(sub);
            //remove e adiciona o elemento para a última posição do array
            _this.subItens.push(_this.subItens.splice(idx, 1)[0]);
        });
        if (subItensChecked.length > 0) {
            this.showDoneBtn = true;
        }
        //desativa botoes 
        this.activateButton = false;
        this.activateButtonEdit = false;
        //calcula porcentagem
        this.listasService.calcularPorcentagemConcluida();
        /*Gravar*/
        this.gravarSubitens();
    };
    ListInfoComponent.prototype.markToUndone = function () {
        var _this = this;
        var subItensChecked = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        subItensChecked.forEach(function (sub, index) {
            sub.complete = false;
            sub.checked = false;
            _this.showDoneBtn = true;
        });
        var itensCompletes = this.subItens.filter(function (sub) {
            return sub.complete == true;
        });
        var itensUncomplete = this.subItens.filter(function (sub) {
            return sub.complete == false;
        });
        this.subItens = itensUncomplete.concat(itensCompletes);
        this.listasService.calcularPorcentagemConcluida();
        /*Gravar*/
        this.gravarSubitens();
    };
    ListInfoComponent.prototype.deleteSubItens = function () {
        var _this = this;
        var subItensCheckeds = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        subItensCheckeds.forEach(function (subitem) {
            var idxSub = _this.subItens.indexOf(subitem);
            _this.subItens.splice(idxSub, 1);
        });
        this.listasService.subtaskActive = this.subItens;
        this.listasService.calcularPorcentagemConcluida();
        /*Gravar*/
        this.gravarSubitens();
    };
    ListInfoComponent.prototype.changeEditParam = function () {
        this.listasService.edit = "subitem";
    };
    ListInfoComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ListInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-info',
            template: __webpack_require__(/*! ./list-info.component.html */ "./src/app/list-info/list-info.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_4__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./list-info.component.css */ "./src/app/list-info/list-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_3__["ListasService"]])
    ], ListInfoComponent);
    return ListInfoComponent;
}());



/***/ }),

/***/ "./src/app/list-mode/list-mode.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-mode/list-mode.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blocoCentral .itemContainer{\r\n    padding: 0px 20px 8px 23px;\r\n    position: relative;\r\n    left:0px;\r\n    width: 100%;\r\n  }\r\n  #blocoCentral .itemContainer:hover{\r\n    background-color: #efefefff;\r\n  }\r\n  #itemControllers{\r\n    margin: 0px 20px 0px 5px;\r\n    text-align: right;\r\n}\r\n  #itemControllers button{\r\n    padding: 5px;\r\n    width: auto;\r\n    background-color:white;\r\n    color: #c1c1c1;\r\n    border: 1px solid #DCDCDC;\r\n    margin:12px 5px 4px 0px;\r\n    pointer-events: none;\r\n}\r\n  #itemControllers button.active{\r\n    background-color: #5f9ea0ff;\r\n    color: whitesmoke;\r\n    border: 1px, solid white;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n}\r\n  #itemControllers button.active:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n}\r\n  #itemControllers button.active:hover{\r\n    background-color:rgb(29, 156, 160);\r\n}\r\n  .titleContainerEmpty{\r\n    border-bottom: 0;\r\n    padding: 30px 0px 0px 30px;\r\n    color: #5f9ea0ff;\r\n    font-weight: 300;\r\n}\r\n  h3.titleContainerEmpty {\r\n    margin-left: 7px;\r\n    \r\n}\r\n  .edit-icon-name{\r\n    margin-right: 15px;\r\n    border: 1px solid #c1c1c1;\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 5px;\r\n    float: left;\r\n    opacity: 0.5;\r\n}\r\n  .edit-icon-name i{\r\n    position: relative;\r\n    top:-7px;\r\n    left:2px;\r\n    margin-top: 2px;\r\n}\r\n  .edit-icon-name:hover{\r\n    background-color:#5f9ea0ff ;\r\n    color:#f1ebeb;\r\n    opacity: 1;\r\n    border:1px solid white;\r\n}\r\n  .titleContainer a{\r\n    cursor:pointer;\r\n}\r\n  .titleContainer a{\r\n    text-decoration: none;\r\n    color:#dcdcdcff;\r\n    font-size: 0.75em;\r\n    margin-left:15px;\r\n    margin-right:5px;\r\n  }\r\n  .titleContainer a.selected{\r\n    color:rgb(105, 191, 202);\r\n  }\r\n  #blocoCentral .titleContainer a.selected:hover{\r\n    color:rgb(86, 157, 167);\r\n  }\r\n  .titleContainer a:active{\r\n    color:#b0e0e6ff;\r\n  }\r\n  .container-disabled{\r\n    opacity: 0.5;\r\n    pointer-events: none;\r\n  }\r\n  #blocoCentral p.item-done{\r\n      color:#c1c1c1;\r\n  }\r\n  #containerLista div.envelop{\r\n    position: relative;\r\n    top:-5px;\r\n    left:-5px;\r\n    width: 110px;\r\n    background-color: #5f9ea0ff;\r\n    float: right;\r\n    border-radius:3px;\r\n    font-family: Calibri, sans-serif;\r\n    font-size: 1.4em;\r\n    z-index: 10;\r\n  }\r\n  #containerLista ul{\r\n      list-style: none;\r\n      margin: 0 auto;\r\n  }\r\n  #containerLista li{\r\n    border-bottom:1px solid rgb(105, 191, 202);\r\n    width: 91%;\r\n    color:whitesmoke;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n  #containerLista ul:first-child{\r\n    border-top: 1px solid rgb(105, 191, 202);\r\n}\r\n  #containerLista li:hover{\r\n    background-color: rgb(148, 199, 206);\r\n    color:#5f9ea0ff ;\r\n}\r\n  .wrapCheckBox{\r\n    width: 25px;\r\n    height: 20px;\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n  div.wrapCheckBox:before{\r\n    width: 15px;\r\n    height: 15px;\r\n    border:1px solid #b0e0e6ff;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    content: \"\";\r\n    margin-right: 12px;\r\n    vertical-align: middle;\r\n    margin-bottom: 3px;\r\n    cursor:pointer;\r\n  }\r\n  input[type='checkbox']:checked ~ div.wrapCheckBox:before{\r\n      font-family: 'Material Icons';\r\n       content: \"check\";\r\n       font-weight: 800;\r\n       color:#5f9ea0ff;\r\n       text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tb2RlL2xpc3QtbW9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztFQUNiO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDRjtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtFQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtFQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7RUFDQTtJQUNJLGtDQUFrQztBQUN0QztFQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlO0FBQ25CO0VBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7RUFDQTtJQUNJLGNBQWM7QUFDbEI7RUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDRjtJQUNJLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCO0VBQ0E7TUFDSSxhQUFhO0VBQ2pCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFDQTtNQUNJLGdCQUFnQjtNQUNoQixjQUFjO0VBQ2xCO0VBQ0E7SUFDRSwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0FBQ25CO0VBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7RUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7RUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7RUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0VBRUE7TUFDSSw2QkFBNkI7T0FDNUIsZ0JBQWdCO09BQ2hCLGdCQUFnQjtPQUNoQixlQUFlO09BQ2Ysa0JBQWtCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1tb2RlL2xpc3QtbW9kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Jsb2NvQ2VudHJhbCAuaXRlbUNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDhweCAyM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgI2Jsb2NvQ2VudHJhbCAuaXRlbUNvbnRhaW5lcjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZmZjtcclxuICB9XHJcbiNpdGVtQ29udHJvbGxlcnN7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4jaXRlbUNvbnRyb2xsZXJzIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjYzFjMWMxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RDRENEQztcclxuICAgIG1hcmdpbjoxMnB4IDVweCA0cHggMHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNpdGVtQ29udHJvbGxlcnMgYnV0dG9uLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyOiAxcHgsIHNvbGlkIHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuI2l0ZW1Db250cm9sbGVycyBidXR0b24uYWN0aXZlOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICAgIGNvbG9yOiM1ZjllYTBmZjtcclxufVxyXG4jaXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyOSwgMTU2LCAxNjApO1xyXG59XHJcblxyXG5cclxuXHJcbi50aXRsZUNvbnRhaW5lckVtcHR5e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4IDBweCAzMHB4O1xyXG4gICAgY29sb3I6ICM1ZjllYTBmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuaDMudGl0bGVDb250YWluZXJFbXB0eSB7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgXHJcbn1cclxuLmVkaXQtaWNvbi1uYW1le1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmVkaXQtaWNvbi1uYW1lIGl7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6LTdweDtcclxuICAgIGxlZnQ6MnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbi5lZGl0LWljb24tbmFtZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzVmOWVhMGZmIDtcclxuICAgIGNvbG9yOiNmMWViZWI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4udGl0bGVDb250YWluZXIgYXtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi50aXRsZUNvbnRhaW5lciBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6I2RjZGNkY2ZmO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICB9XHJcbi50aXRsZUNvbnRhaW5lciBhLnNlbGVjdGVke1xyXG4gICAgY29sb3I6cmdiKDEwNSwgMTkxLCAyMDIpO1xyXG4gIH1cclxuICAjYmxvY29DZW50cmFsIC50aXRsZUNvbnRhaW5lciBhLnNlbGVjdGVkOmhvdmVye1xyXG4gICAgY29sb3I6cmdiKDg2LCAxNTcsIDE2Nyk7XHJcbiAgfVxyXG4gIC50aXRsZUNvbnRhaW5lciBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiNiMGUwZTZmZjtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1kaXNhYmxlZHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICAjYmxvY29DZW50cmFsIHAuaXRlbS1kb25le1xyXG4gICAgICBjb2xvcjojYzFjMWMxO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyTGlzdGEgZGl2LmVudmVsb3B7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6LTVweDtcclxuICAgIGxlZnQ6LTVweDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IENhbGlicmksIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gICNjb250YWluZXJMaXN0YSB1bHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gICNjb250YWluZXJMaXN0YSBsaXtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYigxMDUsIDE5MSwgMjAyKTtcclxuICAgIHdpZHRoOiA5MSU7XHJcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2NvbnRhaW5lckxpc3RhIHVsOmZpcnN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxMDUsIDE5MSwgMjAyKTtcclxufVxyXG4jY29udGFpbmVyTGlzdGEgbGk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxOTksIDIwNik7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmYgO1xyXG59XHJcbi53cmFwQ2hlY2tCb3h7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmRpdi53cmFwQ2hlY2tCb3g6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNiMGUwZTZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgfiBkaXYud3JhcENoZWNrQm94OmJlZm9yZXtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICAgICBjb250ZW50OiBcImNoZWNrXCI7XHJcbiAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgY29sb3I6IzVmOWVhMGZmO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/list-mode/list-mode.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-mode/list-mode.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"blocoCentralEmpty\" class=\"item-central\" [hidden]=\"isEmptyHidden\">\n  <h2 class=\"titleContainerEmpty\">ready to put some tasks!</h2>\n  <h3 class=\"titleContainerEmpty\">Click on de (+) button to start</h3>\n</section>\n\n<section id=\"blocoCentral\" class=\"item-central\" [hidden]=\"isCentralHidden\" >\n    <div class=\"titleContainer\">\n      \n\n      <h2>\n        <div @fade @slideLight class=\"edit-icon-name\" routerLink=\"edit-name\"><i class=\"material-icons materialIconEditName\"> edit</i></div>\n        \n        {{ nomeLista }}\n        <a (click)=\"showCompletedTasks()\" class=\"fly-r\" [class.selected]=\"completeSelected\">complete</a>\n        <a (click)=\"showIncompletedTasks()\" class=\"fly-r\" [class.selected]=\"incompleteSelected\">incomplete</a>\n      </h2>\n\n    </div>\n    <div class=\"inputContainer\" [class.container-disabled]=\"!incompleteBtns\">\n      <input type=\"text\" #inputItem name=\"inputItem\" placeholder=\"new item\" maxlength=\"120\"/>\n      <button (click)=\"addItem(inputItem)\" (keyup)=\"addItem(inputItem)\">OK</button>\n    </div>\n\n    <ng-container *ngIf = \"incompleteBtns == true\">\n      <section @fade id=\"itemControllers\">\n        <button [class.active]=\"activateButton\" (click)=\"moveToDone()\">done</button>\n        <button [class.active]=\"activateButton\" (click)=\"deleteItens()\">delete</button>\n        <button [class.active]=\"activateButtonEdit\" #editButton (click)=\"emitSelectedItem()\" routerLink=\"edit-item\">edit</button>\n        \n        <button [class.active]=\"activateButton\" (click)=\"showListsNames()\">\n            change \n           <i class=\"material-icons\">{{ arrowIcon }}</i>\n        </button>\n\n        <ng-container *ngIf=\"showNameLists\">\n          <article @fadeout id=\"containerLista\" (mouseleave)=\"showListsNames()\">\n            <div class=\"envelop\">\n              <ul>\n                <ng-container *ngFor = \"let lista of this.listasService.getListas()\">\n                  <li *ngIf=\"lista.nome != nomeLista\" (click)=\"doChange(lista.nome)\">{{ lista.nome }}</li>\n                </ng-container>\n                \n              </ul>\n            </div>\n        </article>\n        </ng-container>\n\n      </section>\n    </ng-container>\n\n    <ng-container *ngIf = \"incompleteBtns == false\">\n      <section @fade id=\"itemControllers\">\n        <button [class.active]=\"activateButton\" (click)=\"moveToUndone()\">undone</button>\n        <button [class.active]=\"activateButton\" (click)=\"deleteItens()\">delete</button>\n        <button [class.active]=\"activateButton\" #editButton (click)=\"emitSelectedItem()\" routerLink=\"edit-item\">edit</button>\n        <button>\n          change\n          <i class=\"material-icons\">{{ arrowIcon }}</i>\n        </button>\n      </section>\n    </ng-container>\n    \n    <div @fade class=\"listContainer\" *ngIf = \"selectIncompleteTasks\">\n       <ng-container *ngFor=\"let item of activedList; let i = index\">\n         <div @fade @fadeout *ngIf=\"item.complete == false\" class=\"itemContainer\" (click)=\"itemClicked(item._id)\" >\n          \n          <input type=\"checkbox\" class=\"elementItem\" id=\"{{ item._id }}\" [checked]=\"item.checked\"  />\n          <div class=\"wrapCheckBox\">\n            <span></span>\n           </div>\n          <p class=\"item\">{{ item.text }}</p>\n          <!-- <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div> -->\n        </div>\n      </ng-container>\n    </div>\n\n    <div @fade class=\"listContainer\" *ngIf = \"!selectIncompleteTasks\">\n      <ng-container *ngFor=\"let item of activedList; let i = index\">\n        <div *ngIf=\"item.complete == true\" class=\"itemContainer\" (click)=\"itemClicked(item._id)\">\n          <input type=\"checkbox\" class=\"elementItem\" id=\"{{ item._id }}\" [checked]=\"item.checked\"  />\n         <div class=\"wrapCheckBox\">\n            <span></span>\n           </div>\n           <p class=\"item item-done\">{{ item.text }}</p>\n           <!-- <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div> -->\n       </div>\n     </ng-container>\n   </div>\n   \n\n</section>\n"

/***/ }),

/***/ "./src/app/list-mode/list-mode.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-mode/list-mode.component.ts ***!
  \**************************************************/
/*! exports provided: ListModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModeComponent", function() { return ListModeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");





var ListModeComponent = /** @class */ (function () {
    function ListModeComponent(listasService) {
        this.listasService = listasService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.isCentralHidden = false;
        this.isEmptyHidden = true;
        this.showNameLists = false;
        this.arrowIcon = 'keyboard_arrow_right';
        this.selectIncompleteTasks = true;
        this.incompleteBtns = true;
    }
    ListModeComponent.prototype.ngOnInit = function () {
        if (this.listasService.isEmptyLists) {
            this.initSubscription();
        }
        else {
            this.initListModeComponent();
        }
    };
    ListModeComponent.prototype.initListModeComponent = function () {
        var _this = this;
        this.activedList = this.listasService.getListas()[this.listasService.idxListActive].itens;
        this.incompleteSelected = true;
        this.initSubscription();
        this.checkedIfIsEmptyList();
        document.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                var item = document.querySelector("[name='inputItem']");
                _this.addItem(item);
            }
        });
    };
    ListModeComponent.prototype.initSubscription = function () {
        var _this_1 = this;
        this.subscriptions.add(this.listasService.idxList$.subscribe(function (novoIdx) {
            _this_1.activedList = _this_1.listasService.getListas()[novoIdx].itens;
            _this_1.nomeLista = _this_1.listasService.getListas()[novoIdx].nome;
            _this_1.verifyCheckedItens();
        }));
        this.subscriptions.add(this.listasService.isEmptyLists$.subscribe(function (getIsEmpty) {
            _this_1.checkedIfIsEmptyList();
        }));
        this.checkedIfIsEmptyList();
        this.verifyCheckedItens();
    };
    ListModeComponent.prototype.addItem = function (inputElement) {
        var item = inputElement.value;
        if (item == "") {
            return false;
        }
        var inputItem = {
            _id: Math.floor(Math.random() * 10000),
            text: item,
            complete: false,
            checked: false,
            subItens: [],
            notas: []
        };
        this.listasService.getListas()[this.listasService.idxListActive].itens.push(inputItem);
        inputElement.value = "";
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.verifyCheckedItens = function () {
        var itensChecked = this.activedList.filter(function (el) {
            if (el.checked == true) {
                return el;
            }
        });
        if (itensChecked.length == 1) {
            this.activateButton = true;
            this.activateButtonEdit = true;
            this.listasService.emitSubtaskActive(itensChecked[0].subItens);
            this.listasService.showSubtasks = true;
            this.listasService.emitSubstasksShowHide();
        }
        if (itensChecked.length == 0) {
            this.activateButton = false;
            this.activateButtonEdit = false;
            this.listasService.showSubtasks = false;
            this.listasService.emitSubstasksShowHide();
        }
        if (itensChecked.length > 1) {
            this.activateButtonEdit = false;
            this.listasService.showSubtasks = false;
            this.listasService.emitSubstasksShowHide();
        }
    };
    ListModeComponent.prototype.itemClicked = function (id) {
        var item = this.activedList.filter(function (el) {
            if (el._id == id) {
                return el;
            }
        })[0];
        var isChecked = item.checked;
        item.checked = !isChecked;
        this.verifyCheckedItens();
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.deleteItens = function () {
        var itens = this.activedList.filter(function (el) {
            if (el.checked == true) {
                return el;
            }
        });
        var itensUnchecked = this.activedList.filter(function (el) {
            if (el.checked == false) {
                return el;
            }
        });
        for (var ids = 0; ids < itens.length; ids++) {
            var el = document.getElementById(itens[ids]._id);
            el.parentElement.style.backgroundColor = 'coral';
        }
        this.listasService.getListByName(this.nomeLista).itens = itensUnchecked;
        this.activedList = itensUnchecked;
        this.activateButton = false;
        this.activateButtonEdit = false;
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.checkedIfIsEmptyList = function () {
        var isEmpty = this.listasService.isEmptyLists;
        if (isEmpty) {
            this.isCentralHidden = true;
            this.isEmptyHidden = false;
        }
        else {
            this.isCentralHidden = false;
            this.isEmptyHidden = true;
        }
    };
    ListModeComponent.prototype.moveToDone = function () {
        var itens = this.activedList.filter(function (el) {
            return el.checked == true;
        });
        var currentList = this.listasService.getListByName(this.nomeLista);
        for (var i = 0; i < itens.length; i++) {
            var itemId = itens[i]._id;
            var el = document.getElementById(itens[i]._id);
            el.parentElement.style.backgroundColor = 'PaleGreen';
            for (var j = 0; j < currentList.itens.length; j++) {
                if (itemId == currentList.itens[j]._id) {
                    currentList.itens[j].complete = true;
                    currentList.itens[j].checked = false;
                }
            }
            this.activateButton = false;
        }
        this.listasService.showSubtasks = false;
        this.listasService.emitSubstasksShowHide();
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.moveToUndone = function () {
        var itens = this.activedList.filter(function (item) {
            if (item.checked == true) {
                return item;
            }
        });
        var currentList = this.listasService.getListByName(this.nomeLista);
        for (var i = 0; i < itens.length; i++) {
            var itemId = itens[i]._id;
            for (var j = 0; j < currentList.itens.length; j++) {
                if (itemId == currentList.itens[j]._id) {
                    currentList.itens[j].complete = false;
                    currentList.itens[j].checked = false;
                }
            }
        }
        this.activateButton = false;
        this.activateButtonEdit = false;
        this.showIncompletedTasks();
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.showListsNames = function () {
        this.showNameLists = !this.showNameLists;
        if (this.showNameLists) {
            this.arrowIcon = 'keyboard_arrow_down';
        }
        else {
            this.arrowIcon = 'keyboard_arrow_right';
        }
    };
    ListModeComponent.prototype.uncheckedAll = function (nomeLista) {
        var itens = this.listasService.getListByName(nomeLista).itens;
        for (var i = 0; i < itens.length; i++) {
            itens[i].checked = false;
        }
    };
    ListModeComponent.prototype.doChange = function (name) {
        var itens = this.activedList.filter(function (el) {
            if (el.checked == true && el.complete == false) {
                return el;
            }
        });
        var changeTo = this.listasService.getListByName(name).itens;
        for (var i = 0; i < itens.length; i++) {
            var itemId = itens[i]._id;
            changeTo.push(itens[i]);
        }
        this.deleteItens();
        this.uncheckedAll(name);
        this.showListsNames();
        this.showNameLists = false;
        this.arrowIcon = 'keyboard_arrow_right';
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.showCompletedTasks = function () {
        this.selectIncompleteTasks = false;
        this.completeSelected = true;
        this.incompleteSelected = false;
        this.incompleteBtns = false;
    };
    ListModeComponent.prototype.showIncompletedTasks = function () {
        this.selectIncompleteTasks = true;
        this.completeSelected = false;
        this.incompleteSelected = true;
        this.incompleteBtns = true;
    };
    ListModeComponent.prototype.emitSelectedItem = function () {
        var itemId = this.activedList.filter(function (item) {
            if (item.checked == true) {
                return item._id;
            }
        })[0];
        this.listasService.selectedItemId = itemId;
        this.listasService.emitSelectedlistId();
    };
    ListModeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ListModeComponent.prototype, "nomeLista", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ListModeComponent.prototype, "editButton", void 0);
    ListModeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-mode',
            template: __webpack_require__(/*! ./list-mode.component.html */ "./src/app/list-mode/list-mode.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_4__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./list-mode.component.css */ "./src/app/list-mode/list-mode.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], ListModeComponent);
    return ListModeComponent;
}());



/***/ }),

/***/ "./src/app/listas.service.ts":
/*!***********************************!*\
  !*** ./src/app/listas.service.ts ***!
  \***********************************/
/*! exports provided: ListasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListasService", function() { return ListasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ListasService = /** @class */ (function () {
    function ListasService() {
        this.subjectList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.idxListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isEmptySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedItemIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.showSubtasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.porcentagemSubtaskSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subtaskActiveSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subtaskActive$ = this.subtaskActiveSubject.asObservable();
        this.porcentagemSubtask$ = this.porcentagemSubtaskSubject.asObservable();
        this.showSubtasks$ = this.showSubtasksSubject.asObservable();
        this.selectedItemId$ = this.selectedItemIdSubject.asObservable();
        this.idxList$ = this.idxListSubject.asObservable();
        this.isEmptyLists$ = this.isEmptySubject.asObservable();
        this.list$ = this.subjectList.asObservable();
        this.init();
    }
    ListasService.prototype.init = function () {
        var listasSalvas = localStorage.getItem("tasks");
        if (listasSalvas == null) {
            this.listas = new Array();
            localStorage.setItem("tasks", JSON.stringify(this.listas));
        }
        else {
            this.listas = new Array();
            var listasStorage = JSON.parse(listasSalvas);
            for (var i = 0; i < listasStorage.length; i++) {
                var menu1 = {
                    nome: listasStorage[i].nome,
                    incompletedItens: function () {
                        var qntItens = 0;
                        for (var i_1 = 0; i_1 < this.itens.length; i_1++) {
                            if (this.itens[i_1].complete == false) {
                                qntItens++;
                            }
                        }
                        ;
                        return qntItens;
                    },
                    itens: listasStorage[i].itens
                };
                this.listas.push(menu1);
            }
            this.isEmptyLists = false;
            this.idxListActive = 0;
            //this.calcularPorcentagemConcluida();
        }
        this.verifyIfIsEmptyList();
    };
    ListasService.prototype.getListas = function () {
        return this.listas;
    };
    ListasService.prototype.addToListas = function (item) {
        this.listas.push(item);
        this.subjectList.next(this.listas);
        this.gravarDados(this.listas);
    };
    ListasService.prototype.emitIndexList = function () {
        this.idxListSubject.next(this.idxListActive);
    };
    ListasService.prototype.emitSubstasksShowHide = function () {
        this.showSubtasksSubject.next(this.showSubtasks);
    };
    ListasService.prototype.emitEmptyList = function () {
        this.isEmptySubject.next(this.isEmptyLists);
    };
    ListasService.prototype.emitSelectedlistId = function () {
        var _id = this.selectedItemId;
        this.selectedItemIdSubject.next(_id);
    };
    ListasService.prototype.emitSubtaskActive = function (subtasks) {
        this.subtaskActive = subtasks;
        this.subtaskActiveSubject.next(subtasks);
    };
    ListasService.prototype.updateIndex = function (idx) {
        this.idxListActive = idx;
        this.emitIndexList();
    };
    ListasService.prototype.getListByName = function (name) {
        for (var i = 0; i < this.listas.length; i++) {
            if (this.listas[i].nome == name) {
                return this.listas[i];
            }
        }
    };
    ListasService.prototype.verifyIfIsEmptyList = function () {
        var listsLength = this.listas.length;
        if (listsLength == 0) {
            this.isEmptyLists = true;
        }
        else {
            this.isEmptyLists = false;
        }
    };
    ListasService.prototype.calcularPorcentagemConcluida = function () {
        if (this.subtaskActive.length == 0) {
            return false;
        }
        var subitensCompletedLength = this.subtaskActive.filter(function (sub) {
            return sub.complete == true;
        }).length;
        if (subitensCompletedLength == 0) {
            this.porcentagemConcluida = 0;
            this.porcentagemSubtaskSubject.next(this.porcentagemConcluida);
        }
        else {
            var total = this.subtaskActive.length;
            console.log("total", total);
            var porcentagem = (subitensCompletedLength * 100) / total;
            this.porcentagemConcluida = Math.trunc(porcentagem);
            this.porcentagemSubtaskSubject.next(this.porcentagemConcluida);
        }
    };
    ListasService.prototype.uncheckedAll = function () {
        for (var i = 0; i < this.listas.length; i++) {
            this.listas[i].itens.forEach(function (item) {
                item.checked = false;
            });
        }
    };
    ListasService.prototype.gravarDados = function (lista) {
        var makeString = JSON.stringify(lista);
        localStorage.setItem("tasks", makeString);
    };
    ListasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListasService);
    return ListasService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active{\r\n    font-weight: 400!important;\r\n    color: #b0e0e6ff!important;\r\n}\r\n.deleteIcon{\r\n    float: right;\r\n    font-size: 20px;\r\n    margin-right: 24px;\r\n    opacity: 0.2;\r\n    cursor:pointer;\r\n}\r\na.active ~ a>i{\r\n    opacity: 0.8;\r\n}\r\n.deleteIcon:hover{\r\n    opacity: 1.0;\r\n}\r\n.deleteIcon:active{\r\n    opacity: 0.4;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNiMGUwZTZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV0ZUljb257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5hLmFjdGl2ZSB+IGE+aXtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG4uZGVsZXRlSWNvbjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDEuMDtcclxufVxyXG4uZGVsZXRlSWNvbjphY3RpdmV7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"menuLateral\" class=\"background-blue\">\n  <div class=\"titulo-container borderBottom\">\n    <h2>Listas:<span routerLink=\"addLista\" class=\"teste addIcon\"></span></h2>\n  </div>\n  <div class=\"md-marginBottom\">\n    <ul id=\"listNames\">\n      <li @fade @fadeout @slideLight *ngFor=\"let nomesListaItem of nomesListas; let idx=index\">\n        <a href=\"javascript:;\" (click)=\"selected(idx)\" id=\"{{ idx }}\" class=\"\"> {{ nomesListaItem.nome }} </a>\n        <span @fade @fadeout @slideLight class=\"list-length\">{{ nomesListaItem.incompletedItens() }}</span>\n        <a (click)=\"deleteList(idx)\"><i class=\"material-icons deleteIcon\">delete_forever</i></a>\n      </li>\n      \n    </ul>\n  </div>\n\n  <!-- <div class=\"titulo-container borderBottom\">\n    <h2>Modo Tarefa:</h2>\n  </div>\n  <div>\n    <ul>\n      <li>nome 1</li>\n      <li>nome 2</li>\n    </ul>\n  </div> -->\n\n</section>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(listasService) {
        this.listasService = listasService;
        this.selectedNameList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (this.listasService.isEmptyLists) {
            this.initSubscription();
        }
        else {
            this.initMenuComponent();
        }
    };
    MenuComponent.prototype.initMenuComponent = function () {
        this.initSubscription();
        setTimeout(function () {
            document.querySelector("#listNames li:first-child a").classList.add("active");
        }, 50);
    };
    MenuComponent.prototype.initSubscription = function () {
        var _this = this;
        this.nomesListas = this.listasService.getListas();
        this.subscriptions.add(this.listasService.list$.subscribe(function (listas) {
            _this.nomesListas = listas;
        }));
        this.subscriptions.add(this.listasService.idxList$.subscribe(function (novoIdx) {
            setTimeout(function () { _this.putClassActive(novoIdx); }, 100);
        }));
    };
    MenuComponent.prototype.putClassActive = function (idx) {
        var nodeList = document.querySelectorAll("#listNames a");
        for (var i = 0; i < nodeList.length; i++) {
            var nodeId = parseFloat(nodeList[i].getAttribute("id"));
            if (nodeId == idx) {
                nodeList[i].classList.add('active');
            }
            else {
                nodeList[i].classList.remove('active');
            }
        }
    };
    MenuComponent.prototype.selected = function (idx) {
        this.listasService.uncheckedAll();
        //verify if is empty to show message
        this.listasService.verifyIfIsEmptyList();
        this.listasService.emitEmptyList();
        if (this.listasService.getListas()[idx] != undefined) {
            this.listasService.idxListActive = idx;
            this.listasService.emitIndexList();
            this.putClassActive(idx);
            //this.listasService.showSubtasks = false;
            this.listasService.emitSubstasksShowHide();
        }
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    MenuComponent.prototype.deleteList = function (idx) {
        this.listasService.getListas().splice(idx, 1);
        this.selected(idx - 1);
        this.listasService.gravarDados(this.listasService.getListas());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuComponent.prototype, "selectedList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('passingName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "selectedNameList", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_4__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/modal-add-lista/modal-add-lista.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modal-add-lista/modal-add-lista.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: black;\r\n  opacity: 0.8;\r\n  z-index:10;\r\n}\r\ndiv.modal-container{\r\n  position: absolute;\r\n  top:calc(50% - 250px);\r\n  left: calc(50% - 200px);\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  width: 280px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  margin-top: 20vh;\r\n  opacity: 1;\r\n  padding: 25px;\r\n  z-index: 20;\r\n\r\n}\r\ndiv.modal-container h3{\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  font-weight: 500;\r\n}\r\ndiv.btn-container{\r\n  text-align: center;\r\n}\r\ndiv.container-input{\r\n  width: auto;\r\n  height: auto;\r\n  margin-top:25px;\r\n  margin-bottom: 25px;\r\n  text-align: center;\r\n}\r\ndiv.container-input input{\r\n  width: 250px;\r\n  border:1px solid #c1c1c1;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\ndiv.modal-container button{\r\n  width: 100px;\r\n  height: auto;\r\n  padding:10px;\r\n  border: 1px, solid;\r\n  margin-right:15px;\r\n  text-align: center;\r\n  margin: 0, auto;\r\n  border-radius: 5px;\r\n}\r\n.btn-primary{\r\n  background-color: #5f9ea0ff;\r\n  color:white;\r\n}\r\n.btn-primary:active{\r\n  background-color: #b0e0e6ff;\r\n  color:#5f9ea0ff;\r\n}\r\n.btn{\r\n  background-color: white;\r\n  border: 1px solid #c1c1c1;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #c1c1c1;\r\n  text-decoration: none;\r\n  color:#CJCJCJ;\r\n}\r\n.btn:active{\r\n  background-color: #b0e0e6ff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtYWRkLWxpc3RhL21vZGFsLWFkZC1saXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXOztBQUViO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWFkZC1saXN0YS9tb2RhbC1hZGQtbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgei1pbmRleDoxMDtcclxufVxyXG5kaXYubW9kYWwtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6Y2FsYyg1MCUgLSAyNTBweCk7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjB2aDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgei1pbmRleDogMjA7XHJcblxyXG59XHJcbmRpdi5tb2RhbC1jb250YWluZXIgaDN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5kaXYuYnRuLWNvbnRhaW5lcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2LmNvbnRhaW5lci1pbnB1dHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmRpdi5jb250YWluZXItaW5wdXQgaW5wdXR7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2MxYzFjMTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmRpdi5tb2RhbC1jb250YWluZXIgYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGJvcmRlcjogMXB4LCBzb2xpZDtcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwLCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5idG4tcHJpbWFyeTphY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTBlNmZmO1xyXG4gIGNvbG9yOiM1ZjllYTBmZjtcclxufVxyXG4uYnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6I0NKQ0pDSjtcclxufVxyXG4uYnRuOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modal-add-lista/modal-add-lista.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modal-add-lista/modal-add-lista.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n\n<div @fade @fadeout @slideLight class=\"modal-container\">\n  <h3>Qual é o nome da lista?</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputLNewList name=\"newListName\" placeholder=\"digite um nome\" maxlength=\"14\"/>\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"addNewList(inputLNewList.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal-add-lista/modal-add-lista.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modal-add-lista/modal-add-lista.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalAddListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAddListaComponent", function() { return ModalAddListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");




var ModalAddListaComponent = /** @class */ (function () {
    function ModalAddListaComponent(listaService) {
        this.listaService = listaService;
    }
    ModalAddListaComponent.prototype.ngOnInit = function () {
    };
    ModalAddListaComponent.prototype.addNewList = function (InputValue) {
        if (InputValue == '') {
            return false;
        }
        this.newList = {
            nome: InputValue,
            incompletedItens: function () {
                var qntItens = 0;
                for (var i = 0; i < this.itens.length; i++) {
                    if (this.itens[i].complete == false) {
                        qntItens++;
                    }
                }
                ;
                return qntItens;
            },
            itens: [],
        };
        this.listaService.getListas().push(this.newList);
        var lastIndexList = this.listaService.getListas().length - 1;
        this.listaService.updateIndex(lastIndexList);
        this.listaService.verifyIfIsEmptyList();
        this.listaService.emitEmptyList();
        var stringListas = JSON.stringify(this.listaService.getListas());
        localStorage.setItem("tasks", stringListas);
    };
    ModalAddListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-add-lista',
            template: __webpack_require__(/*! ./modal-add-lista.component.html */ "./src/app/modal-add-lista/modal-add-lista.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_3__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_3__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./modal-add-lista.component.css */ "./src/app/modal-add-lista/modal-add-lista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], ModalAddListaComponent);
    return ModalAddListaComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"annotation\">\n  <div class=\"titleContainer\">\n    <h2>Notes</h2>\n  </div>\n  <div class=\"inputContainer\">\n    <input type=\"text\" #newNote [value]=\"inputNoteValue\" placeholder=\"new item\"/><button (click)=\"addNote( newNote )\">OK</button>\n  </div>\n  <div *ngFor = \"let note of notes; let i=index\" class=\"annotationItem\">\n    <div [hidden]=\"note.edit\" class=\"txtAnnotation\">{{ note.txt }}</div>\n    <input [type]=\"typeEditInput\" #iptEdit value=\"{{ note.txt }}\" />\n  <div class=\"editAnnotation\">\n    <div *ngIf = \"note.edit == false; else editBtns\">\n      <span (click)=\"editNote(i)\">Edit</span><span (click)=\"deleteNote(i)\">delete</span>\n    </div>\n    <ng-template #editBtns>\n      <span (click)=\"confirmNote(iptEdit, i)\">Confirmar edição</span>\n    </ng-template>\n  </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");



var NotesComponent = /** @class */ (function () {
    function NotesComponent(listaService) {
        this.listaService = listaService;
        this.inputNoteValue = "";
        this.typeEditInput = "hidden";
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.componentInit();
    };
    NotesComponent.prototype.componentInit = function () {
        this.notes = this.listaService.getListas()[this.listaService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].notas;
    };
    NotesComponent.prototype.addNote = function (newNote) {
        var note = [{
                edit: false,
                txt: newNote.value
            }];
        this.notes = note.concat(this.notes);
        this.listaService.getListas()[this.listaService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].notas = this.notes;
        newNote.value = "";
        console.log("gravar nota");
        console.log(this.listaService.getListas());
        this.listaService.gravarDados(this.listaService.getListas());
    };
    NotesComponent.prototype.editNote = function (index) {
        this.notes[index].edit = true;
        this.typeEditInput = "text";
    };
    NotesComponent.prototype.confirmNote = function (iptEdit, index) {
        this.notes[index].txt = iptEdit.value;
        this.notes[index].edit = false;
        iptEdit.value = "";
        this.typeEditInput = "hidden";
        /*Gravar*/
        this.listaService.getListas()[this.listaService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].notas = this.notes;
        this.listaService.gravarDados(this.listaService.getListas());
    };
    NotesComponent.prototype.deleteNote = function (index) {
        this.notes.splice(index, 1);
        /*Gravar*/
        this.listaService.getListas()[this.listaService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].notas = this.notes;
        this.listaService.gravarDados(this.listaService.getListas());
    };
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/subtask-porcentagem/subtask-porcentagem.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/subtask-porcentagem/subtask-porcentagem.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#doneComponent{\r\n    width: 90%;\r\n    margin: 10px auto 10px auto;\r\n    border-radius: 8px;\r\n    border:1px solid #dcdcdcff;\r\n    text-align: center;\r\n  }\r\n  #doneComponent .doneItem{\r\n    width: 0%;\r\n    border-radius: 8px;\r\n    background-color: #b0e0e6ff;\r\n    text-align: center;\r\n    height: 13px;\r\n  }\r\n  #doneComponent span{\r\n    position: absolute;\r\n    color: #1f3131ff;\r\n    opacity: 0.9;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VidGFzay1wb3JjZW50YWdlbS9zdWJ0YXNrLXBvcmNlbnRhZ2VtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3N1YnRhc2stcG9yY2VudGFnZW0vc3VidGFzay1wb3JjZW50YWdlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RvbmVDb21wb25lbnR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGNkY2RjZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNkb25lQ29tcG9uZW50IC5kb25lSXRlbXtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTNweDtcclxuICB9XHJcbiAgI2RvbmVDb21wb25lbnQgc3BhbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjMWYzMTMxZmY7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/subtask-porcentagem/subtask-porcentagem.component.html":
/*!************************************************************************!*\
  !*** ./src/app/subtask-porcentagem/subtask-porcentagem.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"doneComponent\">\n  <span>{{ porcentagemConcluida }} %</span>\n  <div class=\"doneItem\" [style.width]=\"renderPorcentagem\"></div>\n</div>"

/***/ }),

/***/ "./src/app/subtask-porcentagem/subtask-porcentagem.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/subtask-porcentagem/subtask-porcentagem.component.ts ***!
  \**********************************************************************/
/*! exports provided: SubtaskPorcentagemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskPorcentagemComponent", function() { return SubtaskPorcentagemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");





var SubtaskPorcentagemComponent = /** @class */ (function () {
    function SubtaskPorcentagemComponent(listasService) {
        this.listasService = listasService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    SubtaskPorcentagemComponent.prototype.ngOnInit = function () {
        this.initComponent();
    };
    SubtaskPorcentagemComponent.prototype.initComponent = function () {
        var _this = this;
        this.subscriptions.add(this.listasService.porcentagemSubtask$.subscribe(function (porcentagem) {
            _this.porcentagemConcluida = porcentagem;
            _this.renderPorcentagem = porcentagem + "%";
        }));
        this.listasService.calcularPorcentagemConcluida();
    };
    SubtaskPorcentagemComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    SubtaskPorcentagemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subtask-porcentagem',
            template: __webpack_require__(/*! ./subtask-porcentagem.component.html */ "./src/app/subtask-porcentagem/subtask-porcentagem.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_4__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./subtask-porcentagem.component.css */ "./src/app/subtask-porcentagem/subtask-porcentagem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], SubtaskPorcentagemComponent);
    return SubtaskPorcentagemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luizvilarinho\Documents\projetos\angular\tasklist\tasklist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map