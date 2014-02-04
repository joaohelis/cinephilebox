var AppRouter = Backbone.Router.extend({
	    
    routes: {
        "": "home",
        "list": "productList"        
    },

    initialize: function () {        
        $('#header').html(new HeaderView().el);
        $('#footerSection').html(new FooterView().el);
        $("#sidebar").html(new SidebarView().el);
    },

    home: function(){
    	$('#carouselBlk').html(new HomeView().el);
    },

    movieList: function(){
        $("#content").html(new MovieListView().el);
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
    }
});

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'MovieListView', 'ForgetPassView', 
                    'LoginView', 'MovieFormView', 'SidebarView', 'SpecialOfferView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});