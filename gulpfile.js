import gulp from 'gulp';
import { path } from './gulp/config/path.js';

global.app = {
	gulp: gulp,
	path: path,
};

//======tasks===============
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';

//=====watcher==============
const watcher = () => {
	gulp.watch(path.whatch.files, copy);
	gulp.watch(path.whatch.html, html);

};

const mainScript = gulp.parallel(copy, html)
const dev = gulp.series(reset, mainScript, watcher)

gulp.task('default', dev);