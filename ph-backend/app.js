const express = require("express");
const app = express();
const port = 12000;

app.get("/", (req, res) => {
  res.send("Api working properly");
});

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
