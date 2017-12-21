/**
 * contact Module js
 */

import appName from '../../services/AppName.Service';
import contactService  from '../../services/ContactData.Service';
import appNameService from '../../services/AppConfig.Service';
import contactCrtl from './Contact.Controller';
import headerController from './Header.Controller';
import footerController from './Footer.Controller';
import myAppDirective from '../../directives/MyApp.Directive';
import myCurrentTime from '../../directives/myCurrentTime.Directive';
import timeController from './Time.Controller'




 var ContactModule = angular.module("ContactModule",[])
    .controller("ContactController", contactCrtl) 
    .controller("HeaderController", headerController)
    .controller("FooterController",footerController)
    .controller("timeController" , timeController)
    .value("AppName", appName)
    .service("AppConfig" , appNameService)
    .service("contacts", contactService)
    .directive("myApp",myAppDirective)
    .directive("myCurrentTime" , myCurrentTime);

export {ContactModule};