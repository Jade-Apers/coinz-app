const imagemin = require('gulp-imagemin');
//const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const gulp = require('gulp');
const { watch } = require('gulp');

//var less = require('gulp-less')
//var livereload = require('gulp-livereload');

sass2css = function(){
    return src("./src/app.scss")
    .pipe(sass().on('error', sass.logError))
   .pipe(dest("./dist"))
}

exports.imagemin = function(){
    gulp.src('./src/images')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = () => (
    watch("./src/**/*.scss", sass2css)
);


 
 /*   gulp.task('less', function() {
        gulp.src('less/*.less')
          .pipe(less())
          .pipe(gulp.dest('css'))
          .pipe(livereload());
      });
       
      gulp.task('watch', function() {
        livereload.listen();
        gulp.watch('less/*.less', ['less']);
      });






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






