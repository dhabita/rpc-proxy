var express = require("express");
var app = express();
var path = require("path");
const port = 1111;
var timeout = require('connect-timeout');
app.use(timeout('10s'));
const axios = require('axios').default;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// parsing the request bodys


 var chart = require("./chart");






app.use("/", async function(req, res) {
    let starttime = req.query.startTime;
    let endtime = req.query.endTime;
    let cont = req.query.contract;
    // let rr = await con2.query('select time,open,high,low,close,volume from c_btcusdt where time<? and time>? order by time asc',[endtime,starttime]);
    //  console.log(req.query);
    // console.log(req.params);
    res.setHeader('Content-Type', 'application/json');
    
    let d = await chart.cek(starttime,endtime,cont);
   
    return res.json(d);



});


app.listen(port, () => console.info(`App listen on port ${port}`));