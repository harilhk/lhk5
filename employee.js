const mongoose = require("mongoose");

const EmployeeDetailsScehma = new mongoose.Schema(
  {
    // fname: String,
    // lname: String,
    // email: { type: String, unique: true },
    // password: String,
    // userType: String,
    work:String,
    skill:String,
  },
  {
    collection: "EmployeeInfo",
  }
);

mongoose.model("EmployeeInfo", EmployeeDetailsScehma);
