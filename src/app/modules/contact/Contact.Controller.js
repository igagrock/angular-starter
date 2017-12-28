
class ContactController{
    /*@ngInject*/
    constructor($scope,contacts){
        //this.contacts = contacts.data;
        var _this = this;
         contacts.get().then(function(data){
            _this.contacts = data;
            _this.selectedContact = _this.contacts[0];
            _this.activeIndex = 0;
            _this.editMode =  false;
         })
         .catch(function(resp){
            console.log("failed to fetch... ", resp);
        }).then(function(){
            console.log("clear the DOM or show a message here")
        });
        
          
        _this.selectContact = function(index){
            _this.selectedContact = this.contacts[index];  
            console.log("selectContact -- ", _this.selectedContact);
            _this.activeIndex = index;
           _this.isUpdateSuccess =  false;
        };
        _this.toggleEditMode = function(){
            _this.editMode = ! _this.editMode;

        }
        _this.updateContact = function(){
            _this.toggleEditMode();
            if(!_this.editMode){
                console.log("time to save the data");
                contacts.update(_this.selectedContact)
                .then(()=> new Promise(resolve => setTimeout(resolve, 500)))
                .then(function(){
                    _this.isUpdateSuccess = true;
                    _this.successMessage = "Data has been updated";
                },function(err){
                    console.log(err);
                    _this.isUpdateFailure = true;
                    _this.failureMessage = "Update unsuccessfull";
                })
                .then(()=> new Promise(resolve => setTimeout(resolve, 1000)))
                .then(()=>{
                    console.log("checkmate");
                    _this.isUpdateSuccess = false;
                    _this.isUpdateFailure = false;
                });
            }

        }
    }
}

export default ContactController;