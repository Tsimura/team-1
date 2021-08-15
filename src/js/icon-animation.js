  (() => {
        const refs = {
          openModalBtn: document.querySelector('[icon-open]'),
          closeModalBtn: document.querySelector('[icon-close]'),
          modal: document.querySelector('[icon]'),
        };

        refs.openModalBtn.addEventListener('click', toggleModal);
        refs.closeModalBtn.addEventListener('click', toggleModal);

        function toggleModal() {
          refs.modal.classList.toggle('rotate');
        }
})();

      
