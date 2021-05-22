const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const { watch, src, dest, series } = require('gulp');
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

var sass2css= gulp.task ('sass2css', async function(){
    return src("src/app.scss")
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

exports.default = function() {
    watch("src/.scss", sass2css);
}

exports.sass2css = sass2css;






