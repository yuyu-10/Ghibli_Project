
import './data';

//----- DOM Elements:

let list = document.getElementById('filmslist');

let datesTimeline = document.getElementsByClassName('release_dates_timeline');
let titlesTimeline = document.getElementsByClassName('films_title_timeline');



function scrollTitles(result) {

    for (i = 0; i < result.length; i++) {
        list.innerHTML += `<option value="films_page/pages_index.html?film=${result[i].title}" class="title"> ${result[i].title}</option>`;

    }

    list.addEventListener('change', function () {
        let valeur = list.options[list.selectedIndex].value;
        window.location.href = valeur;
    })
}

function displayTimelineRound(result) {

    let box = document.getElementById('box-timeline');
    let rond = document.getElementById('box-timeline');

    for (i = 0; i < result.length; i++) {
        rond.innerHTML += `<div class="rond r${i + 1}" data-anim="${i + 1}"></div>`;
    }

    for (i = 0; i < result.length; i++) {
        box.innerHTML += `<div class="box b${i + 1}" data-anim="${i + 1}"><h2><a href="films_page/pages_index.html?film=${result[i].title}">${result[i].title}</a></h2><p>${result[i].release_date}</p></div>`;
    }

}

function styleTimelineB(resultat) {

    let boxes = document.getElementsByClassName("box")

    for (i = 1; i <= resultat.length; i++) {

        let px = i * 200;
        boxes[i].style.top += px + "px"

        if ((i + 1) % 2 == 0) {
            boxes[i].style.left += "calc(50% + 270px)"
        } else {
            boxes[i].style.left += "calc(50% - 270px)"
        }
    }
}

// function r1(resultat) {
//     r1.style.backgroundImage = `url('calcifer_emoji.png')`;
// }

function styleTimelineR(resultat) {
    let circles = document.getElementsByClassName("rond");

    for (i = 1; i <= resultat.length; i++) {
        let px = i * 200;;
        circles[i].style.top += px + "px";
        circles[i].style.background += `url('calcifer_emoji.png')`;
        circles[i].style.backgroundSize = "contain";
    }
}


// const test = fetch("https://ghibliapi.herokuapp.com/films")
//     .then(data => {
//         return data.json()
//     })

// console.log(test)

// displayTimelineRound(test);

function animation() {
    const allRonds = document.querySelectorAll('.rond');
    const allBoxes = document.querySelectorAll('.box');

    console.log(allRonds);
    console.log(allBoxes);

    const controller = new ScrollMagic.Controller()

    allBoxes.forEach(box => {

        for (i = 0; i < allRonds.length; i++) {

            if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

                let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 })

                let scene = new ScrollMagic.Scene({
                    triggerElement: allRonds[i],
                    reverse: true
                })
                    .setTween(tween)
                    .addTo(controller)

            }

        }

    })
}

