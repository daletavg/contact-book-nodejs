const express = require('express');
const router = express.Router();
const {bot} = require('../config/telegram');

/* GET users listing. */
router.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

module.exports = router;
