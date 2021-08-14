(() => {
          const refs = {
            openModalBtn: document.querySelector('[mobile-modal-open]'),
            closeModalBtn: document.querySelector('[mobile-modal-close]'),
            modal: document.querySelector('[scrol-modal]'),
          };

          refs.openModalBtn.addEventListener('click', toggleModal);
          refs.closeModalBtn.addEventListener('click', toggleModal);

          function toggleModal() {
            refs.modal.classList.toggle('no-scroll');
          }
        })();