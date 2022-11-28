let banner = document.getElementById("movie_banner");
let title = document.getElementById("title");
let originalTitle = document.getElementById("original_title");
let originalTitleRomanised = document.getElementById("original_title_romanised");
let description = document.getElementById("movie_description");
let movieDirector = document.getElementById("movie_director");
let movieProducer = document.getElementById("movie_producer");
let movieReleaseDate = document.getElementById("movie_release_date");
let movieTime = document.getElementById("movie_time");


function pageMovie(object) {

    const urlParams = new URLSearchParams(window.location.search);

    const titleValue = urlParams.get('film');
    console.log(titleValue);


    for (i = 0; i < object.length; i++) {

        if (titleValue == object[i].title) {
            banner.innerHTML = `<img src='${object[i].movie_banner}' alt='' width = "100%">`;
            title.innerHTML = object[i].title;
            originalTitle.innerHTML = object[i].original_title;
            originalTitleRomanised.innerHTML = object[i].original_title_romanised;
            description.innerHTML = object[i].description;
            movieDirector.innerHTML = object[i].director;
            movieProducer.innerHTML = object[i].producer;
            movieReleaseDate.innerHTML = object[i].release_date;
            movieTime.innerHTML = object[i].running_time;
        }
    }

    const urlParamsSelect = new URLSearchParams(window.location.search);

    const selectTitleValue = urlParamsSelect.get('filmselect');

    console.log(selectTitleValue);

    for (i = 0; i < object.length; i++) {

        if (selectTitleValue == object[i].title) {
            banner.innerHTML = `<img src='${object[i].movie_banner}' alt='' width = "100%">`;
            title.innerHTML = object[i].title;
            originalTitle.innerHTML = object[i].original_title;
            originalTitleRomanised.innerHTML = object[i].original_title_romanised;
            description.innerHTML = object[i].description;
            movieDirector.innerHTML = object[i].director;
            movieProducer.innerHTML = object[i].producer;
            movieReleaseDate.innerHTML = object[i].release_date;
            movieTime.innerHTML = object[i].running_time;
        }
    }

}



// function checkOnClick(click) {

//     if (object[i].id)
// }