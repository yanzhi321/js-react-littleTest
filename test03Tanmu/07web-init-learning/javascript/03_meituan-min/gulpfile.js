/* gulp file */
//引入gulp及各种组件;    
var gulp = require('gulp'),
	less = require('gulp-less');
	minifycss = require('gulp-minify-css'),  // 压缩css插件
	concat = require('gulp-concat'),         // 合并js插件
	rename = require('gulp-rename'),         // 重命名插件
	uglify = require('gulp-uglify');        // 压缩合并js文件插件
	 

//设置各种输入输出文件夹的位置;
var srcHtml = 'meituan/*.html',
	srcImage = 'meituan/img/*.*',
	srcCss = 'meituan/css/*.css',
	dstCSS = 'dist/css',
	dstScript = 'dist/js',
	dstLass = 'dist/css',
    dstHtml = 'dist';
    dstImg = 'dist/img'
//创建一个less2css的任务
gulp.task('less2css',function(){
	gulp.src('css/style.less')
	.pipe(less())
	.pipe(gulp.dest(dstLass))
})

//清除任务


//创建移动任务


gulp.task('html', function() {
    gulp.src(srcHtml)
    .pipe(gulp.dest(dstHtml));
});

gulp.task('img', function() {
    gulp.src(srcImage)
    .pipe(gulp.dest(dstImg));
});

// 创建一个压缩css的任务
gulp.task('minify', function () {
	gulp.src(srcCss)
	.pipe(minifycss())
	.pipe(gulp.dest(dstCSS))
})

// 创建js合并压缩的任务
gulp.task('jsopt', function () {
	gulp.src(['meituan/js/jquery.min.js','meituan/js/swiper-3.3.1.jquery.min.js','meituan/js/meituan.js'])
	.pipe(concat('main.js'))             // 把所有的js文件合并成一个新的js文件，文件名叫main
	.pipe(gulp.dest(dstScript))           // 把生成出来的文件放到目的文件夹里边
	.pipe(rename({suffix: '.min'}))      // 把合并后的main.js文件重命名，这里我们要放两个版本，1.未压缩版，2.压缩版，压缩版中间加.min区别
	.pipe(uglify())                      // 把重命名后的main.min.js文件执行压缩操作
	.pipe(gulp.dest(dstScript))           // 把压缩后的文件放到目的文件夹
})

gulp.task('default', ['minify', 'jsopt','html','img']);   // 新建一个任务可以执行所有的任务，所有的任务放到数组里面， 当输入gulp default时，数组的任务同时执行

//监听
/*
gulp.task('watch',['less2css'],function(){
	gulp.watch('meituan/js/meituan.js',['jsopt']);
	gulp.watch(srcHtml,['html']);
	gulp.watch(srcCss,['minify']);
	//...
})
*/