const express = require("express");
const auth = require("../../middleware/auth");
const Buses = require("../../models/Buses")
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const URL = require('../../config/default.json')
// console.log(URL.mongoURI)

router.get('/', (req, res) => res.send("bus part "))

router.get("/:start/:end", async (req, res) => {
    const stops_=[req.params.start,req.params.end]
    try {
        const buses = await Buses.find({stops:{$all:stops_}})
        if (buses.lenght>0){
            res.send([])
        }else{
            finalBus=[]
            for (bus of buses){
                counter = 0
                tempStops = []
                stops=bus.stops
                for (j of stops){
                    if (j==stops_[counter]){
                        tempStops.push(j)
                        counter++
                    }
                }
                if(JSON.stringify(tempStops)==JSON.stringify(stops_)){
                    finalBus.push(bus)
                }

            }
            res.send(finalBus)
        }

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});


module.exports = router;
