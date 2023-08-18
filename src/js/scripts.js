import {
  getCookie, issetCookie
} from './cookie.js';

if (
  issetCookie('cone-cookie-law-analytics')
  && getCookie('cone-cookie-law-analytics') === 'accepted'
) {
  const id = 'G-VG8YZ0GRD3';
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.append(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); } // eslint-disable-line
  gtag('js', new Date());

  gtag('config', 'G-VG8YZ0GRD3');
}
