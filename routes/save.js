const express=require('express');
const router = express.Router();

const {saveHandler} = require('../services/handlers/save-handler');

router.get('/', saveHandler);

module.exports = router;