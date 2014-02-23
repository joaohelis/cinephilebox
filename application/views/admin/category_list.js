window.CategoryListView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Category List View');  
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    renderTable: function(){
        var categorys = this.model.models;
        var length = categorys.length;

        if(length > 0){
            for (var i = 0; i < length; i++) {
                $("#table-category-content").append(new CategoryItemListView({model:categorys[i]}).el);
            }
        }
    }

});

window.CategoryItemListView = Backbone.View.extend({
    tagName: 'tr',

    initialize: function(){
        console.log('Initializing Category Item List View');
        this.render();
    },

    events:{
        "click .btn-remove-cat" : "delete",
        "click .btn-edit-cat" : "editCategory"
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));        
        return this;
    },

    delete: function(){
        this.remove();
        categoryList.remove(this.model);
        return false;
    },

    editCategory: function(){
        window.location.replace('#admin/categories/edit/'+this.model.attributes.id);
    }
});