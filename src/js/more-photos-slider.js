import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



// $(document).ready(function(){
//     $('.more-photos__list_slider').slick({
//         loop: false,
//         autoplay: false,
//         interval: 5000,
//         swipe: true,});
// });
// //   Закрывающий скрипт модального окна со слайдером
// (() => {
//     const refs = {
//       openSliderBtn: document.querySelector('[data-slider-open]'),
//       closeSliderBtn: document.querySelector('[data-slider-close]'),
//       slider: document.querySelector('[data-slider]'),
//     };
  
//     refs.openSliderBtn.addEventListener('click', toggleSlider);
//     refs.closeSliderBtn.addEventListener('click', toggleSlider);
  
//     function toggleSlider() {
//       refs.slider.classList.toggle('is-hidden');
//     }
// })();


const lightbox = new SimpleLightbox('.gallery-more-photos a', {
  captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    nav: true,
    close: true,
  });