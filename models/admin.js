const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Admin = sequelize.define("admin", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
});


