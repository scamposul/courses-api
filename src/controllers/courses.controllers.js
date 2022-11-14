const CoursesServices = require("../services/courses.service");

const getAllCourses = async (req, res, next) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next({
        status: 400,
        errorContent: error
    })
  }
};

const getAllCoursesJoined = async (req, res, next) => {
    try {
        const result = await CoursesServices.getAllJoined();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

const createCourse = async (req, res, next) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.addCourse(newCourse);
        res.status(201).json("Course created");
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

const patchCourse = async (req, res, next) => {
    try {
        const {id} = req.params;
        const newDescription = req.body.description;
        const result = await CoursesServices.updateCourse(id, newDescription);
        res.status(200).json("Course updated");
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllCourses,
    getAllCoursesJoined,
    createCourse,
    patchCourse
}
