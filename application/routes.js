var AppRouter = Backbone.Router.extend({
	    
    routes: {
        "": "home",
        "list": "productList"
    },

    initialize: function () {        
        $('#header').html(new HeaderView().el);
        $('#footerSection').html(new FooterView().el);        
    },

    home: function(){
    	$('#carouselBlk').html(new HomeView().el);
    },

    productList: function(){
        $("#content").html(new ProductListView().el);
    }    
});

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'ProductListView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});