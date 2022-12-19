const { saveFile } = require('../file-service');

const saveHandler = async (req, res) => {
  console.log("entering save handler");

  saveFile

  res.render('main.njk', {});
};

module.exports = { saveHandler };