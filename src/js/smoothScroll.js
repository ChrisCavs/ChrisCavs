const smoothScroll = (destination) => {

  let start = document.documentElement.scrollTop || document.body.scrollTop
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
  let ticker = 0

  //find the destination element and its scroll position
  const destElement = document.querySelector(`.${destination}`)
  let destScroll = destElement.getBoundingClientRect().top

  //define our loop
  function loop () {

    window.scrollTo(0,currentScroll)

    //speed up till half-way, then slow down (easing)
    currentScroll < (destScroll - start)/2
      ? ticker += 1
      : ticker -= 1

    currentScroll+= ticker

    if (currentScroll < destScroll && ticker >= 0) {
      requestAnimationFrame(loop)
    } else {
      return
    }
  }

  //start the loop
  requestAnimationFrame(loop)
}

export {smoothScroll}
