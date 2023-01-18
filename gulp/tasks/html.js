import fileinclude from "gulp-file-include";
export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/\/base-setting-for-Gulp\/src\/img/gi, 'img'))
		.pipe(app.gulp.dest(app.path.build.html));
};
