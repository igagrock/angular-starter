/**
 * app.js
 * entry point to the application
 */

 import angular from 'angular';
 import caculatorComp from "./components/caculator/Caculator.Module";
 import contactComp from "./components/contact/Contact.Module"

 import buttons from 'bootstrap-css'

 var MyAppModule = angular.module("mainApp" , ["caculatorComp","contactComp"]);

 MyAppModule.controller('Ctrl1', controller1);
 MyAppModule.controller('Ctrl2', controller2);

 
 function controller1(){
      this.prop = "contr 1..";
 }
 
 function controller2(){
   this.prop =   "contr 2..";
 }