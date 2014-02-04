window.LoginView = Backbone.View.extend({
    
    initialize: function () {
        console.log('Initializing Login View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    }
     
});