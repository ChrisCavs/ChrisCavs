const smoothScroll = (destination) => {

  //Apply fade-ins before scrolling past
  const fadeLeft = Array.from(document.querySelectorAll('.fade-left'));
  fadeLeft.forEach(item => {
    item.classList.add('active');
  });

  //find the destination element, and its scroll position
  const destElement = document.querySelector(`.${destination}`);
  const destScroll = destElement.getBoundingClientRect().top;

  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  requestAnimationFrame(loop);

  function loop () {

    window.scrollTo(0,currentScroll);
    currentScroll+=20;

    currentScroll < destScroll
      ? requestAnimationFrame(loop)
      : end()
  }

  function end () {

    window.scrollTo(0,destScroll);
    destElement.focus();
  }
}

export {smoothScroll}
