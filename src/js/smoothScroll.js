const smoothScroll = (destination) => {

  //Apply fade-ins before scrolling past
  const fadeLeft = Array.from(document.querySelectorAll('.fade-left'))

  fadeLeft.forEach(item => {
    item.classList.add('active')
  })

  //find the destination element and its scroll position
  const destElement = document.querySelector(`.${destination}`)
  const destScroll = destElement.getBoundingClientRect().top

  //define starting position, and set ticker
  let start
  let currentScroll = start = document.documentElement.scrollTop || document.body.scrollTop
  let ticker = 0

  //define the loop
  function loop () {

    window.scrollTo(0,currentScroll)

    //speed up till half-way, then slow down (linear easing)
    currentScroll < (destScroll - start)/2
      ? ticker += 2
      : ticker -= 2

    currentScroll+= ticker;

    currentScroll < destScroll
      ? requestAnimationFrame(loop)
      : end()
  }

  //define loop end
  function end () {

    window.scrollTo(0,destScroll)
    destElement.focus()
  }

  //start the loop
  requestAnimationFrame(loop)
}

export {smoothScroll}
