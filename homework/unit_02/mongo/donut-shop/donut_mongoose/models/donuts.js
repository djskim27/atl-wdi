//requirements: require mongoose
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//create your donut schema:
const donutSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    img: String,
    price: Number,
    qty: Number
});

const DonutModel = mongoose.model('Donut', donutSchema)

//export your donut with module.exports()
module.exports = {
    Donut: DonutModel
};