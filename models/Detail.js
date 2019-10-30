var id = location.search.replace('?', '')
console.log(id);

let searchParams = new URLSearchParams(window.location.search);
var idd = searchParams.get('id');
console.log(idd);

var arrOfFillm = window.ArrOfFilms; 
var films = new window.MovieList(arrOfFillm);
let item = films.findItemById(idd);
let container = document.querySelector('.container-headerDetail');
let detailInfo  = new MovieDetailView(item);
detailInfo.render(item, container);
//let filmsView = window.InstansListView;

//let singleItem = movieListVi

//var m

