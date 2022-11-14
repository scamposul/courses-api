const UsersCourses = require("../models/userscourses.model");

class UserCourseService {
    static async addCourse(course_id, user_id, id) {
        try {
             const result  = UsersCourses.create({user_id: user_id, course_id: course_id}, {
                where: {id}
             });
             return result
        } catch (error) {
            throw(error);
        }
      }
}

module.exports = UserCourseService;