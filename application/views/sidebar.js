window.SidebarView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Sidebar View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});