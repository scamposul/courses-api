const UserServices = require("../services/users.service");

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "Request Error",
      status: 400,
      errorContent: error,
    });
  }
};

const getUserCourses = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserWithCourses(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "Request Error",
      status: 400,
      errorContent: error,
    });
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.addUser(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
        status: 400,
        errorContent: error
    })
  }
};

const patchInfo = async(req, res, next) => {
    try {
        const {id} = req.params;
        const newFirstName = req.body.first_name;
        const newLastName = req.body.last_name;
        const newPassword = req.body.password;
        const result = await UserServices.updateInfo(id, newFirstName, newLastName, newPassword);
        res.status(200).json({message: "User updated"});
    } catch (error) {
        next({
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
  getUserById,
  getUserCourses,
  createUser,
  patchInfo
};
