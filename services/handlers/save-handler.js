const url = require('url');
const {getTemp, writeFile} = require('../file-service');

const saveHandler = async (req, res) => {
  console.log("entering save handler");
  const q = url.parse(req.originalUrl, true);
  
  const s = await getTemp();
  writeFile(s, q.query.output);

  res.render('main.njk', {
    saved: s,
  });
};

module.exports = { saveHandler };