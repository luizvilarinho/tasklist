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
/* harmony import */ var _list_mode_list_mode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-mode/list-mode.component */ "./src/app/list-mode/list-mode.component.ts");
/* harmony import */ var _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kanban/kanban.component */ "./src/app/kanban/kanban.component.ts");
/* harmony import */ var _edit_kanban_item_edit_kanban_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-kanban-item/edit-kanban-item.component */ "./src/app/edit-kanban-item/edit-kanban-item.component.ts");
/* harmony import */ var _kanban_add_item_kanban_add_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kanban-add-item/kanban-add-item.component */ "./src/app/kanban-add-item/kanban-add-item.component.ts");










var routes = [
    {
        path: '',
        component: _list_mode_list_mode_component__WEBPACK_IMPORTED_MODULE_6__["ListModeComponent"]
    },
    {
        path: 'kanban',
        component: _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_7__["KanbanComponent"]
    },
    {
        path: 'kanban/edit-item',
        component: _edit_kanban_item_edit_kanban_item_component__WEBPACK_IMPORTED_MODULE_8__["EditKanbanItemComponent"]
    },
    {
        path: 'kanban/add',
        component: _kanban_add_item_kanban_add_item_component__WEBPACK_IMPORTED_MODULE_9__["KanbanAddItemComponent"]
    },
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

module.exports = "@media (max-width:760px){\r\n    #conteudo{\r\n        display: unset;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6NzYwcHgpe1xyXG4gICAgI2NvbnRldWRve1xyXG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main class=\"center\">\n  <app-header></app-header>\n\n  <div id=\"conteudo\" class=\"grid grid-template-columns-3\">\n\n    <app-menu (passingName)=\"selectList($event)\"></app-menu>\n    \n    <app-modes-container></app-modes-container>\n    \n   \n  </div>\n  \n  \n\n</main>\n"

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
/* harmony import */ var _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kanban/kanban.component */ "./src/app/kanban/kanban.component.ts");
/* harmony import */ var _modes_container_modes_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modes-container/modes-container.component */ "./src/app/modes-container/modes-container.component.ts");
/* harmony import */ var _edit_kanban_item_edit_kanban_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-kanban-item/edit-kanban-item.component */ "./src/app/edit-kanban-item/edit-kanban-item.component.ts");
/* harmony import */ var _kanban_add_item_kanban_add_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kanban-add-item/kanban-add-item.component */ "./src/app/kanban-add-item/kanban-add-item.component.ts");




















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
                _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_16__["KanbanComponent"],
                _modes_container_modes_container_component__WEBPACK_IMPORTED_MODULE_17__["ModesContainerComponent"],
                _edit_kanban_item_edit_kanban_item_component__WEBPACK_IMPORTED_MODULE_18__["EditKanbanItemComponent"],
                _kanban_add_item_kanban_add_item_component__WEBPACK_IMPORTED_MODULE_19__["KanbanAddItemComponent"],
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

module.exports = "section{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    z-index:10;\r\n  }\r\n  div.modal-container{\r\n    position: absolute;\r\n    top:calc(50% - 250px);\r\n    left: calc(50% - 250px);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 450px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top: 20vh;\r\n    opacity: 1;\r\n    padding: 25px;\r\n    z-index: 20;\r\n  \r\n  }\r\n  div.modal-container h3{\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n  }\r\n  div.btn-container{\r\n    text-align: center;\r\n  }\r\n  div.container-input{\r\n    width: auto;\r\n    height: auto;\r\n    margin-top:25px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n  div.container-input input{\r\n    width: 90%;\r\n    border:1px solid #c1c1c1;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n  div.modal-container button{\r\n    width: 100px;\r\n    height: auto;\r\n    padding:10px;\r\n    border: 1px, solid;\r\n    margin-right:15px;\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    border-radius: 5px;\r\n  }\r\n  .btn-primary{\r\n    background-color: #5f9ea0ff;\r\n    color:white;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n  }\r\n  .btn{\r\n    background-color: white;\r\n    border: 1px solid #c1c1c1;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #c1c1c1;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .btn:active{\r\n    background-color: #b0e0e6ff;\r\n  }\r\n  @media (max-width:760px){\r\n    \r\n    div.modal-container{\r\n      width: 300px;\r\n      left: calc(50% - 150px);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pdGVtL2VkaXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXOztFQUViO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7RUFFdkI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUVBOztJQUVFO01BQ0UsWUFBWTtNQUNaLHVCQUF1QjtJQUN6QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1pdGVtL2VkaXQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgei1pbmRleDoxMDtcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDpjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gIFxyXG4gIH1cclxuICBkaXYubW9kYWwtY29udGFpbmVyIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGRpdi5idG4tY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYuY29udGFpbmVyLWlucHV0e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBkaXYuY29udGFpbmVyLWlucHV0IGlucHV0e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lciBidXR0b257XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXI6IDFweCwgc29saWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCwgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NzYwcHgpe1xyXG4gICAgXHJcbiAgICBkaXYubW9kYWwtY29udGFpbmVye1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/edit-item/edit-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-item/edit-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n\n<div @fade @slideLight class=\"modal-container\">\n  <h3>Edit</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"edit item\" maxlength=\"120\"/>\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"editItem(inputEditItem.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\n  </div>\n\n</div>\n"

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
            //   let i = this.listasService.getListas()[this.listasService.idxListActive].itens.filter((item)=>{
            //     return item.checked == true;
            // })[0].subItens;
            // console.log("SUBITENS", i)
            //   this.listasService.emitSubtaskActive(i);
            //   this.listasService.emitIndexList();
            //   this.listasService.showSubtasks = false
            //   this.listasService.emitSubstasksShowHide()
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

/***/ "./src/app/edit-kanban-item/edit-kanban-item.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/edit-kanban-item/edit-kanban-item.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    z-index:10;\r\n  }\r\n  div.modal-container{\r\n    position: absolute;\r\n    top:calc(50% - 250px);\r\n    left: calc(50% - 250px);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 450px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top: 20vh;\r\n    opacity: 1;\r\n    padding: 25px;\r\n    z-index: 20;\r\n  \r\n  }\r\n  div.modal-container h3{\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n  }\r\n  div.btn-container{\r\n    text-align: center;\r\n  }\r\n  div.container-input{\r\n    width: auto;\r\n    height: auto;\r\n    margin-top:25px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n  div.container-input input{\r\n    width: 425px;\r\n    border:1px solid #c1c1c1;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n  div.modal-container button{\r\n    width: 100px;\r\n    height: auto;\r\n    padding:10px;\r\n    border: 1px, solid;\r\n    margin-right:15px;\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    border-radius: 5px;\r\n  }\r\n  .btn-primary{\r\n    background-color: #5f9ea0ff;\r\n    color:white;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n  }\r\n  .btn{\r\n    background-color: white;\r\n    border: 1px solid #c1c1c1;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #c1c1c1;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .btn:active{\r\n    background-color: #b0e0e6ff;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1rYW5iYW4taXRlbS9lZGl0LWthbmJhbi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7O0VBRWI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCOztFQUV2QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1rYW5iYW4taXRlbS9lZGl0LWthbmJhbi1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB6LWluZGV4OjEwO1xyXG4gIH1cclxuICBkaXYubW9kYWwtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOmNhbGMoNTAlIC0gMjUwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgXHJcbiAgfVxyXG4gIGRpdi5tb2RhbC1jb250YWluZXIgaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgZGl2LmJ0bi1jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5jb250YWluZXItaW5wdXR7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6MjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5jb250YWluZXItaW5wdXQgaW5wdXR7XHJcbiAgICB3aWR0aDogNDI1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIGRpdi5tb2RhbC1jb250YWluZXIgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHgsIHNvbGlkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAsIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnk6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTBlNmZmO1xyXG4gICAgY29sb3I6IzVmOWVhMGZmO1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzFjMWMxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxuICB9XHJcbiAgLmJ0bjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/edit-kanban-item/edit-kanban-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/edit-kanban-item/edit-kanban-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n<div @fade @slideLight class=\"modal-container\">\n  <h3>Editar</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"reescreva o item\" maxlength=\"120\"/>\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/kanban\" (click)=\"editItem(inputEditItem.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/kanban\">cancel</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/edit-kanban-item/edit-kanban-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/edit-kanban-item/edit-kanban-item.component.ts ***!
  \****************************************************************/
/*! exports provided: EditKanbanItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditKanbanItemComponent", function() { return EditKanbanItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");





var EditKanbanItemComponent = /** @class */ (function () {
    function EditKanbanItemComponent(route, listaService) {
        this.route = route;
        this.listaService = listaService;
    }
    EditKanbanItemComponent.prototype.ngOnInit = function () {
        this.initComponent();
    };
    EditKanbanItemComponent.prototype.initComponent = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var id = params.itemId;
            _this.queryItemId = id;
            _this.itemEditValue = _this.returnItemById(id).text;
        });
    };
    EditKanbanItemComponent.prototype.returnItemById = function (id) {
        var item;
        this.listaService.getListas()[this.listaService.idxListActive].itens.forEach(function (el) {
            if (el._id == id) {
                item = el;
            }
        });
        return item;
    };
    EditKanbanItemComponent.prototype.editItem = function (newValue) {
        this.returnItemById(this.queryItemId).text = newValue;
    };
    EditKanbanItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-kanban-item',
            template: __webpack_require__(/*! ./edit-kanban-item.component.html */ "./src/app/edit-kanban-item/edit-kanban-item.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_2__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_2__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./edit-kanban-item.component.css */ "./src/app/edit-kanban-item/edit-kanban-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _listas_service__WEBPACK_IMPORTED_MODULE_4__["ListasService"]])
    ], EditKanbanItemComponent);
    return EditKanbanItemComponent;
}());



