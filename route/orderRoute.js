var router = require('express').Router();
var firebase = require('./firebase');
var bodyParser = require('body-parser');
const { route } = require('./profileRoute');

var database = firebase.firestore();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const orderVersion = 'v1';

route.get(`/${orderVersion}/history/:id`, (request, response) => {
	var id = request.params.id;
});

route.post(`/${orderVersion}/history/:id`, (request, response) => {
	var id = request.params.id;
});

route.get(`/${orderVersion}/ongoing/:id`, (request, response) => {
	var id = request.params.id;
});

route.post(`/${orderVersion}/ongoing/:id`, (request, response) => {
	var id = request.params.id;
});