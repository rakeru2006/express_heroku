// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");


// Sets up the Express App
// =============================================================
var application = express();
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
// =============================================================
application.use(express.urlencoded({ extended: true }));
application.use(express.json());
application.use("/assets", express.static("./assets"));


require("./routing/html-routes")(application);
require("./routing/api-routes")(application);

// Starts the server to begin listening
// =============================================================
application.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
