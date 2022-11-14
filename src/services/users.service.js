const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/userscourses.model");

class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "first_name", "last_name", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getUserWithCourses(id) {
    try {
      const result = await Users.findAll({
        where: { id },
        attributes: ["id", "first_name", "last_name"],
        include: {
          model: UsersCourses,
          attributes: ["course_id"],
          include: {
            model: Courses,
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addUser(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateInfo(id, newFirstName, newLastName, newPassword) {
    try {
      const result = await Users.update(
        {
          first_name: newFirstName,
          last_name: newLastName,
          password: newPassword,
        },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
