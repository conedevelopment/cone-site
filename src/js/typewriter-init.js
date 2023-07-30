(() => {
  if (!document.querySelector('#typewriter')) return;

  const typewriter = document.querySelector('[data-typewriter]').dataset.typewriter.split(', ');

  new Typewriter('#typewriter', {
    strings: typewriter,
    autoStart: true,
    cursor: '',
    loop: true,
    pauseFor: 2500,
  });
})();
