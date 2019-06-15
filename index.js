const express = require('express')
const routes = require("./src/routes/routes")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const expressValidator = require('express-validator')
mongoose.connect('mongodb://tomve.nl/tomve' , { useNewUrlParser: true });

const port = process.env.PORT || 8080
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

app.use(expressValidator())

app.use('/api', routes)

app.get('/', (req, res) =>  res.json({
    welcome: 'Welcome to tomve.nl!',
    message: 'Please visit /api'
}))

app.listen(port, function () {
    console.log("Running on port : " + port)
});
