(() => {
  if (!document.querySelector('#typewriter')) return;

  const typewriter = document.querySelector('[data-typewriter]').dataset.typewriter.split(', ');

  if (typewriter.length <= 1) return;

  new Typewriter('#typewriter', {
    strings: typewriter,
    autoStart: true,
    cursor: '',
    loop: true,
    pauseFor: 2500,
  });
})();
