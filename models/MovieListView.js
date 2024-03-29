(function () {
    function MovieListView (movieList) {
        this.movieList = movieList;
        this.movieView = new MovieView();
    }
    
    MovieListView.prototype = {
        renderItemById:function(Id, element){
            var movie = this.movieList.find(item => item.ID== Id);
            this.movieView.render(movie,element);
        },
        renderAll: function(element){
            for  (i =0; i < this.movieList.movies.length; i++){
                this.movieView.render(this.movieList.movies[i], element);
            }
        },
    }
    window.MovieListView = MovieListView;
})()