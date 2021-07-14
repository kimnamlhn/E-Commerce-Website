const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    res.render('user/profile');
  })

// danh sách sản phẩm đã đặt và tình trạng
router.get('/order_placed', async function (req, res) {
    res.render('user/order_placed');
  })

// lịch sử đặt hàng
router.get('/purchase_history', async function (req, res) {
    res.render('user/purchase_history');
  })


router.get('/cart', async function (req, res) {
    res.render('user/purchase_history');
  })



module.exports = router;