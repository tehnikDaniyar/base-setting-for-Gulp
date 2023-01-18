const srcFolder = './src';
const buildFolder = './dist';

export const path = {
	build: {
		files: `${buildFolder}/files/`,
		html: `${buildFolder}`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/*.html`,
	},
	whatch: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/**/*.html`,
	},
	clean: {
		files: `${buildFolder}`,
	}

}