const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const image = require('gulp-image');

gulp.task('minify', () => {
    return gulp.src('*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/html'));
});

gulp.task('css', function(){
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('img', function(){
    return gulp.src('img/* ')
        .pipe(image())
        .pipe(gulp.dest('build/img'))
});

gulp.task('default', gulp.parallel('minify', 'css', 'img'))