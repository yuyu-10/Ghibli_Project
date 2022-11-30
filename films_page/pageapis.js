const result = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(page => pageMovie(page))


// const peopleResult = fetch("https://ghibliapi.herokuapp.com/people")
//     .then(data => data.json())
//     .then(page => moviePeople(page))