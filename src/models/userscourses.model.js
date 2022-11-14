const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");
const Courses = require("./courses.model");

const UsersCourses = db.define(
  "users_courses",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Courses,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UsersCourses;
