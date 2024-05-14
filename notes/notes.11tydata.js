const slugify = require("@sindresorhus/slugify");

const getURLDate = (str) => {
    const time = str.toLocaleString("sv-SE", {
      timeZone: "America/Denver",
      hour12: false,
    });
    return time;
  };

module.exports = function () {
	return {
        tags: 'notes',
        layout: '_note.html',
        permalink: function(data) {
            return `/notes/${slugify(getURLDate(data.date))}/index.html`
        }
    };
};