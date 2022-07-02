const express = require("express");
const app = express();
const port = 5000;

// Routes
const courses = require("./routes/student");

// Init Routes
app.use(express.json());
app.use("/api", courses);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
