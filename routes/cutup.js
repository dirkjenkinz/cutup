const express=require('express');
const router = express.Router();

const {cutupHandler} = require('../services/handlers/cutup-handler');

router.get('/', cutupHandler);

module.exports = router;