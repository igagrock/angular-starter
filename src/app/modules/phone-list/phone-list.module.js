import phoneListComponent from './phone-list.component';
import phoneListTemplate  from '../phone-list/phone-list.template.html';
import PhoneListController from './phone-list.controller'

export default angular.module('phoneList' ,[])
     .component('phoneList', phoneListComponent() ).name;
