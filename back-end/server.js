const express = require('express')
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 8081;


app.listen(port, function() {
    console.log("App listening on port " + port);
});
