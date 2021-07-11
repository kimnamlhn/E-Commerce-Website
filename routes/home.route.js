const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
        res.render('home', {
                layout: 'false'
        });
});


router.get('/contacts', async function (req, res) {
        res.render('guest/contacts');
});

router.get('/about', async function (req, res) {
        res.render('guest/about');
});

module.exports = router;