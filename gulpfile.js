import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
};

//======tasks===============
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { img } from './gulp/tasks/img.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';

//=====watcher==============
const watcher = () => {
	gulp.watch(path.whatch.files, copy);
	gulp.watch(path.whatch.html, html);
	gulp.watch(path.whatch.scss, scss);
};

//=====scripts==============
const mainScript = gulp.parallel(copy, html, img, scss)
const dev = gulp.series(reset, mainScript, gulp.parallel(watcher, server))

gulp.task('default', dev);