
//----- DOM Elements:

let list = document.getElementById('filmslist');
let datesTimeline = document.getElementsByClassName('release_dates_timeline');
let titlesTimeline = document.getElementsByClassName('films_title_timeline');



function scrollTitles(result) {
    // let titleTab = [];
    // for (i = 0; i < result.length; i++) {
    //     titleTab.push(result[i].title);
    // }

    //let link = document.createElement("a")

    for (i = 0; i < result.length; i++) {

        //const newContent = document.createTextNode(result[i].title);
        list.innerHTML += '<option value="" class="title">' + result[i].title + '</option>';

        // let title = document.getElementsByClassName('title');
        // title.innerHTML = '<a href="https://www.google.com">' + result[i].title + '</a>';

    }
}

function displayTimelineRound(result) {

    let box = document.getElementById('box-timeline');


    for (i = 0; i <= result.length; i++) {

        console.log(result.length)

        box.innerHTML += '<div class="box b' + (i + 1) + '"' + 'data-anim="' + (i + 1) + '"' + '><h2>' + result[i].title + '</h2><p>' + result[i].release_date + '</p></div>';

        box.innerHTML += '<div class="rond r' + (i + 1) + '"' + 'data-anim="' + (i + 1) + '"' + '></div>';



    }
    console.log(box)
}


function styleTimeline(resultat) {

    console.log('test')
    for (i = 2; i <= resultat.length; i++) {
        let boxes = document.getElementsByClassName(`b${i}`)
        console.log(boxes)
    }
}



const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

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
                // .addIndicators()
                .addTo(controller)

        }

    }

})












