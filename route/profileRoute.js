var router = require('express').Router();
var firebase = require('./firebase');
var bodyParser = require('body-parser');
const { auth } = require('./firebase');
const e = require('cors');

var database = firebase.firestore();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const authVersion = 'v1';

router.get(`/${authVersion}/detail/:id`, (request, response) => {
	var id = request.params.id;
	if(id != null) {
		database.collection('user').doc(id)
		.get()
		.then((result) => {
			if(!result.exists) {
				response.status(500).send('Bad Data!');
			} else {
				response.send(result.data());
			}
		})
		.catch((error) => {
			response.status(500).send(error);
		});
	}
});

router.put(`/${authVersion}/save` , (request, response) => {
	var body = request.body;
	if(body.userID != null) {
		if(body.name != null && body.phoneNumber != null) {
			database.collection('user').doc(body.userID)
			.update({
				name : body.name,
				phoneNumber : body.phoneNumber
			})
			.then((result) => {
				response.send(result);
			})
			.catch((error) => {
				response.status(500).send(error);
			});
		} else {
			response.status(500).send('Invalid');
		}
	} else {
		response.status(500).send('Invalid');
	}
});

router.get(`/${authVersion}/help` , (request, response) => {
	var helpDoc = 'help';
	database.collection('information').doc(helpDoc)
	.get()
	.then((result) => {
		if(!result.exists) {
			response.status(500).send('Invalid');
		} else {
			response.send(result.data());
		}
	})
	.catch((error) => {
		response.status(500).send(error);
	})
});

router.get(`/${authVersion}/tos` , (request, response) => {
	var tosDoc = 'tos';
	database.collection('information').doc(tosDoc)
	.get()
	.then((result) => {
		if(!result.exists) {
			response.status(500).send('Invalid');
		} else {
			response.send(result.data());
		}
	})
	.catch((error) => {
		response.status(500).send(error);
	});
});

router.get(`/${authVersion}/policy` , (request, response) => {
	var policyDoc = 'policy';
	database.collection('information').doc(policyDoc)
	.get()
	.then((result) => {
		if(!result.exists) {
			response.status(500).send('Invalid');
		} else {
			response.send(result.data());
		}
	})
	.catch((error) => {
		response.status(500).send(error);
	});
});

module.exports = router;