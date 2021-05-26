const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const {watch} = require('gulp');
const htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('cssmin', async function () {
    gulp.src('public/stylesheets/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify', async function (){
	return gulp.src('public/*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('dist/html'));
});

gulp.task ('sass2css', async function(){
    return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
   	.pipe(gulp.dest("./public/stylesheets"))
});

gulp.task ('image', async function(){
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

//watch task
gulp.task('watch', function(){
	gulp.watch('src/**/*.scss', gulp.series('sass2css'));
	gulp.watch('src/images/*', gulp.series('image'));
	gulp.watch('public/html/*.html', gulp.series('minify'));
	gulp.watch('public/stylesheets/*.css', gulp.series('cssmin'));
});

gulp.task('default', gulp.parallel('sass2css', 'minify', 'image', 'cssmin', 'watch'));




