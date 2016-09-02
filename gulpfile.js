var gulp = require("gulp");
var reporter = require("eslint-html-reporter")
var lint = require("gulp-eslint");
var path = require("path");
var fs = require("fs");
var options = require("./.eslintrc.js");

var lintConfig = require("./package.json").jshintConfig;

gulp.task("lint", function(cb) {
    gulp.src([
            "server.js",
        ])
        .pipe(lint(options))
        .pipe(
            lint.format(reporter, function(results) {
                fs.writeFileSync(path.join(__dirname, 'test/lint-results.html'), results);
            })
        )
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});