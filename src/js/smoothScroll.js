const smoothScroll = (destination) => {

  const destElement = document.querySelector(`.${destination}`);

  const destScroll = destElement.getBoundingClientRect().top;

  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

  const maxScroll = limit - window.innerHeight;

  const int = setInterval(() => {

    window.scrollTo(0,currentScroll);
    currentScroll+=20;

    if(currentScroll >= destScroll || currentScroll == maxScroll) {
      clearInterval(int);
      destElement.focus();
    }

  },1000/60);
}

export {smoothScroll}
