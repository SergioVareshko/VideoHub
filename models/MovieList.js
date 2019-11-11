(function() {
    function MovieList(arr) {

        var IsArray = arr instanceof Array;
        this.movies = [];
        if (!IsArray) {
            return;
        }
        //переписать на мап
        for  (i =0; i < arr.length; i++){
            var item = new window.Movie(arr[i]);
            this.movies.push(item);
        }
        this.movieList = this.movies;
    }
    
    MovieList.prototype = {
        findItemById : function (Id) {
            let movie = this.movies.find(item => item.ID == Id);
            return movie; 
            
        },
        getAll: function(sucsessfn, onfailfn) {
            var http =new  XMLHttpRequest();
            http.open( 'GET', 'http://localhost:3000/films');
            http.setRequestHeader("Content-Type", "application/json");
            http.send();
            http.addEventListener('load', function() {
                sucsessfn(JSON.parse(http.response).list);   
            })
        },
        
        getItemsByGanre :  function(ganreId) {
            let movies = this.movies.filter(item => item.GenreId === ganreId) ;
            this.movieList = movies;
            return movies;
        },

      
        deleteItemById : function (data, sucsessfn) {
            var http = new XMLHttpRequest();
            http.open( 'DELETE', 'http://localhost:3000/films');
            http.setRequestHeader("Content-Type", "application/json");
            http.send(JSON.stringify(data));
            http.addEventListener('load', function() {
        
                sucsessfn.call(http.response);   
            })
        },
    
        editItems : function (data, sucsessfn){
            var http = new XMLHttpRequest();
            http.open( 'PUT', 'http://localhost:3000/films');
            http.setRequestHeader("Content-Type", "application/json");
            http.send(JSON.stringify(data));
            http.addEventListener('load', function() {
                sucsessfn.call(http.response);   
            })
    
        },
    
        addItem : function(data, sucsessfn) {
            var http = new XMLHttpRequest();
            http.open( 'POST', 'http://localhost:3000/films');
            http.setRequestHeader("Content-Type", "application/json");
            http.send(JSON.stringify(data));
            http.addEventListener('load', function() {
                sucsessfn(JSON.parse(http.response));   
            })
        }
    }
    window.MovieList = MovieList;    
})();