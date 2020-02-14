const Sequelize = require('sequelize');
const sequelize = require('./dbconnect');

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
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:true
    }

});

module.exports = People;
