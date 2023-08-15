import {
  getCookie, issetCookie
} from './cookie.js';

if (
  issetCookie('cone-cookie-law-analytics')
  && getCookie('cone-cookie-law-analytics') === 'accepted'
) {
  console.log('ANALYTICS');
}
