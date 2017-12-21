import myAppTemplate from '../directives/MyApp.html';

/*@ngInject*/
export default function myAppDirective(){
   return {
       restrict: 'E',
       scope :{
           myApp : '=scope'
       },
       template : myAppTemplate
   }
/*@ngInject*/
}
