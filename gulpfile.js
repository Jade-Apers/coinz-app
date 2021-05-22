const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const { watch } = require('gulp');

var sass2css= gulp.task ('sass2css', async function(){
    return gulp.src("src/app.scss")
    .pipe(sass().on('error', sass.logError))
   	.pipe(gulp.dest("./public/stylesheets"))
});

var image= gulp.task ('image', async function(){
	gulp.src("src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', async function() {
	gulp.watch("src/app.scss", sass2css);
	gulp.watch("src/images/*", image)
})


