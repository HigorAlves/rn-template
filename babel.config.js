module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				cwd: 'babelrc',
				extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
				alias: {
					'@': './src',
					'@Components': './src/Components',
					'@Config': './src/Config',
					'@Containers': './src/Containers',
					'@Hooks': './src/Hooks',
					'@Lib': './src/Lib',
					'@Routers': './src/Routers',
					'@Services': './src/Services',
					'@Store': './src/Store',
					'@Views': './src/Views',
				},
			},
		],
		'jest-hoist',
	],
};
