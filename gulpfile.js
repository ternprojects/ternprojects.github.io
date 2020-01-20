const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

//Task "server"
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//Task "styles"
gulp.task('styles', function() {
    return gulp.src("./sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
        .pipe(rename({
            prefix: "",
            suffix: ".min",            
        }))  
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

//Task "watch"
gulp.task('watch', function() {
    gulp.watch("./sass/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("./*.html").on("change", browserSync.reload); 
    gulp.watch("js/*.js").on("change", browserSync.reload);    
}); 

//Main task "Default: include 3 previous tasks..."
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));