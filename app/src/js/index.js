import WidescreenMenu from './modules/WidescreenMenu';
import BackToTop from './modules/BackToTop';
import MobileMenu from './modules/MobileMenu';

const widescreenMenu = new WidescreenMenu();
const backToTop = new BackToTop();
const mobileMenu = new MobileMenu();

ScrollReveal().reveal('.hero', {delay: 100, duration: 1500});
ScrollReveal().reveal('.hero__content-box', {delay: 1500, duration: 2000});
ScrollReveal().reveal('.hero__logo', {delay: 2500, duration: 1000});
ScrollReveal().reveal('.scroll-reveal--up', {duration: 1000, distance: "50px", viewOffset: { bottom: 200 }});
ScrollReveal().reveal('.participate__list-item', {duration: 1000, distance: "50px", viewOffset: { bottom: 200 }, interval: 500, origin: 'right'});
ScrollReveal().reveal('.sponsors__image', {duration: 1000, distance: "50px", viewOffset: { bottom: 200 }, interval: 500});