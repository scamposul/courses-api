const {Router} = require("express");
const { addCourseToUser } = require("../controllers/userscourse.controllers");

const router = Router();

router.post("/users/:id/courses", addCourseToUser);


module.exports = router;