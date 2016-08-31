var gulp = require("gulp");
var lint = require("gulp-jshint");
var debug = require("gulp-debug");

var lintConfig = require("./package.json").jshintConfig;

gulp.task("lint", function() {
    gulp.src([
            "server.js",
        ])
        .pipe(debug())
        .pipe(lint(lintConfig))
        .pipe(lint.reporter('default'))
        .pipe(lint.reporter('fail'));
});