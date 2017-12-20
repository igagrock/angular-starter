/**
 * contact Module js
 */
import appName from '../../services/AppName.Service';
import contactService  from '../../services/ContactData.Service';
import appNameService from '../../services/AppConfig.Service';
import contactCrtl from './Contact.Controller';
import headerController from './Header.Controller';
import footerController from './Footer.Controller';
import myAppDirective from '../../directives/MyApp.Directive'


 var ContactModule = angular.module("ContactModule",[])
    .controller("ContactController", contactCrtl) 
    .controller("HeaderController", headerController)
    .controller("FooterController",footerController)
    .value("AppName", appName)
    .service("AppConfig" , appNameService)
    .service("contacts", contactService)
    .directive("myApp",myAppDirective);


export {ContactModule};