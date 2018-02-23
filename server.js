const express = require('express');
const jso = require('request');
const app = express();
const port = process.env.PORT || 5000;


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/api', function(req, res){
  jso('https://contesttrackerapi.herokuapp.com/android/',function(err, rsp, bd){
        res.send(JSON.parse(bd));
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));