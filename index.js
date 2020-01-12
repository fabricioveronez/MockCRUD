var express = require('express')
var bodyParser = require('body-parser')
var repository = require('./repository');
var app = express()

app.use(bodyParser.json())

app.post("/:collection",function (req, res) {
    var data = req.body;
    var returnValue = repository.insert(req.params.collection, data);
    res.status = 204;
    res.json(returnValue);
});

app.get("/:collection",function (req, res) {
    
    var returnValue = repository.get(req.params.collection);    
    res.json(returnValue);
});

app.delete("/:collection", function (req, res) {
    
    repository.clear(req.params.collection);    
    res.end();
});

app.listen(9090, () => {
    console.log('Running...');
})