import bannerImg from "../../img/banner.jpg";
class Banner extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <div class="banner w-full relative top-0 bg-cover flex flex-col justify-center px-6 bg-center rounded-b-lg md:h-screen md:px-8 lg:px-12" style='background-image:url(${bannerImg})'>
            <h1 class="text-4xl font-semibold md:text-6xl">Find any Movies <br> from whole world</h1>
            <p class="font-light text-lg my-3 max-w-xl md:text-xl">You also can find movies-company,popular people, Television film and anymore</p>
            <a href="#" class="home-btn block relative px-10 py-3 bg-gray-700 rounded-full md:py-5 md:px-16" style="width:fit-content;background-color:#7602ff">Get Started</a>
            </div>
        `
    }
}
customElements.define('banner-img', Banner);
const content = document.querySelector('#main-content');
const getStarted = document.querySelector('banner-img').querySelector('.home-btn');
getStarted.addEventListener('click', () => {
    window.scrollTo(0, content.offsetTop - 70);
})