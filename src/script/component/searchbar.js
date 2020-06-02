class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div
                class="search fixed hidden w-screen top-0 h-screen bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center px-6 md:px-10 lg:px-24">
            <div class="w-5 h-5 p-5 flex justify-center items-center    rounded-full bg-black mb-3 bg-opacity-75 cursor-pointer text-2xl search-close hover:bg-gray-700 hover:bg-opacity-75">
                &times
            </div>
            <div class="flex flex-col w-full md:flex-row">
                <input type="search" placeholder="Search Movie..."
                    class="search-input w-full outline-none lg:outline- px-5 py-3 rounded-md text-lg text-gray-800 focus:shadow-outline" >
                <button
                    class="search-button w-full md:w-auto px-10 py-3 bg-gray-700 mt-2 focus:outline-none md:mt-0 md:ml-2 rounded-md md:py-5 md:px-16 focus:shadow-outline"
                    style="background-color:#7602ff">Search</button>
            </div>
        </div>
        `
    }
}
customElements.define('search-bar', SearchBar);

// Launch and hide search-input element
const searchIcon = document.querySelector('app-bar').querySelector('.search-icon');
const searchBtn = document.querySelector('search-bar').querySelector('.search-button');
const searchClose = document.querySelector('search-bar').querySelector('.search-close');
const searchInput = document.querySelector('search-bar').querySelector('.search-input');
const searchBar = document.querySelector('search-bar').querySelector('.search');
searchIcon.addEventListener('click', () => {
    searchBar.classList.remove('hidden');
})
const searchBarHidden = () => {
    searchBar.classList.add('hidden');
}
searchClose.addEventListener('click', searchBarHidden)
searchBtn.addEventListener('click', searchBarHidden)
searchInput.addEventListener('keypress', e => {
    if (e.which == 13) {
        searchBarHidden();
    }
})