
// Анимация гамбургера
(function () {

            "use strict";

            var toggles = document.querySelectorAll(".toggle-hamburger");

            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                toggleHandler(toggle);
            };

            function toggleHandler(toggle) {
                toggle.addEventListener("click", function (e) {
                    e.preventDefault();
                    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                });
            }

})();
        

// Анимация переворота иконки в десктопном меню
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

// Анимация селектора выбора языка
var x, i, j, selElmnt, a, b, c;
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
document.addEventListener("click", closeAllSelect);
        

// Анимация мобильного меню
(() => {
  const refs = {
    openModalBtn: document.querySelector('[mobile-modal-open]'),
    closeModalBtn: document.querySelector('[mobile-modal-close]'),
    modal: document.querySelector('[mobile-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Отключения скролла при открытом мобильном меню
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
        

// Анимация открытия десктопного меню навигации
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
    
// Анимация открытия меню телефонов
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