
//----- DOM Elements:

let datesTimeline = document.getElementsByClassName('release_dates_timeline');
let titlesTimeline = document.getElementsByClassName('films_title_timeline');

// function scrollTitles(array) {

//     for (i = 0; i < array.length; i++) {
//         list.innerHTML += `<option value="films_page/pages_index.html?film=${array[i].title}" class="title"> ${array[i].title}</option>`;

//     }

//     list.addEventListener('change', function () {
//         let valeur = list.options[list.selectedIndex].value;
//         window.location.href = valeur;
//     })
// }

// scrollTitles(films);

let list = document.getElementById('sous3');
let list2 = document.getElementById('sous4');

function scrollTitles(array) {
    // Modification par Johan Menu
    // for (i = 0; i < result.length; i++) {
    //     list.innerHTML += `<option value="films_page/pages_index.html?film=${result[i].title}" class="title"> ${result[i].title}</option>`;
    // }
    // list.addEventListener('change', function () {
    //     let valeur = list.options[list.selectedIndex].value;
    //     window.location.href = valeur;
    // })
    for (i = 0; i < array.length / 2; i++) {
        list.innerHTML += `<li><a href="/films_page/pages_index.html?film=${array[i].title}">${array[i].title}</a></li>`
    }
    for (i = array.length / 2; i < array.length; i++) {
        list2.innerHTML += `<li><a href="/films_page/pages_index.html?film=${array[i].title}">${array[i].title}</a></li>`
    }
}

scrollTitles(films)



function displayTimeline(array) {

    let box = document.getElementById('box-timeline');
    let rond = document.getElementById('box-timeline');

    for (i = 0; i < array.length; i++) {
        rond.innerHTML += `<div class="rond r${i + 1}" data-anim="${i + 1}"></div>`;
    }

    for (i = 0; i < array.length; i++) {
        box.innerHTML += `<div class="box b${i + 1}" data-anim="${i + 1}"><h2><a href="/films_page/pages_index.html?film=${array[i].title}">${array[i].title}</a></h2><p>${array[i].release_date}</p></div>`;
    }


}
displayTimeline(films)



function imageBan(array) {

    let ban = document.getElementById('banniere');

    for (i = 0; i < array.length; i++) {
        ban.innerHTML += `<img class="tailleImage" src= ${array[i].image}>`
    }

}

imageBan(films)

function styleTimeline(array) {

    animation()

    let boxes = document.getElementsByClassName("box");
    let circles = document.getElementsByClassName("rond");

    for (i = 1; i <= array.length; i++) {

        let px = i * 200;
        boxes[i].style.top += px + "px"

        circles[i].style.top += px + "px";
        circles[i].style.background += `url('calcifer_emoji.png')`;
        circles[i].style.backgroundSize = "contain";

        if ((i + 1) % 2 == 0) {
            boxes[i].style.left += "calc(50% + 270px)"
        } else {
            boxes[i].style.left += "calc(50% - 270px)"
        }
    }


}
styleTimeline(films)


function animation() {

    const allRonds = document.querySelectorAll('.rond');
    const allBoxes = document.querySelectorAll('.box');

    // console.log(allRonds);
    // console.log(allBoxes);

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



