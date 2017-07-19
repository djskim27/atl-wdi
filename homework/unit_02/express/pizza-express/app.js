const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.send('Welcome to Pizza Express!')

});

app.get('/topping', (req, res, next) => {

    res.send(`${req.query.topping} pizza!`);

})

app.get('/order/:amount/:size', (req, res, next) => {

    res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);


})

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});