var path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'src') + '/app/index.js',
	output:{
		path:path.resolve(__dirname,'dist') + '/app',
		filename:'bundle.js',
		publicPath:'/app/'
	},
	module:{
		loaders:[
		{
			test:/\.jsx?$/,
			include:path.resolve(__dirname,'src'),
			loader:'babel-loader',
			query:{
				presets:['react','env']
			}
		},
		{
			test:/\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		}
		]
	}


};
