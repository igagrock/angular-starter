/*@ngInject*/

export default class AppConfig{

    constructor(AppName){
        this.title = AppName;
        this.date = "   Date: "+new Date();
    }
}

