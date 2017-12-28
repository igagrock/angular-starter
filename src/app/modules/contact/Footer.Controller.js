/*@ngInject */

class footerController{
    constructor($scope , AppConfig){
        this.appName = AppConfig.title;
        this.date = AppConfig.date;
    }
}

export default footerController;