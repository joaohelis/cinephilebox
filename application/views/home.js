window.HomeView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Home View');    
        this.render();
        //$('#myCarousel').carousel({ interval: 3000, cycle: true });
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    }
});