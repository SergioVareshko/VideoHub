function Movie(options) {
    this.ID = options.ID;
    this.shortCode = options.shortCode;
    this.title = options.title;
    this.rating = options.rating;
    this.synopsis = options.synopsis;
    this.shortSynopsis = options.shortSynopsis;
    this.HOFilmCode = options.HOFilmCode;
    this.runTime = options.runTime;
    this.openingDate = options.openingDate;
    this.graphicUrl = options.graphicUrl;
    this.filmNameUrl = options.filmNameUrl;
    this.trailerUrl = options.trailerUrl;
    this.isComingSoon = options.isComingSoon;
    this.isScheduledAtCinema = options.isScheduledAtCinema;
    this.titleAlt = options.titleAlt;
    this.ratingAlt = options.ratingAlt;
    this.synopsisAlt = options.synopsisAlt;
    this.genreId = options.genreId;
    this.twitterTag = options.twitterTag;
    this.customerRatingStatistics= options.customerRatingStatistics;
    this.customerRatingTrailerStatistics = options.customerRatingTrailerStatistics;
}

Movie.prototype = {
    getcustomerRatingStatistics: function () {
        return  options.customerRatingStatistics;
    },

    editData:  function (data) {
        for (var prop in data)  {
            this[prop] = data[prop]
        }
        return this;
    },
    getId : function() {
        return this.ID;
    },
    getName: function (){
        return this.title;
    },
    deleteData : function (data) {
        for (var prop in data)  {
            this[prop] = null
        }
        return this;
    }
}
