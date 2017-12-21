/**
 * app.js
 * entry point to the application
 */

 import angular from 'angular';
 import caculatorComp from "./components/caculator/Caculator.Module";
 import contactComp from "./components/contact/Contact.Module";
 import './assets/scss/app.scss';
 import util from 'bootstrap/js/dist/util';
 import dropdown  from 'bootstrap/js/dist/dropdown';

 var MyAppModule = angular.module("mainApp" , ["caculatorComp","contactComp"]);

 console.log("util " , util);

 MyAppModule.controller('Ctrl1', controller1);
 MyAppModule.controller('Ctrl2', controller2);

 
 function controller1(){
      this.prop = "contr 1..";
 }
 
 function controller2(){
   this.prop =   "contr 2..";
 }