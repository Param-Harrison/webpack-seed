var path = require('path');
var webpack = require('webpack');
var ResolverPlugin = require("webpack/lib/ResolverPlugin");

var config = {
	cache: true,
	debug: true,
	devtool: 'source-map',
	'output-pathinfo': true,
	context: __dirname,
	entry: ['webpack/hot/dev-server', './app/app.js'],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.scss$/, loader: "style-loader!css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true"},
			{test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file"},
			{test: /\.html$/, loader: "ngtemplate?relativeTo=" + path.join(__dirname, 'app/') + "!raw"},
			{test: /\.(ttf|otf|woff|woff2|eot)([\?#].*)?$/, loader: "file"}
		]
	},
	// Let webpack know where the module folders are for bower and node_modules
	resolve: {
		modulesDirectories: ['node_modules', 'lib/bower_components'],
		alias: {
			npm   	: __dirname + '/node_modules',
			vendor	: __dirname + '/app/vendor',
			bower 	: __dirname + '/app/lib/bower_components',
			views 	: __dirname + '/app/views',
			styles 	: __dirname + '/app/styles',
			modules : __dirname + '/app/styles/modules',
			lib		: __dirname + '/app/lib'
		}
	},
	plugins: [
		// This ensures that in EVERY module, _ will be available as lodash, automagically
		new webpack.ProvidePlugin({
			"_": "lodash"
		}),
		// This is to help webpack know that it has to load the js file in bower.json#main
		new ResolverPlugin(
			new ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
		)
	]
};

module.exports = config;
