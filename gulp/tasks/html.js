import fileinclude from "gulp-file-include";
import webphtml from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";


export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(fileinclude())
		.pipe(app.plugins.replace(/\/base-setting-for-Gulp\/src\/img/gi, 'img'))
		.pipe(webphtml())
		.pipe(versionNumber({
			'value': '%DT%',
			'append': {
				'key': '_v',
				'cover': 0,
				'to': [
					'css',
					'js',
				]
			},
			'output': {
				'file': 'gulp/version.json'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());

};
