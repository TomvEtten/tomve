let express = require('express')
let routes = require("./src/routes/routes")
let bodyParser = require('body-parser')
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tomve' , { useNewUrlParser: true });

let app = express();

var port = process.env.PORT || 8080

app.use('/api', routes)

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

app.get('/', (req, res) =>  res.json({
    welcome: 'Welcome to tomve.nl!',
    message: 'Please visit /api'
}))

app.listen(port, function () {
    console.log("Running on port : " + port)
});
