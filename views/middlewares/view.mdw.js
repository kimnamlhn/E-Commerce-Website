var exphbs  = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');


module.exports = function (app){
    app.engine('hbs', exphbs({
        defaultLayout: 'main.hbs',
        extname: '.hbs',
        layoutsDir: 'views/_layouts',
        partialsDir: 'views/_partials',
        helpers: {
          section: express_handlebars_sections(),
        },
      }
      ));
      app.set('view engine', 'hbs');
}

