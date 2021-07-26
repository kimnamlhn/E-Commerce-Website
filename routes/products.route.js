const express = require('express');
const router = express.Router();
const productModel = require("../models/product.model");

router.get('/', async function (req, res) {
  const list = await productModel.hexProduct();
  res.render('guest/products',
    {
      list: list,
    });
})

router.get('/product_detail', async function (req, res) {

  const similarProduct = await productModel.tripleProduct();
  const product = await productModel.singleTest();

  console.log(similarProduct);

  res.render('guest/product_detail',
    {
      similarProduct: similarProduct,
      product : product,
    });
})





module.exports = router;