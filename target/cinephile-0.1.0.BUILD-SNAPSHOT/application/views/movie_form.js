window.MovieView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Movie Form View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        var category_list = '<select  id="category" name="category" value="<%= category %>">';
        categoryList.each(function(category){
            category_list += "<option name='"+category.id+"' value='"+category.id+"' <%= category == 1?'selected':' %>"+category.attributes.name+"</option>"
        });
        category_list += '</select>';        
        $("#category_list", this.el).html(category_list);
        $('#category option[name="'+this.model.attributes.category+'"]', this.$el).attr({selected : "selected" });
        return this;
    },

    events: {
        "change"                  : "change",
        "click .save"             : "beforeSave",
        "click .delete"           : "deleteMovie",  
        "change  #coverPicture"   : "coverPictureUpload"              
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
        if(this.pictureFile) {               
            var reverse = function(str){return str.split("").reverse().join("")};                        
            var fileExtension = reverse(reverse(this.pictureFile.name).substring(0, reverse(this.pictureFile.name).indexOf(".")));
            var fileName = this.pictureFile.uuid+"."+fileExtension;
            this.model.set("coverPicture", "../img/coverPictures/"+fileName);
            utils.uploadFile(this.pictureFile, fileName, null);
        }
        this.saveMovie();
        return false;                
    },

    saveMovie:function (){        
        if (this.model.isNew()){
            movieList.create(this.model);
            alert('Filme cadastrado com sucesso!');
            window.location.replace('#admin/movies/list');                  
        } else {        	
            this.model.save();
            utils.showAlert('Sucesso!', 'Filme atualizado com sucesso.', 'alert-success');
        }
        return false;
    },
    
    deleteMovie:function () {
        var self = this;
        if(confirm("Tem certeza que quer excluir o filme?")){
            self.model.destroy({
                success:function () {
                    alert('Filme deletado com sucesso!');
                    window.history.back();
                }
            })
        }        
        return false;
    },

    coverPictureUpload: function (event){                                  
        var files = event.target.files; // FileList object
        //render image files as thumbnails.        
        this.pictureFile = files[0];
        if(!this.pictureFile.type.match('image.*')){
            alert('Escolha um arquivo de imagem');
            return false;
        }
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onloadend = function (){
            $('#viewCoverPicture').attr('src', reader.result).width(150).height(150);                         
        };                
        // Read in the image file as a data URL.
        reader.readAsDataURL(this.pictureFile);
        this.pictureFile.uuid = utils.generateUUID();
    }    
});