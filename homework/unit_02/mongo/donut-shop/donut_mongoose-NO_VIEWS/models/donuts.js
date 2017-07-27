//requirements: require mongoose
const mongoose = require("mongoose")

//create your donut schema:
const donutTemplate = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    img: String,
    price: Number,
    qty: Number
});

const donut = mongoose.model('donut', donutTemplate)

//export your donut with module.exports()
module.exports = donut;