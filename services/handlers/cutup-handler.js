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

  const joined = [];
  joined.push(joined1);
  joined.push(joined2);
  joined.push(joined3);
  joined.push(joined4);
  joined.push(joined5);
  joined.push(joined6);
  joined.push(joined7);
  joined.push(joined8);

  res.render('main.njk', {
    pallet: s,
    joined,
  });
};

module.exports = { cutupHandler };
