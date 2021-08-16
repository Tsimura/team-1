$(document).ready(function(){
    $('.more-photos__list_slider').slick({
        loop: false,
        autoplay: false,
        interval: 5000,
        swipe: true,});
});
//   Закрывающий скрипт модального окна со слайдером
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();