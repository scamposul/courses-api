const { Router } = require("express");
const {
  getAllCourses,
  getAllCoursesJoined,
  createCourse,
  patchCourse,
} = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getAllCourses);
router.get("/courses/detail", getAllCoursesJoined);

router.post("/courses", createCourse);

router.patch("/courses/:id", patchCourse);

module.exports = router;
