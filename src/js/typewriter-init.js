(() => {
  if (!document.querySelector('#typewriter')) return;

  const typewriter = document.querySelector('[data-typewriter]').dataset.typewriter.split(', ');
  const heroTitle = document.querySelector('.hero__title');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  if (typewriter.length <= 1) return;

  const typing = new Typewriter('#typewriter', {
    strings: typewriter,
    autoStart: true,
    cursor: '',
    loop: true,
    pauseFor: 2500,
  });

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typing.start();
      } else {
        typing.pause();
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(heroTitle);
})();
