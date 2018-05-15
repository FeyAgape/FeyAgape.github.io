(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;


        fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
        	headers: {
        		Authorization:`Client-ID faa6734d78701fc28e60f034c34fe2e3ec655c16e50dfc8a0b77c2bd3eb34f6e`
        	  }
        })
        .then(response => response.json())
        .then(addImage)
        .catch(err => requestError(err, 'image'));

         fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=f1c69a7b01c34968b7e4da055884e63b`)
        .then(response => response.json())
        .then(addArticles)
        .catch(err => requestError(err, 'articles'));
    });


    function addImage(data) {

    let htmlContent = '';

        if (data && data.results && data.results.length > 1) {
            const firstImage = data.results[0];
            htmlContent = `<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`;
  } else {
            htmlContent = '<div class="error-no-image">No images available</div>';
        }

        responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }


    function addArticles(data) {

    let htmlContent = '';

        if (data.response && data.response.docs && data.response.docs.length > 1) {
            const articles = data.response.docs;
            htmlContent = '<ul>' + articles.map(article => `<li class="article">
                <h2>${article.headline.main}<h2>
                <p>${article.snippet}</p>
                <p>Word Count: ${article.word_count}<br> Type of Material: ${article.type_of_material}<br>Source: ${article.source}</p>
                <p><button class="button"><a href="${article.web_url}">View Article</a></button></p>
            </li>`

          ).join('') + '</ul>';
        } else {
            htmlContent = '<div class="error-no-articles">No articles available</div>';
        }

        responseContainer.insertAdjacentHTML('beforeend', htmlContent);
    }

    function requestError(e, part) {
        console.log(e);
        responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning error-${part}">Oh no! There was an error making a request for the ${part}.</p>`);
    }
})();
