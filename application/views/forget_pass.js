window.ForgetPassView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Forget Pass View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});