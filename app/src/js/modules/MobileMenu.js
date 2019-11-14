class MobileMenu {
  constructor() {
    this.menuIcon = document.getElementsByClassName('menu__button');
    this.listItem = document.getElementsByClassName('menu__link');
    this.modal = document.getElementsByClassName('modal');
    this.events();
  }

  events() {
    this.menuIcon[0].addEventListener("click", this.animateMenu.bind(this));
    this.menuIcon[0].addEventListener("click", this.toggleModal.bind(this));
    this.modal[0].addEventListener("click", (event) => {
      if (event.target.classList.contains('modal__link')) {
        this.closeMenu();
      }
    });
  }

  animateMenu() {
    this.menuIcon[0].classList.toggle("open");
  }
  toggleModal() {
    this.modal[0].classList.toggle("modal--is-open");
  }
  closeMenu() {
    this.menuIcon[0].classList.remove("open");
    this.modal[0].classList.remove("modal--is-open");
  }
}

export default MobileMenu;