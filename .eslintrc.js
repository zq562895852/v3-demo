module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [ 'plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended' ],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		// 缩进设为2
		indent: [ 'off', 2 ],
		// 加分号和不加都可
		semi: 0,
		/**
		 *  引号类型 无法识别模板字符串，关闭掉
		 *  "quotes": [0, "double"] // 0 违反错误不处理
			"quotes": [1, "double"] // 1 违反错误警告
			"quotes": [2, "double"] // 2 违反错误报错并阻止进程
		 */
		"quotes": [0, "single"],//引号类型 `` "" ''
		// 关闭any类型警告
		'@typescript-eslint/no-explicit-any': [ 'off' ],
		// 关闭tab报错
		'no-tabs': 'off',
		'space-before-function-paren': 'off',
		// // 代码块中避免多余留白
		'padded-blocks': 'off',
		// 最多出现3个连续空行
		'no-multiple-empty-lines': [
			'error',
			{
				max: 3,
				maxBOF: 1
			}
		],
		// html属性必须换行
		'vue/max-attributes-per-line': 'off',
		// 没有内容的元素需要使用闭合标签
		'vue/html-self-closing': 'off',
		// 允许使用 async-await
		'generator-star-spacing': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	},
	overrides: [
		{
			files: [ '**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)' ],
			env: {
				jest: true
			}
		}
	]
};
