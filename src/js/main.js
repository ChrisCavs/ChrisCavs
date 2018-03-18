import {smoothScroll} from './smoothScroll'

const main = () => {

  const fadeLeft = document.querySelector('.fade-left')
  const fadeRight = document.querySelector('.fade-right')

  //listen for the left-side transition, then transition the right side
  fadeLeft.addEventListener('transitionend', () => fadeRight.classList.add('active'))

  //fade profile image on page-load
  setTimeout(fadeLeft.classList.add('active'), 200)

  //listeners for smooth anchor scrolling
  document.querySelector('.nav-projects').addEventListener('click', () => smoothScroll('projects'))
  document.querySelector('.nav-contact').addEventListener('click', () => smoothScroll('contact'))
}


document.addEventListener('DOMContentLoaded', main)
