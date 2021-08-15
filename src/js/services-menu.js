    (() => {
      const refs = {
        openModalBtn: document.querySelector('[services-open]'),
        closeModalBtn: document.querySelector('[services-close]'),
        modal: document.querySelector('[services]'),
      };

      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);

      function toggleModal() {
        refs.modal.classList.toggle('show');
      }
    })();