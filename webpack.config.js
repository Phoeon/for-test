var htmlWebpackPlugin = require("html-webpack-plugin");
var extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	plugins : [new htmlWebpackPlugin({
		template : "./index.html" 
	}),new extractTextPlugin("[hash]-bundle.css")],
	entry : {
		main:"./main.js",
	},
	output : {
		path:"./dist/",
		filename :"[hash]-bundle.js"
	},
	module : {
		loaders : [
			{
				//打包css
				test : /\.css$/ ,
				loader : extractTextPlugin.extract("css")
			},
			{
				//打包html
				test : /\.html/,
				loader : "html"
			},
			{
				//打包图片或者字体
				test : /\.(gif|jpg|png|woff|svg|eot|ttf)/,
				loader : "file-loader?name=static/[name].[ext]"
			}
		]
	},
	resolve : {
	}
}