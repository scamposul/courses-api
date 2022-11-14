const UserCourseService = require('../services/userscourse.service');

const addCourseToUser = async (req, res, next) => {
    try {
        const course_id = req.body.course_id;
        const user_id = req.body.user_id;
        const result = await UserCourseService.addCourse(course_id, user_id);
        res.status(201).json("Course added");
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
};

module.exports = {
    addCourseToUser
}