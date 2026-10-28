(() => {
  const langSwitcher = document.querySelector('[data-lang-switcher]');

  if (!langSwitcher) {
    return;
  }

  langSwitcher.addEventListener('change', () => {
    window.location.href = langSwitcher.value;
  });
})();
