class MobileMenu {
  constructor() {
    this.menuIcon = document.getElementsByClassName('menu__button');
    this.modal = document.getElementsByClassName('modal');
    this.modalItem = document.getElementsByClassName('nav__link');
    this.events();
  }

  events() {
    this.menuIcon[0].addEventListener("click", this.animateMenu.bind(this));
    this.menuIcon[0].addEventListener("click", this.toggleModal.bind(this));
    window.addEventListener('scroll', this.closeMenu.bind(this));
    window.addEventListener('resize', this.closeMenu.bind(this));
    Array.from(this.modalItem).forEach(item => item.addEventListener("click", this.closeMenu.bind(this)));
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