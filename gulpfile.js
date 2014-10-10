var gulp        = require('gulp'),
    bowerSrc    = require('gulp-bower'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat');

gulp.task('bower', function () {
    return bowerSrc();
});

gulp.task('bower-extract-bootstrap-fonts', ['bower'], function () {
    return gulp
        .src([
            'bower_components/bootstrap/fonts/*',
            'bower_components/bootstrap-material-design/template/material/fonts/*',
        ])
        .pipe(gulp.dest('static/fonts/'));
});

gulp.task('bower-concat-css', ['bower'], function () {
    return gulp
        .src([
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.css',
            'bower_components/pace/themes/blue/pace-theme-barber-shop.css',
            'bower_components/bootstrap-material-design/template/material/css/material.css',
            'bower_components/bootstrap-material-design/template/material/css/material.css',
            'bower_components/bootstrap-material-design/template/material/css/ripples.css',
        ])
        //.pipe(concat('bower-deps.min.css'))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('bower-concat-js', ['bower'], function () {
    return gulp
        .src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/pace/pace.js',
            'bower_components/bootstrap/js/carousel.js',
            'bower_components/bootstrap-material-design/template/material/js/material.js',
            'bower_components/bootstrap-material-design/template/material/js/ripples.js',
        ])
        .pipe(gulp.dest('static/js'));
});

gulp.task('scripts', ['bower-concat-js', 'bower-concat-css', 'bower-extract-bootstrap-fonts'], function () {
    return gulp.
        src('static/js/src/*.js')
        .pipe(gulp.dest('static/js/'));
});


gulp.task('default', ['scripts'], function () {
});
