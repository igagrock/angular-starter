/**
 * app.js
 * entry point to the application
 */

 import angular from 'angular';
 import calcModule from "./modules/caculator/Caculator.Module";
 import contactModule from "./modules/contact/Contact.Module";
 import phoneListModule from "./modules/phone-list/phone-list.module"
 import './assets/scss/app.scss';

 var MyAppModule = angular.module("mainApp" , [ 'ContactModule','phoneList']);