/***/ }),

/***/ "./src/app/edit-list-name/edit-list-name.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-list-name/edit-list-name.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    z-index:10;\r\n  }\r\n  div.modal-container{\r\n    position: absolute;\r\n    top:calc(50% - 250px);\r\n    left: calc(50% - 250px);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 450px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top: 20vh;\r\n    opacity: 1;\r\n    padding: 25px;\r\n    z-index: 20;\r\n  \r\n  }\r\n  div.modal-container h3{\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n  }\r\n  div.btn-container{\r\n    text-align: center;\r\n  }\r\n  div.container-input{\r\n    width: auto;\r\n    height: auto;\r\n    margin-top:25px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n  div.container-input input{\r\n    width: 100%;\r\n    border:1px solid #c1c1c1;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n  div.modal-container button{\r\n    width: 100px;\r\n    height: auto;\r\n    padding:10px;\r\n    border: 1px, solid;\r\n    margin-right:15px;\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    border-radius: 5px;\r\n  }\r\n  .btn-primary{\r\n    background-color: #5f9ea0ff;\r\n    color:white;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n  }\r\n  .btn{\r\n    background-color: white;\r\n    border: 1px solid #c1c1c1;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #c1c1c1;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .btn:active{\r\n    background-color: #b0e0e6ff;\r\n  }\r\n  @media (max-width:760px){\r\n    \r\n    div.modal-container{\r\n      width: 300px;\r\n      left: calc(50% - 150px);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1saXN0LW5hbWUvZWRpdC1saXN0LW5hbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixVQUFVO0VBQ1o7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVzs7RUFFYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsV0FBVztFQUNiO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0VBRXZCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFFQTs7SUFFRTtNQUNFLFlBQVk7TUFDWix1QkFBdUI7SUFDekI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbGlzdC1uYW1lL2VkaXQtbGlzdC1uYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB6LWluZGV4OjEwO1xyXG4gIH1cclxuICBkaXYubW9kYWwtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOmNhbGMoNTAlIC0gMjUwcHgpO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgXHJcbiAgfVxyXG4gIGRpdi5tb2RhbC1jb250YWluZXIgaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgZGl2LmJ0bi1jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5jb250YWluZXItaW5wdXR7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6MjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGRpdi5jb250YWluZXItaW5wdXQgaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lciBidXR0b257XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXI6IDFweCwgc29saWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCwgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2MHB4KXtcclxuICAgIFxyXG4gICAgZGl2Lm1vZGFsLWNvbnRhaW5lcntcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDE1MHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/edit-list-name/edit-list-name.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-list-name/edit-list-name.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n\n<div @fade @slideLight @fadeout class=\"modal-container\">\n  <h3>Edit Name</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputEditItem [value]=\"listName\" maxlength=\"14\" autofocus/>\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"editItemName(inputEditItem.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\n  </div>\n\n</div>\n"

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

module.exports = ".version{\r\n    color:#b0e0e6ff;\r\n    text-align:right;\r\n    /* margin-right: 25px; */\r\n    padding:3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnNpb257XHJcbiAgICBjb2xvcjojYjBlMGU2ZmY7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyNXB4OyAqL1xyXG4gICAgcGFkZGluZzozcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"menuPrincipal\" class=\"grid grid-template-columns-1\">\n  \n  <nav class=\"menu\">\n     <ul>\n      <!-- <li>luiz vilarinho\n        <i class=\"material-icons vertical-align-middle\">account_circle</i>\n      </li> -->\n      <!-- <li routerLink=\"\" >Lists</li> -->\n      <!-- <li>notes</li> -->\n      <!-- <li routerLink=\"kanban\" >Kanban</li> -->\n    </ul>\n    <!-- <div class=\"container__version\"><h5 class=\"version\">Version 1.5.1</h5></div> -->\n    <h5 class=\"version\">Version 1.6.0</h5>\n  </nav>\n  \n</header>\n"

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
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(listasService) {
        this.listasService = listasService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/kanban-add-item/kanban-add-item.component.css":
/*!***************************************************************!*\
  !*** ./src/app/kanban-add-item/kanban-add-item.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: black;\r\n    opacity: 0.8;\r\n    z-index:10;\r\n  }\r\n  div.modal-container{\r\n    position: absolute;\r\n    top:calc(50% - 250px);\r\n    left: calc(50% - 250px);\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    width: 450px;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    margin-top: 20vh;\r\n    opacity: 1;\r\n    padding: 25px;\r\n    z-index: 20;\r\n  \r\n  }\r\n  div.modal-container h3{\r\n    text-align: center;\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n  }\r\n  div.btn-container{\r\n    text-align: center;\r\n  }\r\n  div.container-input{\r\n    width: auto;\r\n    height: auto;\r\n    margin-top:25px;\r\n    margin-bottom: 25px;\r\n    text-align: center;\r\n  }\r\n  div.container-input input{\r\n    width: 425px;\r\n    border:1px solid #c1c1c1;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n  }\r\n  div.modal-container button{\r\n    width: 100px;\r\n    height: auto;\r\n    padding:10px;\r\n    border: 1px, solid;\r\n    margin-right:15px;\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    border-radius: 5px;\r\n  }\r\n  .btn-primary{\r\n    background-color: #5f9ea0ff;\r\n    color:white;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n  }\r\n  .btn{\r\n    background-color: white;\r\n    border: 1px solid #c1c1c1;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #c1c1c1;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  .btn:active{\r\n    background-color: #b0e0e6ff;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuLWFkZC1pdGVtL2thbmJhbi1hZGQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXOztFQUViO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjs7RUFFdkI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2thbmJhbi1hZGQtaXRlbS9rYW5iYW4tYWRkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHotaW5kZXg6MTA7XHJcbiAgfVxyXG4gIGRpdi5tb2RhbC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6Y2FsYyg1MCUgLSAyNTBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICBcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lciBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBkaXYuYnRuLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZGl2LmNvbnRhaW5lci1pbnB1dHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZGl2LmNvbnRhaW5lci1pbnB1dCBpbnB1dHtcclxuICAgIHdpZHRoOiA0MjVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgZGl2Lm1vZGFsLWNvbnRhaW5lciBidXR0b257XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXI6IDFweCwgc29saWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCwgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/kanban-add-item/kanban-add-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/kanban-add-item/kanban-add-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n<div @fade @slideLight class=\"modal-container\">\n  <h3>Adicionar ítem</h3>\n  <div class=\"container-input\">\n    <input autofocus type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"adicione um item\" maxlength=\"120\"/>\n  </div>\n  <div class=\"btn-container\">\n    <button  class=\"btn-primary\" routerLink=\"/kanban\" (click)=\"addItem(inputEditItem.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/kanban\">cancel</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/kanban-add-item/kanban-add-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kanban-add-item/kanban-add-item.component.ts ***!
  \**************************************************************/
/*! exports provided: KanbanAddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanAddItemComponent", function() { return KanbanAddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var KanbanAddItemComponent = /** @class */ (function () {
    function KanbanAddItemComponent(listasService, route, router) {
        this.listasService = listasService;
        this.route = route;
        this.router = router;
        this.itemEditValue = "";
    }
    KanbanAddItemComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.route.queryParams.subscribe(function (params) {
            _this_1.label = params.label;
        });
        var _this = this;
        document.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                var item = document.querySelector("[name='editItemInput']");
                if (item.value == null || item.value == undefined) {
                    return false;
                }
                console.log(item.value);
                _this.addItem(item.value);
                _this.router.navigate(['/kanban']);
            }
        });
    };
    KanbanAddItemComponent.prototype.addItem = function (newValue) {
        if (newValue == "") {
            return false;
        }
        var inputItem = {
            _id: Math.floor(Math.random() * 10000),
            text: newValue,
            complete: false,
            checked: false,
            subItens: [],
            notas: [],
            kanban: this.label
        };
        this.listasService.getListas()[this.listasService.idxListActive].itens.push(inputItem);
        //this.listasService.gravarDados(this.listasService.getListas());
    };
    KanbanAddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kanban-add-item',
            template: __webpack_require__(/*! ./kanban-add-item.component.html */ "./src/app/kanban-add-item/kanban-add-item.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_2__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_2__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./kanban-add-item.component.css */ "./src/app/kanban-add-item/kanban-add-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_3__["ListasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KanbanAddItemComponent);
    return KanbanAddItemComponent;
}());



