const smoothScroll = (destination) => {

  let start
  let currentScroll = start = document.documentElement.scrollTop || document.body.scrollTop
  let ticker = 0

  //find the destination element and its scroll position
  const destElement = document.querySelector(`.${destination}`)
  let destScroll = destElement.getBoundingClientRect().top

  //find the max-scroll position (accounting for padding at bottom)
  const limit = Math.max(document.body.scrollHeight,
                          document.body.offsetHeight,
                          document.documentElement.clientHeight,
                          document.documentElement.scrollHeight,
                          document.documentElement.offsetHeight)
  const maxScroll = limit - window.innerHeight

  //if destination is further than maxScroll, set destination to max-scroll position
  destScroll > maxScroll
    ? destScroll = maxScroll
    : null

  //define our loop
  function loop () {

    window.scrollTo(0,currentScroll)

    //speed up till half-way, then slow down (easing)
    currentScroll < (destScroll - start)/2
      ? ticker += 2
      : ticker -= 2

    currentScroll+= ticker

    currentScroll < destScroll && ticker >= 0
      ? requestAnimationFrame(loop)
      : end()
  }

  //define loop end
  function end () {
    destElement.focus()
  }

  //start the loop
  requestAnimationFrame(loop)
}

export {smoothScroll}
