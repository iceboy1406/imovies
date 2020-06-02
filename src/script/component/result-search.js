Class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="p-3 pr-5 bg-gray-700 bg-opacity-25 flex rounded-lg w-fit-content mb-3">
                    <img src="https://image.tmdb.org/t/p/w220_and_h330_face/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
                        class="w-20 md:w-32" alt="">
                    <div class="desc ml-3">
                        <h1 class="text-lg md:text-xl">Harry Potter and the Secret of Chamber</h1>
                        <p class="text-sm py-1">Mystic Action Adventure</p>
                        <p class="text-xs">20 May 2011</p>

                    </div>
                </div>
        `
    }
}
customElements.define('search-bar', SearchBar);