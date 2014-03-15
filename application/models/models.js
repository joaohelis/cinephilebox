// -------------------------------------------------- The Models ---------------------------------------------------- //

window.Movie = Backbone.Model.extend({                 

    initialize: function () {

        this.validators = {},

        this.validators.title = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir um título."};
        };

        this.validators.category = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir uma categoria."};
        };

        this.validators.birthplace = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir o país de origem."};
        };

        this.validators.releaseYear = function (value) {
            return isFinite(value) && value > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir um ano de lançamento válido."};
        };

        this.validators.sinopse = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir a sinopse."};
        };

        this.validators.stockQuantity = function (value) {            
            return isFinite(value) && value > 0? {isValid: true} : {isValid: false, message: "Insira uma quantidade válida."};
        };
    },
    
    defaults: {
        id: null,
        title: "",        
        category: "Ação",
        birthplace: "",    
        releaseYear: "",
        sinopse: "",
        stockQuantity: 0,
        coverPicture: "../img/coverPictures/default.jpg"
    }    
});

window.MovieCollection = Backbone.Collection.extend({    
    model: Movie,
    localStorage: new Backbone.LocalStorage("MovieCollection"),

    findByCategory: function(category){
        
    }
});

window.Category = Backbone.Model.extend({ 

    initialize: function () {
        this.validators = {},

        this.validators.name = function (value) {
            if (! value.length > 0){
                return {isValid: false, message: "Você precisa inserir o nome para a categoria."};
            }
            var c = categoryList.where({ 'name': value })
            if (c.length !== 0){
                return {isValid: false, message: "Esta categoria já existe."};
            }
            return {isValid: true};
        };
    },
    
    defaults: {
        id: null,
        name: ""
    }    
});

window.CategoryCollection = Backbone.Collection.extend({    
    localStorage: new Backbone.LocalStorage("CategoryCollection"),
    model: Category
});

window.User = Backbone.Model.extend({ 

    initialize: function () {
        this.validators = {},

        this.validators.name = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir um nome."};
        };

        this.validators.email = function (value) {                                    
            var returnData = {isValid: true};
            if(! value.length > 0)
                returnData = {isValid: false, message: "Você precisa inserir um e-mail."};
            else{
                var atpos = value.indexOf("@");
                var dotpos = value.lastIndexOf(".");    
                if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length)
                    returnData = {isValid: false, message: "Insira um e-mail válido."};
            }
            return returnData;
        },

        this.validators.password = function (value) {
            return value.length > 3? {isValid: true} : {isValid: false, message: "Você precisa inserir uma senha."};
        };

        this.validators.userType = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir o tipo de usuário."};
        };
    },
    
    defaults: {
        id: null,
        name: "",
        email: "",
        password: "",
        userType: "Cliente"
    }    
});

window.UserCollection = Backbone.Collection.extend({    
    localStorage: new Backbone.LocalStorage("UserCollection"),
    model: User
});


window.Email = Backbone.Model.extend({     
    defaults: {        
        from: '',
        to: '',        
        subject: '',
        html: ''
    }    
});