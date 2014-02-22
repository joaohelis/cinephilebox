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


    initialize: function () {
        console.log('Initializing Movie List Admin View');            

        $("#movie-list-admin tbody tr").click( function( e ) {
	        if ( $(this).hasClass('row_selected') ) {
	            $(this).removeClass('row_selected');
	        }
	        else {
	            oTable.$('tr.row_selected').removeClass('row_selected');
	            $(this).addClass('row_selected');
	        }
	    }),
     
	    /* Add a click handler for the delete row */
	    $('#delete').click( function() {
	        var anSelected = fnGetSelected( oTable );
	        if ( anSelected.length !== 0 ) {
	            oTable.fnDeleteRow( anSelected[0] );
	        }
	    })
        this.render();
    },

    tableMount: function(){
    	var aaData = [];
        var movies = this.model;
        movies.forEach(function(movie){
            var movie = movie.toJSON();                        
            aaData.push([movie.title, movie.category, movie.stockQuantity])
        });
        var aoColumns = []
        aoColumns.push({"sTitle": "Título", "sClass": "center" }); 
        aoColumns.push({"sTitle": "Categoria", "sClass": "center" }); 
        aoColumns.push({"sTitle": "Quant.Estoque", "sClass": "center" }); 

        
        oTable = $('#movie-list-admin').dataTable({            
            "aaData": aaData,
            "aoColumns": aoColumns           
        });
    },
    
    render: function () {
        $(this.el).html('<table id="movie-list-admin" class="display" width="100%">');
        return this;
    },    


    /* Get the rows which are currently selected */
	fnGetSelected: function(oTableLocal)
	{
	    return oTableLocal.$('tr.row_selected');
	}
});