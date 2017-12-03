/**
 * app.js
 * entry point to the application
 */

 import angular from 'angular';
 import CalculatorModule from "./components/caculator/CaculatorModule";


 var MyAppModule = angular.module("mainApp" , ["CalculatorModule"]);

 MyAppModule.controller('Ctrl1', controller1);
 MyAppModule.controller('Ctrl2', controller2);

 
 function controller1(){
      this.prop = "contr 1..";
 }
 
 function controller2(){
   this.prop =   "contr 2..";
 }