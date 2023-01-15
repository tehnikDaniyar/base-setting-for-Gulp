import * as  gulp from 'gulp';
import path from './gulp/config/path.js';

global.app = {
	gulp: gulp,
	path: path,
};

//======tasks===============
import { copy } from './gulp/tasks/copy.js';

gulp.task('defoult', copy)