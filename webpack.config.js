var path = require("path");

module.exports = {
	entry: "./index",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "public", "js")
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	}
};