/***/ }),

/***/ "./src/app/kanban/kanban.component.css":
/*!*********************************************!*\
  !*** ./src/app/kanban/kanban.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*NOVO CSS*/\r\n#cardsModuloTarefa{\r\n    padding-top:15px;\r\n    height: 100%;\r\n    width: 83vw;\r\n  }\r\n#cardsModuloTarefa h2{\r\n    width: 67%;\r\n    margin-left: 20px;\r\n  }\r\narticle.cardTarefa{\r\n    width:31%;\r\n    height: auto;\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n    vertical-align: top;\r\n  }\r\n.cardTarefa .titulo{\r\n    text-align: center;\r\n    background-color: #5f9ea0ff;\r\n    font-weight: 300;\r\n    font-size: 1.3rem;\r\n    color:#dcdcdcff;\r\n    padding: 5px;\r\n  }\r\n.cardTarefa .texto-item-container{\r\n  \r\n    font-size: 1rem;\r\n    color: #383838;\r\n    padding: 15px;\r\n  }\r\n#cardsModuloTarefa .item{\r\n    margin: 10px 0 10px 0;\r\n    border: 1px solid #c1c1c1;\r\n  \r\n  }\r\n.cardTarefa .container-itens-menu{\r\n    height: auto;\r\n    color:#5f9ea0;\r\n  }\r\n.cardTarefa .container-itens-menu ul{\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 8px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    background-color: #d2e2e2;\r\n  }\r\n.cardTarefa .container-itens-menu ul li{\r\n    -webkit-box-flex:1;\r\n            flex:1;\r\n    text-align: center;\r\n    font-size: 0.9rem;\r\n    cursor: pointer;\r\n  }\r\n#task-info{\r\n    width: 500px;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    background-color: #4f6f80;\r\n    position: absolute;\r\n    top:0;\r\n    right: 0;\r\n  }\r\n#task-info #listInformation{\r\n    background-color: unset;\r\n  }\r\n.kanban-addIcon__container{\r\n    width: 15px;\r\n    height: 15px;\r\n    background-color: #b0e0e6;\r\n    background-image: url('addIcon.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    float: right;\r\n    margin: 6px;\r\n    cursor: pointer;\r\n  }\r\n/*\r\n  .kanban-addIcon:hover{\r\n    background-image: url('../images/addIcon_hover.svg');\r\n  }\r\n  .kanban-addIcon:active{\r\n    background-image: url('../images/addIcon.svg');\r\n  }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuL2thbmJhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBOztJQUVFLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtFQUNmO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIseUJBQXlCOztFQUUzQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGtCQUFNO1lBQU4sTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsUUFBUTtFQUNWO0FBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9DQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUVBOzs7Ozs7SUFNRSIsImZpbGUiOiJzcmMvYXBwL2thbmJhbi9rYW5iYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qTk9WTyBDU1MqL1xyXG4jY2FyZHNNb2R1bG9UYXJlZmF7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDgzdnc7XHJcbiAgfVxyXG4gICNjYXJkc01vZHVsb1RhcmVmYSBoMntcclxuICAgIHdpZHRoOiA2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgYXJ0aWNsZS5jYXJkVGFyZWZhe1xyXG4gICAgd2lkdGg6MzElO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICAuY2FyZFRhcmVmYSAudGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6I2RjZGNkY2ZmO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuIFxyXG4gIC5jYXJkVGFyZWZhIC50ZXh0by1pdGVtLWNvbnRhaW5lcntcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgI2NhcmRzTW9kdWxvVGFyZWZhIC5pdGVte1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzFjMTtcclxuICBcclxuICB9XHJcbiAgLmNhcmRUYXJlZmEgLmNvbnRhaW5lci1pdGVucy1tZW51e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IzVmOWVhMDtcclxuICB9XHJcbiAgLmNhcmRUYXJlZmEgLmNvbnRhaW5lci1pdGVucy1tZW51IHVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTJlMjtcclxuICB9XHJcbiAgLmNhcmRUYXJlZmEgLmNvbnRhaW5lci1pdGVucy1tZW51IHVsIGxpe1xyXG4gICAgZmxleDoxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICN0YXNrLWluZm97XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjZmODA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAjdGFzay1pbmZvICNsaXN0SW5mb3JtYXRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICB9XHJcbiAgLmthbmJhbi1hZGRJY29uX19jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWRkSWNvbi5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgLmthbmJhbi1hZGRJY29uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYWRkSWNvbl9ob3Zlci5zdmcnKTtcclxuICB9XHJcbiAgLmthbmJhbi1hZGRJY29uOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2FkZEljb24uc3ZnJyk7XHJcbiAgfSovIl19 */"

/***/ }),

/***/ "./src/app/kanban/kanban.component.html":
/*!**********************************************!*\
  !*** ./src/app/kanban/kanban.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  @fade id=\"cardsModuloTarefa\">\n  <h2>{{ nomeLista }}</h2>\n  <article class=\"cardTarefa\">\n    <div class=\"titulo\">fazer\n      <div class=\"kanban-addIcon__container\"  routerLink=\"/kanban/add\" [queryParams]=\"{ label: 'fazer'}\"></div>\n    </div>\n   \n    <div *ngFor=\"let item of fazer\" class=\"item\">\n      <div class=\"texto-item-container\">\n          <p>{{ item.text }}</p>\n      </div>\n      <div class=\"container-itens-menu\">\n        <ul>\n          <li routerLink=\"edit-item\" [queryParams]=\"{ itemId: item._id}\" >edit</li>\n          <li (click)=\"deleteItem(item._id)\">delete</li>\n          <li>subtask</li>\n          <li (click)=\"changeToFazendo(item._id)\">>></li>\n        </ul>\n      </div>\n    </div>\n  </article>\n\n  <article class=\"cardTarefa\">\n    <div class=\"titulo\">fazendo</div>\n    <div *ngFor=\"let item of fazendo\" class=\"item\">\n      <div class=\"texto-item-container\">\n          <p>{{ item.text }}</p>\n      </div>\n      <div class=\"container-itens-menu\">\n        <ul>\n          <li (click)=\"changeToFazer(item._id)\"> << </li>\n          <li routerLink=\"edit-item\" [queryParams]=\"{ itemId: item._id}\">edit</li>\n          <li (click)=\"deleteItem(item._id)\">delete</li>\n          <li>subtask</li>\n          <li (click)=\"changeToFeito(item._id)\">>></li>\n        </ul>\n      </div>\n    </div>\n    \n  </article>\n\n  <article class=\"cardTarefa\">\n    <div class=\"titulo\">feito</div>\n    <div *ngFor=\"let item of feito\" class=\"item\">\n      <div class=\"texto-item-container\">\n          <p>{{ item.text }}</p>\n      </div>\n      <div class=\"container-itens-menu\">\n        <ul>\n          <li (click)=\"changeToFazendo(item._id)\"> << </li>\n          <li routerLink=\"edit-item\" [queryParams]=\"{ itemId: item._id}\">edit</li>\n          <li (click)=\"deleteItem(item._id)\">delete</li>\n          <li>subtask</li>\n        </ul>\n      </div>\n    </div>\n    \n  </article>\n  \n</section>\n<!-- <section id=\"task-info\">\n  <section id=\"listInformation\" class=\"background-blue\">\n    <div class=\"listIconContainer\">\n      <img id=\"iconeListas\" src=\"images/listas_icon.svg\">\n      <div class=\"boxListas hidden\">\n          <div class=\"itemBoxListas\">todas</div>\n          <div class=\"itemBoxListas\">inbox</div>\n          <div class=\"itemBoxListas\">lista1</div>\n          <div class=\"itemBoxListas\">lista2</div>\n      </div>\n    </div>\n    <div class=\"titleContainer\">\n      <h2>SubTask</h2>\n    </div>\n    <div class=\"inputContainer\">\n      <input type=\"text\" name=\"inputItem\" placeholder=\"new item\"/><button>OK</button>\n    </div>\n    <div id=\"doneComponent\">\n      <span>25%</span>\n      <div class=\"doneItem\"></div>\n    </div>\n    <div class=\"listContainer\">\n      <div class=\"itemContainer\">\n        <input type=\"checkbox\" id=\"1\"  /><label for=\"1\" class=\"item\">lsadsad sa as ad asd asd </label>\n          <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div>\n      </div>\n    </div>\n    <div id=\"annotation\">\n      <div class=\"titleContainer\">\n        <h2>Annotation</h2>\n      </div>\n      <div class=\"inputContainer\">\n        <input type=\"text\" name=\"inputItem\" placeholder=\"new item\"/><button>OK</button>\n      </div>\n      <div class=\"annotationItem\">\n        <div class=\"txtAnnotation\">ajn NDASMD MALS ASLSKDMAçams çms masçdm çalmsdç</div>\n      <div class=\"editAnnotation\">\n        <span>Edit</span><span>delete</span>\n      </div>\n\n      </div>\n    </div>\n  </section> \n</section>-->"

/***/ }),

