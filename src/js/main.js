import {debounce} from './debounce';
import {smoothScroll} from './smoothScroll';

const main = () => {

  checkContent();

  const fadeLeft = Array.from(document.querySelectorAll('.fadeLeft'));
  const fadeRight = Array.from(document.querySelectorAll('.fadeRight'));

  function checkContent() {

    fadeLeft.forEach(item => {

      let slideInAt = (window.scrollY + window.innerHeight - 100);

      if (slideInAt >= item.offsetTop) {
        item.classList.add('active');
      }
    });
  }

  fadeRight.forEach(item => {

    item.previousSibling.addEventListener('transitionend', function() {
      item.classList.add('active');
    })
  });

  window.addEventListener('scroll', debounce(checkContent, 10));

  document.querySelector('.nav-projects').addEventListener('click', function() {
    smoothScroll('projects');
  })

  document.querySelector('.nav-contact').addEventListener('click', function() {
    smoothScroll('contact');
  })


}

document.addEventListener('DOMContentLoaded', main)
