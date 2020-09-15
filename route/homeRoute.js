var router = require('express').Router();
var firebase = require('./firebase');
var bodyParser = require('body-parser');

var database = firebase.firestore();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const homeVersion = 'v1';

router.get(`/${homeVersion}/notification/:id`, (request, response) => {
	var id = request.params.id;

});

router.post(`/${homeVersion}/notification/:id`, (request, response) => {
	var id = request.params.id;
});

router.get(`/${homeVersion}/message/:id`, (request, response) => {
	var id = request.params.id;
});

router.post(`/${homeVersion}/message/:id`, (request, response) => {
	var id = request.params.id;
});