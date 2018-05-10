(function() {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        const imgRequest = new XMLHttpRequest();
        imgRequest.onload = addImage;
        imgRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        imgRequest.setRequestHeader('Authorization', 'Client-ID faa6734d78701fc28e60f034c34fe2e3ec655c16e50dfc8a0b77c2bd3eb34f6e');
        imgRequest.send();

        const articleRequest = new XMLHttpRequest();
        articleRequest.onload = addArticles;
        articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=f1c69a7b01c34968b7e4da055884e63b`);
        articleRequest.send();
    });

    function addImage() {
        const data = JSON.parse(this.responseText);
        const firstImage = data.results[0];

        responseContainer.insertAdjacentHTML('afterbegin', `<figure>
                <img src="${firstImage.urls.regular}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>`
        );
    }

    function addArticles() {
        const data = JSON.parse(this.responseText);
        const articlesInHTML = data.response.docs.map(article => `<li>
                <h2>${article.headline.main}<h2>
                <p>${article.snippet}</p>
                <p>Word Count: ${article.word_count}<br> Type of Material: ${article.type_of_material}<br>Source: ${article.source}</p>
                <p><button class="button"><a href="${article.web_url}">View Article</a></button></p>
            </li>`
        );

        responseContainer.insertAdjacentHTML('beforeend', `<ul>${articlesInHTML.join('')}</ul>`);
    }
})();