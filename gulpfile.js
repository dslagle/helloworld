var gulp = require("gulp");
var reporter = require("eslint-html-reporter")
var lint = require("gulp-eslint");
var path = require("path");
var fs = require("fs");
var options = require("./.eslintrc.js");
var mocha = require("gulp-mocha");

gulp.task("lint", function() {
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

gulp.task("test", function() {
    gulp.src(["test/post-test.js", "test/test.js"])
        .pipe(mocha())
        .once("error", () => process.exit(1))
        .once("end", () => process.exit());
});