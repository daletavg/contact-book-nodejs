const Sequelize = require('sequelize')
const sequelize = require('./dbconnect')

const People = sequelize.define("people", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
});

module.exports = People;