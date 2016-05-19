var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var TwitterClient = require('./twitter-client');

var PORT = parseInt(process.argv[2], 10) || 9000;
var screenNameRegex = /^@battleshipbot/;
var TC = new TwitterClient();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket) {
	console.log('a user connected');

	socket.on('newMessage', function(message) {
		console.log('new message received!', message);

		// Allow a user to guess a location in the chat
		// window (e.g. '@battleshipbot D15')
		if (screenNameRegex.test(message) && TC.started) {
			TC.postTweet(message);
		}

		// echo globally (all clients)
		socket.broadcast.emit('newMessage', message);
	});
});

// start listening for tweets
TC.start();

http.listen(PORT, function() {
	console.log('Server listening on port %s', PORT);
});