// routes/course.route.js

module.exports = (app) => {
  const course = require("../controllers/course.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Retrieve all Courses
  router.get("/", course.findAll); // Comment out the [authenticate]

  // Create a new Course
  router.post("/", course.create); // Add this line for creating a new course

  // Update a Course by ID
  router.put("/:id", course.update); // Add this line for updating a course

  // Delete a Course by ID
  router.delete("/:id", course.delete); // Add this line for deleting a course

  app.use("/api/lessons", router); // Define the base endpoint for courses
};
