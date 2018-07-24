import {smoothScroll} from './smoothScroll'

const main = () => {

  const fadeLeft = document.querySelector('.fade-left')
  const fadeRight = document.querySelector('.fade-right')

  //listen for the left-side transition, then transition the right side
  fadeLeft.addEventListener('transitionend', () => fadeRight.classList.add('active'))

  //fade profile image on page-load
  setTimeout(() => {
    fadeLeft.classList.add('active')
  }, 500)
}


document.addEventListener('DOMContentLoaded', main)
