const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "wellcome to express restapi tutorials",
    name: "kamandanu",
  });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
  console.log("http://localhost:8000");
});