/***/ "./src/app/kanban/kanban.component.ts":
/*!********************************************!*\
  !*** ./src/app/kanban/kanban.component.ts ***!
  \********************************************/
/*! exports provided: KanbanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanComponent", function() { return KanbanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listas.service */ "./src/app/listas.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");





var KanbanComponent = /** @class */ (function () {
    function KanbanComponent(listasService) {
        this.listasService = listasService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    KanbanComponent.prototype.ngOnInit = function () {
        this.initSubscription();
        this.initComponent();
    };
    KanbanComponent.prototype.initSubscription = function () {
        var _this = this;
        this.subscriptions.add(this.listasService.idxList$.subscribe(function (novoIdx) {
            _this.nomeLista = _this.listasService.getListas()[novoIdx].nome;
        }));
        this.subscriptions.add(this.listasService.listasSubject.subscribe(function (listas) {
            var idx = _this.listasService.idxListActive;
            _this.lista = listas[idx];
            _this.kanbanUpdate();
        }));
    };
    KanbanComponent.prototype.initComponent = function () {
        var idx = this.listasService.idxListActive;
        this.lista = this.listasService.getListas()[idx];
        this.nomeLista = this.lista.nome;
        this.kanbanUpdate();
    };
    KanbanComponent.prototype.kanbanUpdate = function () {
        this.fazer = this.lista.itens.filter(function (el) {
            console.log("FAZER1", el.kanban);
            if (el.kanban === "fazer") {
                return el;
            }
        });
        this.fazendo = this.lista.itens.filter(function (el) {
            if (el.kanban === "fazendo") {
                return el;
            }
        });
        this.feito = this.lista.itens.filter(function (el) {
            if (el.kanban === "feito") {
                return el;
            }
        });
    };
    KanbanComponent.prototype.changeToFazendo = function (id) {
        var idx = this.listasService.idxListActive;
        this.listasService.getListas()[idx].itens.forEach(function (el) {
            if (el._id === id) {
                el.kanban = "fazendo";
                return el;
            }
        });
        this.listasService.emitListas();
        console.log("novometodo", this.listasService.getListas()[idx].itens);
        //this.kanbanUpdate();
    };
    KanbanComponent.prototype.changeToFazer = function (id) {
        var idx = this.listasService.idxListActive;
        this.listasService.getListas()[idx].itens.forEach(function (el) {
            if (el._id === id) {
                el.kanban = "fazer";
                return el;
            }
        });
        this.listasService.emitListas();
    };
    KanbanComponent.prototype.changeToFeito = function (id) {
        var idx = this.listasService.idxListActive;
        this.listasService.getListas()[idx].itens.forEach(function (el) {
            if (el._id === id) {
                el.kanban = "feito";
                return el;
            }
        });
        this.listasService.emitListas();
    };
    KanbanComponent.prototype.deleteItem = function (id) {
        var idx = this.listasService.idxListActive;
        var itemIndex = this.listasService.getListas()[idx].itens.findIndex(function (el) {
            return el._id === id;
        });
        this.listasService.getListas()[idx].itens.splice(itemIndex, 1);
        this.listasService.emitListas();
        console.log(itemIndex);
        console.log(this.listasService.getListas()[idx].itens);
    };
    KanbanComponent.prototype.editItem = function () {
    };
    KanbanComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    KanbanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kanban',
            template: __webpack_require__(/*! ./kanban.component.html */ "./src/app/kanban/kanban.component.html"),
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["taskAnimations"],
                _animations__WEBPACK_IMPORTED_MODULE_4__["slideLight"]
            ],
            styles: [__webpack_require__(/*! ./kanban.component.css */ "./src/app/kanban/kanban.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listas_service__WEBPACK_IMPORTED_MODULE_2__["ListasService"]])
    ], KanbanComponent);
    return KanbanComponent;
}());



/***/ }),

