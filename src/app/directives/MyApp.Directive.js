import myAppTemplate from '../directives/MyApp.html';

/*@ngInject*/
export default function myAppDirective(){
   return {
       restrict: 'A',
       template : myAppTemplate
   }

}
