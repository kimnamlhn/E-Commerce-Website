module.exports = function (app) {
    app.use(function (req, res, next) {
        if (req.session.authenticated === null) {
            req.session.authenticated = false;
        }

        res.locals.lcAuthenticated = req.session.authenticated;
        res.locals.lcAuthUser = req.session.authUser;

        next();
    })
}
 

