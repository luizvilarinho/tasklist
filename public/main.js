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

module.exports = "\r\n<main class=\"center\">\r\n  <app-header></app-header>\r\n\r\n  <div id=\"conteudo\" class=\"grid grid-template-columns-3\">\r\n\r\n    <app-menu (passingName)=\"selectList($event)\"></app-menu>\r\n    \r\n    <app-modes-container></app-modes-container>\r\n    \r\n   \r\n  </div>\r\n  \r\n  \r\n\r\n</main>\r\n"

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
/* harmony import */ var _directives_dnd_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/dnd.directive */ "./src/app/directives/dnd.directive.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






















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
                _directives_dnd_directive__WEBPACK_IMPORTED_MODULE_20__["DndDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"]
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

/***/ "./src/app/directives/dnd.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/directives/dnd.directive.ts ***!
  \*********************************************/
/*! exports provided: DndDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DndDirective = /** @class */ (function () {
    function DndDirective(el) {
        this.el = el;
    }
    DndDirective.prototype.onDragStart = function (ev) {
        //ev.dataTransfer.setData("text", ev.target.id);
        console.log("START", ev);
    };
    DndDirective.prototype.onDrop = function (event) {
        event.preventDefault();
        console.log("DROP", event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DndDirective.prototype, "onDragStart", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:ondrop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DndDirective.prototype, "onDrop", null);
    DndDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDnd]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DndDirective);
    return DndDirective;
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

module.exports = "<section @fade @fadeout></section>\r\n\r\n\r\n<div @fade @slideLight class=\"modal-container\">\r\n  <h3>Edit</h3>\r\n  <div class=\"container-input\">\r\n    <input type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"edit item\" maxlength=\"120\"/>\r\n  </div>\r\n  <div class=\"btn-container\">\r\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"editItem(inputEditItem.value)\">ok</button>\r\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\r\n  </div>\r\n\r\n</div>\r\n"

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

module.exports = "<section @fade @fadeout></section>\r\n\r\n<div @fade @slideLight class=\"modal-container\">\r\n  <h3>Editar</h3>\r\n  <div class=\"container-input\">\r\n    <input type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"reescreva o item\" maxlength=\"120\"/>\r\n  </div>\r\n  <div class=\"btn-container\">\r\n    <button class=\"btn-primary\" routerLink=\"/kanban\" (click)=\"editItem(inputEditItem.value)\">ok</button>\r\n    <button class=\"btn\" routerLink=\"/kanban\">cancel</button>\r\n  </div>\r\n\r\n</div>\r\n"

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

module.exports = "<section @fade @fadeout></section>\r\n\r\n\r\n<div @fade @slideLight @fadeout class=\"modal-container\">\r\n  <h3>Edit Name</h3>\r\n  <div class=\"container-input\">\r\n    <input type=\"text\" #inputEditItem [value]=\"listName\" maxlength=\"14\" autofocus/>\r\n  </div>\r\n  <div class=\"btn-container\">\r\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"editItemName(inputEditItem.value)\">ok</button>\r\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\r\n  </div>\r\n\r\n</div>\r\n"

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

module.exports = ".version{\r\n    color:#b0e0e6ff;\r\n    text-align:left;\r\n    /* margin-right: 25px; */\r\n    padding:3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnNpb257XHJcbiAgICBjb2xvcjojYjBlMGU2ZmY7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDI1cHg7ICovXHJcbiAgICBwYWRkaW5nOjNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"menuPrincipal\" class=\"grid grid-template-columns-1\">\r\n  \r\n  <nav class=\"menu\">\r\n     <ul>\r\n      <!-- <li>luiz vilarinho\r\n        <i class=\"material-icons vertical-align-middle\">account_circle</i>\r\n      </li> -->\r\n      <li routerLink=\"\" >Lists</li>\r\n      <!-- <li>notes</li> -->\r\n      <li routerLink=\"kanban\" >Kanban</li>\r\n    </ul>\r\n    \r\n    <h5 class=\"version\">Version 1.8.5</h5>\r\n  </nav>\r\n  \r\n</header>\r\n"

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

module.exports = "<section @fade @fadeout></section>\r\n\r\n<div @fade @slideLight class=\"modal-container\">\r\n  <h3>Adicionar ítem</h3>\r\n  <div class=\"container-input\">\r\n    <input autofocus type=\"text\" #inputEditItem [value]=\"itemEditValue\" name=\"editItemInput\" placeholder=\"adicione um item\" maxlength=\"120\"/>\r\n  </div>\r\n  <div class=\"btn-container\">\r\n    <button  class=\"btn-primary\" routerLink=\"/kanban\" (click)=\"addItem(inputEditItem.value)\">ok</button>\r\n    <button class=\"btn\" routerLink=\"/kanban\">cancel</button>\r\n  </div>\r\n\r\n</div>\r\n"

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

module.exports = "/*NOVO CSS*/\r\n#cardsModuloTarefa{\r\n    padding-top:15px;\r\n    height: 100%;\r\n    width: 83vw;\r\n  }\r\n#cardsModuloTarefa h2{\r\n    width: 67%;\r\n    margin-left: 20px;\r\n  }\r\narticle.cardTarefa{\r\n    width:31%;\r\n    height: auto;\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n    vertical-align: top;\r\n  }\r\n.cardTarefa .titulo{\r\n    text-align: center;\r\n    background-color: #5f9ea0ff;\r\n    font-weight: 300;\r\n    font-size: 1.3rem;\r\n    color:#dcdcdcff;\r\n    padding: 5px;\r\n  }\r\n.cardTarefa .texto-item-container{\r\n\r\n    font-size: 1rem;\r\n    color: #383838;\r\n    padding: 15px;\r\n  }\r\n#cardsModuloTarefa .item{\r\n    margin: 10px 0 10px 0;\r\n    border: 1px solid #c1c1c1;\r\n\r\n  }\r\n.cardTarefa .container-itens-menu{\r\n    height: auto;\r\n    color:#5f9ea0;\r\n  }\r\n.cardTarefa .container-itens-menu ul{\r\n    list-style: none;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 8px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    background-color: #d2e2e2;\r\n  }\r\n.cardTarefa .container-itens-menu ul li{\r\n    -webkit-box-flex:1;\r\n            flex:1;\r\n    text-align: center;\r\n    font-size: 0.9rem;\r\n    cursor: pointer;\r\n  }\r\n#task-info{\r\n    width: 500px;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    background-color: #4f6f80;\r\n    position: absolute;\r\n    top:0;\r\n    right: 0;\r\n  }\r\n#task-info #listInformation{\r\n    background-color: unset;\r\n  }\r\n.kanban-addIcon__container{\r\n    width: 15px;\r\n    height: 15px;\r\n    background-color: #b0e0e6;\r\n    background-image: url('addIcon.svg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    float: right;\r\n    margin: 6px;\r\n    cursor: pointer;\r\n  }\r\n#kanban-list-info{\r\n    position: absolute;\r\n    top: 48px;\r\n    left: 60%;\r\n    width: 80%;\r\n    border-top: 1px solid #1f31313d;\r\n  }\r\n#kanban-list-info .btn-fechar-subtask{\r\n    padding: 10px;\r\n    width: 100%;\r\n    background-color: #5f9ea0;\r\n  }\r\n#kanban-list-info i{\r\n    color: #b0e0e6;\r\n    cursor: pointer;\r\n  }\r\n#kanban-list-info .titleContainer h2{\r\n    padding-top: 0px;\r\n  }\r\n.kanban-subtask-length{\r\n    display: inline-block;\r\n    background-color: #5f9ea0;\r\n    color: #d2e2e2;\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    margin-right: 5px;\r\n  }\r\n.container-itens-menu li:hover{\r\n    color: #383838;\r\n  }\r\n/*\r\n  .kanban-addIcon:hover{\r\n    background-image: url('../images/addIcon_hover.svg');\r\n  }\r\n  .kanban-addIcon:active{\r\n    background-image: url('../images/addIcon.svg');\r\n  }*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FuYmFuL2thbmJhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUVBOztJQUVFLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtFQUNmO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIseUJBQXlCOztFQUUzQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGtCQUFNO1lBQU4sTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsUUFBUTtFQUNWO0FBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9DQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLCtCQUErQjtFQUNqQztBQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFFQTs7Ozs7O0lBTUUiLCJmaWxlIjoic3JjL2FwcC9rYW5iYW4va2FuYmFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5PVk8gQ1NTKi9cclxuI2NhcmRzTW9kdWxvVGFyZWZhe1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA4M3Z3O1xyXG4gIH1cclxuICAjY2FyZHNNb2R1bG9UYXJlZmEgaDJ7XHJcbiAgICB3aWR0aDogNjclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIGFydGljbGUuY2FyZFRhcmVmYXtcclxuICAgIHdpZHRoOjMxJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgLmNhcmRUYXJlZmEgLnRpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGNvbG9yOiNkY2RjZGNmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5jYXJkVGFyZWZhIC50ZXh0by1pdGVtLWNvbnRhaW5lcntcclxuXHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzM4MzgzODtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gICNjYXJkc01vZHVsb1RhcmVmYSAuaXRlbXtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcblxyXG4gIH1cclxuICAuY2FyZFRhcmVmYSAuY29udGFpbmVyLWl0ZW5zLW1lbnV7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjojNWY5ZWEwO1xyXG4gIH1cclxuICAuY2FyZFRhcmVmYSAuY29udGFpbmVyLWl0ZW5zLW1lbnUgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJlMmUyO1xyXG4gIH1cclxuICAuY2FyZFRhcmVmYSAuY29udGFpbmVyLWl0ZW5zLW1lbnUgdWwgbGl7XHJcbiAgICBmbGV4OjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI3Rhc2staW5mb3tcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmNmY4MDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gICN0YXNrLWluZm8gI2xpc3RJbmZvcm1hdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gIH1cclxuICAua2FuYmFuLWFkZEljb25fX2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTBlNjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9hZGRJY29uLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2thbmJhbi1saXN0LWluZm97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ4cHg7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxZjMxMzEzZDtcclxuICB9XHJcbiAgI2thbmJhbi1saXN0LWluZm8gLmJ0bi1mZWNoYXItc3VidGFza3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTA7XHJcbiAgfVxyXG4gICNrYW5iYW4tbGlzdC1pbmZvIGl7XHJcbiAgICBjb2xvcjogI2IwZTBlNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2thbmJhbi1saXN0LWluZm8gLnRpdGxlQ29udGFpbmVyIGgye1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbiAgLmthbmJhbi1zdWJ0YXNrLWxlbmd0aHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTA7XHJcbiAgICBjb2xvcjogI2QyZTJlMjtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXItaXRlbnMtbWVudSBsaTpob3ZlcntcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAua2FuYmFuLWFkZEljb246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hZGRJY29uX2hvdmVyLnN2ZycpO1xyXG4gIH1cclxuICAua2FuYmFuLWFkZEljb246YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYWRkSWNvbi5zdmcnKTtcclxuICB9Ki9cclxuIl19 */"

/***/ }),

