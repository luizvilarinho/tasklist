(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/task.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/task.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*azul background  #5f9ea0ff;\r\nazul claro #b0e0e6ff\r\ncinxa claro #dcdcdcff\r\nescuro:#1f3131ff;\r\ncinza_background: e6e6e6ff;\r\n*/\r\n\r\n*{\r\n  padding: 0;\r\n  margin: 0;\r\n  border:0;\r\n  outline: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n  font-family: Calibri, sans-serif;\r\n  font-size: 12px;\r\n}\r\n\r\nmain{\r\n  height: auto;\r\n}\r\n\r\nheader{\r\n  background-color: #c1c1c1;\r\n  height: 60px;\r\n  background-color: #5f9ea0ff;\r\n  height: auto;\r\n}\r\n\r\nh2{\r\ncolor:#dcdcdcff;\r\nfont-weight: 300;\r\nmargin-left: 5px;\r\nfont-size: 2em;\r\nmargin-bottom: 5px;\r\n}\r\n\r\n.menu{\r\n  width:96%;\r\n  margin:0 auto;\r\n}\r\n\r\n.menu ul{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 50%;\r\n  float: right;\r\n}\r\n\r\ndiv.container__version{\r\n  width: 50%;\r\n  margin-top: 20px;\r\n}\r\n\r\n#menuPrincipal li{\r\n  list-style: none;\r\n  margin: 10px 10px 10px 10px;\r\n  font-size: 2em;\r\n  font-weight: 200;\r\n  color:#dcdcdcff;\r\n  cursor:pointer;\r\n}\r\n\r\n#menuPrincipal li:hover{\r\ncolor: white;\r\n}\r\n\r\n#menuPrincipal li:active{\r\ncolor:#b0e0e6ff;\r\n}\r\n\r\n#menuLateral{\r\n  min-height: 100vh;\r\n  height: 100%;\r\n}\r\n\r\n#menuLateral .titulo-container{\r\n  margin: 0px 20px 15px 20px;\r\n}\r\n\r\n#menuLateral li{\r\n  margin-left: 25px;\r\n  list-style: none;\r\n  color:#dcdcdcff;\r\n  font-size: 1.2em;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#menuLateral a{\r\n  text-decoration: none;\r\n  color:#dcdcdcff;\r\n  font-size: 1.2em;\r\n  font-weight: 300;\r\n}\r\n\r\n#menuLateral a:hover{\r\n  font-weight: 500;\r\n}\r\n\r\n#menuLateral .addIcon{\r\n  padding: 10px;\r\n  cursor:pointer;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#blocoCentral{\r\n  display:inline-block;\r\n  width: 50%;\r\n  vertical-align: top;\r\n}\r\n\r\n#blocoCentral h2{\r\n  color:#5f9ea0ff;\r\n  font-weight: 400;\r\n}\r\n\r\n#listInformation{\r\n  min-height:100vh;\r\n  height: auto;\r\n  padding-bottom:40px;\r\n  display: inline-block;\r\n  width: 50%;\r\n}\r\n\r\n#listInformation h2{\r\n  color:#dcdcdcff;\r\n  font-weight: 200;\r\n}\r\n\r\n#blocoCentral .titleContainer{\r\n  border-bottom: 1px solid #5f9ea0ff;\r\n  width: 90%;\r\n  margin: 0 auto 15px auto;\r\n  margin-top: 25px;\r\n  height: 2.3rem;\r\n}\r\n\r\n#listInformation .titleContainer{\r\n  border-bottom: 1px solid #5f9ea0ff;\r\n  width: 90%;\r\n  margin: 0 auto 15px auto;\r\n}\r\n\r\n#listInformation .titleContainer h2{\r\n  padding-top: 25px;\r\n}\r\n\r\n#kanban-list-info #listInformation .titleContainer h2{\r\n  padding-top: 0px;\r\n}\r\n\r\n#blocoCentral .inputContainer, #listInformation .inputContainer{\r\n  border:1px solid #b0e0e6ff;\r\n  width: 90%;\r\n  margin: 0 auto 0 auto;\r\n  height: 30px;\r\n  border-radius: 3px;\r\n}\r\n\r\n#blocoCentral input[type='text'], #listInformation input[type='text']{\r\n  width: 94%;\r\n  height: 100%;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#blocoCentral input::-webkit-input-placeholder, #listInformation input::-webkit-input-placeholder{\r\n  /* position: relative;\r\n  top:10px; */\r\n  padding: 10px;\r\n  color:#dcdcdcff;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#blocoCentral input::-moz-placeholder, #listInformation input::-moz-placeholder{\r\n  /* position: relative;\r\n  top:10px; */\r\n  padding: 10px;\r\n  color:#dcdcdcff;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#blocoCentral input::-ms-input-placeholder, #listInformation input::-ms-input-placeholder{\r\n  /* position: relative;\r\n  top:10px; */\r\n  padding: 10px;\r\n  color:#dcdcdcff;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#blocoCentral input::placeholder, #listInformation input::placeholder{\r\n  /* position: relative;\r\n  top:10px; */\r\n  padding: 10px;\r\n  color:#dcdcdcff;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#blocoCentral button, #listInformation button{\r\nborder-radius: 3px;\r\nheight: 100%;\r\nwidth: 6%;\r\nbackground-color: #75abacff;\r\ncolor: #f5f5f5ff;\r\n}\r\n\r\n#blocoCentral button:active, #listInformation button:active{\r\n  background-color: #b0e0e6ff;\r\n  color:#5f9ea0ff;\r\n}\r\n\r\n#blocoCentral .listContainer, #listInformation .listContainer{\r\n  width: 100%;\r\n  height: auto;\r\n  margin: 5px auto 10px auto;\r\n}\r\n\r\n#listInformation .itemContainer{\r\n  padding: 2px 20px 2px 23px;\r\n}\r\n\r\n#kanban-list-info #listInformation .itemContainer{\r\n  padding-left: 35px;\r\n}\r\n\r\n#listInformation .itemContainer:hover{\r\n  background-color: #5e9494ff;\r\n}\r\n\r\n#blocoCentral input[type='checkbox'], #listInformation input[type='checkbox']{\r\n  display: none;\r\n}\r\n\r\n#blocoCentral p.item, #listInformation p.item{\r\n  font-size: 1.3em;\r\n  z-index: 1;\r\n  color:#1f3131ff;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  height: auto;\r\n  width: 95%;\r\n}\r\n\r\n#listInformation label{\r\n  color:#b0e0e6ff;\r\n}\r\n\r\n#container-tarefas{\r\n  margin: 20px;\r\n}\r\n\r\n#container-tarefas h2{\r\n  color:#1f3131ff;\r\n  margin:20px;\r\n  border-bottom: 1px solid #dcdcdcff;\r\n}\r\n\r\n#container-tarefas section{\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-column-gap: 30px;\r\n  height: 100px;\r\n  border:1px solid #dcdcdcff\r\n}\r\n\r\n#blocoCentral .deleteIcon, #listInformation .deleteIcon{\r\nwidth: 10%;\r\nheight: auto;\r\npadding: 0;\r\ntext-align: right;\r\nfloat: right;\r\nmargin-right:4%;\r\ncolor: #c1c1c1;\r\ndisplay: block;\r\n}\r\n\r\n#listInformation .deleteIcon{\r\n  color:#b0e0e6ff;\r\n}\r\n\r\n#annotation .annotationItem{\r\n  width: 90%;\r\n  margin:0 auto;\r\n  min-height: 55px;\r\n  background-color: #b3d6d8ff;\r\n  border-radius: 15px;\r\n  margin-top: 20px;\r\n}\r\n\r\n#annotation .editAnnotation{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  border-top: 1px solid #5f9ea0ff;\r\n  text-align: right;\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\n.teste{\r\n  background-image: url('addIcon.svg');\r\n  background-repeat: no-repeat;\r\n  float: right;\r\n  vertical-align: middle;\r\n  margin-top: 13px;\r\n}\r\n\r\n.teste:hover{\r\n  background-image: url('addIcon_hover.svg');\r\n}\r\n\r\n.teste:active{\r\n  background-image: url('addIcon.svg');\r\n}\r\n\r\n.editAnnotation span{\r\n  margin-left: 25px;\r\n  color:#5f9ea0ff;\r\n  font-size: 1.2em;\r\n  cursor:pointer;\r\n}\r\n\r\n.editAnnotation span:hover{\r\n  font-weight: 600\r\n}\r\n\r\n.txtAnnotation{\r\n  width: 90%;\r\n  color:#5f9ea0ff;\r\n  font-size: 1.2em;\r\n  margin: 0 auto 10px auto;\r\n  padding: 15px 0 0 0;\r\n}\r\n\r\n#blocoCentral .material-icons, #listInformation .material-icons{\r\n  width: 10px;\r\n  height: auto;\r\n  vertical-align: middle;\r\n  font-size: 13px;\r\n  cursor:pointer;\r\n}\r\n\r\n#blocoCentral .materialIconEditName{\r\n  font-size: 18px;\r\n}\r\n\r\n#loginContainer{\r\n  height: calc(100vh - 60px);\r\n  width: 100%;\r\n}\r\n\r\n#loginContainer .login-card{\r\n  width: 368px;\r\n  min-height: 200px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  background-color: #fffffffa;\r\n  border-radius: 10px;\r\n  position: relative;\r\n  top:60 px;\r\n  padding-bottom:40px;\r\n}\r\n\r\n#loginContainer .login-card-header{\r\n  border-radius: 10px 10px 0 0 ;\r\n  height: 60px;\r\n  background-color: #5f9ea0fd;\r\n  text-align: center;\r\n}\r\n\r\n#loginContainer .login-card-header h2{\r\npadding: 14px;\r\n}\r\n\r\n#loginContainer .login-inputs{\r\n  width: 315px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n}\r\n\r\n#loginContainer .login-inputs input{\r\n  width: 100%;\r\n  height: 30px;\r\n  margin-top: 25px;\r\n  border-bottom: 1px solid #b3b3b3ff;\r\n}\r\n\r\n.list-length{\r\n  background-color: #b0e0e6ff;\r\n  width: auto;\r\n  height: 18px;\r\n  color: #5f9ea0ff;\r\n  padding: 0px 3px 0px 3px;\r\n  position: relative;\r\n  top: -8px;\r\n  border-radius: 3px;\r\n  font-size: 1em;\r\n}\r\n\r\n.item-header{\r\n  background-color:#5f9ea0ff;\r\n  height: 100%\r\n}\r\n\r\n.item-central{\r\n  height: 100%\r\n}\r\n\r\n.center{\r\n  margin:0,auto,0, auto;\r\n}\r\n\r\n.grid{\r\n  display:grid;\r\n}\r\n\r\n.grid-template-columns-1{\r\n  grid-template-columns:100%;\r\n}\r\n\r\n.grid-template-columns-3{\r\n  grid-template-columns: 250px 1fr;\r\n  height: calc(100vh - 60px);\r\n}\r\n\r\n.grid-template-columns-2{\r\n  grid-template-columns:0 1fr;\r\n  height: calc(100vh - 60px);\r\n}\r\n\r\n.background-blue{\r\n  background-color: #5f9ea0ff;\r\n}\r\n\r\n.fly-r{\r\n  float: right;\r\n}\r\n\r\n.md-marginBottom{\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.borderBottom{\r\n  border-bottom: 1px solid  #b0e0e6ff;\r\n}\r\n\r\n.md-marginTop{\r\n  margin-top:35px!important;\r\n}\r\n\r\n.listIconContainer{\r\n  width: 90%;\r\n  margin:0 auto;\r\n  cursor:pointer;\r\n}\r\n\r\n.boxListas{\r\n  width: 15%;\r\n  background-color: #def2f4ff;\r\n  box-shadow:0px 0px 25px rgba(0,0,0,0.2);\r\n  position: absolute;\r\n  display:none;\r\n}\r\n\r\n#listInformation li{\r\n  width: 100%;\r\n  border-bottom: 1px solid #b0e0e6ff;\r\n  color:#5f9ea0ff;\r\n  margin:0;\r\n  height: auto;\r\n}\r\n\r\n.boxListas div{\r\n  color:#5f9ea0ff;\r\n  font-size: 1.4em;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #bbe4e8fa;\r\n}\r\n\r\n.boxListas div:hover{\r\n  background-color:#bbe4e8fa;\r\n}\r\n\r\n.vertical-align-middle{\r\n  vertical-align: middle;\r\n}\r\n\r\n.hidden{\r\n  display:none;\r\n}\r\n\r\n.show{\r\n  display:block;\r\n}\r\n\r\n.bg-gray{\r\n  background-color: #e6e6e6ff;\r\n}\r\n\r\n.row{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.btn-bubble-md{\r\n  width: 130px;\r\n  height: 40px;\r\n  margin: 25px auto 25px auto;\r\n  text-align: center;\r\n}\r\n\r\n.btn-bubble-md a{\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: #609fa1ff;\r\n    color:#f5f5f5ff;\r\n    border-radius: 12px;\r\n    margin-bottom: 25px;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 1.4em;\r\n    padding: 10px 0 10px 0;\r\n    margin-top: 25px;\r\n}\r\n\r\n.btn-bubble-md a:hover{\r\n  box-shadow:0px 0px 25px rgba(0,0,0,0.2);\r\n}\r\n\r\n.btn-bubble-md a:active{\r\n  background-color: #b0e0e6ff;\r\n  color:#5f9ea0ff;\r\n  text-decoration: none;\r\n}\r\n\r\n.linkEsqueceuASenha{\r\n  margin-top:35px;\r\n  text-align: right;\r\n  padding-top:45px;\r\n}\r\n\r\n.linkEsqueceuASenha a{\r\ntext-decoration: none;\r\nfont-size: 1.6em;\r\ncolor:#b3d6d8ff;\r\nmargin: 20px;\r\n}\r\n\r\n.linkEsqueceuASenha a:hover{\r\n  color:#5f9ea0fd;\r\n}\r\n\r\n.linkEsqueceuASenha a:active{\r\nopacity:0.5;\r\n}\r\n\r\n.relative-lg-top{\r\n  top:45px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3Rhc2suY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDOztBQUVEO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUNBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usb0JB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Q0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixZQUFZO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0VBQ0UsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hc3NldHMvY3NzL3Rhc2suY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphenVsIGJhY2tncm91bmQgICM1ZjllYTBmZjtcclxuYXp1bCBjbGFybyAjYjBlMGU2ZmZcclxuY2lueGEgY2xhcm8gI2RjZGNkY2ZmXHJcbmVzY3VybzojMWYzMTMxZmY7XHJcbmNpbnphX2JhY2tncm91bmQ6IGU2ZTZlNmZmO1xyXG4qL1xyXG5cclxuKntcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6MDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keXtcclxuICBmb250LWZhbWlseTogQ2FsaWJyaSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxubWFpbntcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuaDJ7XHJcbmNvbG9yOiNkY2RjZGNmZjtcclxuZm9udC13ZWlnaHQ6IDMwMDtcclxubWFyZ2luLWxlZnQ6IDVweDtcclxuZm9udC1zaXplOiAyZW07XHJcbm1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubWVudXtcclxuICB3aWR0aDo5NiU7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxufVxyXG4ubWVudSB1bHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5kaXYuY29udGFpbmVyX192ZXJzaW9ue1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4jbWVudVByaW5jaXBhbCBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiNkY2RjZGNmZjtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4jbWVudVByaW5jaXBhbCBsaTpob3ZlcntcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbiNtZW51UHJpbmNpcGFsIGxpOmFjdGl2ZXtcclxuY29sb3I6I2IwZTBlNmZmO1xyXG59XHJcbiNtZW51TGF0ZXJhbHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI21lbnVMYXRlcmFsIC50aXR1bG8tY29udGFpbmVye1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMTVweCAyMHB4O1xyXG59XHJcbiNtZW51TGF0ZXJhbCBsaXtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGNvbG9yOiNkY2RjZGNmZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI21lbnVMYXRlcmFsIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiNkY2RjZGNmZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuI21lbnVMYXRlcmFsIGE6aG92ZXJ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI21lbnVMYXRlcmFsIC5hZGRJY29ue1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4jYmxvY29DZW50cmFse1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4jYmxvY29DZW50cmFsIGgye1xyXG4gIGNvbG9yOiM1ZjllYTBmZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiNsaXN0SW5mb3JtYXRpb257XHJcbiAgbWluLWhlaWdodDoxMDB2aDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206NDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4jbGlzdEluZm9ybWF0aW9uIGgye1xyXG4gIGNvbG9yOiNkY2RjZGNmZjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbiNibG9jb0NlbnRyYWwgLnRpdGxlQ29udGFpbmVye1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWY5ZWEwZmY7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0byAxNXB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBoZWlnaHQ6IDIuM3JlbTtcclxufVxyXG4jbGlzdEluZm9ybWF0aW9uIC50aXRsZUNvbnRhaW5lcntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVmOWVhMGZmO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMTVweCBhdXRvO1xyXG59XHJcbiNsaXN0SW5mb3JtYXRpb24gLnRpdGxlQ29udGFpbmVyIGgye1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ja2FuYmFuLWxpc3QtaW5mbyAjbGlzdEluZm9ybWF0aW9uIC50aXRsZUNvbnRhaW5lciBoMntcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4jYmxvY29DZW50cmFsIC5pbnB1dENvbnRhaW5lciwgI2xpc3RJbmZvcm1hdGlvbiAuaW5wdXRDb250YWluZXJ7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjYjBlMGU2ZmY7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4jYmxvY29DZW50cmFsIGlucHV0W3R5cGU9J3RleHQnXSwgI2xpc3RJbmZvcm1hdGlvbiBpbnB1dFt0eXBlPSd0ZXh0J117XHJcbiAgd2lkdGg6IDk0JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNibG9jb0NlbnRyYWwgaW5wdXQ6OnBsYWNlaG9sZGVyLCAjbGlzdEluZm9ybWF0aW9uIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjEwcHg7ICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjojZGNkY2RjZmY7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4jYmxvY29DZW50cmFsIGJ1dHRvbiwgI2xpc3RJbmZvcm1hdGlvbiBidXR0b257XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxuaGVpZ2h0OiAxMDAlO1xyXG53aWR0aDogNiU7XHJcbmJhY2tncm91bmQtY29sb3I6ICM3NWFiYWNmZjtcclxuY29sb3I6ICNmNWY1ZjVmZjtcclxufVxyXG4jYmxvY29DZW50cmFsIGJ1dHRvbjphY3RpdmUsICNsaXN0SW5mb3JtYXRpb24gYnV0dG9uOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgY29sb3I6IzVmOWVhMGZmO1xyXG59XHJcbiNibG9jb0NlbnRyYWwgLmxpc3RDb250YWluZXIsICNsaXN0SW5mb3JtYXRpb24gLmxpc3RDb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogNXB4IGF1dG8gMTBweCBhdXRvO1xyXG59XHJcblxyXG5cclxuI2xpc3RJbmZvcm1hdGlvbiAuaXRlbUNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAycHggMjBweCAycHggMjNweDtcclxufVxyXG4ja2FuYmFuLWxpc3QtaW5mbyAjbGlzdEluZm9ybWF0aW9uIC5pdGVtQ29udGFpbmVye1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxufVxyXG5cclxuI2xpc3RJbmZvcm1hdGlvbiAuaXRlbUNvbnRhaW5lcjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU5NDk0ZmY7XHJcbn1cclxuI2Jsb2NvQ2VudHJhbCBpbnB1dFt0eXBlPSdjaGVja2JveCddLCAjbGlzdEluZm9ybWF0aW9uIGlucHV0W3R5cGU9J2NoZWNrYm94J117XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jYmxvY29DZW50cmFsIHAuaXRlbSwgI2xpc3RJbmZvcm1hdGlvbiBwLml0ZW17XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiMxZjMxMzFmZjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuI2xpc3RJbmZvcm1hdGlvbiBsYWJlbHtcclxuICBjb2xvcjojYjBlMGU2ZmY7XHJcbn1cclxuI2NvbnRhaW5lci10YXJlZmFze1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG4jY29udGFpbmVyLXRhcmVmYXMgaDJ7XHJcbiAgY29sb3I6IzFmMzEzMWZmO1xyXG4gIG1hcmdpbjoyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjZmY7XHJcbn1cclxuI2NvbnRhaW5lci10YXJlZmFzIHNlY3Rpb257XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMzBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2RjZGNkY2ZmXHJcbn1cclxuXHJcbiNibG9jb0NlbnRyYWwgLmRlbGV0ZUljb24sICNsaXN0SW5mb3JtYXRpb24gLmRlbGV0ZUljb257XHJcbndpZHRoOiAxMCU7XHJcbmhlaWdodDogYXV0bztcclxucGFkZGluZzogMDtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbmZsb2F0OiByaWdodDtcclxubWFyZ2luLXJpZ2h0OjQlO1xyXG5jb2xvcjogI2MxYzFjMTtcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI2xpc3RJbmZvcm1hdGlvbiAuZGVsZXRlSWNvbntcclxuICBjb2xvcjojYjBlMGU2ZmY7XHJcbn1cclxuI2Fubm90YXRpb24gLmFubm90YXRpb25JdGVte1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxuICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q2ZDhmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuI2Fubm90YXRpb24gLmVkaXRBbm5vdGF0aW9ue1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1ZjllYTBmZjtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG59XHJcblxyXG4udGVzdGV7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYWRkSWNvbi5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuLnRlc3RlOmhvdmVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2FkZEljb25faG92ZXIuc3ZnJyk7XHJcbn1cclxuLnRlc3RlOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hZGRJY29uLnN2ZycpO1xyXG59XHJcblxyXG4uZWRpdEFubm90YXRpb24gc3BhbntcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uZWRpdEFubm90YXRpb24gc3Bhbjpob3ZlcntcclxuICBmb250LXdlaWdodDogNjAwXHJcbn1cclxuLnR4dEFubm90YXRpb257XHJcbiAgd2lkdGg6IDkwJTtcclxuICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMTVweCAwIDAgMDtcclxufVxyXG4jYmxvY29DZW50cmFsIC5tYXRlcmlhbC1pY29ucywgI2xpc3RJbmZvcm1hdGlvbiAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbiNibG9jb0NlbnRyYWwgLm1hdGVyaWFsSWNvbkVkaXROYW1le1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4jbG9naW5Db250YWluZXJ7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2xvZ2luQ29udGFpbmVyIC5sb2dpbi1jYXJke1xyXG4gIHdpZHRoOiAzNjhweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDo2MCBweDtcclxuICBwYWRkaW5nLWJvdHRvbTo0MHB4O1xyXG59XHJcbiNsb2dpbkNvbnRhaW5lciAubG9naW4tY2FyZC1oZWFkZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMCA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjllYTBmZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2xvZ2luQ29udGFpbmVyIC5sb2dpbi1jYXJkLWhlYWRlciBoMntcclxucGFkZGluZzogMTRweDtcclxufVxyXG4jbG9naW5Db250YWluZXIgLmxvZ2luLWlucHV0c3tcclxuICB3aWR0aDogMzE1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiNsb2dpbkNvbnRhaW5lciAubG9naW4taW5wdXRzIGlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjNiM2IzZmY7XHJcbn1cclxuLmxpc3QtbGVuZ3Roe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGUwZTZmZjtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICM1ZjllYTBmZjtcclxuICBwYWRkaW5nOiAwcHggM3B4IDBweCAzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLThweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLml0ZW0taGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzVmOWVhMGZmO1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcbi5pdGVtLWNlbnRyYWx7XHJcbiAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuLmNlbnRlcntcclxuICBtYXJnaW46MCxhdXRvLDAsIGF1dG87XHJcbn1cclxuLmdyaWR7XHJcbiAgZGlzcGxheTpncmlkO1xyXG59XHJcbi5ncmlkLXRlbXBsYXRlLWNvbHVtbnMtMXtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MTAwJTtcclxufVxyXG5cclxuLmdyaWQtdGVtcGxhdGUtY29sdW1ucy0ze1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG59XHJcbi5ncmlkLXRlbXBsYXRlLWNvbHVtbnMtMntcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MCAxZnI7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbn1cclxuLmJhY2tncm91bmQtYmx1ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY5ZWEwZmY7XHJcbn1cclxuXHJcbi5mbHktcntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm1kLW1hcmdpbkJvdHRvbXtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5ib3JkZXJCb3R0b217XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAjYjBlMGU2ZmY7XHJcbn1cclxuLm1kLW1hcmdpblRvcHtcclxuICBtYXJnaW4tdG9wOjM1cHghaW1wb3J0YW50O1xyXG59XHJcbi5saXN0SWNvbkNvbnRhaW5lcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmJveExpc3Rhc3tcclxuICB3aWR0aDogMTUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWYyZjRmZjtcclxuICBib3gtc2hhZG93OjBweCAwcHggMjVweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4jbGlzdEluZm9ybWF0aW9uIGxpe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjBlMGU2ZmY7XHJcbiAgY29sb3I6IzVmOWVhMGZmO1xyXG4gIG1hcmdpbjowO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4uYm94TGlzdGFzIGRpdntcclxuICBjb2xvcjojNWY5ZWEwZmY7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJlNGU4ZmE7XHJcbn1cclxuLmJveExpc3RhcyBkaXY6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojYmJlNGU4ZmE7XHJcbn1cclxuLnZlcnRpY2FsLWFsaWduLW1pZGRsZXtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5oaWRkZW57XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbi5zaG93e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLmJnLWdyYXl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNmZmO1xyXG59XHJcbi5yb3d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5idG4tYnViYmxlLW1ke1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMjVweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWJ1YmJsZS1tZCBhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5ZmExZmY7XHJcbiAgICBjb2xvcjojZjVmNWY1ZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uYnRuLWJ1YmJsZS1tZCBhOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6MHB4IDBweCAyNXB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4uYnRuLWJ1YmJsZS1tZCBhOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBlMGU2ZmY7XHJcbiAgY29sb3I6IzVmOWVhMGZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpbmtFc3F1ZWNldUFTZW5oYXtcclxuICBtYXJnaW4tdG9wOjM1cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6NDVweDtcclxufVxyXG4ubGlua0VzcXVlY2V1QVNlbmhhIGF7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuZm9udC1zaXplOiAxLjZlbTtcclxuY29sb3I6I2IzZDZkOGZmO1xyXG5tYXJnaW46IDIwcHg7XHJcbn1cclxuLmxpbmtFc3F1ZWNldUFTZW5oYSBhOmhvdmVye1xyXG4gIGNvbG9yOiM1ZjllYTBmZDtcclxufVxyXG4ubGlua0VzcXVlY2V1QVNlbmhhIGE6YWN0aXZle1xyXG5vcGFjaXR5OjAuNTtcclxufVxyXG4ucmVsYXRpdmUtbGctdG9we1xyXG4gIHRvcDo0NXB4O1xyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n.cdk-drag-preview{\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animation{\r\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0,0,0.2,0);\r\n  transition: -webkit-transform 500ms cubic-bezier(0,0,0.2,0);\r\n  transition: transform 500ms cubic-bezier(0,0,0.2,0);\r\n  transition: transform 500ms cubic-bezier(0,0,0.2,0), -webkit-transform 500ms cubic-bezier(0,0,0.2,0);\r\n}\r\n.cdk-drop-list-dragging .cdk-drag{\r\n  -webkit-transition: -webkit-transform 100ms cubic-bezier(0,0,0.2,0);\r\n  transition: -webkit-transform 100ms cubic-bezier(0,0,0.2,0);\r\n  transition: transform 100ms cubic-bezier(0,0,0.2,0);\r\n  transition: transform 100ms cubic-bezier(0,0,0.2,0), -webkit-transform 100ms cubic-bezier(0,0,0.2,0);\r\n}\r\n@media only screen and (max-width:450px){\r\n    div.grid-template-columns-3{\r\n        grid-template-columns: 7px 2fr;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsbUVBQW1EO0VBQW5ELDJEQUFtRDtFQUFuRCxtREFBbUQ7RUFBbkQsb0dBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxtRUFBbUQ7RUFBbkQsMkRBQW1EO0VBQW5ELG1EQUFtRDtFQUFuRCxvR0FBbUQ7QUFDckQ7QUFDQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0oiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi5jZGstZHJhZy1wcmV2aWV3e1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmNkay1kcmFnLWFuaW1hdGlvbntcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAsMCwwLjIsMCk7XHJcbn1cclxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFne1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBjdWJpYy1iZXppZXIoMCwwLDAuMiwwKTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpe1xyXG4gICAgZGl2LmdyaWQtdGVtcGxhdGUtY29sdW1ucy0ze1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN3B4IDJmcjtcclxuICAgIH1cclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/css/task.css":
/*!*********************************!*\
  !*** ./src/assets/css/task.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./task.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/task.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!********************************************************!*\
  !*** multi ./src/styles.css ./src/assets/css/task.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\luizv\Documents\projetos\tasklist\src\styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! C:\Users\luizv\Documents\projetos\tasklist\src\assets\css\task.css */"./src/assets/css/task.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map