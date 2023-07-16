(() => {
  let scrollpos = window.scrollY;

  const header = document.querySelector('.site-header');
  const navigation = document.querySelector('.site-navigation');
  const scrollChange = 1;

  window.addEventListener('scroll', () => {
    scrollpos = window.scrollY;
    setTimeout(() => {
      navigation.style.setProperty('--inset-block-start', getComputedStyle(header).getPropertyValue('--block-size'));
    }, 100);
    if (scrollpos >= scrollChange) {
      header.classList.add('site-header--sticky');
    } else {
      header.classList.remove('site-header--sticky');
    }
  });
})();
