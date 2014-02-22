window.MovieView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Movie Form View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        "change"                  : "change",
        "click .save"             : "beforeSave",
        "click .delete"           : "deleteMovie",                
    },    

    change: function (event) {
        // Remove any existing alert message
        utils.hideAlert();

        // Apply the change to the model
        var target = event.target;
        var change = {};
        change[target.name] = target.value;
        this.model.set(change);

        // Run validation rule (if any) on changed item
        var check = utils.validateItem(target.id, this.model);
        if (check.isValid === false) {
            utils.addValidationError(target.id, check.message);
        } else {
            utils.removeValidationError(target.id);
        }        
    },

    beforeSave: function () {        
        var check = utils.validateAll(this.model);
        if (check.isValid === false){            
            utils.displayValidationErrors(check.messages);
            return false;
        }
        /*
        if (this.pictureFile) {            
            this.model.set("profilePicture", "../img/profilePictures/"+this.pictureFile.name);            
            utils.uploadFile(this.pictureFile, null);
        }*/
        this.saveMovie();
        return false;                
    },

    saveMovie:function (){        
        if (this.model.isNew()){
            movieList.create(this.model);
            alert('Filme cadastrado com sucesso!');
            window.location.replace('#movies/edit/'+this.model.id);      
            //app.navigate('#movies/edit/'+this.model.id);
            //utils.showAlert('Sucesso!', 'Filme cadastrado com sucesso.', 'alert-success');
        } else {        	
            this.model.save();
            utils.showAlert('Sucesso!', 'Filme atualizado com sucesso.', 'alert-success');
        }
        return false;
    },
    
    deleteMovie:function () {
        this.model.destroy({
            success:function () {
                alert('Filme deletado com sucesso!');
                window.history.back();
            }
        });
        return false;
    }
});