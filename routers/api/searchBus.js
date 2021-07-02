const express = require("express");
const auth = require("../../middleware/auth");
const Buses = require("../../models/Buses")
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const URL = require('../../config/default.json')
// console.log(URL.mongoURI)

router.get('/', (req, res) => res.send("bus part "))

router.get("/:start/:end", async (req, res) => {
    try {
        const start = await Buses.find({ stops: req.params.start })
        const end = await Buses.find({ stops: req.params.end })
        if (start.length == 0 || end.length == 0) { return res.status(400).json({ msg: 'There is no Buses for this destination.' }) }
        else {
            res.json(start)
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});


module.exports = router;
