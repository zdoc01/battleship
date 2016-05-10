var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var PORT = parseInt(process.argv[2], 10) || 9000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket) {
	console.log('a user connected');

	socket.on('newMessage', function(message) {
		console.log('new message received!', message);
		// echo globally (all clients)
		socket.broadcast.emit('newMessage', message);
	});
});

http.listen(PORT, function() {
	console.log('Server listening on port %s', PORT);
});