const studentList = [
  {
    id: 1,
    name: "Ravi jay",
  },
  {
    id: 2,
    name: "Yuki Beatz",
  },
];

exports.getAllStudents = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: studentList });
  } catch (e) {
    res.status(500).json({ success: false });
  }
};

exports.addStudent = async (req, res) => {
  try {
    studentList.push({ id: Math.random(), name: req.body.name });
    res.status(200).json({ success: true, data: studentList });
  } catch (e) {
    res.status(500).json({ success: false });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = studentList.findIndex((obj) => obj.id == req.params.id);

    studentList[student].name = req.body.name;
    res.status(200).json({ success: true, data: studentList });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = studentList.findIndex((obj) => obj.id == req.params.id);
    delete studentList[student];
    res.status(200).json({ success: true, data: studentList });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
