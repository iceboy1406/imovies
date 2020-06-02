class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <nav class="flex justify-between fixed items-center py-3 w-full z-10 px-6 transition duration-300 md:px-8 lg:px-10">
                <div class="nav-brand">
                    <a href="#" class="block px-3 py-2 text-xl font-bold">iFilm</a>
                </div>
                <div class="nav-item items-center font-semibold hidden md:flex">
                    <div class="nav-link cursor-pointer px-5 py-3 transition duration-300 rounded-md hover:bg-opacity-50 hover:bg-gray-700">Home</div>
                    <div class="nav-link cursor-pointer px-5 py-3 transition duration-300 rounded-md hover:bg-opacity-50 hover:bg-gray-700">Movies</div>
                    <div class="nav-link cursor-pointer px-5 py-3 transition duration-300 rounded-md hover:bg-opacity-50 hover:bg-gray-700">Television</div>
                    <div class="nav-link cursor-pointer px-5 py-3 transition duration-300 rounded-md hover:bg-opacity-50 hover:bg-gray-700">People</div>
                </div>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-10 hover:bg-opacity-25 p-3 fill-current cursor-pointer rounded-full search-icon hover:bg-gray-100">
                    <path
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
            </nav>
        `
    }
}
customElements.define('app-bar', AppBar);
// nav saat scroll melebihi 100px
const nav = document.querySelector('app-bar').querySelector('nav');
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add('bg-gray-900');
    } else {
        nav.classList.remove('bg-gray-900');
    }
})