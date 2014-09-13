var express = require('express');
var app = express();
var jade = require('jade');

app.set('views', '../jadeTemp');
app.set('view engine', 'jade');
app.get('/', function(req, res) {
    console.log("User has joined");
    res.render('index', {
        title: 'Paste The World',
        message: 'Welcome to the magic of "Pasteri.no" with Sam and Deano.'
    });
}).listen(3000);

console.log("Server is now running on LocalHost:3000");
