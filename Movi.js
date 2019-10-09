function Movie(options) {
    this.name = options.name;
    this.title = options.title;
    this.janre = options.janre;
    this.rank = options.rank;
    this.getFilmRunkByUser  = function() {
        if (this.janre.includes("horror")) {
            this.isHorror = true
        } else {
            this.isHorror = false
        }
    }
}

var film1 = new Movie({
    name: "Film1",
    title: "Mogogo",
    janre:"horror3",
    rank: 1
});

film1.getFilmRunkByUser();

console.log(film1.name);
console.log(film1.isHorror);
//alert(film1.isHorror);