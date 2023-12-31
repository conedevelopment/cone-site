module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item.
   * From: https://learneleventyfromscratch.com/
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = '';

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },
  getActiveLang(currentLang, lang) {
    let response = '';

    if (currentLang === lang) {
      response = ' data-state="active"';
    }

    return response;
  },
  getHomeUrl(lang) {
    let response = '';

    if (lang === 'en') {
      response = '/';
    } else {
      response = `/${lang}/`;
    }

    return response;
  },
  getSiblingContent(collection, item, limit = 3, random = true) {
    let filteredItems = collection.filter((x) => x.url !== item.url);

    if (random) {
      let counter = filteredItems.length;

      while (counter > 0) {
        const index = Math.floor(Math.random() * counter);

        counter -= 1;

        const temp = filteredItems[counter];

        filteredItems[counter] = filteredItems[index];
        filteredItems[index] = temp;
      }
    }

    if (limit > 0) {
      filteredItems = filteredItems.slice(0, limit);
    }

    return filteredItems;
  },
};
