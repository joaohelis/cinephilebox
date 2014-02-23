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
                //element = categorys[i].toJSON();
                //$("#table-category-content").append("<tr><td>"+element.name+"</td><td>123</td><td class='td-actions'><a href='javascript:;' class='btn btn-small btn-primary' title='Editar'><i class='btn-icon-only icon-edit'></i></a><a href='javascript:;' class='btn btn-small' title='Remover'><i class='btn-icon-only icon-remove'></i></a></td></tr>");
            }
        }
    }

});

window.CategoryItemListView = Backbone.View.extend({

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