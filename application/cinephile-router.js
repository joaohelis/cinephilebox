var AppRouter = Backbone.Router.extend({
	    
    routes: {
        ""                 : "home",
        "movies/list"      : "movieList",
        "contact"          : "contact",
        "login"            : "login",
        "forgetpass"       : "forgetPass",
        "movie/new"        : "addMovie"
    },

    initialize: function () {        
        $('#header').html(new HeaderView().el);
        $('#footerSection').html(new FooterView().el);
        this.sidebar();
    },    

    addMovie: function() {
        var movie = new Movie();
        $('#content').html(new MovieView({model: movie}).el);
        //$("#legend").html("<div class='well'><h1>Cadastre-se</h1></div>");
        //$("#user-save").html("Cadastre-se");
        //$("#user-delete").remove();
        //this.headerView.selectMenuItem('add-menu');
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

/*
// Bootstrap the application
window.db = window.openDatabase("CinephileDB", "1.0", "Cinephile Demo DB", 200000);
var movieDAO = new MovieDAO(db);

*/
utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'MovieListView', 'ForgetPassView', 
                    'LoginView', 'MovieView', 'SidebarView', 'ContactView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});

