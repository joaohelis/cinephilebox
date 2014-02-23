window.HeaderView = Backbone.View.extend({

	events: {        
        "click #login-btn"     : "closeModal"        
    },

    initialize: function () {
        console.log('Initializing Header View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },

    closeModal: function(){    	
    	$("#login").attr("style","display:none;");    	
    }

});

window.HeaderAdminView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Header Admin View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));        
        return this;
    },

    events:{
        "click #btn-signout" : "signout"
    },

    signout:function(){
        console.log('entrou no signout')
        utils.destroySession();
        window.location.replace("#");
    }
});