const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

const cricketSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    Player_Name: { type: String },
    Matches: { type: Number },
    Inns: {type: Number},
    Runs: {type: Number},
    HS: {type: Number},
    Ave: {type: Number}
})

const model = new mongoose.model("Cricket", cricketSchema, 'Cricket')

module.exports = model;
