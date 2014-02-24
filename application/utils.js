window.utils = {

    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get('templates/' + view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    },

    uploadFile: function (file, fileName, callbackSuccess) {
        var self = this;
        var data = new FormData();
        data.append('fileName', fileName);
        data.append('file', file);        
        $.ajax({
            url: 'api/upload.php',
            type: 'POST',
            data: data,
            processData: false,
            cache: false,
            contentType: false
        })
        .done(function () {
            console.log("Upload de "+file.name + " realizado com sucesso.");
            //callbackSuccess();
        })
        .fail(function () {
            self.showAlert('Erro!', 'Um erro ocorreu enquanto fazia upload do arquivo ' + file.name, 'alert-error');
        });
    },    

    displayValidationErrors: function (messages) {
        for (var key in messages) {
            if (messages.hasOwnProperty(key))
                this.addValidationError(key, messages[key]);
        }
        this.showAlert('Aviso!', 'Corriga os erros de validação e tente novamente.', 'alert-warning');
    },

    addValidationError: function (field, message) {
        var controlGroup = $('#' + field).parent().parent();
        controlGroup.addClass('error');
        $('.help-inline', controlGroup).html(message);
    },

    removeValidationError: function (field) {
        var controlGroup = $('#' + field).parent().parent();
        controlGroup.removeClass('error');
        $('.help-inline', controlGroup).html('');
    },

    showAlert: function(title, text, klass) {
        $('.alert').removeClass("alert-error alert-warning alert-success alert-info");
        $('.alert').addClass(klass);
        $('.alert').html('<strong>' + title + '</strong> ' + text);
        $('.alert').show();
    },

    hideAlert: function() {
        $('.alert').hide();
    },

    validateItem: function (key, model){
        return (model.validators[key]) ? model.validators[key](model.get(key)) : {isValid: true};
    },

    // TODO: Implement Backbone's standard validate() method instead.
    validateAll: function (model){

        var messages = {};

        for (var key in model.validators) {
            if(model.validators.hasOwnProperty(key)) {
                var check = model.validators[key](model.get(key));
                if (check.isValid === false) {
                    messages[key] = check.message;
                }
            }
        }

        return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
    },

    startsWithMethodConfigure: function(){        
        if (!String.prototype.startsWith) {          
          Object.defineProperty(String.prototype, 'startsWith', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function (searchString, position) {
              position = position || 0;
              return this.indexOf(searchString, position) === position;
            }
          });
        }
    },


    usersPopulate: function(collection){
        var users = [{
                        name: "João Helis Bernardo",
                        email: "joaohelis.bernardo@dce.ufpb.br",
                        password: "1234",
                        userType: "Administrador"
                    },{
                        name: "Smith Ascari",
                        email: "smith.ascari@dce.ufpb.br",
                        password: "1234",
                        userType: "Administrador"
                    },{
                        name: "Juan Duarte",
                        email: "juan.duarte@dce.ufpb.br",
                        password: "1234",
                        userType: "Cliente"
                    },{
                        name: "Rodrigor Vilar",
                        email: "rodrigo.vilar@dce.ufpb.br",
                        password: "1234",
                        userType: "Cliente"
                    }]
        users.forEach(function(user){
            collection.create(user);
        });
    },

    moviesPopulate: function(collection){

        var movies= [{    
                        title: "Gravidade",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Matt Kowalski (George Clooney) é um astronauta experiente que está em missão de conserto ao telescópio Hubble juntamente com a doutora Ryan Stone (Sandra Bullock). Ambos são surpreendidos por uma chuva de destroços decorrente da destruição de um satélite por um míssil russo, que faz com que sejam jogados no espaço sideral. Sem qualquer apoio da base terrestre da NASA, eles precisam encontrar um meio de sobreviver em meio a um ambiente completamente inóspito para a vida humana",
                        stockQuantity: 0,
                        coverPicture: "../img/coverPictures/1.jpg"
                    },
                    {
                        title: "Jogos Vorazes: Em Chamas",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: 'Após a 74ª edição dos Jogos Vorazes, Katniss Everdeen se torna o símbolo da revolução e embarca na "Turnê da Vitória" nos distritos juntamente com Peeta Mellark. No decorrer do percurso, Katniss sente que uma rebelião está em ebulição, mas o congresso continua fortemente no controle, ao mesmo tempo em que o Presidente Snow prepara a 75ª edição dos jogos, o "Massacre Quaternário" - uma competição que pode mudar Panem para sempre.',
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/2.jpg"
                    },
                    {
                        title: "A Vida Secreta de Walter Mitty",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Walter é um sonhador que escapa de sua vida anônima ao desaparecer em um mundo de fantasia, repleto de heroísmo, romance e ação. Quando seu trabalho ao lado de sua colega é ameaçado, ele decide enfrentar o mundo real e embarca em uma jornada global que transforma-se em uma aventura mais extraordinária que poderia ter imaginado.",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/3.jpg"
                    },
                    {
                        title: "O Hobbit",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Após iniciar sua jornada ao lado de um grupo de anões e de Gandalf (Ian McKellen), Bilbo Bolseiro (Martin Freeman) segue em direção à Montanha Solitária, onde deverá ajudar seus companheiros de missão a retomar a Pedra de Arken, que fará com que Thorin  (Richard Armitage) obtenha o respeito de todos os anões e o apoio na luta para retomar seu reino. O problema é que o artefato está perdida em meio a um tesouro protegido pelo temido dragão Smaug (voz de Benedict Cumberbatch). Ao mesmo tempo, Gandalf investiga uma nova força sombria que surge na Terra Média.",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/4.jpg"
                    },
                    {
                        title: "A Menina Que Roubava Livros",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Durante a Segunda Guerra Mundial, uma jovem garota chamada Liesel Meminger sobrevive fora de Munique através dos livros que ela rouba. Ajudada por seu pai adotivo, ela aprende a ler e partilhar livros com seus vizinhos, incluindo um homem judeu que vive na clandestinidade.",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/5.jpg"
                    },
                    {
                        title: "O Espetacular Homem-Aranha",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Peter Parker (Andrew Garfield) é um rapaz tímido e estudioso, que inicou há pouco tempo um namoro com a bela Gwen Stacy (Emma Stone), sua colega de colégio. Ele vive com os tios, May (Sally Field) e Ben (Martin Sheen), desde que foi deixado pelos pais, Richard (Campbell Scott) e Mary (Embeth Davidtz). Certo dia, o jovem encontra uma misteriosa maleta que pertenceu a seu pai. O artefato faz com que visite o laboratório do dr. Curt Connors (Rhys Ifans) na Oscorp. Parker está em busca de respostas sobre o que aconteceu com os pais, só que acaba entrando em rota de colisão com o perigoso alter-ego de Connors, o vilão Lagarto",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/6.jpg"
                    },
                    {
                        title: "As Vantagens de Ser Invisível",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Charlie (Logan Lerman) é um jovem que tem dificuldades para interagir em sua nova escola. Com os nervos à flor da pele, ele se sente deslocado no ambiente. Sua professora de literatura, no entanto, acredita nele e o vê como um gênio. Mas Charlie continua a pensar pouco de si... até o dia em que dois amigos, Patrick (Ezra Miller) e Sam (Emma Watson), passam a andar com ele.",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/7.jpg"
                    },
                    {
                        title: "De Repente Pai",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Um homem de meia idade (Vince Vaughn) descobre ter sido pai de 533 crianças, através da doação de esperma. Ele passa a enfrentar problemas quando algumas dezenas destas crianças, já crescidas, passam a sentir a enorme necessidade de conhecer quem é seu pai biológico.",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/8.jpg"
                    },
                    {
                        title: "Caminhando com Dinossauros",   
                        category: "Ação",
                        birthplace: "Estados Unidos",    
                        releaseYear: 2012,
                        sinopse: "Em plena era dos dinossauros, quando estes gigantescos seres dominavam a Terra, um pequeno filhote luta para sobreviver em meio às ameaças da natureza. Já crescido, ele é separado dos pais e obrigado a confrontar uma realidade dura em que se luta o tempo todo pela sobrevivência. Não fosse o bastante, terá que lidar com uma rivalidade com o irmão, que é bem mais forte que ele.",
                        stockQuantity: 10,
                        coverPicture: "../img/coverPictures/9.jpg"
                    }
        ]
        movies.forEach(function(movie){
            collection.create(movie);
        });
    },

    categorysPopulate: function(collection){
        var categorys= [{    
                        name: "Ação", 
                        qtde_movies: '123'  
                    },
                    {
                        name: "Aventura", 
                        qtde_movies: '173'  
                    },
                    {
                        name: "Ficção", 
                        qtde_movies: '97'   
                    },
                    {
                        name: "Romance", 
                        qtde_movies: '86'
                    },
                    {
                        name: "Policial", 
                        qtde_movies: '211'
                    }
        ]
        categorys.forEach(function(category){
            collection.create(category);
        });
    },

    createSession:function(model){
        appUser.set({
            isLogged: true,
            email: model.email
        });
    },

    destroySession:function(){
        appUser.set({
            isLogged: false,
            email: ""
        });
    },

    generateUUID: function(){
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x7|0x8)).toString(16);
        });
        return uuid;
    }
};
