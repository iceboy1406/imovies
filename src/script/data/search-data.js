const searchInput = document.querySelector('search-bar').querySelector('.search-input');
let keyword = searchInput.value;
const apiKey = 'd17507fb406d354629b899d28d24b0e9';
const movie = () => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${keyword}`)
}