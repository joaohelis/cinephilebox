window.MovieListView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Movie List View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});