const sequelize = require('../config/database');
const People = require('../models/people');
const User = require('../models/users');
const Admin = require('../models/admin');

const alterTables = async ()=>{
    await sequelize.sync({ force: true }).then();
    sequelize.sync({ force: true }).then(result => {
        console.log('Altered all tables');
    }).catch(err => console.log(err));

};

alterTables();

