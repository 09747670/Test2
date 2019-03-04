var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var obfuscateagain =  require('gulp-javascript-obfuscator');
var image = require('gulp-image');

gulp.task('html', function(){
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/html'))
});

gulp.task('css', function(){
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
    return gulp.src('js/*.js')
        .pipe(sourcemaps.init())
        .pipe(obfuscateagain())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
});

gulp.task('img', function(){
    return gulp.src('img/* ')
        .pipe(image())
        .pipe(gulp.dest('build/img'))
});


gulp.task('default',  [ 'html', 'css', 'js', 'img' ]);