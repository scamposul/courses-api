const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllJoined() {
    try {
      const result = await Courses.findAll({
        include: [
          { model: Categories, attributes: ["name"] },
          { model: Videos, attributes: ["title", "url"] },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCourse(newCourse) {
    try {
      const result = Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateCourse(id, newDescription) {
    try {
      const result = await Courses.update(
        { description: newDescription },
        {
          where: { id },
        }
      );
      return result; 
    } catch (error) {
        throw(error);
    }
  }
}

module.exports = CoursesServices;
