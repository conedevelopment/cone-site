import {
  getCookie, issetCookie
} from './cookie.js';

if (
  issetCookie('cone-cookie-law-analytics')
  && getCookie('cone-cookie-law-analytics') === 'accepted'
) {
  function gtag() {
    window.dataLayer.push(arguments);
  }

  const cone_gtag_id = 'G-VG8YZ0GRD3';
  const cone_gtag_script = document.createElement('script');

  cone_gtag_script.src = `https://www.googletagmanager.com/gtag/js?id=${cone_gtag_id}`;
  cone_gtag_script.async = true;
  document.head.append(cone_gtag_script);

  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', cone_gtag_id);
}
