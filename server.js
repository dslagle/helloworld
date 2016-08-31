// let app = require("express")();
// let bp = require("body-parser");

// const address = "localhost";
// const port = 9000;

// let server = app.createServer(options, app);

// app.use(bp.urlencoded({ extended: true }));
// app.use(bp.json());

// app.use(function(request, response, next) {
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Methods", "POST, GET, PATH, DELETE");
//     response.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function(request, response) {
//     response.sendFile(path.join(__dirname, "index.html"));
// });

// server.listen(port, address, function() {
//     console.log(`Listening on http:\\\\${address}:${port}`);
// });

function doMath(x, y) {
    if (x < y) {
        return x + y;
    }
    else if (x == y) {
        return x * y;
    }
    else {
        return x - y;
    }
}