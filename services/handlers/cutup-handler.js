const { getFile } = require('../file-service');

const cutupHandler = async (req, res) => {
  console.log("entering cutup handler");

  const u = req.originalUrl.split('/');

  const file = u[1].split('=');

  const s = await getFile(file[1]);

  let splitText = s.split('.');

  const joined1 = [];
  const joined2 = [];
  const joined3 = [];
  const joined4 = [];
  const joined5 = [];
  const joined6 = [];
  const joined7 = [];
  const joined8 = [];

  splitText = s.split(' ');

  for (let i = 0; i < 25; i++) {
    let start = Math.floor(Math.random() * (splitText.length + 1));
    let end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined1.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined2.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined3.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined4.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined5.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined6.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined7.push(splitText[start + j]);
    };
    start = Math.floor(Math.random() * (splitText.length + 1));
    end = Math.floor(Math.random() * (12));
    for (let j = 0; j < end; j++) {
      joined8.push(splitText[start + j]);
    }
  };

  res.render('main.njk', {
    pallet: s,
    joined1,
    joined2,
    joined3,
    joined4,
    joined5,
    joined6,
    joined7,
    joined8,
  });
};

module.exports = { cutupHandler };
