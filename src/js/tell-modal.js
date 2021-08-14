(() => {
  const refs = {
    openModalBtn: document.querySelector('[tell-modal-open]'),
    closeModalBtn: document.querySelector('[tell-modal-close]'),
    modal: document.querySelector('[tell-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
