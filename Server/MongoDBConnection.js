const mongoose = require('mongoose')
const cricketModel = require('./CricketSchema')
const mongoURI = 'mongodb://localhost:27017/CricketDB'
mongoose.connect(mongoURI, {useUnifiedTopology: true,useNewUrlParser: true}).
catch(error => handleError(error))
const db = mongoose.connection



db.on('error', function(err) {
    console.log(err)
})

db.once('connected', function() {
console.log('successfully connected' + mongoURI)

})
// module.exports = db;
module.exports = cricketModel;;