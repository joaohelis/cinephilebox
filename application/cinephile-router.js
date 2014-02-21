var AppRouter = Backbone.Router.extend({
	    
    routes: {
        ""                 : "home",
        "movies/list"      : "movieList",
        "contact"          : "contact",
        "login"            : "login",
        "forgetpass"       : "forgetPass",
        "movies/new"       : "addMovie",        
        "movies/edit/:id"  : "editMovie",
        "movies/:id"        : "movieDetails",
    },

    initialize: function () {        
        $('#header').html(new HeaderView().el);
        $('#footerSection').html(new FooterView().el);
        this.sidebar();
    },    

    addMovie: function() {
        var movie = new Movie();
        $('#content').html(new MovieView({model: movie}).el);
        $("#legend").text("Adicionar Filme");
        $("#movie-save").text("Adicionar Filme");
        $("#movie-delete").remove();                
    },

    editMovie: function (id) {      
        console.log(id.toString());  
        var movie = movieList.get(id.toString());
        $("#content").html(new MovieView({model: movie}).el);
        $("#legend").text("Editar Filme");
        $("#movie-save").text("Salvar alterações");        
    },

    movieList: function(){        
        $('#carouselBlk').html("");
        $("#content").html(new MovieListView().el);
    },

    home: function(){
        this.movieList();
        $('#carouselBlk').html(new HomeView().el);        
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

    contact: function(){
        $('#carouselBlk').html("");
        $("#content").html(new ContactView().el);
    }
});

var movieList = new MovieCollection()
var categoryList = new CategoryCollection()

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'MovieListView', 'ForgetPassView', 
                    'LoginView', 'MovieView', 'SidebarView', 'ContactView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});

