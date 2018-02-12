const smoothScroll = (destination) => {

  const destElement = document.querySelector(`.${destination}`);
  const destScroll = destElement.getBoundingClientRect().top;

  //Apply fade-in to resume before scrolling past
  const resumeContainers = Array.from(document.querySelectorAll('.resume-container'))
  resumeContainers.forEach(container => {

    Array.from(container.children).forEach(element => {
      element.classList.add('active');
    })
  })

  //find maximum page scroll
  const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                        document.documentElement.clientHeight, document.documentElement.scrollHeight,
                        document.documentElement.offsetHeight);
  const maxScroll = limit - window.innerHeight;

  //find current page scroll
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  const int = setInterval(() => {

    //simple linear scroll
    window.scrollTo(0,currentScroll);
    currentScroll+=40;

    if(currentScroll >= destScroll || currentScroll == maxScroll) {
      clearInterval(int);
      destElement.focus();
    }
  //set to 60 frames a second
  },1000/60);
}

export {smoothScroll}
