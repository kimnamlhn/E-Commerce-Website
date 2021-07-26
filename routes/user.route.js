const express = require('express');
const router = express.Router();
const authUser = require('../middlewares/authUser.mdw')

router.get('/', authUser, async function (req, res) {
    res.render('user/profile');
  })

// danh sách sản phẩm đã đặt và tình trạng
router.get('/order_placed', authUser, async function (req, res) {
    res.render('user/order_placed');
  })

// lịch sử đặt hàng
router.get('/purchase_history', authUser, async function (req, res) {
    res.render('user/purchase_history');
  })


router.get('/checkout', async function (req, res) {
    res.render('user/checkout');
  })



module.exports = router;