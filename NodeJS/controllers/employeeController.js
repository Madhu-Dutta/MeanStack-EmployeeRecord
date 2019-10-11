const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;
var { Employee } = require("../models/employee");

// => localhost:3000/employees/
//GET All
router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error in Retriving Employees :" + JSON.stringify(err, undefined, 2)
      );
  });
});
//POST
router.post("/", (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  });
  //To insert the record in mongodb
  emp.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error in saving employee data: " + JSON.stringify(err, undefined, 2)
      );
  });
});
//GET by ID
router.get("/:id", (req, res) => {
  //if the ObjectID doesnot exist return 400 status error
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send(`No record with the given id: ${req.params.body}`);
  //Else find the element with id and send the result as response body
  Employee.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error in retrieving employee: " + JSON.stringify(err, undefined, 2)
      );
  });
});
//UPDATE by ID
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send(`No record with the given id: ${req.params.body}`);

  //If id is correct update the object body
  var emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };

  //Findbyid and update that id object
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error in updating employee records" +
            JSON.stringify(err, undefined, 2)
        );
    }
  );
});
//DELETE by ID
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);

  Employee.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error in Employee delete: " + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
