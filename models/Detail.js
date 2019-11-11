let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');

var films = JSON.parse(localStorage.InstanseFilms);
let item = films.movies.find(item => item.ID == id);
let container = document.querySelector('.container-headerDetail');
let detailInfo  = new MovieDetailView(item);
detailInfo.render(item, container);

var btn = document.querySelector('#edit-btn');
btn.addEventListener('click', EditFilm, false);


var btn = document.querySelector('#delete-btn'); 
btn.addEventListener('click', deleteFilm, false);

function deleteFilm(e) {
    var loc = e.path[3].location;
    let searchParams = new URLSearchParams(loc.search);
    var id = searchParams.get('id');
    var delObj = {"id" : id };
    var films = JSON.parse(localStorage.InstanseFilms);
    let item = films.movies.find(item => item.ID == id);
    var ww = new window.MovieList(item);
    ww.deleteItemById(delObj, backIfOk);
}

function backIfOk(data) {
    history.back();
}

function EditFilm(e) {
    var form = document.getElementById('form2');
    var loc = e.path[3].location;
    let searchParams = new URLSearchParams(loc.search);
    var id = searchParams.get('id');
    var films = JSON.parse(localStorage.InstanseFilms);
    let item = films.movies.find(item => item.ID == id);
    var ww = new window.MovieList([]);
    form.elements.id.value = item.ID;
    form.elements.title.value = item.title;

    form.elements.RunTime.value= item.RunTime;
    form.elements.OpeningDate.value = item.OpeningDate;
    form.elements.TitleAlt.value = item.TitleAlt;
    form.elements.GenreId.value = item.GenreId;
    form.elements.Actors.value = item.Actors;
    form.elements.Genred.value = item.Genred;
    form.style.display = "block";
}

function editObj(form) {
    form.style.display = "none";
    var dataId = form.elements.id.value;
    var dataTitle = form.elements.title.value;
    
    var editObj = {
        "id": dataId,
        "options":
        {Title :dataTitle,
        RunTime: form.elements.RunTime.value,
        OpeningDate : form.elements.OpeningDate.value,
        TitleAlt :form.elements.TitleAlt.value,
        GenreId: form.elements.GenreId.value,
        Genred: form.elements.Genred.value}
    
    }
    var films = JSON.parse(localStorage.InstanseFilms);
    let item = films.movies.find(item => item.ID == id);
    var ww = new window.MovieList(item);
    ww.editItems(editObj, backIfOk);
}
