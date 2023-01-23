import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css";
import wepcss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { soursemap: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SASS",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(sass({
			outputStyle: 'expanded',
		}))
		.pipe(app.plugins.replace(/\/base-setting-for-Gulp\/src\/img/gi, '../img'))
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			))
		.pipe(
			app.plugins.if(
				app.isBuild,
				wepcss({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				})))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoPrefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true,
				})))
		.pipe(app.gulp.dest(app.path.build.scss))
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()
			))
		.pipe(
			rename({
				extname: ".min.css",
			}))
		.pipe(app.gulp.dest(app.path.build.scss))
		.pipe(app.plugins.browserSync.stream());
}