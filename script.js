
function scrollTitles(result) {
    let titleTab = [];
    for (i = 0; i < result.length; i++) {
        titleTab.push(result[i].title);
    }

    //console.log(result.length);
    for (i = 0; i < result.length; i++) {
        document.getElementById('filmslist').innerHTML += '<option value="">' + result[i].title + '</option>';
    }
}








