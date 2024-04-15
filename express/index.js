const express = require('express');
const app = express();
const path = require('path');

//npm run dev 

app.use("/html2", express.static(path.join(__dirname, "html")));

app.get('/', function(req, res){
    console.log("경로 : ", path.join(__dirname, "html"));
    res.send("Hello World")
});

app.get('/banana', function(req, res){
    res.send("banana")
});

app.get('/apple', function(req, res){
    res.send("사과")
});

app.get('/grape/:name', function(req, res){
    console.log('path', req.path);
    console.log('params', req.params);
    console.log('query', req.query);

    res.send("포도페이지입니다.");
});

app.listen(3000);