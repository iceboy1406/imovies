import "regenerator-runtime";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "./css/style.css";
import main from './script/view/main.js';
import {
    Autoplay
} from "swiper/js/swiper.esm";
document.addEventListener("DOMContentLoaded", main);

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints: {
    //     425: {
    //         slidesPerView: 4,
    //         spaceBetween: 10,
    //     },
    //     640: {
    //         slidesPerView: 5,
    //         spaceBetween: 10,
    //     },
    //     768: {
    //         slidesPerView: 5,
    //         spaceBetween: 30,
    //     },
    //     1024: {
    //         slidesPerView: 6,
    //         spaceBetween: 10,
    //     },
    //     1280: {
    //         slidesPerView: 6,
    //         spaceBetween: 20,
    //     },
    // }
});