/***/ "./src/app/kanban/kanban.component.html":
/*!**********************************************!*\
  !*** ./src/app/kanban/kanban.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section cdkDropListGroup @fade id=\"cardsModuloTarefa\" #sectionKanban>\r\n  <h2>{{ nomeLista }}</h2>\r\n  <article\r\n    id=\"fazer\"\r\n    cdkDropList\r\n    (cdkDropListDropped)=\"onDrop($event)\"\r\n    [cdkDropListData]=\"fazer\"\r\n    [cdkDropListConnectedTo]=\"['fazendo']\"\r\n    class=\"cardTarefa\">\r\n    <div class=\"titulo\">fazer\r\n      <div class=\"kanban-addIcon__container\"  routerLink=\"/kanban/add\" [queryParams]=\"{ label: 'fazer'}\"></div>\r\n    </div>\r\n\r\n    <div @slideLight cdkDrag *ngFor=\"let item of fazer; let i = index\" class=\"item\">\r\n        <div class=\"texto-item-container\">\r\n            <p>{{ item.text }}</p>\r\n        </div>\r\n        <div class=\"container-itens-menu\">\r\n          <ul>\r\n            <li routerLink=\"edit-item\" [queryParams]=\"{ itemId: item._id}\" >edit</li>\r\n            <li (click)=\"deleteItem(item._id)\">delete</li>\r\n            <li (click)=\"showSubtask('fazer', i)\">\r\n              <div class=\"kanban-subtask-length\">{{ kanbanSubtaskLength('fazer', i) }}</div>\r\n              subtask\r\n            </li>\r\n            <li (click)=\"changeToFazendo(item._id)\">>></li>\r\n          </ul>\r\n        </div>\r\n\r\n    </div>\r\n  </article>\r\n\r\n  <article class=\"cardTarefa\"\r\n           cdkDropList\r\n           (cdkDropListDropped)=\"onDrop($event)\"\r\n           [cdkDropListData]=\"fazendo\"\r\n           [cdkDropListConnectedTo]=\"['fazer', 'feito']\"\r\n           id=\"fazendo\">\r\n    <div class=\"titulo\">fazendo</div>\r\n\r\n    <div @slideLight cdkDrag *ngFor=\"let item of fazendo; let i = index\" class=\"item\">\r\n        <div class=\"texto-item-container\">\r\n            <p>{{ item.text }}</p>\r\n        </div>\r\n        <div class=\"container-itens-menu\">\r\n          <ul>\r\n            <li (click)=\"changeToFazer(item._id)\"> << </li>\r\n            <li routerLink=\"edit-item\" [queryParams]=\"{ itemId: item._id}\">edit</li>\r\n            <li (click)=\"deleteItem(item._id)\">delete</li>\r\n            <li (click)=\"showSubtask('fazendo', i)\">\r\n              <div class=\"kanban-subtask-length\">{{ kanbanSubtaskLength('fazendo', i) }}</div>\r\n              subtask\r\n            </li>\r\n            <li (click)=\"changeToFeito(item._id)\">>></li>\r\n          </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n  </article>\r\n\r\n  <article\r\n    id=\"feito\"\r\n    class=\"cardTarefa\"\r\n    cdkDropList\r\n    (cdkDropListDropped)=\"onDrop($event)\"\r\n    [cdkDropListData]=\"feito\"\r\n    [cdkDropListConnectedTo]=\"['fazendo']\"\r\n  >\r\n    <div class=\"titulo\">feito</div>\r\n    <div @slideLight cdkDrag *ngFor=\"let item of feito; let i = index\" class=\"item\">\r\n        <div class=\"texto-item-container\">\r\n            <p>{{ item.text }}</p>\r\n        </div>\r\n        <div class=\"container-itens-menu\">\r\n          <ul>\r\n            <li (click)=\"changeToFazendo(item._id)\"> << </li>\r\n            <li routerLink=\"edit-item\" [queryParams]=\"{ itemId: item._id}\">edit</li>\r\n            <li (click)=\"deleteItem(item._id)\">delete</li>\r\n            <li (click)=\"showSubtask('feito', i)\">\r\n              <div class=\"kanban-subtask-length\">{{ kanbanSubtaskLength('feito', i) }}</div>\r\n              subtask\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n  </article>\r\n\r\n</section>\r\n<section id=\"kanban-list-info\" *ngIf=\"listasService.showSubtasks\">\r\n  <div class=\"btn-fechar-subtask\">\r\n    <div class=\"deleteIcon\"><i class=\"material-icons\" (click)=\"subtaskHide()\">swap_horiz</i></div>\r\n  </div>\r\n  <app-list-info></app-list-info>\r\n</section>\r\n\r\n<!-- <section id=\"task-info\">\r\n  <section id=\"listInformation\" class=\"background-blue\">\r\n    <div class=\"listIconContainer\">\r\n      <img id=\"iconeListas\" src=\"images/listas_icon.svg\">\r\n      <div class=\"boxListas hidden\">\r\n          <div class=\"itemBoxListas\">todas</div>\r\n          <div class=\"itemBoxListas\">inbox</div>\r\n          <div class=\"itemBoxListas\">lista1</div>\r\n          <div class=\"itemBoxListas\">lista2</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"titleContainer\">\r\n      <h2>SubTask</h2>\r\n    </div>\r\n    <div class=\"inputContainer\">\r\n      <input type=\"text\" name=\"inputItem\" placeholder=\"new item\"/><button>OK</button>\r\n    </div>\r\n    <div id=\"doneComponent\">\r\n      <span>25%</span>\r\n      <div class=\"doneItem\"></div>\r\n    </div>\r\n    <div class=\"listContainer\">\r\n      <div class=\"itemContainer\">\r\n        <input type=\"checkbox\" id=\"1\"  /><label for=\"1\" class=\"item\">lsadsad sa as ad asd asd </label>\r\n          <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div>\r\n      </div>\r\n    </div>\r\n    <div id=\"annotation\">\r\n      <div class=\"titleContainer\">\r\n        <h2>Annotation</h2>\r\n      </div>\r\n      <div class=\"inputContainer\">\r\n        <input type=\"text\" name=\"inputItem\" placeholder=\"new item\"/><button>OK</button>\r\n      </div>\r\n      <div class=\"annotationItem\">\r\n        <div class=\"txtAnnotation\">ajn NDASMD MALS ASLSKDMAçams çms masçdm çalmsdç</div>\r\n      <div class=\"editAnnotation\">\r\n        <span>Edit</span><span>delete</span>\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n</section> -->\r\n"

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






var KanbanComponent = /** @class */ (function () {
    function KanbanComponent(listasService) {
        this.listasService = listasService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    KanbanComponent.prototype.ngOnInit = function () {
        console.log(this.listasService.listas);
        this.initSubscription();
        this.initComponent();
    };
    KanbanComponent.prototype.notify = function (list) {
        this.listasService.listas = list;
        this.listasService.notificastion();
    };
    KanbanComponent.prototype.initSubscription = function () {
        var _this = this;
        this.subscriptions.add(this.listasService.idxList$.subscribe(function (novoIdx) {
            _this.nomeLista = _this.listasService.getListas()[novoIdx].nome;
            _this.initComponent();
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
        this.listasService.getListas()[idx].itens.map(function (item) {
            if (item.complete) {
                item.kanban = 'feito';
            }
        });
        this.kanbanUpdate();
    };
    KanbanComponent.prototype.kanbanUpdate = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.listasService.emitKanbanHeight(_this.sectionKanban.nativeElement.getBoundingClientRect().height + "px");
        }, 500);
    };
    KanbanComponent.prototype.changeToFazendo = function (id) {
        var item = this.listasService.getItem(id);
        console.log("ITEM", item);
        item.kanban = "fazendo";
        item.complete = false;
        this.notify(this.listasService.getListas());
    };
    KanbanComponent.prototype.changeToFazer = function (id) {
        var item = this.listasService.getItem(id);
        item.kanban = "fazer";
        this.notify(this.listasService.getListas());
    };
    KanbanComponent.prototype.changeToFeito = function (id) {
        var idx = this.listasService.idxListActive;
        this.listasService.getListas()[idx].itens.forEach(function (el) {
            if (el._id === id) {
                el.kanban = "feito";
                el.complete = true;
                return el;
            }
        });
        //this.listasService.emitListas();
        this.notify(this.listasService.getListas());
        console.log("LISTAS", this.listasService.listas);
    };
    KanbanComponent.prototype.deleteItem = function (id) {
        var idx = this.listasService.idxListActive;
        var itemIndex = this.listasService.getListas()[idx].itens.findIndex(function (el) {
            return el._id === id;
        });
        this.listasService.getListas()[idx].itens.splice(itemIndex, 1);
        this.listasService.notificastion();
    };
    KanbanComponent.prototype.showSubtask = function (kanban, idx) {
        this.listasService.listas[this.listasService.idxListActive].itens.map(function (item) { return item.checked = false; });
        var itensArray = this.listasService.listas[this.listasService.idxListActive].itens.filter(function (item) {
            return item.kanban === kanban;
        });
        itensArray[idx].checked = true;
        this.listasService.subtaskActive = itensArray[idx].subItens;
        this.listasService.showSubtasks = !this.listasService.showSubtasks;
    };
    KanbanComponent.prototype.subtaskHide = function () {
        this.listasService.showSubtasks = !this.listasService.showSubtasks;
    };
    KanbanComponent.prototype.kanbanSubtaskLength = function (kanban, idx) {
        var subItensLenth = 0;
        if (this.listasService.listas[this.listasService.idxListActive].itens.length > 0) {
            //console.log("idx", idx, this.listasService.listas[this.listasService.idxListActive].itens.filter(item=>item.kanban === kanban))
            var li = this.listasService.listas[this.listasService.idxListActive].itens
                .filter(function (item) { return item.kanban === kanban; });
            if (li && li[idx] != undefined) {
                //console.log("LI", li)
                li[idx].subItens.map(function (sub) {
                    if (!sub.complete) {
                        subItensLenth++;
                    }
                });
            }
            return subItensLenth;
        }
    };
    KanbanComponent.prototype.onDrop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            //console.log(event)
            //transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
        }
    };
    KanbanComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sectionKanban'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], KanbanComponent.prototype, "sectionKanban", void 0);
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

module.exports = "#listInformation .wrapCheckBox{\r\n    width: 25px;\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n#listInformation .itemContainer {\r\n    padding: 8px 20px 2px 23px;\r\n}\r\n#listInformation div.wrapCheckBox:before{\r\n    width: 15px;\r\n    height: 15px;\r\n    border:1px solid #b0e0e6ff;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    content: \"\";\r\n    margin-right: 12px;\r\n    vertical-align: middle;\r\n    margin-bottom: 3px;\r\n    cursor:pointer;\r\n}\r\n#listInformation input[type='checkbox']:checked ~ div.wrapCheckBox:before{\r\n    font-family: 'Material Icons';\r\n    content: \"check\";\r\n    font-weight: 800;\r\n    color:#5f9ea0ff;\r\n    text-align: center;\r\n}\r\n#subItemControllers{\r\n    margin: 0px 20px 0px 30px;\r\n    text-align: right;\r\n}\r\n#subItemControllers button{\r\n    padding: 4px;\r\n    width: auto;\r\n    color:#246c6e;\r\n    border: 1px solid #33878a;\r\n    margin:0px 5px 0px 5px;\r\n    pointer-events: none;\r\n}\r\n#subItemControllers button.active{\r\n    background-color: #b0e0e6ff;\r\n    color: #5f9ea0ff;\r\n    border: 1px solid #5f9ea0ff;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n}\r\n#subItemControllers button.active:active{\r\n    background-color:#b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n}\r\n#subItemControllers button.active:hover{\r\n    background-color:rgb(147, 190, 196);\r\n}\r\n.completed{\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}\r\n@media (max-width:760px){\r\n    \r\n    #listInformation{\r\n      width: 100vw;\r\n    }\r\n    #listInformation button{\r\n        width: 10%;\r\n    }\r\n    #subItemControllers button{\r\n        width: auto;\r\n    }\r\n    #listInformation input[type='text']{\r\n        width: 90%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pbmZvL2xpc3QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSTtNQUNFLFlBQVk7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1pbmZvL2xpc3QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpc3RJbmZvcm1hdGlvbiAud3JhcENoZWNrQm94e1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4jbGlzdEluZm9ybWF0aW9uIC5pdGVtQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4IDJweCAyM3B4O1xyXG59XHJcbiNsaXN0SW5mb3JtYXRpb24gZGl2LndyYXBDaGVja0JveDpiZWZvcmV7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2IwZTBlNmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuI2xpc3RJbmZvcm1hdGlvbiBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgfiBkaXYud3JhcENoZWNrQm94OmJlZm9yZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgY29udGVudDogXCJjaGVja1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiM1ZjllYTBmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJze1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiNzdWJJdGVtQ29udHJvbGxlcnMgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjb2xvcjojMjQ2YzZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzODc4YTtcclxuICAgIG1hcmdpbjowcHggNXB4IDBweCA1cHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzVmOWVhMGZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG4jc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmU6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYjBlMGU2ZmY7XHJcbiAgICBjb2xvcjojNWY5ZWEwZmY7XHJcbn1cclxuI3N1Ykl0ZW1Db250cm9sbGVycyBidXR0b24uYWN0aXZlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ3LCAxOTAsIDE5Nik7XHJcbn1cclxuLmNvbXBsZXRlZHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjBweCl7XHJcbiAgICBcclxuICAgICNsaXN0SW5mb3JtYXRpb257XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgICNsaXN0SW5mb3JtYXRpb24gYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICB9XHJcbiAgICAjc3ViSXRlbUNvbnRyb2xsZXJzIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgICNsaXN0SW5mb3JtYXRpb24gaW5wdXRbdHlwZT0ndGV4dCdde1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/list-info/list-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-info/list-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section @fade @slideLight @fadeout *ngIf=\"listasService.showSubtasks\" id=\"listInformation\" class=\"background-blue\">\r\n\r\n  <div class=\"titleContainer\">\r\n    <h2>SubTask</h2>\r\n  </div>\r\n  <div class=\"inputContainer\">\r\n      <input type=\"text\" #inputSubitem name=\"inputSubitem\" placeholder=\"new item\"/><button (click)=\"addSubItem(inputSubitem)\">OK</button>\r\n  </div>\r\n\r\n<app-subtask-porcentagem></app-subtask-porcentagem>\r\n\r\n  <ng-container>\r\n    <section @fade id=\"subItemControllers\">\r\n      <button *ngIf=\"showDoneBtn; else undoneBtn\" [class.active]=\"activateButton\" (click)=\"markToDone()\">done</button>\r\n      <ng-template #undoneBtn>\r\n        <button [class.active]=\"activateButton\" (click)=\"markToUndone()\">undone</button>\r\n      </ng-template>\r\n      <button [class.active]=\"activateButton\" (click)=\"deleteSubItens()\">delete</button>\r\n      <button [class.active]=\"activateButtonEdit\" #editButton (click)=\"changeEditParam()\" routerLink=\"edit-item\">edit</button>\r\n    </section>\r\n  </ng-container>\r\n\r\n  <div\r\n    cdkDropList\r\n    cdkDropListOrientation=\"vertical\"\r\n    (cdkDropListDropped)=\"onDrop($event)\"\r\n    [cdkDropListData]=\"subItens\"\r\n    class=\"listContainer\">\r\n    <div cdkDrag *ngFor=\"let subitem of subItens\" class=\"itemContainer\" (click)=\"subItemClicked(subitem._id)\">\r\n      <input type=\"checkbox\" id=\"subitem._id\" [checked]=\"subitem.checked\" />\r\n      <div class=\"wrapCheckBox\">\r\n        <span></span>\r\n       </div>\r\n      <p class=\"item\" [class.completed]=\"subitem.complete\">{{ subitem.text }}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <app-notes></app-notes>\r\n</section>\r\n"

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






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
    ListInfoComponent.prototype.onDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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

module.exports = "\r\n#blocoCentral .itemContainer{\r\n    /* padding: 0px 20px 8px 23px;\r\n    position: relative;\r\n    left:0px; */\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    padding: 9px 20px 8px 23px;\r\n    width: 100%;\r\n}\r\n#blocoCentral .text-container{\r\n    width: 100%;\r\n}\r\n#subtasks-counter div{\r\n    background-color: #b0e0e6ff;\r\n    color: #5f9ea0ff;\r\n    padding: 1.5px 0 0 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 10px;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n}\r\n#blocoCentral .itemContainer:hover{\r\n    background-color: #efefefff;\r\n}\r\n#itemControllers{\r\n    margin: 0px 20px 0px 5px;\r\n    text-align: right;\r\n}\r\n#itemControllers button{\r\n    padding: 5px;\r\n    width: auto;\r\n    background-color:white;\r\n    color: #c1c1c1;\r\n    border: 1px solid #DCDCDC;\r\n    margin:12px 5px 4px 0px;\r\n    pointer-events: none;\r\n}\r\n#itemControllers button.active{\r\n    background-color: #5f9ea0ff;\r\n    color: whitesmoke;\r\n    border: 1px, solid white;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n}\r\n#itemControllers button.active:active{\r\n    background-color: #b0e0e6ff;\r\n    color:#5f9ea0ff;\r\n}\r\n#itemControllers button.active:hover{\r\n    background-color:rgb(29, 156, 160);\r\n}\r\n.titleContainerEmpty{\r\n    border-bottom: 0;\r\n    padding: 30px 0px 0px 30px;\r\n    color: #5f9ea0ff;\r\n    font-weight: 300;\r\n}\r\nh3.titleContainerEmpty {\r\n    margin-left: 7px;\r\n\r\n}\r\n.edit-icon-name{\r\n    margin-right: 15px;\r\n    border: 1px solid #c1c1c1;\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 5px;\r\n    float: left;\r\n    opacity: 0.5;\r\n}\r\n.edit-icon-name i{\r\n    position: relative;\r\n    top:-7px;\r\n    left:2px;\r\n    margin-top: 2px;\r\n}\r\n.edit-icon-name:hover{\r\n    background-color:#5f9ea0ff ;\r\n    color:#f1ebeb;\r\n    opacity: 1;\r\n    border:1px solid white;\r\n}\r\n.titleContainer a{\r\n    cursor:pointer;\r\n}\r\n.titleContainer a{\r\n    text-decoration: none;\r\n    color:#dcdcdcff;\r\n    font-size: 0.75em;\r\n    margin-left:15px;\r\n    margin-right:5px;\r\n  }\r\n.titleContainer a.selected{\r\n    color:rgb(105, 191, 202);\r\n  }\r\n#blocoCentral .titleContainer a.selected:hover{\r\n    color:rgb(86, 157, 167);\r\n  }\r\n.titleContainer a:active{\r\n    color:#b0e0e6ff;\r\n  }\r\n.container-disabled{\r\n    opacity: 0.5;\r\n    pointer-events: none;\r\n  }\r\n#blocoCentral p.item-done{\r\n      color:#c1c1c1;\r\n  }\r\n#containerLista div.envelop{\r\n    position: relative;\r\n    top:-5px;\r\n    left:-5px;\r\n    width: 110px;\r\n    background-color: #5f9ea0ff;\r\n    float: right;\r\n    border-radius:3px;\r\n    font-family: Calibri, sans-serif;\r\n    font-size: 1.4em;\r\n    z-index: 10;\r\n  }\r\n#containerLista ul{\r\n      list-style: none;\r\n      margin: 0 auto;\r\n  }\r\n#containerLista li{\r\n    border-bottom:1px solid rgb(105, 191, 202);\r\n    width: 91%;\r\n    color:whitesmoke;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n#containerLista ul:first-child{\r\n    border-top: 1px solid rgb(105, 191, 202);\r\n}\r\n#containerLista li:hover{\r\n    background-color: rgb(148, 199, 206);\r\n    color:#5f9ea0ff ;\r\n}\r\n.wrapCheckBox{\r\n    width: 25px;\r\n    height: 20px;\r\n    float: left;\r\n}\r\ndiv.wrapCheckBox:before{\r\n    width: 15px;\r\n    height: 15px;\r\n    border:1px solid #b0e0e6ff;\r\n    background-color: #ffffff;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    content: \"\";\r\n    margin-right: 12px;\r\n    vertical-align: middle;\r\n    margin-bottom: 3px;\r\n    cursor:pointer;\r\n  }\r\ninput[type='checkbox']:checked ~ div.wrapCheckBox:before{\r\n      font-family: 'Material Icons';\r\n       content: \"check\";\r\n       font-weight: 800;\r\n       color:#5f9ea0ff;\r\n       text-align: center;\r\n  }\r\n.desapeare{\r\n      display:none;\r\n  }\r\n#blocoCentral[hidden]{\r\n      display:none;\r\n  }\r\n.mobile{\r\n    display: none;\r\n}\r\n/* #subtasks-counter div{\r\n\r\n} */\r\n@media (max-width:760px){\r\n    #blocoCentral{\r\n        width: 100vw;\r\n    }\r\n    #blocoCentral button, #listInformation button{\r\n        width: 10%;\r\n    }\r\n    #blocoCentral input[type='text'], #listInformation input[type='text']{\r\n        width: 90%;\r\n    }\r\n    #itemControllers button{\r\n        width: auto;\r\n    }\r\n    .desktop{\r\n        display: none;\r\n    }\r\n    .mobile{\r\n        display: block;\r\n\r\n    }\r\n    /* #btns-complete-container__mobile a{\r\n\r\n    } */\r\n\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tb2RlL2xpc3QtbW9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJOztlQUVXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IsdUJBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCO0FBQ0E7TUFDSSxhQUFhO0VBQ2pCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDQTtNQUNJLGdCQUFnQjtNQUNoQixjQUFjO0VBQ2xCO0FBQ0E7SUFDRSwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUVBO01BQ0ksNkJBQTZCO09BQzVCLGdCQUFnQjtPQUNoQixnQkFBZ0I7T0FDaEIsZUFBZTtPQUNmLGtCQUFrQjtFQUN2QjtBQUNBO01BQ0ksWUFBWTtFQUNoQjtBQUNBO01BQ0ksWUFBWTtFQUNoQjtBQUNGO0lBQ0ksYUFBYTtBQUNqQjtBQUVBOztHQUVHO0FBQ0Q7SUFDRTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7O0lBRWxCO0lBQ0E7O09BRUc7O0VBRUwiLCJmaWxlIjoic3JjL2FwcC9saXN0LW1vZGUvbGlzdC1tb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2Jsb2NvQ2VudHJhbCAuaXRlbUNvbnRhaW5lcntcclxuICAgIC8qIHBhZGRpbmc6IDBweCAyMHB4IDhweCAyM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDowcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogOXB4IDIwcHggOHB4IDIzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jYmxvY29DZW50cmFsIC50ZXh0LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNzdWJ0YXNrcy1jb3VudGVyIGRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICAgIGNvbG9yOiAjNWY5ZWEwZmY7XHJcbiAgICBwYWRkaW5nOiAxLjVweCAwIDAgMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNibG9jb0NlbnRyYWwgLml0ZW1Db250YWluZXI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmZmY7XHJcbn1cclxuI2l0ZW1Db250cm9sbGVyc3tcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiNpdGVtQ29udHJvbGxlcnMgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgY29sb3I6ICNjMWMxYzE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xyXG4gICAgbWFyZ2luOjEycHggNXB4IDRweCAwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2l0ZW1Db250cm9sbGVycyBidXR0b24uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IDFweCwgc29saWQgd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcblxyXG4jaXRlbUNvbnRyb2xsZXJzIGJ1dHRvbi5hY3RpdmU6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwZTBlNmZmO1xyXG4gICAgY29sb3I6IzVmOWVhMGZmO1xyXG59XHJcbiNpdGVtQ29udHJvbGxlcnMgYnV0dG9uLmFjdGl2ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI5LCAxNTYsIDE2MCk7XHJcbn1cclxuXHJcblxyXG5cclxuLnRpdGxlQ29udGFpbmVyRW1wdHl7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMzBweCAwcHggMHB4IDMwcHg7XHJcbiAgICBjb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5oMy50aXRsZUNvbnRhaW5lckVtcHR5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcblxyXG59XHJcbi5lZGl0LWljb24tbmFtZXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5lZGl0LWljb24tbmFtZSBpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOi03cHg7XHJcbiAgICBsZWZ0OjJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uZWRpdC1pY29uLW5hbWU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ZjllYTBmZiA7XHJcbiAgICBjb2xvcjojZjFlYmViO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLnRpdGxlQ29udGFpbmVyIGF7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4udGl0bGVDb250YWluZXIgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiNkY2RjZGNmZjtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgfVxyXG4udGl0bGVDb250YWluZXIgYS5zZWxlY3RlZHtcclxuICAgIGNvbG9yOnJnYigxMDUsIDE5MSwgMjAyKTtcclxuICB9XHJcbiAgI2Jsb2NvQ2VudHJhbCAudGl0bGVDb250YWluZXIgYS5zZWxlY3RlZDpob3ZlcntcclxuICAgIGNvbG9yOnJnYig4NiwgMTU3LCAxNjcpO1xyXG4gIH1cclxuICAudGl0bGVDb250YWluZXIgYTphY3RpdmV7XHJcbiAgICBjb2xvcjojYjBlMGU2ZmY7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZGlzYWJsZWR7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgI2Jsb2NvQ2VudHJhbCBwLml0ZW0tZG9uZXtcclxuICAgICAgY29sb3I6I2MxYzFjMTtcclxuICB9XHJcblxyXG4gICNjb250YWluZXJMaXN0YSBkaXYuZW52ZWxvcHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDotNXB4O1xyXG4gICAgbGVmdDotNXB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmOWVhMGZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgI2NvbnRhaW5lckxpc3RhIHVse1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgI2NvbnRhaW5lckxpc3RhIGxpe1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiKDEwNSwgMTkxLCAyMDIpO1xyXG4gICAgd2lkdGg6IDkxJTtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jY29udGFpbmVyTGlzdGEgdWw6Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEwNSwgMTkxLCAyMDIpO1xyXG59XHJcbiNjb250YWluZXJMaXN0YSBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE5OSwgMjA2KTtcclxuICAgIGNvbG9yOiM1ZjllYTBmZiA7XHJcbn1cclxuLndyYXBDaGVja0JveHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuZGl2LndyYXBDaGVja0JveDpiZWZvcmV7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2IwZTBlNmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgfiBkaXYud3JhcENoZWNrQm94OmJlZm9yZXtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICAgICBjb250ZW50OiBcImNoZWNrXCI7XHJcbiAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgY29sb3I6IzVmOWVhMGZmO1xyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZGVzYXBlYXJle1xyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gICNibG9jb0NlbnRyYWxbaGlkZGVuXXtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuLm1vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qICNzdWJ0YXNrcy1jb3VudGVyIGRpdntcclxuXHJcbn0gKi9cclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjBweCl7XHJcbiAgICAjYmxvY29DZW50cmFse1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxuICAgICNibG9jb0NlbnRyYWwgYnV0dG9uLCAjbGlzdEluZm9ybWF0aW9uIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG4gICAgI2Jsb2NvQ2VudHJhbCBpbnB1dFt0eXBlPSd0ZXh0J10sICNsaXN0SW5mb3JtYXRpb24gaW5wdXRbdHlwZT0ndGV4dCdde1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAjaXRlbUNvbnRyb2xsZXJzIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5kZXNrdG9we1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubW9iaWxle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIH1cclxuICAgIC8qICNidG5zLWNvbXBsZXRlLWNvbnRhaW5lcl9fbW9iaWxlIGF7XHJcblxyXG4gICAgfSAqL1xyXG5cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/list-mode/list-mode.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-mode/list-mode.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <section id=\"blocoCentralEmpty\" class=\"item-central\" [hidden]=\"isEmptyHidden\">\r\n        <h2 class=\"titleContainerEmpty\">ready to get the job done?</h2>\r\n        <h3 class=\"titleContainerEmpty\">Click on de (+) button to start</h3>\r\n      </section>\r\n      <section id=\"blocoCentral\" class=\"item-central\" [hidden]=\"isCentralHidden\" >\r\n          <div class=\"titleContainer\">\r\n\r\n\r\n            <h2>\r\n              <div @fade @slideLight class=\"edit-icon-name\" routerLink=\"edit-name\"><i class=\"material-icons materialIconEditName\"> edit</i></div>\r\n\r\n              {{ nomeLista }}\r\n                <a (click)=\"showCompletedTasks()\" class=\"fly-r desktop\" [class.selected]=\"completeSelected\">complete</a>\r\n                <a (click)=\"showIncompletedTasks()\" class=\"fly-r desktop\" [class.selected]=\"incompleteSelected\">incomplete</a>\r\n\r\n\r\n                <a (click)=\"showCompletedTasks()\" class=\"fly-r mobile\" [class.selected]=\"completeSelected\">\r\n                  C\r\n                </a>\r\n\r\n                <a (click)=\"showIncompletedTasks()\" class=\"fly-r mobile\" [class.selected]=\"incompleteSelected\">\r\n                  I\r\n                </a>\r\n            </h2>\r\n\r\n          </div>\r\n          <div class=\"inputContainer\" [class.container-disabled]=\"!incompleteBtns\">\r\n            <input type=\"text\" #inputItem name=\"inputItem\" placeholder=\"new item\" maxlength=\"120\"/>\r\n            <button (click)=\"addItem(inputItem)\" (keyup)=\"addItem(inputItem)\">OK</button>\r\n          </div>\r\n\r\n          <ng-container *ngIf = \"incompleteBtns == true\">\r\n            <section @fade id=\"itemControllers\">\r\n              <button [class.active]=\"activateButton\" (click)=\"moveToDone()\">done</button>\r\n              <button [class.active]=\"activateButton\" (click)=\"deleteItens()\">delete</button>\r\n              <button [class.active]=\"activateButtonEdit\" #editButton (click)=\"emitSelectedItem()\" routerLink=\"edit-item\">edit</button>\r\n\r\n              <button [class.active]=\"activateButton\" (click)=\"showListsNames()\">\r\n                  change\r\n                <i class=\"material-icons\">{{ arrowIcon }}</i>\r\n              </button>\r\n\r\n              <ng-container *ngIf=\"showNameLists\">\r\n                <article @fadeout id=\"containerLista\" (mouseleave)=\"showListsNames()\">\r\n                  <div class=\"envelop\">\r\n                    <ul>\r\n                      <ng-container *ngFor = \"let lista of this.listasService.getListas()\">\r\n                        <li *ngIf=\"lista.nome != nomeLista\" (click)=\"doChange(lista.nome)\">{{ lista.nome }}</li>\r\n                      </ng-container>\r\n\r\n                    </ul>\r\n                  </div>\r\n              </article>\r\n              </ng-container>\r\n\r\n            </section>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf = \"incompleteBtns == false\">\r\n            <section @fade id=\"itemControllers\">\r\n              <button [class.active]=\"activateButton\" (click)=\"moveToUndone()\">undone</button>\r\n              <button [class.active]=\"activateButton\" (click)=\"deleteItens()\">delete</button>\r\n              <button [class.active]=\"activateButton\" #editButton (click)=\"emitSelectedItem()\" routerLink=\"edit-item\">edit</button>\r\n              <button>\r\n                change\r\n                <i class=\"material-icons\">{{ arrowIcon }}</i>\r\n              </button>\r\n            </section>\r\n          </ng-container>\r\n\r\n          <div @fade cdkDropList class=\"listContainer\"\r\n               *ngIf = \"selectIncompleteTasks\"\r\n               cdkDropListOrientation=\"vertical\"\r\n               (cdkDropListDropped)=\"onDrop($event)\"\r\n                [cdkDropListData]=\"activedList\"\r\n          >\r\n            <ng-container *ngFor=\"let item of activedList; let i = index\">\r\n              <div @fade @fadeout cdkDrag  *ngIf=\"item.complete == false\" class=\"itemContainer\" (click)=\"itemClicked(item._id)\" >\r\n                <!-- Contador de subtasks-->\r\n                <article id='subtasks-counter'>\r\n                  <div>\r\n                    <h5>{{ subintemLength(i) }}</h5>\r\n                  </div>\r\n                </article>\r\n                <article class=\"text-container\">\r\n                  <input type=\"checkbox\" class=\"elementItem\" id=\"{{ item._id }}\" [checked]=\"item.checked\"  />\r\n                  <div class=\"wrapCheckBox\">\r\n                    <span></span>\r\n                  </div>\r\n                  <p class=\"item\">{{ item.text }}</p>\r\n                  <!-- <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div> -->\r\n                </article>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div @fade class=\"listContainer\" *ngIf = \"!selectIncompleteTasks\">\r\n            <ng-container *ngFor=\"let item of activedList; let i = index\">\r\n              <div *ngIf=\"item.complete == true\" class=\"itemContainer\" (click)=\"itemClicked(item._id)\">\r\n                <input type=\"checkbox\" class=\"elementItem\" id=\"{{ item._id }}\" [checked]=\"item.checked\"  />\r\n                <div class=\"wrapCheckBox\">\r\n                  <span></span>\r\n                </div>\r\n                <p class=\"item item-done\">{{ item.text }}</p>\r\n                <!-- <div class=\"deleteIcon\"><i class=\"material-icons\">delete_forever</i></div> -->\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n\r\n      </section>\r\n\r\n<app-list-info></app-list-info>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






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
    ListModeComponent.prototype.subintemLength = function (idx) {
        var subitensIncomplete = 0;
        this.listasService.getListas()[this.listasService.idxListActive].itens[idx].subItens
            .map(function (sub) {
            if (!sub.complete) {
                subitensIncomplete++;
            }
        });
        return subitensIncomplete;
    };
    ListModeComponent.prototype.onDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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
        this.kanbanHeight$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
    ListasService.prototype.notificastion = function () {
        this.listasSubject.next(this.listas);
        this.gravarDados(this.listas);
        console.log("NOTIFICATION", this.listas);
    };
    ListasService.prototype.emitKanbanHeight = function (height) {
        this.kanbanHeight$.next(height);
    };
    ListasService.prototype.notificationListener = function () {
        return this.listasSubject.asObservable();
    };
    ListasService.prototype.getItem = function (itemId) {
        var _this = this;
        var itemSelected = this.listas[this.idxListActive].itens.filter(function (item) {
            console.log(_this.listas, _this.idxListActive, itemId);
            if (item._id === itemId) {
                return item;
            }
        })[0];
        return itemSelected;
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

module.exports = "<div id=\"menu-descktop\">\r\n  <section class=\"ico-burger-container\" [class.height100]=\"h100\">\r\n    <span class=\"material-icons\" (click)=\"showHideMenuLateral()\">\r\n      view_column\r\n    </span>\r\n  </section>\r\n\r\n  <section id=\"menuLateral\" class=\"background-blue\" [class.is-hidden]=\"lateralHidden\" [ngStyle]=\"{height: kanbanHeight}\">\r\n    <div class=\"titulo-container borderBottom\">\r\n      <h2>Lists:<span routerLink=\"addLista\" class=\"teste addIcon\"></span></h2>\r\n    </div>\r\n    <div class=\"md-marginBottom\">\r\n      <ul cdkDropList id=\"listNames\"\r\n          cdkDropListOrientation=\"vertical\"\r\n          (cdkDropListDropped)=\"onDrop($event)\"\r\n          [cdkDropListData]=\"nomesListas\">\r\n        <li @fade @fadeout @slideLight cdkDrag *ngFor=\"let nomesListaItem of nomesListas; let idx=index\">\r\n          <a href=\"javascript:;\" (click)=\"selected(idx)\" id=\"{{ idx }}\" class=\"\"> {{ nomesListaItem.nome }} </a>\r\n          <span @fade @fadeout @slideLight class=\"list-length\">{{ nomesListaItem.incompletedItens() }}</span>\r\n          <a (click)=\"deleteList(idx)\"><i class=\"material-icons deleteIcon\">delete_forever</i></a>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n<div id=\"menu-mobile\">\r\n  <section class=\"ico-burger-container-mobile\">\r\n    <span class=\"material-icons\" (click)=\"openMobileMenu()\">\r\n      view_column\r\n    </span>\r\n    <article @fade @fadeout @slideLight id=\"menu-container\" *ngIf=\"mobileOpenedMenu\">\r\n      <div class=\"titulo-container borderBottom\">\r\n        <h2>Lists:<span routerLink=\"addLista\" class=\"teste addIcon\"></span></h2>\r\n      </div>\r\n      <div class=\"md-marginBottom\">\r\n        <ul id=\"listNames\">\r\n          <li *ngFor=\"let nomesListaItem of nomesListas; let idx=index\">\r\n            <a href=\"javascript:;\" (click)=\"selected(idx)\" id=\"{{ idx }}\" class=\"\"> {{ nomesListaItem.nome }} </a>\r\n            <span class=\"list-length\">{{ nomesListaItem.incompletedItens() }}</span>\r\n            <a (click)=\"deleteList(idx)\"><i class=\"material-icons deleteIcon\">delete_forever</i></a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </article>\r\n  </section>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");






var MenuComponent = /** @class */ (function () {
    function MenuComponent(listasService) {
        this.listasService = listasService;
        this.lateralHidden = false;
        this.h100 = false;
        this.kanbanHeight = '0px';
        this.selectedNameList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.mobileOpenedMenu = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.listasService.isEmptyLists) {
            this.initSubscription();
        }
        else {
            this.initMenuComponent();
        }
        this.listasService.kanbanHeight$.subscribe(function (novsAltura) {
            _this.kanbanHeight = novsAltura;
        });
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
    MenuComponent.prototype.onDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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

module.exports = "<section @fade @fadeout></section>\r\n\r\n\r\n<div @fade @fadeout @slideLight class=\"modal-container\">\r\n  <h3>What is the list name?</h3>\r\n  <div class=\"container-input\">\r\n    <input type=\"text\" #inputLNewList name=\"newListName\" placeholder=\"type a name\" maxlength=\"14\" />\r\n  </div>\r\n  <div class=\"btn-container\">\r\n    <button class=\"btn-primary\" routerLink=\"/\" (click)=\"addNewList(inputLNewList.value)\">ok</button>\r\n    <button class=\"btn\" routerLink=\"/\">cancel</button>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<router-outlet></router-outlet>\r\n"

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

module.exports = "<div id=\"annotation\"\r\n     cdkDropList\r\n     cdkDropListOrientation=\"vertical\"\r\n     (cdkDropListDropped)=\"onDrop($event)\"\r\n     [cdkDropListData]=\"notes\">\r\n  <div class=\"titleContainer\">\r\n    <h2>Notes</h2>\r\n  </div>\r\n  <div class=\"inputContainer\">\r\n    <input type=\"text\" #newNote name=\"iptNota\" [value]=\"inputNoteValue\" placeholder=\"new item\"/><button (click)=\"addNote( newNote )\">OK</button>\r\n  </div>\r\n  <div cdkDrag *ngFor = \"let note of notes; let i=index\" class=\"annotationItem\">\r\n    <div [hidden]=\"note.edit\" class=\"txtAnnotation\">{{ note.txt }}</div>\r\n    <input [type]=\"typeEditInput\" #iptEdit value=\"{{ note.txt }}\" />\r\n  <div class=\"editAnnotation\">\r\n    <div *ngIf = \"note.edit == false; else editBtns\">\r\n      <span (click)=\"editNote(i)\">Edit</span><span (click)=\"deleteNote(i)\">delete</span>\r\n    </div>\r\n    <ng-template #editBtns>\r\n      <span (click)=\"confirmNote(iptEdit, i)\">confirm edition</span>\r\n    </ng-template>\r\n  </div>\r\n\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");




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
    NotesComponent.prototype.onDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
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

module.exports = "<div id=\"doneComponent\">\r\n  <span>{{ porcentagemConcluida }} %</span>\r\n  <div class=\"doneItem\" [style.width]=\"renderPorcentagem\"></div>\r\n</div>"

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

module.exports = __webpack_require__(/*! C:\Users\luizv\Documents\projetos\tasklist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map