function MovieDetailView(movieItem) {
    this.movieItem = movieItem;
}
MovieDetailView.prototype = {
    render: function (item,element) {
        var maincont = document.createElement("div");
        var imgCont = document.createElement("img");
        imgCont.setAttribute("src", "img/"+ item.getId()+".jpg");
        var detailInfoContainer = document.createElement("div");
        detailInfoContainer.classList.add("detail-info");

        let titleEl = document.createElement("span");
        titleEl.innerText = item.title;
        let ratingEl = document.createElement("span");
        ratingEl.innerText = item.rating;

        detailInfoContainer.appendChild(titleEl);
        detailInfoContainer.appendChild(ratingEl);
        maincont.appendChild(imgCont);
        maincont.appendChild(detailInfoContainer);
        element.appendChild(maincont);
    
    }
} 