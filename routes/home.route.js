const express = require('express');
const router = express.Router();
const productModel = require("../models/product.model");


router.get('/', async function (req, res) {
        const list = await productModel.hexProduct();
        // console.log(list);
        // console.log('list');
        res.render('home',
        {
          list : list,
        });
});

//chay dung 
router.get('/home', async function (req, res) {
        const list = await productModel.hexProduct();
        // console.log(list);
        // console.log('list');
        res.render('home',
        {
          list : list,
        });
});

router.get('/contacts', async function (req, res) {
        res.render('guest/contacts');
});

router.get('/about', async function (req, res) {
        res.render('guest/about');
});

module.exports = router;