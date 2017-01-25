'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var srcmaps = require('gulp-sourcemaps');
var del = require('del');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('./config.json'));
// var jshint = require('gulp-jshint');

// var srcPaths = {
//   scripts: 'src/js/*.js',
//   images: 'src/images/**/*',
//   styles: 'src/sass/main.scss'
// };

var destPaths = {
  scripts: 'public/js',
  images: 'public/images',
  styles: 'public/css',
  fonts: 'public/fonts'
}
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del([destPaths.scripts, destPaths.images, destPaths.styles, destPaths.fonts]);
});

gulp.task('styles', function() {
  return gulp.src(config.src.styles)
  .pipe(autoprefixer('last 2 version'))
  .pipe(sass())
  .pipe(gulp.dest(destPaths.styles))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cssnano())
  .pipe(gulp.dest(destPaths.styles))
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with srcmaps all the way down 
  return gulp.src(config.src.scripts)
    // .pipe(srcmaps.init())
    // .pipe(concat('main.js'))
    // .pipe(gulp.dest(destPaths.scripts))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(gulp.dest(destPaths.scripts))
    // .pipe(uglify())

    .pipe(concat('main.js'))
    .pipe(gulp.dest(destPaths.scripts))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(destPaths.scripts));
    // .pipe(notify({ message: 'Scripts task complete' }));

    // .pipe(srcmaps.write())
    // .pipe(gulp.dest(destPaths.scripts));
});
 
// Copy all static images 
gulp.task('images', function() {
  return gulp.src(config.src.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(destPaths.images));
});


gulp.task('icons', ['clean'], function() { 
    return gulp.src(config.src.fonts) 
    .pipe(gulp.dest(destPaths.fonts)); 
});

// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(config.src.scripts, ['scripts']);
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.styles, ['styles']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['clean' ,'watch', 'scripts', 'images', 'styles', 'icons']);