const express = require("express");
const initModels = require("./models/initModels");
const usersRoutes = require("./routes/users.route");
const userCourseRoutes = require("./routes/userscourse.route");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");
const handleError = require("./middlewares/errors");
require("dotenv").config();

const db = require("./utils/database");
const app = express();

app.use(express.json());

const PORT = process.env.PUERTO;

db.authenticate()
  .then(() => console.log("Authentication succesful"))
  .catch((error) => console.log(error));

db.sync({ force: false }).then(() => console.log("Database synchronized"));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Already" });
});

app.use(
  "/api/v1",
  usersRoutes,
  userCourseRoutes,
  coursesRoutes,
  videosRoutes,
  categoriesRoutes
);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
