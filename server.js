"use strict";

let express = require("express");
let bp = require("body-parser");
let path = require("path");
let app = express();
let math = require("./math");

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
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/fib/:num", function(request, response) {
    let num = request.params.num;
    response.json({ result: math.fib(num) });
});

app.post("/", function(request, response) {
    response.status(200).end();
});

var server = app.listen(port, address, function() {
    console.log(`Listening on http:\\\\${address}:${port}`);
});

module.exports = server;
