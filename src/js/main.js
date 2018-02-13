import {debounce} from './debounce'
import {smoothScroll} from './smoothScroll'

const main = () => {

  const fadeLeft = Array.from(document.querySelectorAll('.fade-left'))
  const fadeRight = Array.from(document.querySelectorAll('.fade-right'))

  //check if content is in view, then fade it in
  const checkContent = () => {

    if(!fadeLeft) return

    fadeLeft.forEach(item => {

      let slideInAt = (window.scrollY + window.innerHeight - 100)
      if (slideInAt >= item.offsetTop) {
        item.classList.add('active')
      }
    })
  }

  //listen for the left-side transition, then transition the right side
  fadeRight.forEach(item => {
    item.previousSibling.addEventListener('transitionend', () => item.classList.add('active'))
  })

  //checkContent when page loads, then check for elements as the user scrolls
  checkContent()
  window.addEventListener('scroll', debounce(checkContent, 10))

  //listeners for smooth anchor scrolling
  document.querySelector('.nav-projects').addEventListener('click', () => smoothScroll('projects'))
  document.querySelector('.nav-contact').addEventListener('click', () => smoothScroll('contact'))
}


document.addEventListener('DOMContentLoaded', main)
