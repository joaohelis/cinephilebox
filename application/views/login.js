window.LoginView = Backbone.View.extend({
    
    initialize: function () {
        console.log('Initializing Login View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));        
        return this;
    },

    events: {
        "change" : "change",
        "click #btn-login" : "makeLogin"        
    },

    change: function (event) {
        common_functions.change(event, this.model);
    },

    onkeypress: function (event){
        alert("entrei aquu");
        if (event.keyCode == 13) {
            makeLogin(event);
        }        
    },

    makeLogin: function(event){        
        var self = this.model.attributes;
        var result = userList.where({'email': self.email, 'password': self.password });
        if (result.length !== 0){
            utils.createSession(self);
            window.location.replace('#admin');            
        }else{
            utils.showAlert('Falhou!', 'E-mail ou senha incorretos!', 'alert');
        } 
    }      
});
