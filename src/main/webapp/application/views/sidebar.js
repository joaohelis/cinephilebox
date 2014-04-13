window.SidebarView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Sidebar View');    
        this.render();        
    },

    render: function () {
        var self = this;        
        $(this.el).html(this.template());
        var categories = this.model;        
        categories.forEach(function(category){
            $("#sideManu", self.el).append('<li><a>'+category.attributes.name.toUpperCase()+'</a></li>');
        });        
        return this;
    }
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