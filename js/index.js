const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: `http://www.gutenberg.org/files/39064/39064-h/39064-h.html`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    let scrpTxt = $('.tei-div').text();
    console.log(scrpTxt);
  })
  .catch((err) => {
    console.log(err);
  });


//console.log(scrpTxt);
