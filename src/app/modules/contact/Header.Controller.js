export default class Controller{
    /*@ngInject*/
    constructor($scope , AppConfig){
        this.appName = AppConfig.title;
    }
}

