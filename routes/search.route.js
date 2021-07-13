const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    res.render('guest/search_result');
  })



module.exports = router;