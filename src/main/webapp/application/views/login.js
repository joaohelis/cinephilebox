window.LoginView = Backbone.View.extend({
    
    initialize: function () {
        console.log('Initializing Login View');    
        this.render();
        $('#login-form', this.el).validate({
            rules:{ 
                email:{ 
                    required: true,                         
                    email: true
                },
                password: {
                    required: true,                   
                    minlength: 4
                }
            },
            messages:{
                email:{ 
                    required: "O campo e-mail é obrigatorio.",
                    email: "Insira um e-mail válido."                     
                },
                password:{
                    required: "O campo senha é obrigatorio.",
                    minlength: "O campo senha deve conter no mínimo 4 caracteres."
                }                       
            }            
        });
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));        
        return this;
    },

    events: {
        "change" : "change",
        "click #btn-login" : "makeLogin",
        "keydown" : "onkeypress"
    },

    change: function (event) {
        common_functions.change(event, this.model);
    },

    onkeypress: function (event){
        var code = event.keyCode || event.which;        
        if (code == 13) {
            this.makeLogin(event);
        }        
    },

    makeLogin: function(event){
        if(!$('#login-form').valid())return;
        var self = this.model.attributes;
        userList.fetch({success: function(){
            var result = userList.where({'email': self.email, 'password': self.password });
            if (result.length !== 0){
                utils.createSession(self);
                window.location.replace('#admin');            
            }else{
                utils.showAlert('Falhou!', 'E-mail ou senha incorretos!', 'alert');
            } 
        }});
    }      
});
