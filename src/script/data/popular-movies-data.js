const popular = () => {
    const ApiKey = "d17507fb406d354629b899d28d24b0e9";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=2`)
        .then(response => response.json())
        .then(responseJson => {
            const data = responseJson.results;
            console.log(data);
            RenderAllList(data);
        })
        .catch(error => {
            console.log(error);
        })
}
popular();

const RenderAllList = data => {
    const popularMovie = document.querySelector('.popular-movies .swiper-wrapper');
    popularMovie.innerHTML += `
        ${data.map(d => `
            <div class="swiper-slide bg-gray-700 bg-opacity-25 rounded-lg overflow-hidden w-40">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face${d.poster_path}" alt="" style="" class="">
                    <div class="desc p-2">
                        <h1 class="text-lg font-bold md:text-xl">${d.title}</h1>
                        <p class="my-1 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current text-yellow-500 mr-1" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>${d.vote_average}</p>
                        <p class="text-sm">${d.release_date}</p>
                    </div>
            </div>
        `)}
        `

}