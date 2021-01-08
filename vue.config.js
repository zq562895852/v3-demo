const env = process.env.NODE_ENV === 'production';
const path = require('path');
//  主题配置
const theme = require('./src/theme/theme.js');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	// publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
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
	
};
