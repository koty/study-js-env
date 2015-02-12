'use strict';
var gulp = require("gulp");
gulp.task('foo', function() {
    console.log('Hello World!');
});
gulp.task('default', function() {
    gulp.run('foo');
    gulp.run('typescript-compile');
});

var tsc = require('gulp-typescript');
var concat = require('gulp-concat');

gulp.task('typescript-compile', function(){
  gulp.src(['./main.ts'])
    // --outオプションでひとまとめにコンパイル
    .pipe(tsc({ target: "ES5", removeComments: true, sortOutput: true }))
    .js
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});
