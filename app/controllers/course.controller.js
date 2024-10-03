// controllers/course.controller.js
const db = require("../models");

exports.findAll = (req, res) => {
  db.course.findAll()
    .then(course => {
      res.json(course);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Method to create a new course
exports.create = (req, res) => {
  console.log('Received data:', req.body); // Log the incoming data

  const newCourse = {
    dept: req.body.dept || '', // Use data from the request body
    course_number: req.body.course_number || '',
    level: req.body.level || '',
    hours: req.body.hours || '',
    name: req.body.name || '',
    description: req.body.description || '',
  };
  
  db.course.create(newCourse)
    .then(course => {
      res.status(201).send(course);
    })
    .catch(err => {
      console.error('Error creating course:', err); // Log the error
      res.status(500).send({ message: err.message || "Some error occurred while creating the course." });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  db.course.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num[0] === 1) {
      res.send({ message: "Course was updated successfully." });
    } else {
      res.send({ message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!` });
    }
  })
  .catch(err => {
    res.status(500).send({ message: "Error updating Course with id=" + id });
  });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  db.course.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num === 1) {
      res.send({ message: "Course was deleted successfully!" });
    } else {
      res.send({ message: `Cannot delete Course with id=${id}. Maybe Course was not found!` });
    }
  })
  .catch(err => {
    res.status(500).send({ message: "Could not delete Course with id=" + id });
  });
};
