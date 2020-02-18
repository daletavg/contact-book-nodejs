const Sequelize = require('sequelize');
// const sequelize = new Sequelize('mysql://root:@127.0.0.1:8182/nodejs');
const sequelize = new Sequelize('postgres://fusflxbyzkfaho:6747f55fa3df9f54b1106041df2e83142aed902375f687bf137a2427cb394e5f@ec2-184-72-236-3.compute-1.amazonaws.com:5432/d8d9bh9r9fsf78');


module.exports = sequelize;
