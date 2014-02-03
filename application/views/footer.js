window.FooterView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Footer View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});