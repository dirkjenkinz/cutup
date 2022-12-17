const express = require('express');
const app = express();
const mainRouter = require('./routes/main.js');
const cutupRouter = require('./routes/cutup.js');

const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

nunjucks.configure('pages', {
    autoescape: true,
    express: app
});

app.use(express.static(__dirname + '/'));

app.use('/', mainRouter);
app.use('/main', mainRouter);
app.use('/cutup', cutupRouter);

app.listen(PORT, (err) => {
    console.log(`Cut-Up Machine No. 7 is up & running on port ${PORT}`);
});
