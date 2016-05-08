/**
 * Created by Cayden on 16/5/8.
 */
var express = require('express');
var app = express();
var PORT = 3000;

var middleWare = {
    reuireAuthentication: function (req, res, next) {
        console.log("Private route hit!");
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' +req.method + ' Path: ' + req.originalUrl + ' Date: ' + new Date().toString());
        next();
    }
};

// app.use(middleWare.reuireAuthentication);
app.use(middleWare.logger);

// app.get('/', function (req, res) {
//    res.send("Hello Express");
// });

app.get('/about', middleWare.reuireAuthentication, function (req, res) {
    res.send("This is a page of Cayden Li!!!");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
    console.log("Express server started on port " + PORT + "!");
});

