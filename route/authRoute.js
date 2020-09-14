var router = require('express').Router();
var firebase = require('./firebase');
var bodyParser = require('body-parser');

var database = firebase.firestore();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const authVersion = 'v1';

router.post(`/${authVersion}/register`, (request, response) => {
	var body = request.body;
	if(body.name != null && body.userID != null && body.phoneNumber != null) {
		database.collection('user')
		.doc(body.userID)
		.set({
			name: body.name,
			phoneNumber: body.phoneNumber
		})
		.then((result) => {
			response.send(result);
		})
		.catch((error) => {
			response.status(500).send(error);
		})
	} else {
		response.status(500).send('Invalid');
	}
});

module.exports = router;