/***/ "./src/app/list-info/list-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-info/list-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#listInformation .wrapCheckBox{\r\n    width: 25px;\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n#listInformation .itemContainer {\r\n    padding: 8px 20px 2px 23px;\r\n}\r\n#listInformation div.wrapCheckBox:before{\r\n    width: 15px;\r\n    height: 15px;\r\n    border:1px solid #b0e0e6ff;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    content: \"\";\r\n    margin-right: 12px;\r\n    vertical-align: middle;\r\n    margin-bottom: 3px;\r\n    cursor:pointer;\r\n}\r\n#listInformation input[type='checkbox']:checked ~ div.wrapCheckBox:before{\r\n    font-family: 'Material Icons';\r\n    content: \"check\";\r\n    font-weight: 800;\r\n    color:#5f9ea0ff;\r\n    text-align: center;\r\n}\r\n#subItemControllers{\r\n    margin: 0px 20px 0px 30px;\r\n    text-align: right;\r\n}\r\n#subItemControllers button{\r\n    padding: 4px;\r\n    width: auto;\r\n    color:#246c6e;\r\n    border: 1px solid #33878a;\r\n    margin:0px 5px 0px 5px;\r\n    pointer-events: none;\r\n}\r\n#subItemControllers button.active{\r\n    background-color: #b0e0e6ff;\r\n    color: #5f9ea0ff;\r\n    border: 1px solid #5f9ea0ff;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n}\r\n#subItemControllers button.active:active{\r\n    background-color:#b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n}\r\n#subItemControllers button.active:hover{\r\n    background-color:rgb(147, 190, 196);\r\n}\r\n.completed{\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}\r\n@media (max-width:760px){\r\n    \r\n    #listInformation{\r\n      width: 100vw;\r\n    }\r\n    #listInformation button{\r\n        width: 10%;\r\n    }\r\n    #subItemControllers button{\r\n        width: auto;\r\n    }\r\n    #listInformation input[type='text']{\r\n        width: 90%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pbmZvL2xpc3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtNQUNFLFlBQVk7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1pbmZvL2xpc3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpc3RJbmZvcm1hdGlvbiAud3JhcENoZWNrQm94e1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4jbGlzdEluZm9ybWF0aW9uIC5pdGVtQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4IDJweCAyM3B4O1xyXG59XHJcbiNsaXN0SW5mb3JtYXRpb24gZGl2LndyYXBDaGVja0JveDpiZWZvcmV7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2IwZTBlNmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuICBcclxuI2xpc3RJbmZvcm1hdGlvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgfiBkaXYud3JhcENoZWNrQm94OmJlZm9yZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgY29udGVudDogXCJjaGVja1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiM1ZjllYTBmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJze1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiNzdWJJdGVtQ29udHJvbGxlcnMgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjb2xvcjojMjQ2YzZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzODc4YTtcclxuICAgIG1hcmdpbjowcHggNXB4IDBweCA1cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVmOWVhMGZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmU6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbn1cclxuI3N1Ykl0ZW1Db250cm9sbGVycyBidXR0b24uYWN0aXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ3LCAxOTAsIDE5Nik7XHJcbn1cclxuLmNvbXBsZXRlZHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjBweCl7XHJcbiAgICBcclxuICAgICNsaXN0SW5mb3JtYXRpb257XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgICNsaXN0SW5mb3JtYXRpb24gYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICB9XHJcbiAgICAjc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgICNsaXN0SW5mb3JtYXRpb24gaW5wdXRbdHlwZT0ndGV4dCdde1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/list-info/list-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-info/list-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @slideLight @fadeout *ngIf=\"listInfoShow\" id=\"listInformation\" class=\"background-blue\">\n  \n  <div class=\"titleContainer\">\n    <h2>SubTask</h2>\n  </div>\n  <div class=\"inputContainer\">\n      <input type=\"text\" #inputSubitem name=\"inputSubitem\" placeholder=\"new item\"/><button (click)=\"addSubItem(inputSubitem)\">OK</button>\n  </div>\n  \n<app-subtask-porcentagem></app-subtask-porcentagem>\n\n  <ng-container>\n    <section @fade id=\"subItemControllers\">\n      <button *ngIf=\"showDoneBtn; else undoneBtn\" [class.active]=\"activateButton\" (click)=\"markToDone()\">done</button>\n      <ng-template #undoneBtn>\n        <button [class.active]=\"activateButton\" (click)=\"markToUndone()\">undone</button>\n      </ng-template>\n      <button [class.active]=\"activateButton\" (click)=\"deleteSubItens()\">delete</button>\n      <button [class.active]=\"activateButtonEdit\" #editButton (click)=\"changeEditParam()\" routerLink=\"edit-item\">edit</button>\n    </section>\n  </ng-container>\n\n  <div class=\"listContainer\">\n    <div *ngFor=\"let subitem of subItens\" class=\"itemContainer\" (click)=\"subItemClicked(subitem._id)\">\n      <input type=\"checkbox\" id=\"subitem._id\" [checked]=\"subitem.checked\" />\n      <div class=\"wrapCheckBox\">\n        <span></span>\n       </div>\n      <p class=\"item\" [class.completed]=\"subitem.complete\">{{ subitem.text }}</p>\n    </div>\n  </div>\n\n  <app-notes></app-notes>\n</section>\n"

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
        this.anable = false;
    }
    ListInfoComponent.prototype.ngOnInit = function () {
        this.initSubscription();
        this.componentInit();
        console.log("SUBTASKS INIT");
        this.verifyCheckedItens();
    };
    ListInfoComponent.prototype.componentInit = function () {
        var _this = this;
        this.initSubscription();
        this.activateButton = false;
        this.showDoneBtn = true;
        document.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                var item = document.querySelector("[name='inputSubitem']");
                if (!item) {
                    return false;
                }
                if (item.value == "") {
                    return false;
                }
                console.log("SUBITEM: ", item);
                _this.addSubItem(item);
            }
        });
    };
    ListInfoComponent.prototype.initSubscription = function () {
        var _this_1 = this;
        this.subscriptions.add(this.listasService.showSubtasksSubject.subscribe(function (subtasksShowHide) {
            console.log("subtasksShowHide", subtasksShowHide);
            _this_1.listInfoShow = subtasksShowHide;
        }));
        this.subscriptions.add(this.listasService.idxList$.subscribe(function (idx) {
            _this_1.indexList = idx;
        }));
        this.subscriptions.add(this.listasService.subtaskActive$.subscribe(function (subitensListaService) {
            _this_1.subItens = subitensListaService;
        }));
    };
    ListInfoComponent.prototype.verifyCheckedItens = function () {
        var _this_1 = this;
        var showSubitens = false;
        for (var _i = 0, _a = this.listasService.getListas(); _i < _a.length; _i++) {
            var lista = _a[_i];
            //console.log("lista", lista.itens)
            lista.itens.forEach(function (el) {
                if (el.checked === true) {
                    console.log("SHOWDUBITENS TRUE");
                    var sub = _this_1.listasService.getListas()[_this_1.listasService.idxListActive].itens.filter(function (el) {
                        if (el.checked == true) {
                            return el;
                        }
                    })[0].subItens;
                    _this_1.listasService.emitSubtaskActive(sub);
                    showSubitens = true;
                    return;
                }
            });
        }
        this.listInfoShow = showSubitens;
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
        var _this_1 = this;
        var subItensChecked = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        subItensChecked.forEach(function (sub, index) {
            sub.complete = true;
            sub.checked = false;
            var idx = _this_1.subItens.indexOf(sub);
            //remove e adiciona o elemento para a última posição do array
            _this_1.subItens.push(_this_1.subItens.splice(idx, 1)[0]);
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
        var _this_1 = this;
        var subItensChecked = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        subItensChecked.forEach(function (sub, index) {
            sub.complete = false;
            sub.checked = false;
            _this_1.showDoneBtn = true;
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
        var _this_1 = this;
        var subItensCheckeds = this.subItens.filter(function (sub) {
            return sub.checked == true;
        });
        subItensCheckeds.forEach(function (subitem) {
            var idxSub = _this_1.subItens.indexOf(subitem);
            _this_1.subItens.splice(idxSub, 1);
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

module.exports = "\r\n#blocoCentral .itemContainer{\r\n    padding: 0px 20px 8px 23px;\r\n    position: relative;\r\n    left:0px;\r\n    width: 100%;\r\n  }\r\n  #blocoCentral .itemContainer:hover{\r\n    background-color: #efefefff;\r\n  }\r\n  #itemControllers{\r\n    margin: 0px 20px 0px 5px;\r\n    text-align: right;\r\n}\r\n  #itemControllers button{\r\n    padding: 5px;\r\n    width: auto;\r\n    background-color:white;\r\n    color: #c1c1c1;\r\n    border: 1px solid #DCDCDC;\r\n    margin:12px 5px 4px 0px;\r\n    pointer-events: none;\r\n}\r\n  #itemControllers button.active{\r\n    background-color: #5f9ea0ff;\r\n    color: whitesmoke;\r\n    border: 1px, solid white;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n}\r\n  #itemControllers button.active:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n}\r\n  #itemControllers button.active:hover{\r\n    background-color:rgb(29, 156, 160);\r\n}\r\n  .titleContainerEmpty{\r\n    border-bottom: 0;\r\n    padding: 30px 0px 0px 30px;\r\n    color: #5f9ea0ff;\r\n    font-weight: 300;\r\n}\r\n  h3.titleContainerEmpty {\r\n    margin-left: 7px;\r\n    \r\n}\r\n  .edit-icon-name{\r\n    margin-right: 15px;\r\n    border: 1px solid #c1c1c1;\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 5px;\r\n    float: left;\r\n    opacity: 0.5;\r\n}\r\n  .edit-icon-name i{\r\n    position: relative;\r\n    top:-7px;\r\n    left:2px;\r\n    margin-top: 2px;\r\n}\r\n  .edit-icon-name:hover{\r\n    background-color:#5f9ea0ff ;\r\n    color:#f1ebeb;\r\n    opacity: 1;\r\n    border:1px solid white;\r\n}\r\n  .titleContainer a{\r\n    cursor:pointer;\r\n}\r\n  .titleContainer a{\r\n    text-decoration: none;\r\n    color:#dcdcdcff;\r\n    font-size: 0.75em;\r\n    margin-left:15px;\r\n    margin-right:5px;\r\n  }\r\n  .titleContainer a.selected{\r\n    color:rgb(105, 191, 202);\r\n  }\r\n  #blocoCentral .titleContainer a.selected:hover{\r\n    color:rgb(86, 157, 167);\r\n  }\r\n  .titleContainer a:active{\r\n    color:#b0e0e6ff;\r\n  }\r\n  .container-disabled{\r\n    opacity: 0.5;\r\n    pointer-events: none;\r\n  }\r\n  #blocoCentral p.item-done{\r\n      color:#c1c1c1;\r\n  }\r\n  #containerLista div.envelop{\r\n    position: relative;\r\n    top:-5px;\r\n    left:-5px;\r\n    width: 110px;\r\n    background-color: #5f9ea0ff;\r\n    float: right;\r\n    border-radius:3px;\r\n    font-family: Calibri, sans-serif;\r\n    font-size: 1.4em;\r\n    z-index: 10;\r\n  }\r\n  #containerLista ul{\r\n      list-style: none;\r\n      margin: 0 auto;\r\n  }\r\n  #containerLista li{\r\n    border-bottom:1px solid rgb(105, 191, 202);\r\n    width: 91%;\r\n    color:whitesmoke;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n  #containerLista ul:first-child{\r\n    border-top: 1px solid rgb(105, 191, 202);\r\n}\r\n  #containerLista li:hover{\r\n    background-color: rgb(148, 199, 206);\r\n    color:#5f9ea0ff ;\r\n}\r\n  .wrapCheckBox{\r\n    width: 25px;\r\n    height: 20px;\r\n    float: left;\r\n    margin-top: 2px;\r\n}\r\n  div.wrapCheckBox:before{\r\n    width: 15px;\r\n    height: 15px;\r\n    border:1px solid #b0e0e6ff;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    content: \"\";\r\n    margin-right: 12px;\r\n    vertical-align: middle;\r\n    margin-bottom: 3px;\r\n    cursor:pointer;\r\n  }\r\n  input[type='checkbox']:checked ~ div.wrapCheckBox:before{\r\n      font-family: 'Material Icons';\r\n       content: \"check\";\r\n       font-weight: 800;\r\n       color:#5f9ea0ff;\r\n       text-align: center;\r\n  }\r\n  .desapeare{\r\n      display:none;\r\n  }\r\n  #blocoCentral[hidden]{\r\n      display:none;\r\n  }\r\n  .mobile{\r\n    display: none;\r\n}\r\n  @media (max-width:760px){\r\n    #blocoCentral{\r\n        width: 100vw;\r\n    }\r\n    #blocoCentral button, #listInformation button{\r\n        width: 10%;\r\n    }\r\n    #blocoCentral input[type='text'], #listInformation input[type='text']{\r\n        width: 90%;\r\n    }\r\n    #itemControllers button{\r\n        width: auto;\r\n    }\r\n    .desktop{\r\n        display: none;\r\n    }\r\n    .mobile{\r\n        display: block;\r\n        \r\n    }\r\n    #btns-complete-container__mobile a{\r\n\r\n    }\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tb2RlL2xpc3QtbW9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0Y7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7RUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7RUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25CO0VBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7RUFJQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtFQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsZUFBZTtBQUNuQjtFQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0VBQ0E7SUFDSSxjQUFjO0FBQ2xCO0VBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0Y7SUFDSSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtFQUN0QjtFQUNBO01BQ0ksYUFBYTtFQUNqQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0VBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsY0FBYztFQUNsQjtFQUNBO0lBQ0UsMENBQTBDO0lBQzFDLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtFQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0VBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUVBO01BQ0ksNkJBQTZCO09BQzVCLGdCQUFnQjtPQUNoQixnQkFBZ0I7T0FDaEIsZUFBZTtPQUNmLGtCQUFrQjtFQUN2QjtFQUNBO01BQ0ksWUFBWTtFQUNoQjtFQUNBO01BQ0ksWUFBWTtFQUNoQjtFQUNGO0lBQ0ksYUFBYTtBQUNqQjtFQUVFO0lBQ0U7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjOztJQUVsQjtJQUNBOztJQUVBOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1tb2RlL2xpc3QtbW9kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNibG9jb0NlbnRyYWwgLml0ZW1Db250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCA4cHggMjNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNibG9jb0NlbnRyYWwgLml0ZW1Db250YWluZXI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmZmY7XHJcbiAgfVxyXG4jaXRlbUNvbnRyb2xsZXJze1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI2l0ZW1Db250cm9sbGVycyBidXR0b257XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBjb2xvcjogI2MxYzFjMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RDREM7XHJcbiAgICBtYXJnaW46MTJweCA1cHggNHB4IDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4jaXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwZmY7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlcjogMXB4LCBzb2xpZCB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbiNpdGVtQ29udHJvbGxlcnMgYnV0dG9uLmFjdGl2ZTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbn1cclxuI2l0ZW1Db250cm9sbGVycyBidXR0b24uYWN0aXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjksIDE1NiwgMTYwKTtcclxufVxyXG5cclxuXHJcblxyXG4udGl0bGVDb250YWluZXJFbXB0eXtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAwcHggMzBweDtcclxuICAgIGNvbG9yOiAjNWY5ZWEwZmY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbmgzLnRpdGxlQ29udGFpbmVyRW1wdHkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIFxyXG59XHJcbi5lZGl0LWljb24tbmFtZXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5lZGl0LWljb24tbmFtZSBpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOi03cHg7XHJcbiAgICBsZWZ0OjJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uZWRpdC1pY29uLW5hbWU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ZjllYTBmZiA7XHJcbiAgICBjb2xvcjojZjFlYmViO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLnRpdGxlQ29udGFpbmVyIGF7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4udGl0bGVDb250YWluZXIgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiNkY2RjZGNmZjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgfVxyXG4udGl0bGVDb250YWluZXIgYS5zZWxlY3RlZHtcclxuICAgIGNvbG9yOnJnYigxMDUsIDE5MSwgMjAyKTtcclxuICB9XHJcbiAgI2Jsb2NvQ2VudHJhbCAudGl0bGVDb250YWluZXIgYS5zZWxlY3RlZDpob3ZlcntcclxuICAgIGNvbG9yOnJnYig4NiwgMTU3LCAxNjcpO1xyXG4gIH1cclxuICAudGl0bGVDb250YWluZXIgYTphY3RpdmV7XHJcbiAgICBjb2xvcjojYjBlMGU2ZmY7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZGlzYWJsZWR7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgI2Jsb2NvQ2VudHJhbCBwLml0ZW0tZG9uZXtcclxuICAgICAgY29sb3I6I2MxYzFjMTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lckxpc3RhIGRpdi5lbnZlbG9we1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOi01cHg7XHJcbiAgICBsZWZ0Oi01cHg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwZmY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAjY29udGFpbmVyTGlzdGEgdWx7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAjY29udGFpbmVyTGlzdGEgbGl7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2IoMTA1LCAxOTEsIDIwMik7XHJcbiAgICB3aWR0aDogOTElO1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNjb250YWluZXJMaXN0YSB1bDpmaXJzdC1jaGlsZHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTA1LCAxOTEsIDIwMik7XHJcbn1cclxuI2NvbnRhaW5lckxpc3RhIGxpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTk5LCAyMDYpO1xyXG4gICAgY29sb3I6IzVmOWVhMGZmIDtcclxufVxyXG4ud3JhcENoZWNrQm94e1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5kaXYud3JhcENoZWNrQm94OmJlZm9yZXtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYjBlMGU2ZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIH4gZGl2LndyYXBDaGVja0JveDpiZWZvcmV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgICAgY29udGVudDogXCJjaGVja1wiO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgIGNvbG9yOiM1ZjllYTBmZjtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmRlc2FwZWFyZXtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAjYmxvY29DZW50cmFsW2hpZGRlbl17XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbi5tb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2MHB4KXtcclxuICAgICNibG9jb0NlbnRyYWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG4gICAgI2Jsb2NvQ2VudHJhbCBidXR0b24sICNsaXN0SW5mb3JtYXRpb24gYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICB9XHJcbiAgICAjYmxvY29DZW50cmFsIGlucHV0W3R5cGU9J3RleHQnXSwgI2xpc3RJbmZvcm1hdGlvbiBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgICNpdGVtQ29udHJvbGxlcnMgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmRlc2t0b3B7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tb2JpbGV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAjYnRucy1jb21wbGV0ZS1jb250YWluZXJfX21vYmlsZSBhe1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/list-mode/list-mode.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-mode/list-mode.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <section id=\"blocoCentralEmpty\" class=\"item-central\" [hidden]=\"isEmptyHidden\">\n        <h2 class=\"titleContainerEmpty\">ready to get the job done?</h2>\n        <h3 class=\"titleContainerEmpty\">Click on de (+) button to start</h3>\n      </section>\n      <section id=\"blocoCentral\" class=\"item-central\" [hidden]=\"isCentralHidden\" >\n          <div class=\"titleContainer\">\n            \n      \n            <h2>\n              <div @fade @slideLight class=\"edit-icon-name\" routerLink=\"edit-name\"><i class=\"material-icons materialIconEditName\"> edit</i></div>\n              \n              {{ nomeLista }}\n                <a (click)=\"showCompletedTasks()\" class=\"fly-r desktop\" [class.selected]=\"completeSelected\">complete</a>\n                <a (click)=\"showIncompletedTasks()\" class=\"fly-r desktop\" [class.selected]=\"incompleteSelected\">incomplete</a>\n\n\n                <a (click)=\"showCompletedTasks()\" class=\"fly-r mobile\" [class.selected]=\"completeSelected\">\n                  C\n                </a>\n\n                <a (click)=\"showIncompletedTasks()\" class=\"fly-r mobile\" [class.selected]=\"incompleteSelected\">\n                  I\n                </a>\n            </h2>\n      \n          </div>\n          <div class=\"inputContainer\" [class.container-disabled]=\"!incompleteBtns\">\n            <input type=\"text\" #inputItem name=\"inputItem\" placeholder=\"new item\" maxlength=\"120\"/>\n            <button (click)=\"addItem(inputItem)\" (keyup)=\"addItem(inputItem)\">OK</button>\n          </div>\n      \n          <ng-container *ngIf = \"incompleteBtns == true\">\n            <section @fade id=\"itemControllers\">\n              <button [class.active]=\"activateButton\" (click)=\"moveToDone()\">done</button>\n              <button [class.active]=\"activateButton\" (click)=\"deleteItens()\">delete</button>\n              <button [class.active]=\"activateButtonEdit\" #editButton (click)=\"emitSelectedItem()\" routerLink=\"edit-item\">edit</button>\n              \n              <button [class.active]=\"activateButton\" (click)=\"showListsNames()\">\n                  change \n                <i class=\"material-icons\">{{ arrowIcon }}</i>\n              </button>\n      \n              <ng-container *ngIf=\"showNameLists\">\n                <article @fadeout id=\"containerLista\" (mouseleave)=\"showListsNames()\">\n                  <div class=\"envelop\">\n                    <ul>\n                      <ng-container *ngFor = \"let lista of this.listasService.getListas()\">\n                        <li *ngIf=\"lista.nome != nomeLista\" (click)=\"doChange(lista.nome)\">{{ lista.nome }}</li>\n                      </ng-container>\n                      \n                    </ul>\n                  </div>\n              </article>\n              </ng-container>\n      \n            </section>\n          </ng-container>\n      \n          <ng-container *ngIf = \"incompleteBtns == false\">\n            <section @fade id=\"itemControllers\">\n              <button [class.active]=\"activateButton\" (click)=\"moveToUndone()\">undone</button>\n              <button [class.active]=\"activateButton\" (click)=\"deleteItens()\">delete</button>\n              <button [class.active]=\"activateButton\" #editButton (click)=\"emitSelectedItem()\" routerLink=\"edit-item\">edit</button>\n              <button>\n                change\n                <i class=\"material-icons\">{{ arrowIcon }}</i>\n              </button>\n            </section>\n          </ng-container>\n          \n          <div @fade class=\"listContainer\" *ngIf = \"selectIncompleteTasks\">\n            <ng-container *ngFor=\"let item of activedList; let i = index\">\n              <div @fade @fadeout *ngIf=\"item.complete == false\" class=\"itemContainer\" (click)=\"itemClicked(item._id)\" >\n                \n                <input type=\"checkbox\" class=\"elementItem\" id=\"{{ item._id }}\" [checked]=\"item.checked\"  />\n                <div class=\"wrapCheckBox\">\n                  <span></span>\n                </div>\n                <p class=\"item\">{{ item.text }}</p>\n                <!-- <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div> -->\n              </div>\n            </ng-container>\n          </div>\n      \n          <div @fade class=\"listContainer\" *ngIf = \"!selectIncompleteTasks\">\n            <ng-container *ngFor=\"let item of activedList; let i = index\">\n              <div *ngIf=\"item.complete == true\" class=\"itemContainer\" (click)=\"itemClicked(item._id)\">\n                <input type=\"checkbox\" class=\"elementItem\" id=\"{{ item._id }}\" [checked]=\"item.checked\"  />\n              <div class=\"wrapCheckBox\">\n                  <span></span>\n                </div>\n                <p class=\"item item-done\">{{ item.text }}</p>\n                <!-- <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div> -->\n            </div>\n          </ng-container>\n        </div>\n        \n      \n      </section>\n      \n<app-list-info></app-list-info>\n    \n\n   \n"

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
        if (this.listasService.getListas()[this.listasService.idxListActive]) {
            this.nomeLista = this.listasService.getListas()[this.listasService.idxListActive].nome;
        }
    };
    ListModeComponent.prototype.initListModeComponent = function () {
        var _this = this;
        this.activedList = this.listasService.getListas()[this.listasService.idxListActive].itens;
        this.incompleteSelected = true;
        this.initSubscription();
        //this.checkedIfIsEmptyList();
        document.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                var item = document.querySelector("[name='inputItem']");
                if (item.value == "") {
                    return false;
                }
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
            notas: [],
            kanban: "fazer"
        };
        this.listasService.getListas()[this.listasService.idxListActive].itens.push(inputItem);
        inputElement.value = "";
        this.listasService.gravarDados(this.listasService.getListas());
    };
    ListModeComponent.prototype.verifyCheckedItens = function () {
        var itensChecked;
        if (this.activedList != undefined) {
            itensChecked = this.activedList.filter(function (el) {
                if (el.checked == true) {
                    return el;
                }
            });
        }
        else {
            itensChecked = [];
        }
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
        this.listasService.showSubtasks = false;
        this.listasService.emitSubstasksShowHide();
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
    // kanbanShow = false;
    // kanbanShowSubject = new Subject<boolean>();
    function ListasService() {
        this.listasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subjectList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.idxListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isEmptySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedItemIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.showSubtasksSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.porcentagemSubtaskSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subtaskActiveSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.subtaskActive$ = this.subtaskActiveSubject.asObservable();
        this.porcentagemSubtask$ = this.porcentagemSubtaskSubject.asObservable();
        //showSubtasks$ = this.showSubtasksSubject.asObservable();
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
    ListasService.prototype.emitListas = function () {
        this.listasSubject.next(this.listas);
    };
    ListasService.prototype.emitIndexList = function () {
        this.idxListSubject.next(this.idxListActive);
    };
    ListasService.prototype.emitSubstasksShowHide = function () {
        console.log("SERVICE", this.showSubtasks);
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

module.exports = ".active{\r\n    font-weight: 400!important;\r\n    color: #b0e0e6ff!important;\r\n}\r\n.deleteIcon{\r\n    float: right;\r\n    font-size: 20px;\r\n    margin-right: 24px;\r\n    opacity: 0.2;\r\n    cursor:pointer;\r\n}\r\na.active ~ a>i{\r\n    opacity: 0.8;\r\n}\r\n.deleteIcon:hover{\r\n    opacity: 1.0;\r\n}\r\n.deleteIcon:active{\r\n    opacity: 0.4;\r\n}\r\n.ico-burger-container{\r\n    width: 100%;\r\n    margin: 0;\r\n    height: auto;\r\n    padding: 0 0 0 25px;\r\n    background-color: #5f9ea0ff;\r\n    color:#b0e0e6ff;\r\n    cursor: pointer;\r\n}\r\n#menu-descktop .height100{\r\n    height: 100%;\r\n    min-height: 100vh;\r\n}\r\n.is-hidden{\r\n    display: none;\r\n}\r\n#menu-mobile{\r\n    display: none;\r\n}\r\n@media (max-width:760px){\r\n    #menu-descktop{\r\n        display: none;\r\n    }\r\n    #menu-mobile{\r\n        display:block;\r\n    }\r\n    #menu-mobile .ico-burger-container-mobile{\r\n        min-height: 2rem;\r\n        width: 100vw;\r\n        padding:0.5rem;\r\n        background-color: #5f9ea0ff;\r\n        text-align: right;\r\n    }\r\n    #menu-mobile .ico-burger-container-mobile .material-icons{\r\n        font-size: 2rem;\r\n        color: #b0e0e6ff;\r\n    }\r\n    #menu-mobile .teste{\r\n        width: 20px;\r\n        height: 13px;\r\n        margin-left:2rem;\r\n    }\r\n    #menu-container .titulo-container{\r\n        text-align: left;\r\n    }\r\n    div.modal-container{\r\n        left: calc(50% - 142px);\r\n    }\r\n    #menu-mobile ul{\r\n        font-size: 1.4rem;\r\n        text-align: left;\r\n        padding: 15px 5px;\r\n        list-style: none;\r\n        color:#b0e0e6ff;\r\n    }\r\n    #menu-mobile li{\r\n        margin-bottom: 10px;\r\n    }\r\n    #menu-mobile .list-length{\r\n        font-size: 1rem;\r\n    }\r\n    #menu-mobile a{\r\n        text-decoration: none;\r\n        color:#b0e0e6;\r\n    }\r\n    #menu-mobile .ico-burger-container-mobile .material-icons.deleteIcon{\r\n        font-size: 1.5rem;\r\n        opacity: 1;\r\n        margin-right: 0;\r\n    }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmV7XHJcbiAgICBmb250LXdlaWdodDogNDAwIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYjBlMGU2ZmYhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGVJY29ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuYS5hY3RpdmUgfiBhPml7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmRlbGV0ZUljb246aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuLmRlbGV0ZUljb246YWN0aXZle1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcbi5pY28tYnVyZ2VyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICAgIGNvbG9yOiNiMGUwZTZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbWVudS1kZXNja3RvcCAuaGVpZ2h0MTAwe1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLmlzLWhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNtZW51LW1vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2MHB4KXtcclxuICAgICNtZW51LWRlc2NrdG9we1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjbWVudS1tb2JpbGV7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgICNtZW51LW1vYmlsZSAuaWNvLWJ1cmdlci1jb250YWluZXItbW9iaWxle1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6MC41cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgICNtZW51LW1vYmlsZSAuaWNvLWJ1cmdlci1jb250YWluZXItbW9iaWxlIC5tYXRlcmlhbC1pY29uc3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgY29sb3I6ICNiMGUwZTZmZjtcclxuICAgIH1cclxuICAgICNtZW51LW1vYmlsZSAudGVzdGV7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjJyZW07XHJcbiAgICB9XHJcbiAgICAjbWVudS1jb250YWluZXIgLnRpdHVsby1jb250YWluZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIGRpdi5tb2RhbC1jb250YWluZXJ7XHJcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxNDJweCk7XHJcbiAgICB9XHJcbiAgICAjbWVudS1tb2JpbGUgdWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDVweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiNiMGUwZTZmZjtcclxuICAgIH1cclxuICAgICNtZW51LW1vYmlsZSBsaXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI21lbnUtbW9iaWxlIC5saXN0LWxlbmd0aHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAjbWVudS1tb2JpbGUgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6I2IwZTBlNjtcclxuICAgIH1cclxuICAgICNtZW51LW1vYmlsZSAuaWNvLWJ1cmdlci1jb250YWluZXItbW9iaWxlIC5tYXRlcmlhbC1pY29ucy5kZWxldGVJY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menu-descktop\">\n  <section class=\"ico-burger-container\" [class.height100]=\"h100\"> \n    <span class=\"material-icons\" (click)=\"showHideMenuLateral()\">\n      view_column\n    </span>\n  </section>\n  \n  <section id=\"menuLateral\" class=\"background-blue\" [class.is-hidden]=\"lateralHidden\">\n    <div class=\"titulo-container borderBottom\">\n      <h2>Lists:<span routerLink=\"addLista\" class=\"teste addIcon\"></span></h2>\n    </div>\n    <div class=\"md-marginBottom\">\n      <ul id=\"listNames\">\n        <li @fade @fadeout @slideLight *ngFor=\"let nomesListaItem of nomesListas; let idx=index\">\n          <a href=\"javascript:;\" (click)=\"selected(idx)\" id=\"{{ idx }}\" class=\"\"> {{ nomesListaItem.nome }} </a>\n          <span @fade @fadeout @slideLight class=\"list-length\">{{ nomesListaItem.incompletedItens() }}</span>\n          <a (click)=\"deleteList(idx)\"><i class=\"material-icons deleteIcon\">delete_forever</i></a>\n        </li>\n        \n      </ul>\n    </div>\n  </section>\n</div>\n\n<div id=\"menu-mobile\">\n  <section class=\"ico-burger-container-mobile\"> \n    <span class=\"material-icons\" (click)=\"openMobileMenu()\">\n      view_column\n    </span>\n    <article @fade @fadeout @slideLight id=\"menu-container\" *ngIf=\"mobileOpenedMenu\">\n      <div class=\"titulo-container borderBottom\">\n        <h2>Lists:<span routerLink=\"addLista\" class=\"teste addIcon\"></span></h2>\n      </div>\n      <div class=\"md-marginBottom\">\n        <ul id=\"listNames\">\n          <li *ngFor=\"let nomesListaItem of nomesListas; let idx=index\">\n            <a href=\"javascript:;\" (click)=\"selected(idx)\" id=\"{{ idx }}\" class=\"\"> {{ nomesListaItem.nome }} </a>\n            <span class=\"list-length\">{{ nomesListaItem.incompletedItens() }}</span>\n            <a (click)=\"deleteList(idx)\"><i class=\"material-icons deleteIcon\">delete_forever</i></a>\n          </li>\n          \n        </ul>\n      </div>\n    </article>\n  </section>\n</div>\n\n"

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
        this.lateralHidden = false;
        this.h100 = false;
        this.selectedNameList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.mobileOpenedMenu = false;
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
        this.listasService.showSubtasks = false;
        this.listasService.emitSubstasksShowHide();
    };
    MenuComponent.prototype.showHideMenuLateral = function () {
        var columnElement = document.querySelector(".grid-template-columns-3");
        this.lateralHidden = !this.lateralHidden;
        if (this.lateralHidden == true) {
            columnElement.style.gridTemplateColumns = "70px 1fr";
            //document.querySelector('#conteudo').classList.add("grid-template-columns-2")
            this.h100 = true;
        }
        else {
            columnElement.style.gridTemplateColumns = "250px 1fr";
            //document.querySelector('#conteudo').classList.add("grid-template-columns-3")
            //document.querySelector('#conteudo').classList.remove("grid-template-columns-2")
            this.h100 = false;
        }
    };
    /*mobile*/
    MenuComponent.prototype.openMobileMenu = function () {
        this.mobileOpenedMenu = !this.mobileOpenedMenu;
        console.log("mobileOpenedMenu", this.mobileOpenedMenu);
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

module.exports = "section{\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: black;\r\n  opacity: 0.8;\r\n  z-index:10;\r\n}\r\ndiv.modal-container{\r\n  position: absolute;\r\n  top:calc(50% - 250px);\r\n  left: calc(50% - 200px);\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  width: 280px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  margin-top: 20vh;\r\n  opacity: 1;\r\n  padding: 25px;\r\n  z-index: 20;\r\n\r\n}\r\ndiv.modal-container h3{\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  font-weight: 500;\r\n}\r\ndiv.btn-container{\r\n  text-align: center;\r\n}\r\ndiv.container-input{\r\n  width: auto;\r\n  height: auto;\r\n  margin-top:25px;\r\n  margin-bottom: 25px;\r\n  text-align: center;\r\n}\r\ndiv.container-input input{\r\n  width: 100%;\r\n  border:1px solid #c1c1c1;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\ndiv.modal-container button{\r\n  width: 100px;\r\n  height: auto;\r\n  padding:10px;\r\n  border: 1px, solid;\r\n  margin-right:15px;\r\n  text-align: center;\r\n  margin: 0, auto;\r\n  border-radius: 5px;\r\n}\r\n.btn-primary{\r\n  background-color: #5f9ea0ff;\r\n  color:white;\r\n}\r\n.btn-primary:active{\r\n  background-color: #b0e0e6ff;\r\n  color:#5f9ea0ff;\r\n}\r\n.btn{\r\n  background-color: white;\r\n  border: 1px solid #c1c1c1;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  background-color: #c1c1c1;\r\n  text-decoration: none;\r\n  /* color: #CJCJCJ; */\r\n}\r\n.btn:active{\r\n  background-color: #b0e0e6ff;\r\n}\r\n@media (max-width:760px){\r\n  \r\n  div.modal-container{\r\n      left: calc(50% - 142px);\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtYWRkLWxpc3RhL21vZGFsLWFkZC1saXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXOztBQUViO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFO01BQ0ksdUJBQXVCO0VBQzNCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtYWRkLWxpc3RhL21vZGFsLWFkZC1saXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB6LWluZGV4OjEwO1xyXG59XHJcbmRpdi5tb2RhbC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDpjYWxjKDUwJSAtIDI1MHB4KTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB6LWluZGV4OiAyMDtcclxuXHJcbn1cclxuZGl2Lm1vZGFsLWNvbnRhaW5lciBoM3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmRpdi5idG4tY29udGFpbmVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5kaXYuY29udGFpbmVyLWlucHV0e1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOjI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuZGl2LmNvbnRhaW5lci1pbnB1dCBpbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6MXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5kaXYubW9kYWwtY29udGFpbmVyIGJ1dHRvbntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBib3JkZXI6IDFweCwgc29saWQ7XHJcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCwgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uYnRuLXByaW1hcnk6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICBjb2xvcjojNWY5ZWEwZmY7XHJcbn1cclxuLmJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjMWMxO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qIGNvbG9yOiAjQ0pDSkNKOyAqL1xyXG59XHJcbi5idG46YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzYwcHgpe1xyXG4gIFxyXG4gIGRpdi5tb2RhbC1jb250YWluZXJ7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTQycHgpO1xyXG4gIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modal-add-lista/modal-add-lista.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modal-add-lista/modal-add-lista.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @fadeout></section>\n\n\n<div @fade @fadeout @slideLight class=\"modal-container\">\n  <h3>What is the list name?</h3>\n  <div class=\"container-input\">\n    <input type=\"text\" #inputLNewList name=\"newListName\" placeholder=\"type a name\" maxlength=\"14\" />\n  </div>\n  <div class=\"btn-container\">\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"addNewList(inputLNewList.value)\">ok</button>\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\n  </div>\n</div>\n"

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
        this.input.nativeElement.focus();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputLNewList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalAddListaComponent.prototype, "input", void 0);
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

/***/ "./src/app/modes-container/modes-container.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modes-container/modes-container.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVzLWNvbnRhaW5lci9tb2Rlcy1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modes-container/modes-container.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modes-container/modes-container.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/modes-container/modes-container.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modes-container/modes-container.component.ts ***!
  \**************************************************************/
/*! exports provided: ModesContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModesContainerComponent", function() { return ModesContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModesContainerComponent = /** @class */ (function () {
    function ModesContainerComponent() {
    }
    ModesContainerComponent.prototype.ngOnInit = function () {
    };
    ModesContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modes-container',
            template: __webpack_require__(/*! ./modes-container.component.html */ "./src/app/modes-container/modes-container.component.html"),
            styles: [__webpack_require__(/*! ./modes-container.component.css */ "./src/app/modes-container/modes-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModesContainerComponent);
    return ModesContainerComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width:760px){\r\n    \r\n    #annotation button{\r\n        width: 10%;\r\n    }\r\n    #annotation input[type='text']{\r\n        width: 90%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6NzYwcHgpe1xyXG4gICAgXHJcbiAgICAjYW5ub3RhdGlvbiBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgIH1cclxuICAgICNhbm5vdGF0aW9uIGlucHV0W3R5cGU9J3RleHQnXXtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"annotation\">\n  <div class=\"titleContainer\">\n    <h2>Notes</h2>\n  </div>\n  <div class=\"inputContainer\">\n    <input type=\"text\" #newNote name=\"iptNota\" [value]=\"inputNoteValue\" placeholder=\"new item\"/><button (click)=\"addNote( newNote )\">OK</button>\n  </div>\n  <div *ngFor = \"let note of notes; let i=index\" class=\"annotationItem\">\n    <div [hidden]=\"note.edit\" class=\"txtAnnotation\">{{ note.txt }}</div>\n    <input [type]=\"typeEditInput\" #iptEdit value=\"{{ note.txt }}\" />\n  <div class=\"editAnnotation\">\n    <div *ngIf = \"note.edit == false; else editBtns\">\n      <span (click)=\"editNote(i)\">Edit</span><span (click)=\"deleteNote(i)\">delete</span>\n    </div>\n    <ng-template #editBtns>\n      <span (click)=\"confirmNote(iptEdit, i)\">confirm edition</span>\n    </ng-template>\n  </div>\n\n  </div>\n</div>"

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
        var _this = this;
        this.notes = this.listaService.getListas()[this.listaService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].notas;
        document.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                var notaElement = document.querySelector("[name='iptNota'");
                if (notaElement.value == "") {
                    return false;
                }
                _this.addNote(notaElement);
                console.log("NOTA = ", notaElement);
            }
        });
    };
    NotesComponent.prototype.addNote = function (newNote) {
        var nvalue = newNote.value;
        console.log("NVALUE", nvalue);
        var note = [{
                edit: false,
                txt: nvalue
            }];
        this.notes = note.concat(this.notes);
        this.listaService.getListas()[this.listaService.idxListActive].itens.filter(function (item) {
            return item.checked == true;
        })[0].notas = this.notes;
        newNote.value = "";
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newNote'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLInputElement)
    ], NotesComponent.prototype, "novo", void 0);
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