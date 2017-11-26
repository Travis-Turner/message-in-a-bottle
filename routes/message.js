const express = require('express');
const router = express.Router();
const helpers = require('../helpers/message');

var db = require('../models');

router.route('/')
  .get(helpers.getMessages)
  .post(helpers.postMessage)

router.route('/:messageId')
  .get(helpers.getMessage)
  .put(helpers.updateMessage)
  .delete(helpers.deleteMessage)


module.exports = router;
