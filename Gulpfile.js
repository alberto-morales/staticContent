'use strict';
var gulp = require('gulp'),
connect = require('gulp-connect'),
stylus = require('gulp-stylus'),
nib = require('nib'),
webserver = require('gulp-webserver'),
historyApiFallback = require('connect-history-api-fallback');
// Servidor web de desarrollo
gulp.task('server', function() {
  gulp.src('./app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 8000
    }));
});
// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
gulp.src('./**/*.html')
.pipe(connect.reload());
});
//Busca en las carpetas de estilos y javascript los archivos que hayamos creado
//para inyectarlos en el index.html

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
	gulp.watch(['./**/*.html'], ['html']);
	gulp.watch(['./stylesheets/**/*.css'], ['html']);
	gulp.watch(['./scripts/**/*.js', './Gulpfile.js'], ['html']);
});

gulp.task('default', ['server', 'watch']);

