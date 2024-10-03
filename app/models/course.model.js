// models/course.model.js
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("Course", {
      dept: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      course_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hours: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    }, {
      tableName: 'lessons', // Specify the actual table name
    });
  
    return Course;
  };
  