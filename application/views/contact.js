window.ContactView = Backbone.View.extend({

	events: {
        "click #send-message": "sendMessage"        
    },

    initialize: function () {
        console.log('Initializing Contact View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },

    sendMessage: function(){
        alert("E-mail enviando com suceso!");
    }
});