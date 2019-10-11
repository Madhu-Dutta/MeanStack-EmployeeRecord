const mongoose = require("mongoose");

var Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number }
});
//Export the Employee collection as an object
module.exports = { Employee };
