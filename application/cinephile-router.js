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
        "admin/movies/list"      : "movieListAdmin",
        "admin/categories/new"   : "addCategory",
        "admin/categories"       : "listCategorys",
        "admin/categories/edit/:category_id" : "editCategory",
        "admin/users/new"        : "addUser",
        "admin/users/edit/:id"  : "editUser",
        "admin/users/list"      : "userListShow"
    },    

    initialize: function () {                        
        $('#footerSection').html(new FooterView().el);
        utils.startsWithMethodConfigure();
        this.headerAdmin();        
        this.sidebarAdmin();  
        utils.usersPopulate(userList);
        utils.moviesPopulate(movieList);
        utils.categorysPopulate(categoryList);
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
        $('#content').html('<div class="hero-unit"><h3>Área de administração do Cinephile</h3><p></p></div>');
        $("#sidebar").html(new SidebarAdminView().el);
    },

    forgetPass: function(){
        $("#content").html(new ForgetPassView().el);
    },

    login: function(){
        $('#carouselBlk').html("");
        var user = new User();
        $("#content").html(new LoginView({ model: user }).el);
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
        c.set({action_btn: 'Criar categoria'});
        $('#content').html(new CategoryFormView({model: c}).el);
        $("#legend").text("Criar categoria");
    },

    listCategorys: function(){
       var cl = new CategoryListView({model:categoryList});
       $("#content").html(cl.el);
       cl.renderTable();
    },

    editCategory: function (category_id) {              
       var c = categoryList.get(category_id.toString());
       c.set({action_btn: 'Salvar alterações'});
       $("#content").html(new CategoryFormView({model: c}).el);
       $("#legend").text("Editar Categoria");
   },

    addUser: function() {
        var user = new User();        
        $('#content').html(new UserView({model: user}).el);
        $("#legend").text("Adicionar Usuário");
        $("#user-save").text("Adicionar Usuário");
        $("#user-delete").remove();                
    },

    editUser: function (id) {              
        var user = userList.get(id.toString());
        $("#content").html(new UserView({model:user}).el);
        $("#legend").text("Editar Usuário");
        $("#user-save").text("Salvar alterações");
    },

    userListShow: function() {                                
        var users = new UserListView({model:userList});
        $("#content").html(users.el);
        users.tableMount();        
    },

});

var movieList = new MovieCollection()
var categoryList = new CategoryCollection()
var userList = new UserCollection()

var appUser = new User();
appUser.set({ isLogged: false });

utils.loadTemplate(['HomeView', 'HeaderView', 'FooterView', 'MovieListView', 'ForgetPassView', 
                    'LoginView', 'MovieView', 'SidebarView', 'ContactView', 'SidebarAdminView',
                    'HeaderAdminView', 'CategoryFormView', 'CategoryListView', 'UserView',
                    'CategoryItemListView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});

