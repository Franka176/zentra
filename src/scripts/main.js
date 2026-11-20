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

const contactForm = document.querySelector('[data-contact-form]');

if (contactForm instanceof HTMLFormElement) {
  const status = contactForm.querySelector('[data-form-status]');
  const submitButton = contactForm.querySelector('[data-submit-button]');
  const submitLabel = contactForm.querySelector('[data-submit-label]');
  const readyMessage = status?.textContent ?? '';
  const english = contactForm.dataset.lang === 'en';
  const messages = english
    ? {
        invalid: 'Check the highlighted fields and try again.',
        pending: 'Sending your inquiry. Please keep this page open.',
        success: 'FormSubmit confirmed your inquiry. Taking you to the confirmation page…',
        error: 'We could not confirm the submission. Please try again or email us directly.',
        sending: 'Sending…',
      }
    : {
        invalid: 'Revisá los campos indicados e intentá nuevamente.',
        pending: 'Enviando tu consulta. Mantené esta página abierta.',
        success: 'FormSubmit confirmó tu consulta. Te llevamos a la página de confirmación…',
        error: 'No pudimos confirmar el envío. Intentá nuevamente o escribinos por correo.',
        sending: 'Enviando…',
      };
  const defaultLabel = submitLabel?.textContent ?? '';
  const thanksPath = contactForm.dataset.thanksPath;

  if (thanksPath && window.location.protocol === 'https:' && !contactForm.querySelector('[name="_next"]')) {
    const redirectField = document.createElement('input');
    redirectField.type = 'hidden';
    redirectField.name = '_next';
    redirectField.value = new URL(thanksPath, window.location.origin).href;
    contactForm.prepend(redirectField);
  }

  contactForm.addEventListener('invalid', () => {
    contactForm.classList.add('has-validation-error');
    if (status) status.textContent = messages.invalid;
  }, true);

  contactForm.addEventListener('input', () => {
    if (contactForm.checkValidity()) {
      contactForm.classList.remove('has-validation-error');
      if (status?.textContent === messages.invalid) status.textContent = readyMessage;
    }
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) {
      contactForm.classList.add('has-validation-error');
      if (status) status.textContent = messages.invalid;
      return;
    }
    contactForm.classList.remove('has-validation-error');

    const ajaxAction = contactForm.dataset.ajaxAction;
    const emailField = contactForm.elements.namedItem('email');
    if (!ajaxAction || !(emailField instanceof HTMLInputElement)) {
      contactForm.submit();
      return;
    }

    if (status) status.textContent = messages.pending;
    if (submitButton instanceof HTMLButtonElement) submitButton.disabled = true;
    if (submitLabel) submitLabel.textContent = messages.sending;

    try {
      const payload = Object.fromEntries(new FormData(contactForm).entries());
      payload._replyto = emailField.value;

      const response = await fetch(ajaxAction, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      const accepted = response.ok && (result.success === true || result.success === 'true');

      if (!accepted) throw new Error(result.message || 'FormSubmit did not confirm the submission.');

      if (status) status.textContent = messages.success;
      window.setTimeout(() => {
        if (thanksPath) window.location.assign(thanksPath);
      }, 900);
    } catch (error) {
      if (status) status.textContent = messages.error;
      if (submitButton instanceof HTMLButtonElement) submitButton.disabled = false;
      if (submitLabel) submitLabel.textContent = defaultLabel;
    }
  });
}
