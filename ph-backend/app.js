const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const signupRouter = require("./routes/Signup");
const signinRouter = require("./routes/Signin");
const port = 12000;
const mongoUri =
  "mongodb+srv://anilevran:5s437spVOY2vvGTC@cluster1.skw3y.mongodb.net/pati-haritasi?retryWrites=true&w=majority";

const app = express();
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

//Cors Requirements
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("API WORKING PROPERLY");
});
app.use("/sign-up", signupRouter);
app.use("/sign-in", signinRouter);

app.listen(port, () => {
  console.log(`App listening at port:${port}`);
});
