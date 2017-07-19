const express = require('express');

const router = express.Router();


router.get('/:type', (req, res, next) => {

    res.render('toppings', {
        data: `${req.params.type} pizza!`
    });

});


module.exports = router;