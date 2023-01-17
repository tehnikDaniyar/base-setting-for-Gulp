import gulp from 'gulp';
import { path } from './gulp/config/path.js';

global.app = {
	gulp: gulp,
	path: path,
};

//======tasks===============
import { copy } from './gulp/tasks/copy.js';

//=====watcher==============
const watcher = () => {
	gulp.watch(path.whatch.files, copy);
};

const dev = gulp.series(copy, watcher)

gulp.task('default', dev);