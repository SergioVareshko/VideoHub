(function(){
    function Movie(options) {
        this.ID = options.ID;
        this.shortCode = options.shortCode;
        this.title = options.Title;
        this.Description = options.Description;
        this.RunTime = options.RunTime;
        this.OpeningDate = options.OpeningDate;
        this.TitleAlt = options.TitleAlt;
        this.GenreId = options.GenreId;
        this.Genred = options.Genred;
        this.srcImage = options.srcImage;
    }
    
    Movie.prototype = {
        editData:  function (data) {
            for (var prop in data)  {
                this[prop] = data[prop]
            }
            return this;
        },
        getId : function() {
            return this.ID;
        },
        getImgSrc: function () {
            return this.srcImage;
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
    window.Movie = Movie; 
})();