const mongo = require('./mongoDBConnection')
const express = require('express')
const bodyParser = require('body-parser')
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
            res.json(doc)
        }
    })

})
app.post('/', function(req, res) {
    console.log(req.body);
    res.json({ status: "ok" });
});

app.post('/addPlayer', function(req, res) {
      console.log("ref", req.body)
        let newPlayer = new Player(req.body)
        newPlayer.save()
        .then(item => {
            req.status(200)
        })
        .catch(err => {
            req.status(400)
        })
})

app.post('/updatePlayer', async function(req, res) {
        let id = req.params.id;
        console.log(req.param.body);
        res.send(id)
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