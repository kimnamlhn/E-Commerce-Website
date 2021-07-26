const express = require('express');
const router = express.Router();
const productModel = require("../models/product.model");

router.get('/', async function (req, res) {
    const list = await productModel.hexProduct();
    // console.log(list);
    // console.log('list');
    res.render('guest/products',
    {
      list : list,
    });
  })

router.get('/product_detail', async function (req, res) {

    res.render('guest/product_detail');
  })





module.exports = router;