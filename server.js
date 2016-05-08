/**
 * Created by Cayden on 16/5/8.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleWare = require('./middleware.js');

app.use(middleWare.logger);

app.get('/about', middleWare.requireAuthentication, function (req, res) {
    res.send("This is a page of Cayden Li!!!!");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
    console.log("Express server started on port " + PORT + "!");
});

