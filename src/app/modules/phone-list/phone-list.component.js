import phoneListTemplate  from '../phone-list/phone-list.template.html';
import PhoneListController from './phone-list.controller'
console.log("phoneListTempalate ", phoneListTemplate);
/* @ngInject */
export default function(){
    return {
        template : phoneListTemplate ,
        controller : PhoneListController
    }
}