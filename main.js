
function disp(form) {
    form.style.display = "none";
    var dataId = form.elements.id.value;
    var dataTitle = form.elements.title.value;
    var dataRunTime = form.elements.RunTime.value;
    var dataOpeningDate = form.elements.OpeningDate.value;
    var dataTitleAlt = form.elements.TitleAlt.value;
    var dataGenreId = form.elements.GenreId.value;
    var dataActors = form.elements.Actors.value;
    var dataGenred = form.elements.Genred.value;

    var Obj = {
        "movie": {
            "ID": dataId,
               "Title": dataTitle,
               "RunTime": dataRunTime,
               "OpeningDate": dataOpeningDate,
               "TitleAlt": dataTitleAlt,
               "GenreId": dataGenreId,
               "Actors": [
                    dataActors
               ],
               "Genred": dataGenred,
               "RatingCount": 0,
               "srcImage": ""
        }
    }      
    window.films.addItem(Obj, SuccsessMessage)
}

function SuccsessMessage(data) {
    console.log('ок');
}
var btn = document.querySelector('#create-btn');
btn.addEventListener('click', creation, false);

var btn = document.querySelector('#soratA-btn');
btn.addEventListener('click', sortaz, false);

var btn = document.querySelector('#sortDate-btn');
btn.addEventListener('click', sortDate, false);


var li = document.querySelector('#triller-btn');
li.addEventListener('click', sortTriller, false);

var li = document.querySelector('#wearpoon-btn');
li.addEventListener('click', sortWearpoon, false);

var li = document.querySelector('#comedy-btn');
li.addEventListener('click', sortComedy, false);

function sortComedy(e) {
    var tr = window.films.getItemsByGanre('0000000009');
    var rowFilmShowings = document.querySelectorAll(".row.film-showing");
    for (let conRow of rowFilmShowings) {
        conRow.remove();
    }
    
    var conFilmShowing = document.querySelector(".container.film-showing");
    var detailInfoContainer = document.createElement("div");
    detailInfoContainer.classList.add("row");
    detailInfoContainer.classList.add("film-showing");
    conFilmShowing.appendChild(detailInfoContainer);
    var rowFilmShowing = document.querySelector("row.film-showing");
    var movieListView = new window.MovieListView(tr);
    tr.forEach(item =>{
        movieListView.renderItemById(item.ID, detailInfoContainer);
    });
}


function sortWearpoon() {
    var tr = window.films.getItemsByGanre('0000000019');
    var rowFilmShowings = document.querySelectorAll(".row.film-showing");
    for (let conRow of rowFilmShowings) {
        conRow.remove();
    }
    
    var conFilmShowing = document.querySelector(".container.film-showing");
    var detailInfoContainer = document.createElement("div");
    detailInfoContainer.classList.add("row");
    detailInfoContainer.classList.add("film-showing");
    conFilmShowing.appendChild(detailInfoContainer);
    var rowFilmShowing = document.querySelector("row.film-showing");
    var movieListView = new window.MovieListView(tr);
    tr.forEach(item =>{
        movieListView.renderItemById(item.ID, detailInfoContainer);
    });
}

function sortTriller() {
    var tr = window.films.getItemsByGanre('0000000008');
    var rowFilmShowings = document.querySelectorAll(".row.film-showing");
    for (let conRow of rowFilmShowings) {
        conRow.remove();
    }
    
    var conFilmShowing = document.querySelector(".container.film-showing");
    var detailInfoContainer = document.createElement("div");
    detailInfoContainer.classList.add("row");
    detailInfoContainer.classList.add("film-showing");
    conFilmShowing.appendChild(detailInfoContainer);
    var rowFilmShowing = document.querySelector("row.film-showing");
    var movieListView = new window.MovieListView(tr);
    tr.forEach(item =>{
        movieListView.renderItemById(item.ID, detailInfoContainer);
    });    
}

function OnSucsess() {

} 

function creation(e) {
    console.log(e);
    var form = document.getElementById('form1');
    form.style.display = "block";
}

function renderAllData(data) {
    var  films = new window.MovieList(data);
    var rowFilmShowing = document.querySelector(".row.film-showing");
    var movieListView = new window.MovieListView(films);
    movieListView.renderAll(rowFilmShowing);
    window.InstansListView = movieListView;
    window.films = films;
    localStorage.setItem('InstanseFilm', films);
    localStorage.InstanseFilms = JSON.stringify(films)
}

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

function sortDate() {
    var films = window.films;
    //films.movies.sortBy('OpeningDate');
    films.movies.sort(function(a, b) {
        var nameA = a.OpeningDate;
        var nameB = b.OpeningDate; 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    var rowFilmShowings = document.querySelectorAll(".row.film-showing");
    for (let conRow of rowFilmShowings) {
        conRow.remove();
    }
    
    var conFilmShowing = document.querySelector(".container.film-showing");
    var detailInfoContainer = document.createElement("div");
    detailInfoContainer.classList.add("row");
    detailInfoContainer.classList.add("film-showing");
    conFilmShowing.appendChild(detailInfoContainer);
    var rowFilmShowing = document.querySelector("row.film-showing");
    var movieListView = new window.MovieListView(films);
    movieListView.renderAll(detailInfoContainer);

}

function sortaz () {
    var films = window.films;
    //films.movies.sortBy('RunTime');
    films.movies.sort(function(a, b) {
        var nameA = a.title.toUpperCase();
        var nameB = b.title.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
   // var rowsEl = document.getElementsByClassName("film-showing");
    var rowFilmShowings = document.querySelectorAll(".row.film-showing");
    for (let conRow of rowFilmShowings) {
        conRow.remove();
    }
    
    var conFilmShowing = document.querySelector(".container.film-showing");
    var detailInfoContainer = document.createElement("div");
    detailInfoContainer.classList.add("row");
    detailInfoContainer.classList.add("film-showing");
    conFilmShowing.appendChild(detailInfoContainer);
    var rowFilmShowing = document.querySelector("row.film-showing");
    var movieListView = new window.MovieListView(films);
    movieListView.renderAll(detailInfoContainer);


    
}

var films = new window.MovieList([]);
films.getAll(renderAllData);
     //var tempArr = movieList.sortByGenre("Triller");
     /*var rowFilmShowing = document.querySelector(".row.film-showing");
     var movieListView = new window.MovieListView(films);
 movieListView.renderAll(rowFilmShowing);
 //movieListView.renderItemById("1", rowFilmShowing);*/






/*var filmOne = new Movie(filmInfo);
var editFilm = filmOne.editData({"rating": '4'});

var arrOfFillm = [filmInfo, filmInfo1, filmInfo2];

var films = new MovieList(arrOfFillm);
var editFilm = films.editItems('HO00000242', {"shortCode" : 22})
var newFilm = {"ID" : '22',
                "Title": 'Ninja'}
var newcollectionOfFilms = films.addItem(newFilm);

var collectionWithOutComedy = films.deleteItemById('22');*/
//var comedy = films.getItemsByGanre('0000000002');

