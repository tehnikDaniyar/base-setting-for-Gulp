const srcFolder = './src';
const buildFolder = './dist';

export const path = {
	build: {
		files: `${buildFolder}/files/`,
		html: `${buildFolder}`,
		img: `${buildFolder}/img/`,
		scss: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,

	},
	src: {
		img: `${srcFolder}/img/**/*.*`,
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/app.js`,

	},
	whatch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
	},
	clean: {
		files: `${buildFolder}`,
	},
	server: {
		html: `${buildFolder}/`,
	},
};