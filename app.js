const express = require('express')
const app = express()
const port = 3000


//set static forder public
app.use(express.static(__dirname + '/public'));
  

app.get('/', function (req, res) {
  res.render('home');
});

//middle wares 
require('./middlewares/bodyparse.mdw')(app);
require('./middlewares/view.mdw')(app);
require('./middlewares/error.mdw')(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


  