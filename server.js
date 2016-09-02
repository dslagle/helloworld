"use strict";

let express = require("express");
let bp = require("body-parser");
let path = require("path");
let app = express();

const address = "0.0.0.0";
const port = 22000;

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(function(request, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods",
        "POST, GET, PATH, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response) {
    console.log("Request!");
    response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, address, function() {
    console.log(`Listening on http:\\\\${address}:${port}`);
});

/**
 * Does cool math stuff. You would not understand.
 *
 * @param {any} x cool number
 * @param {any} y another cool number
 * @return {any} math stuff
 */
function doMath(x, y) {
    if (x < y) {
        return x + y;
    }
    else if (x === y) {
        return x * y;
    }

    return x - y;
}

module.exports = doMath;
