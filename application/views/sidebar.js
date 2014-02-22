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

window.SidebarAdminView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Sidebar Admin View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());        
        return this;
    },
});