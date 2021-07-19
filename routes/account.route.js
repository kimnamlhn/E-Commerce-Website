const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/login', async function (req, res) {
        res.render('guest/login');
});

router.get('/register', async function (req, res) {
        res.render('guest/register');
});

router.post('/register', async function (req, res) {
        const hashPass = bcrypt.hashSync(req.body.password, 8);
        const entity = {
            idCustomer: null,
            email : req.body.email,
            password : hashPass,
            phone : req.body.phone,
            role: 1, // user-customer: 1
        }
        console.log(entity);
        await userModel.add(entity);
        // alert('call');
    
        res.redirect('/');
});


module.exports = router;