// Import express
const express = require("express");
const app = express();

// Serve files from the "public" folder
app.use(express.static("public"));

// Create a route for homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
