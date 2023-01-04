const { writeFile } = require('../file-service');
const url = require('url');
const { getFile } = require('../file-service');

const cutupHandler = async (req, res) => {
  console.log("entering cutup handler");

  const q = url.parse(req.originalUrl, true);
  const s = await getFile(q.query.pallet);
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

  let words = '';

  words1 = '';
  words2 = '';
  words3 = '';
  words4 = '';
  words5 = '';
  words6 = '';
  words7 = '';
  words8 = '';

  for (let i = 0; i < joined1.length; i++) {
    words += joined1[i] + ' ';
    words1 += joined1[i] + ' ';
  };

  for (let i = 0; i < joined2.length; i++) {
    words += joined2[i] + ' ';
    words2 += joined2[i] + ' ';
  };

  for (let i = 0; i < joined3.length; i++) {
    words += joined3[i] + ' ';
    words3 += joined3[i] + ' ';
  };

  for (let i = 0; i < joined4.length; i++) {
    words += joined4[i] + ' ';
    words4 += joined4[i] + ' ';
  };

  for (let i = 0; i < joined5.length; i++) {
    words += joined5[i] + ' ';
    words5 += joined5[i] + ' ';
  };

  for (let i = 0; i < joined6.length; i++) {
    words += joined6[i] + ' ';
    words6 += joined6[i] + ' ';
  };

  for (let i = 0; i < joined7.length; i++) {
    words += joined7[i] + ' ';
    words7 += joined7[i] + ' ';
  };

  for (let i = 0; i < joined8.length; i++) {
    words += joined8[i] + ' ';
    words8 += joined8[i] + ' ';
  };

  writeFile(words, 'temp');

  res.render('main.njk', {
    pallet: s,
    words1,
    words2,
    words3,
    words4,
    words5,
    words6,
    words7,
    words8,
  });
};

module.exports = { cutupHandler };
