
import contacts from '../../services/ContactData.Service'

export default function(){
    console.log("init contact controller ...");
    this.contacts = contacts
    this.selectedContact = this.contacts[0];
    this.activeIndex = 0;
    this.selectContact = function(index){
        this.selectedContact = this.contacts[index];  
        console.log("selectContact -- ", this.selectedContact);
        this.activeIndex = index;
    };
};