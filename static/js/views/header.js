window.HeaderView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Header View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});