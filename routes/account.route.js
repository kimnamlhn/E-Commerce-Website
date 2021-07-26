const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/login', async function (req, res) {
        res.render('guest/login');
});

router.post('/login', async function (req, res) {
        var user = await userModel.singleByEmail(req.body.email);
        console.log(user);

        //kiem tra ton tai hay khong bang email
        if(user === null){
            return res.render('guest/login',{
                err_message: 'Email không tồn tại'
            })
        };
        
        // check mat khau
        var flags = bcrypt.compareSync(req.body.password, user.password); // true
        if(flags === false){
            return res.render('guest/login',{
                err_message: 'Sai email hoặc mật khẩu'
            })
        };
        
        delete user.password;
        console.log(flags)

    
        
        res.redirect('/');
});

router.get('/register', async function (req, res) {
        res.render('guest/register');
});

router.post('/register', async function (req, res) {
        //check ton tai chua
        const flags = await userModel.singleByEmail(req.body.email);

        if (flags != null && flags.length !== 0) {
                return res.render('guest/register', {
                    err_message: 'Email này đã được sử dụng.'
                });
            }

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
    
        // res.redirect('/');
        return res.render('guest/register', {
            success_message: 'Đăng ký tài khoản thành công'
        });
});


module.exports = router;