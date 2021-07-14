const express = require('express');
const router = express.Router();

router.get('/add_admin', async function (req, res) {
    res.render('admin/add_admin');
});

router.get('/add_product', async function (req, res) {
    res.render('admin/add_product');
});

router.get('/product_manage', async function (req, res) {
    res.render('admin/product_manage');
});

router.get('/statistics_page', async function (req, res) {
    res.render('admin/statistics_page');
});
router.get('/edit_product', async function (req, res) {
    res.render('admin/edit_product');
});
router.get('/user_manage', async function (req, res) {
    res.render('admin/user_manage');
});


module.exports = router;