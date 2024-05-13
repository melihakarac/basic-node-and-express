// require('dotenv').config();
// let bodyParser = require('body-parser');

let express = require('express');
let app = express();

// app.get('/', function (req, res) {
//     res.send('Hello Express World');
// });

// app.get('/', function (req, res) {
//     absolutePath = __dirname + '/views/index.html'
//     res.sendFile(absolutePath);
// });

// app.use("/public", express.static(__dirname + "/public"));

// app.get('/json', function (req, res) {
//     res.json({"message": "Hello json"});
// })

// app.get('/json', function (req, res) {
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//         res.json({"message": "Hello json".toUpperCase()});

//     } else {
//         res.json({"message": "Hello json"});
//     }
// })

// app.use(function (req, res, next) {
//     console.log(req.method + ' ' + req.path + ' - ' + req.ip);
//     next();
// })

// app.get('/now', function (req, res, next) {
//     req.time = new Date().toString();
//     next();
// }, function (req, res) {
//     res.json({time: req.time})
// })

// app.get('/:word/echo', function (req, res) {
//     word = req.params.word;
//     res.json({echo: word});
// })

// app.get("/name", function (req, res) {
//     var {
//         first : firstName,
//         last : lastName
//     } = req.query;
//     res.json({name: `${firstName} ${lastName}`});
// });

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

// app.post('/name', function (req, res) {
//     var string = req.body.first + " " + req.body.last;
//     res.json({name: string});
// })

module.exports = app;
