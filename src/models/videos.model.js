const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Videos = db.define('videos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: 'courses'
        }
    }
}, {
    timestamps: false
});

module.exports = Videos;