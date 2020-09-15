module.exports = function(app) {
	app.get('/' , (request, response) => {
		response.send('<h1>Project-Famili-Service</h1>');
	});

	app.use('/auth', require('./authRoute'));
	app.use('/profile', require('./profileRoute'));
	app.use('/home', require('./homeRoute'));
	app.use('/order', require('./orderRoute'));

	app.use('*', function(request, response) {
		response.send('<h1>404</h1>');
	});
}