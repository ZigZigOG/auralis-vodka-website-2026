(() => {
  const gate = document.getElementById('ageGate');
  const yes = document.getElementById('ageYes');
  const no = document.getElementById('ageNo');
  const exitScreen = document.getElementById('exitScreen');
  const header = document.querySelector('.site-header');
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  const unlock = () => {
    gate.classList.add('is-hidden');
    document.body.classList.remove('age-locked');
    sessionStorage.setItem('auralisAgeVerified', 'true');
    setTimeout(() => header.classList.add('is-visible'), 220);
  };

  if (sessionStorage.getItem('auralisAgeVerified') === 'true') {
    gate.classList.add('is-hidden');
    document.body.classList.remove('age-locked');
    header.classList.add('is-visible');
  }

  yes.addEventListener('click', unlock);

  no.addEventListener('click', () => {
    gate.classList.add('is-hidden');
    exitScreen.hidden = false;
  });

  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
