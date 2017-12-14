/**
 * contact Module js
 */
import appName from '../../services/AppName.Service'
import contactService  from '../../services/ContactData.Service'
import appNameService from '../../services/AppConfig.Service'
import contactCrtl from './Contact.Controller'
import headerController from './Header.Controller'

 var ContactModule = angular.module("ContactModule",[])
    .controller("ContactController", contactCrtl) 
    .controller("HeaderController", headerController)
    .controller("FooterController", ["AppConfig",function(config){
        this.appName = config.title;
        this.date = config.date;
    }])
    .value("AppName", appName)
    .service("AppConfig" , appNameService)
    .service("contacts", contactService);


export {ContactModule};