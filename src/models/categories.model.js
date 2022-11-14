const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define('categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            key: "id",
            model: "courses"
        }
    }
}, {
    timestamps: false
});

module.exports = Categories;