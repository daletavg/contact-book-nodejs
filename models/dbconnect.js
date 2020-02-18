const Sequelize = require('sequelize');
// const sequelize = new Sequelize('mysql://root:@127.0.0.1:8182/nodejs');
const sequelize = new Sequelize('postgres://giupbnvncztwme:bcc4263343a185fcc1d6caf023ec31cde7788e29fe03527eb2610bb4c8f2f846@ec2-184-72-236-3.compute-1.amazonaws.com:5432/dfs50o85gs8hoo');


module.exports = sequelize;
