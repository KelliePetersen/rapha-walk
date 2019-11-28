import WidescreenMenu from './modules/WidescreenMenu';
import BackToTop from './modules/BackToTop';
import MobileMenu from './modules/MobileMenu';
import * as basicScroll from 'basicscroll';

const widescreenMenu = new WidescreenMenu();
const backToTop = new BackToTop();
const mobileMenu = new MobileMenu();

ScrollReveal().reveal('.hero', {delay: 100, duration: 1500});
ScrollReveal().reveal('.hero__content-box', {delay: 1500, duration: 2000});
ScrollReveal().reveal('.hero__logo', {delay: 2500, duration: 1000});
ScrollReveal().reveal('.scroll-reveal--up', {duration: 1000, distance: "50px", viewOffset: { bottom: 200 }});
ScrollReveal().reveal('.participate__list-item', {duration: 1000, distance: "50px", viewOffset: { bottom: 200 }, interval: 500, origin: 'right'});
ScrollReveal().reveal('.sponsors__image', {delay: 500, duration: 1000, distance: "50px", viewOffset: { bottom: 200 }, interval: 500});

const heroImageInstance = basicScroll.create({
  elem: document.querySelector('.hero__image'),
  from: 'middle-middle',
  to: 'bottom-top',
  props: {
    '--translateY': {
      from: 0,
      to: `${10 * 30}px`
    },
    '--scale': {
      from: 1,
      to: 1.25
    }
  }
});

const heroTextInstance = basicScroll.create({
  elem: document.querySelector('.hero__text-container'),
  from: 'top-middle',
  to: 'bottom-top',
  props: {
    '--movement': {
      from: '-50%',
      to: `0%`
    }
  }
});

const heroLogosInstance = basicScroll.create({
  elem: document.querySelector('.hero__logo-container'),
  from: 'bottom-bottom',
  to: 'bottom-middle',
  props: {
    '--opacity': {
      from: 0.99,
      to: 0.01
    }
  }
});

heroImageInstance.start();
heroTextInstance.start();
heroLogosInstance.start();