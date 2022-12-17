const { getFile } = require('../file-service');

const cutupHandler = async (req, res) => {
  console.log("entering cutup handler");

  const u = req.originalUrl.split('/');

  const file = u[1].split('=');

  const s = await getFile(file[1]);

  let splitText = s.split('.');

  const joined = [];

  splitText = s.split(' ');

  for (let i = 0; i < 100; i++) {
    let start = Math.floor(Math.random() * (splitText.length + 1));
    let end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined.push(splitText[start + j]);
    };
  };

  res.render('main.njk', {
    pallet: s,
    joined,
  });
};

module.exports = { cutupHandler };
