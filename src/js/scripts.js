import {
  getCookie,
} from './cookie.js'; // eslint-disable-line

if (getCookie('cone-cookie-law-analytics') === 'accepted') {
  function gtag() { // eslint-disable-line
    window.dataLayer.push(arguments); // eslint-disable-line
  }

  const coneGtagId = 'G-VG8YZ0GRD3';
  const coneGtagScript = document.createElement('script');

  coneGtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${coneGtagId}`;
  coneGtagScript.async = true;
  document.head.append(coneGtagScript);

  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', coneGtagId, {
    cookie_domain: window.location.hostname,
    cookie_flags: 'SameSite=None;Secure',
  });
}
