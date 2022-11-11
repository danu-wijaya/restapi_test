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

  const db = require("./app/models/");
  db.mongoose
    .connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("Can not connect to database", err);
      process.exit();
    });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
  console.log("http://localhost:8000");
});
