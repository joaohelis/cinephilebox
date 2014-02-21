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
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir um ano de lançamento."};
        };

        this.validators.sinopse = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir a sinopse."};
        };

        this.validators.stockQuantity = function (value) {
            return value.length > 0 && value > 0? {isValid: true} : {isValid: false, message: "Insira uma quantidade válida."};
        };
    },
    
    defaults: {
        id: null,
        title: "",        
        category: "",
        birthplace: "",    
        releaseYear: "",
        sinopse: "",
        stockQuantity: 0,
        coverPicture: "../img/coverPictures/defaultPicture.jpg"
    }    
});

window.MovieCollection = Backbone.Collection.extend({    
    model: Movie,
    localStorage: new Backbone.LocalStorage("MovieCollection")    
});

window.Category = Backbone.Model.extend({ 

    initialize: function () {
        this.validators = {},

        this.validators.name = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "Você precisa inserir o nome para a categoria."};
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