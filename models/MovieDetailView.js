function MovieDetailView(movieItem) {
    this.movieItem = movieItem;
}
MovieDetailView.prototype = {
    render: function (item, element) {
        var maincont = document.createElement("div");
        var imgCont = document.createElement("img");
        imgCont.setAttribute("src", "https://oskar.kyiv.ua/storage/movies/API/" + item.ID + ".jpg");
        var detailInfoContainer = document.createElement("div");
        detailInfoContainer.classList.add("detail-info");

        let titleEl = document.createElement("span");
        titleEl.innerText = item.title;
        let ratingEl = document.createElement("span");
        ratingEl.innerText = item.RunTime;
        
        let OpeningDateEl = document.createElement("span");
        OpeningDateEl.innerText = item.OpeningDate;
                
        let TitleAltEl = document.createElement("span");
        TitleAltEl.innerText = item.TitleAlt;
        
        let GenredEl = document.createElement("span");
        GenredEl.innerText = item.Genred;
        
        let ActorsEl = document.createElement("span");
        ActorsEl.innerText = item.Actors;
        


        detailInfoContainer.appendChild(titleEl);
        detailInfoContainer.appendChild(ratingEl);
        detailInfoContainer.appendChild(OpeningDateEl);
        detailInfoContainer.appendChild(TitleAltEl);
        //detailInfoContainer.appendChild(ActorsEl);
        detailInfoContainer.appendChild(GenredEl);
        
        maincont.appendChild(imgCont);
        maincont.appendChild(detailInfoContainer);
        element.appendChild(maincont);
    
    }
} 