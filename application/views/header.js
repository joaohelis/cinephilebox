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