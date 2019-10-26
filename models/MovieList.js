function MovieList(arr) {

    var IsArray = arr instanceof Array;
    this.movies = [];
    if (!IsArray) {
        return;
    }
    //переписать на мап
    for  (i =0; i < arr.length; i++){
        var item = new Movie(arr[i]);
        this.movies.push(item);
    }
    this.movieList = this.movies;
}

MovieList.prototype = {
    findItemById : function (Id) {
        let movie = this.movies.find(item => item.ID == Id);
        return movie; 
        
    },
    getItemsByGanre :  function(ganreId) {
        let movies = this.movies.filter(item => item.genreId === ganreId) ;
        return movies;
    },

    deleteItemById : function (Id) {
        let deleteitem = this.findItemById(Id);
        let newarr = this.movies.filter(item => item != deleteitem);
        return newarr;
    },

    editItems : function (Id, data){
        let item = this.findItemById(Id);
        if (item) {
            for (var prop in data)  {
                item[prop] = data[prop]
            }
        }
        return item;
    },

    addItem : function(data) {
        let newItem = new Movie(data);
        this.movies.push(newItem);
        return this.movies;
    }
}