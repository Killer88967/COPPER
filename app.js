const express = require("express");
require("dotenv").config();
const path = require("path"); // Import path module

//* Random Imports
const importantDataEnv = process.env;

//* Initialize Express app
const app = express();
const port = importantDataEnv.PORT || 3000;

//* Serve static files from the "public" directory
app.use(express.static("public"));

//* Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/videos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "videos.html"));
});

app.get("/shorts", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "shorts.html"));
});

//* Start the server
app.listen(port, () => {
  console.log(
    `Server is running on port ${
      importantDataEnv.URL || "http://localhost:"
    }${port}`
  );
});
