const mongo = require('./mongoDBConnection')
let model = require('./CricketSchema')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const cors = require('cors')

//for post data
// const {format} = require('path')
// const {response} = require('express')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


app.get('/display', function(req, res) {
    console.log("Getting Data")
    model.find(function(err, doc) {
        if(err) {
            console.error(err)
        } else{
            console.log(doc)
            const myJSON = JSON.stringify(doc);
            res.json(doc)
        }
    })

})

app.post('/addplayer', function(req, res) {
    
      console.log("req body", req.body)
        let newPlayer = new model(req.body)
        console.log("newPlayer", newPlayer)
        newPlayer.save(function(err, doc) {
            if(err) 
             console.error("Nothing Saved" + err)

             console.log("Document Saved")
             res.status(200)
    
        })
})

app.get('/getplayer/:id',function(req, res) {
    var id = req.params.id;
    model.findById(id, function(err, doc) {
        if(err) 
         console.error("Nothing Found" + err)

         console.log("Document Found " + doc)
         
         res.json(doc)
        //  res.status(200)

    })
});
   

app.post('/updateplayer/:id', function(req, res) {
        let id = req.params.id;
        let updatePlayer = new model(req.body)
        model.findByIdAndUpdate(id, {
            Player_Name: updatePlayer.Player_Name,
            Matches: updatePlayer.Matches,
            Inns: updatePlayer.Inns,
            Runs: updatePlayer.Runs,
            HS: updatePlayer.HS,
            Ave: updatePlayer.Ave,
        },
        function(err, doc) {
            if (err) { console.error(err) }
            else { res.status(200).json(doc) }
        }
        )
})

app.post('/deleteplayer/:id',function(req, res) {
    let id = req.params.id;
    console.log("Method called")
        model.findByIdAndDelete(id,function (err, doc) {
            if (err){
                console.log(err)
            }
            else{
                // res.status(200)
                res.send(doc.Player_Name + ' Deleted');
            }
    }
)
   
   });
// Remind to start server command => npm start
app.listen(5000, () => {   
    console.log('Listening on port 5000')

})