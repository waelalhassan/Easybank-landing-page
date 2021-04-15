let gulp = require("gulp"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    prefixer = require("gulp-autoprefixer");

gulp.task("html", ()=> {
    return gulp.src("index.pug")
            .pipe(pug({pretty: true}))
            .pipe(gulp.dest("assets/"))
});

gulp.task("css", ()=> {
    return gulp.src("style.scss")
            .pipe(sass())
            .pipe(prefixer())
            .pipe(gulp.dest("assets/css"))
});

gulp.task("js", ()=> {
    return gulp.src("main.js")
            .pipe(gulp.dest("assets/js"))
})



gulp.task("default", ()=> {
    gulp.watch("index.pug", gulp.series("html"));
    gulp.watch("style.scss", gulp.series("css"));
    gulp.watch("main.js", gulp.series("js"))
});