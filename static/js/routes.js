var AppRouter = Backbone.Router.extend({
	    
    routes: {
        "": "home",
    },

    initialize: function () {        
        $('#header').html(new HeaderView().el);
        $('#footerSection').html(new FooterView().el);        
    },

    home: function(){
    	$('#carouselBlk').html(new HomeView().el);
    }    
});

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});