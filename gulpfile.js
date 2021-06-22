'use strict';

// ----- CONFIG CONSTANTS ----- //
const SRC_DIR = "./integration";
const DIST_DIR = "./public";
// -----                  ----- //
 
/**
 * Requires
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const { gulpSassError } = require('gulp-sass-error');
const notify = require("gulp-notify");
const throwError = true;
const rename = require("gulp-rename");
sass.compiler = require('node-sass');

/**
 * CSS task
 */
gulp.task('css', function () {
    return gulp.src(SRC_DIR + '/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
            })
            .on('error', function(err) {
                gulpSassError(throwError);
                this.emit('end');
                return notify().write(err);
            })
        )
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(DIST_DIR + '/css'))
        .pipe(notify({ message: 'CSS tasks complete' }));
});

/**
 * JS task
 */
gulp.task('js', function() {
    return gulp.src(SRC_DIR + '/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest(DIST_DIR + '/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(DIST_DIR + '/js'))
        .pipe(notify({ message: 'JS task complete' }));
});
  
/**
 * Watch CSS an JS
 */
gulp.task('watch', function () {
    gulp.watch(SRC_DIR + '/sass/**/*.scss', gulp.series('css'));
    gulp.watch(SRC_DIR + '/js/**/*.js', gulp.series('js'));
});
