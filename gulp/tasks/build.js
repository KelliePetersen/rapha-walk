const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      usemin = require('gulp-usemin'),
      htmlmin = require('gulp-htmlmin'),
      rev = require('gulp-rev'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      del = require('del'),
      browserSync = require('browser-sync').create();

gulp.task('previewBuild', () => 
  browserSync.init({ 
    notify: false, 
    server: { baseDir: 'docs' } 
  })
);

gulp.task('deleteDist', () => del('./docs'));

gulp.task('copyFiles', () => {
  const paths = [
    './app/**/*',
    '!./app/index.html',
    '!./app/src/**',
    '!./app/temp/**'
  ];
  return gulp.src(paths)
    .pipe(gulp.dest('./docs'));
});

gulp.task('minifyImages', () =>
  gulp.src(['./app/src/img/**/*', '!./app/src/img/icons', '!./app/src/img/icons/**'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/src/img'))
);

gulp.task('usemin', () =>
  gulp.src('./app/*.html')
    .pipe(usemin({
      css: [function() {return cleanCSS({ compatibility: 'ie8' })}, function() {return rev()}],
      html: [function() {return htmlmin({ collapseWhitespace: true })}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./docs'))
);

gulp.task(
  'build', 
  gulp.series(
    'deleteDist', 
    'copyFiles', 
    'sprite', 
    'minifyImages', 
    gulp.parallel('buildCSS', 'buildJS'), 
    'usemin'
  )
);