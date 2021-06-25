const express = require('express')

module.exports = function (app) {
    //bodyparse middware
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

}