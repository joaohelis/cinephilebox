String.prototype.startsWith = function(str){
    return (this.match("^"+str)==str)
};

var AppRouter = Backbone.Router.extend({
        
    routes: {        
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
        utils.usersPopulate(userList);
        utils.moviesPopulate(movieList);
        utils.categorysPopulate(categoryList);        
        if(appUser.attributes.isLogged){
            this.configAdminDash();            
        }else{
            this.configLanding();
        }        
    },  

    configLanding: function(){
        if (window.location.hash.startsWith('#admin')){
            window.location.replace('#');
        }
        this.header();
        this.sidebar();
        this.movieList();
    },

    configAdminDash:function(){
        utils.startsWithMethodConfigure();
        this.headerAdmin();        
        this.sidebarAdmin();
    },

    header: function(){
        $('#header').html(new HeaderView({model:categoryList}).el);
    },

    headerAdmin: function(){
        $('#header').html(new HeaderAdminView({ model: appUser }).el);
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

    movieList: function() {
        //var p = page ? parseInt(page, 10) : 1;        
        $('#carouselBlk').html("");
        $("#content").html(new MovieListView({model: movieList, page: 1}).render().el);        
    },

    home: function(){
        this.configLanding();
        $('#carouselBlk').html(new HomeView().el);
    },

    homeAdmin: function(){
        // before configure
        this.configAdminDash();
        // ------
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
        $("#sidebar").html(new SidebarView({model:categoryList}).el);
    },

    sidebarAdmin: function(){
        $("#sidebar").html(new SidebarAdminView().el);  
    },

    contact: function(){
        $('#carouselBlk').html("");
        var email = new Email({to:'cinephilebox@gmail.com'});
        $("#content").html(new ContactView({model: email}).el);
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
                    'CategoryItemListView', 'MovieListItemView', 'MovieListBlockItemView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
