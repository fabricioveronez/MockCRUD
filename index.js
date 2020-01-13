var express = require('express')
var bodyParser = require('body-parser')
var repository = require('./repository');
var app = express()

app.use(bodyParser.json())

app.post("/api/:collection",function (req, res) {
    var data = req.body;
    var returnValue = repository.insert(req.params.collection, data);
    res.status = 204;
    res.json(returnValue);
});

app.get("/api/:collection",function (req, res) {
    
    var returnValue = repository.get(req.params.collection);    
    res.json(returnValue);
});

app.get("/api/:collection/:id",function (req, res) {
    
    var returnValue = repository.getById(req.params.collection, req.params.id);    
    res.json(returnValue);
});

app.delete("/api/:collection", function (req, res) {
    
    repository.clear(req.params.collection);    
    res.end();
});

app.listen(8080, () => {
    console.log('Running...');
})