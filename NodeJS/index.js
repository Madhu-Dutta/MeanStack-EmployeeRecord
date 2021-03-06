const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db.js");
var employeeController = require("./controllers/employeeController");

//Use Express to parse the json data from database
var app = express();
app.use(bodyParser.json());
//need to allow cors() to the port angular UI is running and pass the value as a json object
app.use(cors({ origin: "http://localhost:4200" }));

//Start and listen for the server to start in PORT 3000
app.listen(3000, () => console.log("Server started at PORT : 3000"));

app.use("/employees", employeeController);
