


const result = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(res => scrollTitles(res))


const resultat = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(res => displayTimelineRound(res))
    .then(res => animation())


const res = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(resu => styleTimelineB(resu))

const resu = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(resu => styleTimelineR(resu))

const resul = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(resul => b1(resul))
