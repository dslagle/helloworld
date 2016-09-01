var gulp = require("gulp");
var style = require("gulp-jshint-html-reporter")
var lint = require("gulp-jshint");
var debug = require("gulp-debug");

var lintConfig = require("./package.json").jshintConfig;

gulp.task("lint-report", function(cb) {
    gulp.src([
            "server.js",
        ])
        .pipe(lint(lintConfig))
        .pipe(lint.reporter(
            'gulp-jshint-html-reporter',
            {
                filename: __dirname + "/test/lint.html",
                createMissingFolders: false
            }
        ))
        .pipe(cb());
});

gulp.task("lint-check", function() {
    gulp.src([
            "server.js",
        ])
        .pipe(lint(lintConfig))
        .pipe(lint.reporter('fail'));
});