
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
    let rond = document.getElementById('box-timeline');


    for (i = 0; i < result.length; i++) {

        console.log(result.length)



        rond.innerHTML += '<div class="rond r' + (i + 1) + '"' + 'data-anim="' + (i + 1) + '"' + '></div>';
    }

    for (i = 0; i < result.length; i++) {

        console.log(result.length)

        box.innerHTML += '<div class="box b' + (i + 1) + '"' + 'data-anim="' + (i + 1) + '"' + '><h2>' + result[i].title + '</h2><p>' + result[i].release_date + '</p></div>';


    }

}


function styleTimelineB(resultat) {

    let boxes = document.getElementsByClassName("box")
    console.log(boxes)
    for (i = 1; i <= resultat.length; i++) {

        console.log(boxes)
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



const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for (i = 0; i < allRonds.length; i++) {

        if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

            let tween = gsap.from(box, { y: -50, opacity: 0, duration: 5 })

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            scene.setTween(tween).addTo(controller)
            // .addIndicators()

        }

    }

})












