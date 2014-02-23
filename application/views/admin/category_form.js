window.CategoryFormView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Category Form View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        "change"                  : "change",
        "click #category-save"    : "beforeSave",               
    },

    change: function (event) {
        common_functions.change(event, this.model);
    },

    beforeSave: function () {        
        var check = utils.validateAll(this.model);
        if (check.isValid === false){            
            utils.displayValidationErrors(check.messages);
            return false;
        }
        this.saveCategory();
        return false;                
    },

    saveCategory:function (){        
        if (this.model.isNew()){
            categoryList.create(this.model);
            alert('Categoria criada com sucesso!');
            window.location.replace('#admin/categories');
        } else {            
            this.model.save();
            utils.showAlert('Sucesso!', 'Suas alterações foram salvas.', 'alert-success');
        }
        return false;
    },

});
