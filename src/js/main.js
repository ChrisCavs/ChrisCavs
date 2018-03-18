import {smoothScroll} from './smoothScroll'

const main = () => {

  const fadeLeft = document.querySelector('.fade-left')
  const fadeRight = document.querySelector('.fade-right')

  //check if content is in view, then fade it in
  const checkContent = () => {

    let slideInAt = (window.scrollY + window.innerHeight - 100)
    if (slideInAt >= fadeLeft.offsetTop) {
      fadeLeft.classList.add('active')
    }
  }

  //listen for the left-side transition, then transition the right side
  fadeLeft.addEventListener('transitionend', () => fadeRight.classList.add('active'))

  //checkContent on page-load
  setTimeout(checkContent, 200)

  //listeners for smooth anchor scrolling
  document.querySelector('.nav-projects').addEventListener('click', () => smoothScroll('projects'))
  document.querySelector('.nav-contact').addEventListener('click', () => smoothScroll('contact'))
}


document.addEventListener('DOMContentLoaded', main)
