(() => {
  let scrollpos = window.scrollY;

  const header = document.querySelector('.site-header');
  const scrollChange = 1;

  function positionCheck() {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
      header.classList.add('site-header--sticky');
    } else {
      header.classList.remove('site-header--sticky');
    }
  }

  window.addEventListener('scroll', () => {
    positionCheck();
  });

  positionCheck();
})();
