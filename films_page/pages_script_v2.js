// let banner = document.getElementById("movie_banner");


let background_banner = document.getElementById('movie_banner');
let title = document.getElementById("title");
let originalTitle = document.getElementById("original_title");
let originalTitleRomanised = document.getElementById("original_title_romanised");
let description = document.getElementById("movie_description");
let movieDirector = document.getElementById("movie_director");
let movieProducer = document.getElementById("movie_producer");
let movieReleaseDate = document.getElementById("movie_release_date");
let movieTime = document.getElementById("movie_time");

let nom = document.getElementById("people_name");
let gender = document.getElementById("people_gender");
let age = document.getElementById("people_age");
let eyeColor = document.getElementById("people_eye_color");
let hairColor = document.getElementById("people_hair_color");


function pageMovie(array) {

    const urlParams = new URLSearchParams(window.location.search);
    const timelineTitleValue = urlParams.get('film');

    for (i = 0; i < array.length; i++) {

        if (timelineTitleValue == array[i].title) {

            //title banner
            background_banner.style.background = `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${array[i].movie_banner}) top no-repeat fixed`;
            background_banner.style.backgroundSize = 'cover'
            title.innerHTML = array[i].title;
            originalTitle.innerHTML = array[i].original_title;
            originalTitleRomanised.innerHTML = array[i].original_title_romanised;

            //description
            description.innerHTML = array[i].description;

            //movie info
            movieDirector.innerHTML = array[i].director;
            movieProducer.innerHTML = array[i].producer;
            movieReleaseDate.innerHTML = array[i].release_date;
            movieTime.innerHTML = `${array[i].running_time} min `;

        }
    }
}

pageMovie(films);


function moviePeople(array) {

    for (i = 0; i < array.length; i++) {

        nom.innerHTML = array[i].name;

    }

}

//moviePeople(people);
