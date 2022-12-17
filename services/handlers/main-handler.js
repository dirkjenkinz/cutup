const player = require('node-wav-player');

const mainHandler = async (req, res) => {
  console.log("entering main handler");

  res.render('main.njk', {});
};

module.exports = { mainHandler };