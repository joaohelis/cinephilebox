var AppRouter = Backbone.Router.extend({
	    
    routes: {
        ""                 : "home",
        "movies/list"      : "movieList",
        "contact"          : "contact"
    },

    initialize: function () {        
        $('#header').html(new HeaderView().el);
        $('#footerSection').html(new FooterView().el);
        this.sidebar();
    },    

    movieList: function(){        
        $('#carouselBlk').html("");
        $("#content").html(new MovieListView().el);
    },

    home: function(){
        this.movieList();
        $('#carouselBlk').html(new HomeView().el);        
    },

    forgetPassView: function(){
        $("#content").html(new ForgetPassView().el);
    },

    login: function(){
        $("#content").html(new LoginView().el);
    },

    movieForm: function(){
        $("#content").html(new MovieFormView().el);
    },

    sidebar: function(){
        $("#sidebar").html(new SidebarView().el);
    },

    specialOffer: function(){
        $("#content").html(new SpecialOfferView().el);
    },

    contact: function(){
        $('#carouselBlk').html("");
        $("#content").html(new ContactView().el);
    }
});

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'MovieListView', 'ForgetPassView', 
                    'LoginView', 'MovieFormView', 'SidebarView', 'SpecialOfferView', 'ContactView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});