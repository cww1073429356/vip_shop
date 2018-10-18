const gulp = require('gulp'),
    babel = require('gulp-babel'), // es6 转es5
    connect = require('gulp-connect'), // 开启服务器
    uglify = require('gulp-uglify'), // 压缩js
    htmlmin = require('gulp-htmlmin');
     //htmlminify = require('gulp-html-minify');  //压缩html
// imagemin = require('gulp-imagemin'), // 压缩图片
// autoprefixer = require('gulp-autoprefixer'); // 添加css前缀





gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
gulp.task('watch', () => {
    // 监听app下面所有的html文件, 如果文件改变, 就执行后面的任务
    gulp.watch(['app/**/*.html'], ['html']);
    gulp.watch(['app/**/*.js'], ['js']);
})


gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true
    });
});


gulp.task('js', function (cb) {
    gulp.src('app/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify()) // 直接压缩hello.js
        .pipe(gulp.dest('dist'))
});
gulp.task('build', [ 'js','html','watch']);
gulp.task('default', [ 'js','html','watch','connect']);


// gulp +  任务名称, 如果不写, 默认执行default任务
// gulp 一共有4个api
//  src: 超找文件
//  dest: 输出文件
//  watch: 监听文件
//  task: 创建一个任务