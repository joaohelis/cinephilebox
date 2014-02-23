window.MovieListView = Backbone.View.extend({

    initialize: function () {
        console.log('Initializing Movie List View');    
        this.render();
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },
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
    	var aaData = [];
        var movies = this.model;
        movies.forEach(function(movie){
            var movie = movie.toJSON();
            aaData.push(['<p class="span3">'+movie.title+'</p>', 
            			movie.category, 
            			movie.stockQuantity, 
            			'<a href="#admin/movies/edit/'+movie.id+'" class="btn btn-small btn-primary" title="Editar"><i class="btn-icon-only icon-edit"></i></a>\
            			 <a id="movie-delete" movie-id="'+movie.id+'" class="btn btn-small" title="Remover"><i class="btn-icon-only icon-remove"></i></a>'                                                                                                  
            			])
        });
        var aoColumns = []                
        aoColumns.push({"sTitle": "Título"}); 
        aoColumns.push({"sTitle": "Categoria", "sClass": "center"}); 
        aoColumns.push({"sTitle": "Quant.Estoque", "sClass": "center"}); 
        aoColumns.push({"sTitle": "Ações", "sClass": "center"}); 

        
        this.oTable = $('#movie-list-admin').dataTable({            
            "aaData": aaData,
            "aoColumns": aoColumns           
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
            movie.destroy({
                success:function () {                	
                    alert('Filme excluído com sucesso!');
                    var anSelected = self.fnGetSelected(self.oTable);
			        if (anSelected.length !== 0) {
			            self.oTable.fnDeleteRow(anSelected[0]);
			        }                    
                }
            })
        }        
        return false;
    }
});