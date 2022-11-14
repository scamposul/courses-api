const Users = require('./users.model');
const Courses = require('./courses.model');
const Categories = require('./categories.model');
const Videos = require('./videos.model');
const UsersCourses = require('./userscourses.model');

const initModels = () => {
    Courses.hasMany(Categories, { foreignKey: 'course_id'});
    Courses.hasMany(Videos, { foreignKey: 'course_id'});

    Categories.belongsTo(Courses, {foreignKey: 'course_id'});
    Videos.belongsTo(Courses, {foreignKey: 'course_id'});

    Users.hasMany(UsersCourses, { foreignKey: 'user_id'});
    UsersCourses.belongsTo(Users, { foreignKey: 'user_id'});

    Courses.hasMany(UsersCourses, {foreignKey: 'course_id'});
    UsersCourses.belongsTo(Courses, {foreignKey: 'course_id'});
};

module.exports = initModels; 