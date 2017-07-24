//your code below
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates.js')

//index
router.get('/', (req,res) => {
    res.render('../views/index.hbs', {
    
        pirates: pirates

    })
})
//new
router.get('/new', (req,res) => {
    res.render('../views/new.hbs')
    
});
//show
router.get('/:id', (req,res) => {
    const id = req.params.id
    const pirate = pirates[id]
      res.render('../views/show.hbs', {
          pirates: pirate
        // name: pirates[id].name,
        // birthplace: pirates[id].birthplace,
        // death_year: pirates[id].death_year,
        // base: pirates[id].base,
        // nickname: pirates[id].nickname
    })
})

//create route
router.post('/', (req,res) => {
    const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        death_year: req.body.death_year,
        base: req.body.base,
        nickname: req.body.nickname
    }
    console.log(req.body) 
    pirates.push(newPirate);

   res.redirect("/pirates");
})

//delete route
router.delete('/:id', (req,res) => {
    pirates.splice(req.params.id, 1);

    res.redirect('/pirates');
});

module.exports = router;