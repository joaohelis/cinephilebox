window.CategoryListView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Category List View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});