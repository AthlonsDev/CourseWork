const mongo = require('./mongoDBConnection')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//for post data
app.use(bodyParser.json())
const {format} = require('path')
const {response} = require('express')
const db = require('./mongoDBConnection')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.get('/', function(req, res) {
    res.send('Hello World')

})

app.post('/addPlayer', function(req, res) {
        let id = req.params.id;
        console.log(req.body);
        // res.send(id)
        let updateStats = new mongo(req.body)
        mongo.findByIdAndUpdate(id,
            {
                Player_Name: updateStats.Player_Name,
            },
            // updateStats.save()
            )
        res.send()
 
})

app.post('/hello', (req, res)=>{
    console.log(req.body);
    name.push(req.body.name) // add this if you store in array 
  
    return res.send(`hello ${req.body.name}`);
  })

app.post('/deletedoc/:id',function(req, res) {
    let id = req.params.id;
   console.log(id)
    console.log("deleting")
    Books.findByIdAndDelete(id,function (err, docs) {
    if (err){
    console.log(err)
    }
    else{
    res.status(200).send('player Deleted');
    }
    }
    )
   
   });

app.listen(3000, () => {
    console.log('Listening on port 3000')

})