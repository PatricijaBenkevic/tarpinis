'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync");

gulp.task("serve", gulp.series(function(done){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
 
    gulp.watch("scss/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
 
    done()
}))

gulp.task("sass", gulp.series(function(done){
    return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
}))

gulp.task('default', gulp.parallel('serve', function () {
    gulp.series('serve')
}));