function MovieView () {

}
MovieView.prototype = {
    render: function(movie, element) {
        if(element==null)
        return;
    if(element.children.length!=6){
        console.log(element.children.length);
    var bootsTrapCol = document.createElement("div");
    bootsTrapCol.classList.add("col-2");
    var div = document.createElement("div");
    div.classList.add("film-container")
    var img = document.createElement("img");
    img.setAttribute("src","img/"+movie.getId()+".jpg");
    var a = document.createElement("a");
    a.setAttribute("href","#");
    var span = document.createElement("span");
    span.textContent=movie.getName();
    span.classList.add("film-name");
    a.append(span);
    div.appendChild(img);
    div.appendChild(a);
    bootsTrapCol.appendChild(div);
    element.append(bootsTrapCol);

    }else{

        var el = element.nextElementSibling
        if((el)!=null)
        {
            console.log("Тут");
            this.render(movie,el);
        }else
        {
            var newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.classList.add("film-showing");
        var filmContainer =  document.querySelector(".container.film-showing").append(newRow);
        this.render(movie,newRow);
        }
        
    }

    }
}