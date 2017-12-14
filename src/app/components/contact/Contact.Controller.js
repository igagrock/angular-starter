
class ContactController{
    /*@ngInject*/
    constructor($scope,contacts){
        this.contacts = contacts.data;
        this.selectedContact = this.contacts[0];
        this.activeIndex = 0;
        this.selectContact = function(index){
            this.selectedContact = this.contacts[index];  
            console.log("selectContact -- ", this.selectedContact);
            this.activeIndex = index;
        };
    }
}

export default ContactController;