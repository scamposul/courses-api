
const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  dialect: "postgres",
});

module.exports = db;