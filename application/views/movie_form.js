window.MovieFormView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Movie Form View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});