// Bringing express
const express = require("express");

// Initiializing variable with express
const app = express();

app.get("/", (req, res) => {
  res.send("<H1>Express Crash Course</H1>"); //sending back to the browser
});
// whatever is in the environment variable PORT, or 3000 if there's nothing there
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port : ${PORT}`));
