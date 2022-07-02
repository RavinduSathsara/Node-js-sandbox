const express = require("express");
const {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/students");

const router = express.Router();

router.route("/students").get(getAllStudents).post(addStudent);

router.route("/students/:id").put(updateStudent).delete(deleteStudent);

module.exports = router;
