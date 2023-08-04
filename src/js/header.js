(() => {
  let scrollpos = window.scrollY;

  const header = document.querySelector('.site-header');
  const scrollChange = 1;

  window.addEventListener('scroll', () => {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
      header.classList.add('site-header--sticky');
    } else {
      header.classList.remove('site-header--sticky');
    }
  });
})();
