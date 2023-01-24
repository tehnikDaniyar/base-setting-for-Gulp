export const zip = () => {
	del(`./${app.path.rootFolder}.zip`);
	return app.gulp.src(`${app.path.buildfolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			})))
		.pipe(app.gulp.dest('./'));
}