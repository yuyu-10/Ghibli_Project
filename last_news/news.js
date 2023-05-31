let promise = fetch(
"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=ghibli&api-key=MLamuAmLuPrAZ7Z9xIDrMdGXSMjW05AD"
);

promise
    .then((jsonData) => jsonData.json())
    .then((json) => {

        let max = 6;

        if (json.response.docs.length < 6) {
            max = json.response.docs.length;
        }
        for (let i = 0; i < max; i++) {
            document.getElementById(`title-${i}`).innerHTML = `'${json.response.docs[i].abstract}'`;
            document.getElementById(`link-${i}`).innerHTML = `<a class="card__link" href="${json.response.docs[i].web_url}">GO ON IT!`;
        }
        for (let i = max; i < 6; i++) { 
            document.getElementById(`title-${i}`).style.backgroundImage = `url('pngwing.com.png')`;
            document.getElementById(`title-${i}`).style.backgroundSize = "contain";
            document.getElementById(`title-${i}`).style.backgroundRepeat = "no-repeat";
            document.getElementById(`title-${i}`).style.backgroundPosition = "center";
            document.getElementById(`title-${i}`).style.height = "150px";
        }

    });