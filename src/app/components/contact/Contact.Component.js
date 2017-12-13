/**
 * contact Module js
 */
import appName from '../../services/AppName.Service'
import contactCrtl from './Contact.Controller'
 var ContactModule = angular.module("ContactModule",[])
    .controller("ContactController", contactCrtl) 
    .controller("HeaderController", ["AppConfig",function(config){
        this.appName = config.title;
    }])
    .controller("FooterController", ["AppConfig",function(config){
        this.appName = config.title;
        this.date = config.date;
    }])
    .value("AppName", appName)
    .service("AppConfig" ,["AppName" , function AppConfigService(name){
        this.title = name;
        this.date = new Date();
    }]);





export {ContactModule};