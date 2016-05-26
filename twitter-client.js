var Twitter = require('twitter');
var ENV = process.env;

function handleError(error) {
	if (error) {
		this.started = false;
		throw error;
	}
}

function handleStreamEnd(resp) {
	console.log('The stream has ended...\n');
	console.log(resp);
	this.started = false;
}

function handleTweet(tweet) {
	var user, message;

	if (tweet) {
		message = tweet.text;
		user = tweet.user && tweet.user.screen_name;
		this.following = (tweet.friends) ? tweet.friends : this.following;
	}

	if (user && message) {
		// TODO - update game state
	}
}

function TwitterClient(opts) {
	opts = opts || {};
	var tweetHandler = (typeof opts.handleTweet === 'function') ? opts.handleTweet : handleTweet;

	/**
	 * Cache the accounts we're following since
	 * they are only provided when the stream is
	 * initialized.
	 * 
	 * @type {Array}
 	 */
	this.following = [];

	this.client = new Twitter({
		consumer_key: ENV.TWITTER_CONSUMER_KEY,
		consumer_secret: ENV.TWITTER_CONSUMER_SECRET,
		access_token_key: ENV.TWITTER_ACCESS_TOKEN,
		access_token_secret: ENV.TWITTER_ACCESS_TOKEN_SECRET
	});

	this.started = false;
	this.handleTweet = tweetHandler.bind(this);
	this.handleError = handleError.bind(this);
	this.handleStreamEnd = handleStreamEnd.bind(this);
};

TwitterClient.prototype.start = function() {
	console.log('starting the client...');
	var self = this;
	this.started = true;
	this.client.stream('user', function(stream) {
		stream.on('data', self.handleTweet);
		stream.on('error', self.handleError);
		stream.on('end', self.handleStreamEnd);
	});
};

TwitterClient.prototype.postTweet = function(tweet) {
	if (tweet && this.client) {
		console.log('posting a tweet... - [ %s ]', tweet);
		this.client.post('statuses/update', {status: tweet}, handleError);
	}
};

module.exports = TwitterClient;
