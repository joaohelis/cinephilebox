window.ContactView = Backbone.View.extend({

	events: {
        "change"             : "change",
        "click #send-message": "sendMessage"        
    },

    initialize: function () {
        console.log('Initializing Contact View');    
        this.render();
        $('#contact-form', this.el).validate({
            rules:{ 
                from:{ 
                    required: true,                         
                    email: true
                },
                subject: {
                    required: true,                     
                    minlength: 5
                },
                html: {
                    required: true,
                    minlength: 15
                }
            },
            messages:{
                from:{ 
                    required: "O campo e-mail é obrigatorio.",
                    email: "Insira um e-mail válido."                           
                },
                subject: {
                    required: "O campo assunto é obrigatorio.",                         
                    minlength: "O campo assunto deve conter no mínimo 5 caracteres."
                },
                html: {
                    required: "O campo texto é obrigatorio.",
                    minlength: "O campo texto deve conter no mínimo 15 caracteres."                         
                }                       
            }            
        });        
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));       
        return this;
    },

    change: function (event) {
        var target = event.target;
        var change = {};        
        change[target.name] = target.value;
        this.model.set(change);        
    }, 

    sendMessage: function(){
        if($('#contact-form').valid())
            utils.sendEmail(this.model, function(msg){                
                alert(msg);
                if(msg.indexOf('sucesso') > 0)
                    $('#contact-form')[0].reset();
            });        
    }
});