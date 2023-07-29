const markdownIt = require('markdown-it'); // eslint-disable-line

module.exports = (value) => {
  const md = new markdownIt({ // eslint-disable-line
    html: true,
  });

  return md.render(value);
};
