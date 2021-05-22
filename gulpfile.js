const imagemin = require('gulp-imagemin');
//const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const gulp = require('gulp');
const { watch } = require('gulp');

//var less = require('gulp-less')

sass2css = function(){
    return src("./src/app.scss")
    .pipe(sass().on('error', sass.logError))
   	.pipe(gulp.dest("./public/stylesheets"))
}

/*exports.imagemin = function(){
    gulp.src('./src/images')
    .pipe(imagemin())
    .pipe(gulp.dest('./src/images'))
}*/

exports.default = () => (
    watch("./src/**/*.scss", sass2css)
);





/*


(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminOptipng()
		]
	});

	console.log('Images optimized!');
})();

(async () => {
	await imagemin(['images/*.jpg'], {
		destination: 'build/images',
		plugins: [
			imageminMozjpeg()
		]
	});

	console.log('Images optimized');
})();

(async () => {
	await imagemin(['images/*.svg'], {
		destination: 'build/images',
		plugins: [
			imageminSvgo({
				plugins: extendDefaultPlugins([
					{name: 'removeViewBox', active: false}
				])
			})
		]
	});

	console.log('Images optimized');
})();*/






