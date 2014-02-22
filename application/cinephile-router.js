var AppRouter = Backbone.Router.extend({
	    
    routes: {
        //'^([^\/]*)/.*$'    : "defaultRoute",
        ""                 : "home",
        "movies/list"      : "movieList",
        "contact"          : "contact",
        "login"            : "login",
        "forgetpass"       : "forgetPass",
        "admin"            : "homeAdmin",
        "admin/movies/new"       : "addMovie",        
        "admin/movies/edit/:id"  : "editMovie",
        "admin/movie/:id"        : "movieDetails",
        "admin/movies/list"      : "movieListAdmin"
        "admin/categories/new"   : "addCategory",
        "admin/categories"       : "listCategorys"
    },    

    initialize: function () {                        
        $('#footerSection').html(new FooterView().el);
        utils.startsWithMethodConfigure();
        this.headerAdmin();        
        this.sidebarAdmin();        
        //this.defaultRoute();
    },  

    defaultRoute: function(){
        var currentRoute = new String(Backbone.history.valueOf().fragment).toString();        
        if(currentRoute.startsWith("admin")){
            alert("Entrei aqui");
            this.sidebarAdmin();
            this.headerAdmin();
        }else{            
            this.sidebar();
            this.header();
        }        
    },

    header: function(){
        $('#header').html(new HeaderView().el);
    },

    headerAdmin: function(){
        $('#header').html(new HeaderAdminView().el);
    },

    addMovie: function() {
        var movie = new Movie();
        $('#content').html(new MovieView({model: movie}).el);
        $("#legend").text("Adicionar Filme");
        $("#movie-save").text("Adicionar Filme");
        $("#movie-delete").remove();                
    },

    editMovie: function (id) {              
        var movie = movieList.get(id.toString());
        $("#content").html(new MovieView({model: movie}).el);
        $("#legend").text("Editar Filme");
        $("#movie-save").text("Salvar alterações");
    },

    movieListAdmin: function() {                                
        var movieListAdmin = new MovieListAdminView({model:movieList});
        $("#content").html(movieListAdmin.el);
        movieListAdmin.tableMount();
    },

    movieList: function(){        
        $('#carouselBlk').html("");
        $("#content").html(new MovieListView().el);
    },

    home: function(){        
        $('#carouselBlk').html(new HomeView().el);
    },

    homeAdmin: function(){
        $('#carouselBlk').html('');
        $('#content').html('<div class="hero-unit"><h1>Área de administração do Cinephile</h1><p></p></div>');
        $("#sidebar").html(new SidebarAdminView().el);
    },

    forgetPass: function(){
        $("#content").html(new ForgetPassView().el);
    },

    login: function(){
        $('#carouselBlk').html("");
        $("#content").html(new LoginView().el);
    },

    movieForm: function(){
        $("#content").html(new MovieFormView().el);
    },

    sidebar: function(){
        $("#sidebar").html(new SidebarView().el);
    },

    sidebarAdmin: function(){
        $("#sidebar").html(new SidebarAdminView().el);  
    },

    contact: function(){
        $('#carouselBlk').html("");
        $("#content").html(new ContactView().el);
    },

    addCategory: function(){
        var c = new Category();
        $('#content').html(new CategoryFormView({model: c}).el);
        $("#legend").text("Criar categoria");
    },

    listCategorys: function(){
        $('#content').html(new CategoryListView().el);
    }

});

var movieList = new MovieCollection()
var categoryList = new CategoryCollection()

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'MovieListView', 'ForgetPassView', 
                    'LoginView', 'MovieView', 'SidebarView', 'ContactView', 'SidebarAdminView',
                    'HeaderAdminView', 'CategoryFormView', 'CategoryListView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});

