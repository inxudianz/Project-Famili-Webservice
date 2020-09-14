var express = require('express');
var cors = require('cors');
var app = express()
var router = express.Router();

var router = require('./route/mainRoute')(app);
app.use(cors);

app.listen(5000, () => {
	console.log("Server is On");
})