window.MovieListView = Backbone.View.extend({

    events:{
        "click .tab": "tabPaneToggleClass"
    },

    initialize: function (){
        console.log('Initializing Movie List View');
        //this.render();
    },

    tabPaneToggleClass: function(event){
        if(!$(".btn", event.currentTarget).hasClass("btn-primary"))
            $('.btn-tab').toggleClass('btn-primary');
    },

    render: function (){
        $(this.el).html(this.template(this.model.toJSON()));
        $(this.el).append('<div id="page-selection" class="pagination pagination-centered"></div>');
        var self = this;        
        var moviePerPage = 9;
        var totalPages = this.model.models.length/moviePerPage + ((this.model.models.length % moviePerPage == 0)?0:1);
        self.movieListGenerate(1, moviePerPage);        
        $('#page-selection', this.el).bootpag({
            total: totalPages,
            maxVisible: 10            
        }).on("page", function(event, num){
            self.movieListGenerate(num, moviePerPage);
        });
        $(this.el).append('<br class="clr"/>');
        return this;
    },

    movieListGenerate: function(page, moviePerPage){
        var self = this;
        var movies = this.model.models;
        var initPos = moviePerPage * (page -1);
        var endPos = (initPos + moviePerPage < movies.length)? initPos + moviePerPage: movies.length;                
        $('#listView', this.el).html("");
        $('#blockView .thumbnails', this.el).html("");        
        movies.slice(initPos, endPos).forEach(function(movie){            
            $('#listView', self.el).append(new MovieListItemView({model: movie}).el);
            $('#blockView .thumbnails', self.el).append(new MovieListBlockItemView({model: movie}).el);            
        });            
    }
});


window.MovieListItemView = Backbone.View.extend({    

    className: "row",

    initialize: function () {
        //console.log('Initializing Movie List Item View');    
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
        this.render();
    },    

    render: function () {
        var self = this;        
        var category = new Category({id: self.model.get('category')});
        category.fetch().complete(function(){            
            var jsonModel = self.model.toJSON();
            jsonModel.category = category.attributes.name;            
            $(self.el).html(self.template(jsonModel)+"<hr class='soft'/>");
            return this;
        });        
    }
});


window.MovieListBlockItemView = Backbone.View.extend({

    tagName: "li",

    className: "span3",

    initialize: function () {
        //console.log('Initializing Movie List Block Item View');
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
        this.render();
    },

    render: function () {
        var self = this;        
        var category = new Category({id: self.model.get('category')});
        category.fetch().complete(function(){            
            var jsonModel = self.model.toJSON();
            jsonModel.category = category.attributes.name;            
            $(self.el).html(self.template(jsonModel));
            return this;
        });
    }
});

window.MovieListAdminView = Backbone.View.extend({

	events: {
        "click #movie-delete": "beforeMovieDelete"        
    },

    initialize: function () {
        console.log('Initializing Movie List Admin View');                    
        this.render();
        this.oTable;
    },    
    
    render: function () {
        $(this.el).html('<table id="movie-list-admin" class="display" width="100%">');
        return this;
    },

    tableMount: function(){
        var self = this;        	        
    	var aaData = [];
        var movies = this.model;
        var categoryList = new CategoryCollection();
        categoryList.fetch().complete(function(){
            movies.each(function(movie){
                var movie = movie.toJSON();                
            
                var category = categoryList.get(movie.category);                
                
                aaData.push(['<p class="span3">'+movie.title+'</p>',
                    category.attributes.name,
                    movie.stockQuantity, 
                    '<a href="#admin/movies/edit/'+movie.id+'" class="btn btn-small btn-primary" title="Editar"><i class="btn-icon-only icon-edit"></i></a>\
                     <a id="movie-delete" movie-id="'+movie.id+'" class="btn btn-small" title="Remover"><i class="btn-icon-only icon-remove"></i></a>'                                                                                                  
                    ]);
            });

            var aoColumns = []                

            aoColumns.push({"sTitle": "Título"}); 
            aoColumns.push({"sTitle": "Categoria", "sClass": "center"}); 
            aoColumns.push({"sTitle": "Quant.Estoque", "sClass": "center"}); 
            aoColumns.push({"sTitle": "Ações", "sClass": "center"});

            self.oTable = $('#movie-list-admin').dataTable({            
                "aaData": aaData,
                "aoColumns": aoColumns,
                "oLanguage": {
                    "sSearch": "Buscar:",
                    "sInfoFiltered": " - A busca encontrou _TOTAL_ filme(s)",
                    "sLengthMenu": "Mostrar _MENU_ registros",
                    "sEmptyTable": "Nenhum filme cadastrado!",
                    "sInfoEmpty": "Nenhum registro para mostrar",
                    "sZeroRecords": "Nenhum registro para mostrar",
                    "sInfo": "Mostrando (_START_ a _END_) de _TOTAL_ entradas",
                    "oPaginate": {
                        "sPrevious": "Anterior",
                        "sNext": "Próximo",                    
                        "sFirst": "Primeira página",
                        "sLast": "Última página"
                    }
                }           
            });                
        });                
    },

    beforeMovieDelete: function(events){
    	var movieTableRow = events.currentTarget.parentNode.parentNode;
    	var movie = this.model.get($(events.currentTarget).attr("movie-id"));    	 
    	$(movieTableRow).addClass('row_selected');
		this.movieDelete(movie);				
    },

    /* Get the rows which are currently selected */
	fnGetSelected: function(oTableLocal){
    	return oTableLocal.$('tr.row_selected');
	},

    movieDelete: function(movie) {          
    	var self = this;        
        if(confirm("Tem certeza que quer excluir o filme?")){
            movie.destroy();
            var anSelected = self.fnGetSelected(self.oTable);                    
            alert('Filme excluído com sucesso!');            
            if (anSelected.length !== 0) {
                self.oTable.fnDeleteRow(anSelected[0]);
            }
        }        
        return false;
    }
});