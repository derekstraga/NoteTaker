// Need express to interact with front end
const express = require("express")
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")
const app = express();
// Sets up the Express App
// =============================================================
app.use(express.json());
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
// =============================================================
app.use(express.static("public"));
// Basic route that sends the user first to the AJAX Page
app.use("/api", apiRoutes);
//displays tables and waiting list
app.use("/", htmlRoutes);

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, () => console.log (`Listening on port:${PORT}`));