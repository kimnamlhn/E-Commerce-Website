const express = require('express');
const router = express.Router();

router.get('/login', async function (req, res) {
        res.render('guest/login');
});

router.get('/register', async function (req, res) {
        res.render('guest/register');
});


module.exports = router;