window.UserListView = Backbone.View.extend({

	events: {
        "click #user-delete": "beforeuserDelete"        
    },

    initialize: function () {
        console.log('Initializing User List View');                    
        this.render();
        this.oTable;
    },    
    
    render: function () {
        $(this.el).html('<table id="user-list" class="display" width="100%">');
        return this;
    },

    tableMount: function(){    	
    	var aaData = [];
        var users = this.model;
        users.forEach(function(user){
            var user = user.toJSON();
            aaData.push(['<p class="span3">'+user.name+'</p>', 
            			user.email, 
            			user.userType, 
            			'<a href="#admin/users/edit/'+user.id+'" class="btn btn-small btn-primary" title="Editar"><i class="btn-icon-only icon-edit"></i></a>\
            			 <a id="user-delete" user-id="'+user.id+'" class="btn btn-small" title="Remover"><i class="btn-icon-only icon-remove"></i></a>'                                                                                                  
            			])
        });
        var aoColumns = []                
        aoColumns.push({"sTitle": "Nome"}); 
        aoColumns.push({"sTitle": "E-mail", "sClass": "center"}); 
        aoColumns.push({"sTitle": "Tipo", "sClass": "center"}); 
        aoColumns.push({"sTitle": "Ações", "sClass": "center"}); 

        
        this.oTable = $('#user-list').dataTable({            
            "aaData": aaData,
            "aoColumns": aoColumns,
            "oLanguage": {
                "sSearch": "Buscar:",
                "sInfoFiltered": " - A busca encontrou _TOTAL_ usuário(s)",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sEmptyTable": "Nenhum usário cadastrado!",
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
    },

    beforeuserDelete: function(events){
    	var userTableRow = events.currentTarget.parentNode.parentNode;
    	var user = this.model.get($(events.currentTarget).attr("user-id"));    	 
    	$(userTableRow).addClass('row_selected');
		this.userDelete(user);		
    },

    /* Get the rows which are currently selected */
	fnGetSelected: function(oTableLocal){
    	return oTableLocal.$('tr.row_selected');
	},

    userDelete: function(user) {    
    	var self = this;    
        if(confirm("Tem certeza que quer excluir o usuário '"+user.attributes.name.toUpperCase()+"'?")){
            user.destroy();
            alert('Usuário excluído com sucesso!');
                var anSelected = self.fnGetSelected(self.oTable);
                if (anSelected.length !== 0) {
                    self.oTable.fnDeleteRow(anSelected[0]);
            }
        }        
        return false;
    }
});