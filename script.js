
//----- DOM Elements:

let list = document.getElementById('filmslist');

let datesTimeline = document.getElementsByClassName('release_dates_timeline');
let titlesTimeline = document.getElementsByClassName('films_title_timeline');

function scrollTitles(result) {

    for (i = 0; i < result.length; i++) {
        list.innerHTML += `<option value="${i}" class="title"><a href="films_page/pages_index.html?film=${result[i].title}"> ${result[i].title}</a></option>`;

    }

    list.addEventListener('change', function () {
        let valeur = list.options[list.selectedIndex].value;
        valeur = parseInt(valeur);
        console.log(list.selectedIndex)

        console.log(result)

        for (i = valeur; i < result.length; i++) {

            list.innerHTML += `<option value="${i}" class="title"><a href="films_page/pages_index.html?filmselect=${result[i].title}"> ${result[i].title}</a></option>`;

            //localStorage.setItem('filmselect', `${result[i].title}`);

            //window.location.href = `films_page/pages_index.html?filmselect=${result[i].title}`

            //console.log(window.location.href)

            //changeURL(`http://127.0.0.1:5500/films_page/pages_index.html?film=${result[i].title}`)
        }
    })

    // function changeURL(url) {
    //     window.location.href = url;
    // }

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

    return box;

}


function styleTimelineB(resultat) {

    let boxes = document.getElementsByClassName("box")

    for (i = 1; i <= resultat.length; i++) {
        let px = i * 306
        boxes[i].style.top += px + "px"

        if ((i + 1) % 2 == 0) {
            boxes[i].style.left += "calc(50% + 270px)"
        } else {
            boxes[i].style.left += "calc(50% - 270px)"
        }

    }


}

function styleTimelineR(resultat) {
    let circles = document.getElementsByClassName("rond");

    for (i = 1; i <= resultat.length; i++) {
        let px = i * 306;
        circles[i].style.top += px + "px";
    }
}

const test = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => {
        return data.json()
    })

// console.log(test)

// displayTimelineRound(test);

// const allRonds = document.getElementsByClassName('rond');
// const allBoxes = document.getElementsByClassName('box');

// console.log(allRonds);
// console.log(allBoxes);

// const controller = new ScrollMagic.Controller()



// allBoxes.forEach(box => {
//     console.log(box)

//     for (i = 0; i < allRonds.length; i++) {

//         console.log(allRonds[i])

//         if (allRonds[i].getAttribute('data-anim') = box.getAttribute('data-anim')) {


//             let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 })

//             let scene = new ScrollMagic.Scene({
//                 triggerElement: allRonds[i],
//                 reverse: true
//             })
//                 .setTween(tween)
//                 .addTo(controller)
//             // .addIndicators()

//         }

//     }


// })












