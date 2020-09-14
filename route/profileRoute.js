var router = require('express').Router();
var firebase = require('./firebase');
var bodyParser = require('body-parser');
const { auth } = require('./firebase');

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
				response.send("NO DATA");
			} else {
				response.send(result.data());
			}
		})
		.catch((error) => {
			response.send(error);
		});
	}
});

router.put(`/${authVersion}/save` , (request, response) => {

});

router.get(`/${authVersion}/help` , (request, response) => {

});

router.get(`/${authVersion}/tos` , (request, response) => {

});

router.get(`/${authVersion}/policy` , (request, response) => {

});

module.exports = router;