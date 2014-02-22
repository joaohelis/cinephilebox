window.CategoryFormView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Category Form View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});
