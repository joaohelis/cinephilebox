window.ProductListView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Produtct List View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});