const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', './views')

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {

    res.render('index', {
        data: 'Welcome to Pizza Express!'
    });

});

const toppingController = require('./controllers/topping_controller');
app.use('/topping', toppingController);

const amountController = require('./controllers/amountAndSize_controller');
app.use('/order', amountController);


app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});