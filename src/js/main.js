import jump from 'jump.js'

const main = () => {
  const contactButton = document.querySelector('.nav-contact')

  const fadeLeft = document.querySelector('.fade-left')
  const fadeRight = document.querySelector('.fade-right')

  //listen for the left-side transition, then transition the right side
  fadeLeft.addEventListener('transitionend', () => fadeRight.classList.add('active'))

  //fade profile image on page-load
  setTimeout(() => {
    fadeLeft.classList.add('active')
  }, 300)

  //add jump to 'contact' button
  contactButton.addEventListener('click', () => {
    console.log('fire')
    jump('.contact', { duration: 1500 })
  })
}


document.addEventListener('DOMContentLoaded', main)
