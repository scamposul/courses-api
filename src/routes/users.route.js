const { Router } = require("express");
const {
  getUserCourses,
  getUserById,
  createUser,
  patchInfo,
} = require("../controllers/users.controller");

const router = Router();

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUserCourses);

router.post("/users", createUser);

router.patch("/users/:id", patchInfo);


module.exports = router;
