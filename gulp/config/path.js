const srcFolder = './src';
const buildFolder = './dist';

export const path = {
	build: {
		files: `${buildFolder}/files/`,
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
	},
	whatch: {
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: {
		files: `${buildFolder}`,
	}

}