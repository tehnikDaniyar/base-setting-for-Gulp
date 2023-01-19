const srcFolder = './src';
const buildFolder = './dist';

export const path = {
	build: {
		files: `${buildFolder}/files/`,
		html: `${buildFolder}`,
		img: `${buildFolder}/img/`,
	},
	src: {
		img: `${srcFolder}/img/**/*.*`,
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
	},
	whatch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
	},
	clean: {
		files: `${buildFolder}`,
	},
	server: {
		html: `${buildFolder}/`,
	},
};