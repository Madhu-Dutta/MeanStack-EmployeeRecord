const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CrudDB", err => {
  if (!err) {
    console.log("MongoDB Connection succeeded");
  } else {
    console.log(
      "Error in db connection : " + JSON.stringify(err, undefined, 2)
    );
  }
});
module.exports = mongoose;
