window.SpecialOfferView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Special Offer View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});