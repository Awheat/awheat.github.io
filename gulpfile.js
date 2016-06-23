/*
 *�����ļ�
 *
 * */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

// ʱʵ�����ļ���ˢ��
gulp.task('browser-sync', function(){
    var files = [
        'dist/css',
        'dist/js'
    ];
    browserSync.init(files,{
        server:{
            baseDir:'./'
        }
    });
});

// ��ʽ����
gulp.task('css', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        //.pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({message: 'css task ok'}));
});

// js����
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        //.pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({message: 'js task ok'}));
});

// ͼƬ����
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({message: 'images task ok'}));
});

// ���ͼƬ����ʽ��js
gulp.task('clean', function () {
    return gulp.src(['dist/css', 'dist/js', 'dist/images'], {read: false}).pipe(clean());
});

// �ļ���������
gulp.task('watch',['browser-sync'],function(){
    gulp.watch('src/sass/*.scss',function(){
        gulp.run('css');
    })
});

// Ĭ������
gulp.task('default', ['clean'], function () {
    gulp.start('css', 'js', 'images');
});