module.exports = function(app) {
    app.use('/', require('../routes/home.route'));
    app.use('/user', require('../routes/user.route'));
    app.use('/admin', require('../routes/admin.route'));
    

}