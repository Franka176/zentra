const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menuButton && navigation) {
  const english = document.documentElement.lang === 'en';
  const openLabel = english ? 'Open menu' : 'Abrir menú';
  const closeLabel = english ? 'Close menu' : 'Cerrar menú';
  const mobileNavigation = window.matchMedia('(max-width: 47.99rem)');

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', openLabel);
    navigation.classList.remove('is-open');
    navigation.inert = mobileNavigation.matches;
    document.body.classList.remove('menu-open');
  };

  navigation.inert = mobileNavigation.matches;

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? openLabel : closeLabel);
    navigation.classList.toggle('is-open', !isOpen);
    navigation.inert = isOpen;
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (!isOpen) return;

    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
      return;
    }

    if (event.key === 'Tab') {
      const links = [...navigation.querySelectorAll('a[href]')];
      const first = links[0];
      const last = links.at(-1);

      if (event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault();
        last?.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        menuButton.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        menuButton.focus();
      }
    }
  });

  mobileNavigation.addEventListener('change', (event) => {
    closeMenu();
    if (!event.matches) navigation.inert = false;
  });
}
