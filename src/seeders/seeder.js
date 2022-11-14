const db = require('../utils/database');
const initModels = require('../models/initModels');

const Users = require('../models/users.model');
const Courses = require('../models/courses.model');
const Categories = require('../models/categories.model');
const Videos = require('../models/videos.model');

initModels();
const users = [
    {first_name: 'Anselmo', last_name: 'Riquelme', password: '1234', email: 'anselmo@gmail.com'}
];

const courses = [
  {title: 'How to do Ramen', description: 'In this course you will learn how to do Ramen (and stuff)', instructor: 'Mister Jägger'}
];

const categories = [
  {name: 'Kitchen', course_id: 1}
];

const videos = [
  {title: 'How to do Ramen', url:'https://www.youtube.com/watch?v=9xps6wY6DTI&t=118s', course_id: 1 }
];

db.sync({ force: true })
  .then(async () => {
    console.log("Seeding...");
    users.forEach((user) => Users.create(user));
  })
  .then(() => {
    courses.forEach((course) => Courses.create(course));
  })
  .then(() => {
    categories.forEach((category) => Categories.create(category));
  })
  .then(() => {
    videos.forEach((video) => Videos.create(video));
  });

