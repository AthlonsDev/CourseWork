const mongo = require('./mongoDBConnection')
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require("crypto");
const app = express()
const cors = require('cors')


//for post data
app.use(bodyParser.json())
const {format} = require('path')
const {response} = require('express')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())


app.get('/', function(req, res) {
    mongo.find(function(err, doc) {
        if(err) {
            console.error(err)
        } else{
            req.send()
        }
    })

})
// This has been done for testing purposes, this actually adds the data to the database
// req won't work since we did not create the HTML for the page yet
// at this stage we can only modify the database direcly like this.
app.post('/', function(req, res) {
    const newPLayer = new mongo({_id: '334896431578987231265816', Player_Name: 'John'})
    newPLayer.save(function(err, doc) {
        if(err) 
         console.error(err)
         console.log("Saved " + doc)
         res.status(200)

    })


    console.log(req.body);
    res.json({ status: "ok" });
});

// creating a single document
// const doc1 = new person_doc({ name: 'Jack',age:32,Gender:"Male",Salary:3456 }
// );
// // adding one document in the collection
// doc1.save(function (err,doc)
// {
// if (err) return console.error(err);
// console.log("saving single document",doc)
// })

app.post('/', function(req, res) {
    
      console.log("ref", req.body)
        let newPlayer = new mongo(req.body)
        newPlayer.save()
        .then(res => {
            res.status(200)
        })
        .catch(err => {
            // req.status(400).json(err)
        })
})

app.post('/updatePlayer', async function(req, res) {
        let id = req.params.id;
        console.log(req.param.body);
        res.send(id)
        let newPlayer = new mongo(req.body)
        await newPLayer.save();
        mongo.findByIdAndUpdate(id,
            {
                Player_Name: updateStats.Player_Name,
            },
            await newPLayer.save()
            )
        res.send(player)

  
 
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