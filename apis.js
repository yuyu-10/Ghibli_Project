
const result = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(res => { scrollTitles(res), displayTimelineRound(res) })


const res = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(resu => styleTimeline(resu))


