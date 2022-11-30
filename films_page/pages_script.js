// let banner = document.getElementById("movie_banner");
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


function pageMovie(object) {

    const urlParams = new URLSearchParams(window.location.search);
    // const urlParamsSelect = new URLSearchParams(window.location.search);

    // const selectTitleValue = urlParamsSelect.get('filmselect');
    const timelineTitleValue = urlParams.get('film');

    // console.log(selectTitleValue)
    console.log(timelineTitleValue)

    let background_banner = document.getElementById('movie_banner');

    for (i = 0; i < object.length; i++) {

        if (timelineTitleValue == object[i].title) {

            //title banner
            background_banner.style.background = `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${object[i].movie_banner}) top no-repeat fixed`;
            background_banner.style.backgroundSize = 'cover'
            title.innerHTML = object[i].title;
            originalTitle.innerHTML = object[i].original_title;
            originalTitleRomanised.innerHTML = object[i].original_title_romanised;

            //description
            description.innerHTML = object[i].description;

            //movie info
            movieDirector.innerHTML = object[i].director;
            movieProducer.innerHTML = object[i].producer;
            movieReleaseDate.innerHTML = object[i].release_date;
            movieTime.innerHTML = object[i].running_time;

            //movie people




        }

    }

}


function moviePeople(result) {
    // console.log(pageMovie(result))
    console.log(result)
    for (i = 0; i < result.length; i++) {




        // if (pageMovie(result) == result[i].id) {
        //     // console.log(`https://ghibliapi.herokuapp.com/people/${result[i].id}`)
        //     // console.log(nom.innerHTML = result[i].name);
        // }

    }

}

