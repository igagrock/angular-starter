/*@ngInject*/

export default class AppConfig{

    constructor(AppName, dateFilter){
        this.title = AppName;
        this.date =  dateFilter(new Date() , 'M-d-yyyy');
    }
}

