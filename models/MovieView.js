function MovieView () {

}
MovieView.prototype = {
    render: function(movie, element) {
        if(element==null)
        return;
    if(element.children.length!=6){
    var mainCol = document.createElement("div");
    mainCol.classList.add("col-2");
    var div = document.createElement("div");
    div.classList.add("film-container")
    var img = document.createElement("img");
    img.setAttribute("src", "https://oskar.kyiv.ua/storage/movies/API/" + movie.getId() + ".jpg");
    var a = document.createElement("a");
    var pathArr = location.pathname.split('/');
    var pathstr;
    for  (var i =0; i < pathArr.length; i++){
        if (i == 1) {
            pathstr =  pathArr[i] + '/';  
        } else 
        if (i ==  pathArr.length-1) {
            pathstr = pathstr +  `DetailPage.html?id=${movie.getId()}`;
        } 
        else {
            pathstr = pathstr + pathArr[i] + '/'
        }
    }
    
    a.setAttribute("href", pathstr);
    var span = document.createElement("span");
    span.textContent=movie.getName();
    span.classList.add("film-name");
    a.append(span);
    div.appendChild(img);
    div.appendChild(a);
    mainCol.appendChild(div);
    element.append(mainCol);

    } else{

        var el = element.nextElementSibling
        if ((el) != null)
        {
            this.render(movie,el);
        } else {
                var newRow = document.createElement("div");
                newRow.classList.add("row");
                newRow.classList.add("film-showing");
                var filmContainer = document.querySelector(".container.film-showing").append(newRow);
                this.render(movie, newRow);
            }
        }

    }
}