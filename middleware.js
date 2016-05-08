/**
 * Created by Cayden on 16/5/8.
 */
module.exports = middleWare = {
    requireAuthentication: function (req, res, next) {
        console.log("Private route hit!");
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: ' +req.method + ' Path: ' + req.originalUrl + ' Date: ' + new Date().toString());
        next();
    }
};