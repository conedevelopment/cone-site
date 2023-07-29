const moment = require('moment'); // eslint-disable-line

module.exports = (value, locale) => {
  moment.locale(locale);
  const dateObject = moment(value);
  return dateObject.format('LL');
};
