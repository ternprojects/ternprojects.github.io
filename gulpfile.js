const gulp = require('gulp');
      browserSync = require('browser-sync');
      sass = require('gulp-sass');
      rename = require("gulp-rename");
      autoprefixer = require('gulp-autoprefixer');
      cleanCSS = require('gulp-clean-css');
      //rigger = require('gulp-rigger');

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

//After optimiazation////////////////////
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
    });

//Task "Rigger"
/*
    gulp.task('rigger', function () {
        gulp.src('templates/m.html')
            .pipe(rigger())
            .pipe(gulp.dest('build/'));
    }) 
*/

//Task "watch"
gulp.task('watch', function() {
  gulp.watch("./sass/*.+(scss|sass)", gulp.parallel('styles'));  
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("js/*.js").on("change", browserSync.reload);
}); 

//Main task "Default: include 3 previous tasks..."
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));