const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    res.render('guest/products');
  })

router.get('/product_detail', async function (req, res) {
    res.render('guest/product_detail');
  })





module.exports = router;