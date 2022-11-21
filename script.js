fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => {
        return data.json();
    })
    .then(result =>{ console.log(result)
        for (i = 0; i < result.length; i++) {
        document.getElementById('test').innerHTML += result[i].title + "<BR>" + "<BR>"
        }
    })

    document.querySelector('video').play();