module.exports = function(app) {
    app.use('/', require('../routes/home.route'));
    app.use('/user', require('../routes/user.route'));
    app.use('/admin', require('../routes/admin.route'));
    app.use('/account', require('../routes/account.route'));
    app.use('/products', require('../routes/products.route'));
    app.use('/cart', require('../routes/cart.route'));

    

}