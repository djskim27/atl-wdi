//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Donut = require("../models/donuts.js");
//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbsconst
router.get('/', (req, res) => {
    Donut.find({})
        .then((donuts) => {
            res.render(
                'donuts/index', {
                    donuts
                }
            );
        })
        .catch((error) => {
            console.log('ERROR');
            console.log(error);
        })


})
//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form




//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (req, res) => {
    const donutId = req.params.id;

    Donut.findById(donutId)
        .then((donuts) => {
            res.render(
                'donuts/show', {
                    donuts
                }
            );
        })
        .catch((error) => {
            console.log('fucking error')
        });
});


//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;