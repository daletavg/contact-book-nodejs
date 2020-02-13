const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@127.0.0.1:8182/nodejs');


module.exports = sequelize;