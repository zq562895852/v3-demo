const env = process.env.NODE_ENV === 'production';
const path = require('path');
//  主题配置
const theme = require('./src/theme/theme.js');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
	// lintOnSave: false,
	css: {
		loaderOptions: {
			less: {
				// 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
				// lessOptions: {
				modifyVars: theme.theme

				// {
				// 	// 或者可以通过 less 文件覆盖（文件路径为绝对路径） 注意引号
				// 	hack: `true; @import '${resolve('src/assets/less/variables.less')}'`
				// }
				// },
			}
		}
	},
	parallel: require('os').cpus().length > 1,
	devServer: {
		hot: true,
		proxy: {
			'/api': {
				// target: 'http://192.168.2.58:8089/api/factoring', //代理
				target: 'https://test3.msyuns.com/jdy/', //代理
				// http://192.168.2.57:8080/
				// target: 'http://192.168.2.57:8080/', //代理
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
};
