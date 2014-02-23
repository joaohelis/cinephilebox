window.UserView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing User View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        $('#userType option[name="'+this.model.attributes.userType+'"]', this.$el).attr({selected : "selected" });
        return this;
    },

    events: {
        "change"                  : "change",
        "click .save"             : "beforeSave",
        "click .delete"           : "deleteUser",
        "keyup #password"         : "chagePassword"        
    },    

    change: function (event) {
        // Remove any existing alert message
        utils.hideAlert();

        // Apply the change to the model
        var target = event.target;
        var change = {};        

        change[target.name] = target.value;
        this.model.set(change);

        // Run validation rule (if any) on changed item
        var check = utils.validateItem(target.id, this.model);

        if (check.isValid === false) {
            utils.addValidationError(target.id, check.message);
        } else {
            utils.removeValidationError(target.id);
        }        
    },

    chagePassword: function(event){                
        var target = event.target;
        var passwordCheck = utils.validateItem(target.id, new User({password:target.value}));        
        if(passwordCheck.isValid)
            $("#password-confirmation-control-group").show();
        else{
            $("#passwordConfirmation").val("");
            utils.removeValidationError("passwordConfirmation");
            $("#password-confirmation-control-group").hide();        
        }
    },    

    beforeSave: function () {                
        var check = utils.validateAll(this.model);        
        var checkPasswordConfirmation = $("#passwordConfirmation").val() == $("#password").val();        
        if(!checkPasswordConfirmation){
            if(check.isValid)
                check.messages = {}            
            check.isValid = false;          
            check.messages.passwordConfirmation = "Confirmação de senha inválida.";            
        }
        if (check.isValid === false){            
            utils.displayValidationErrors(check.messages);
            return false;
        }
        this.saveUser();
        return false;                
    },

    saveUser:function (){        
        if (this.model.isNew()){
            userList.create(this.model);
            alert('Usuário cadastrado com sucesso!');
            window.location.replace('#admin/users/list');                  
        } else {        	
            this.model.save();
            utils.showAlert('Sucesso!', 'Usuário atualizado com sucesso.', 'alert-success');
        }
        return false;
    },

    deleteUser: function() {                    
        confirm("Tem certeza que quer excluir o usuário '"+user.attributes.name.toUpperCase()+"'?");
    }
});