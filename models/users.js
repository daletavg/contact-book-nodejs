const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    chat_id:{
        type:Sequelize.BIGINT,
        allowNull:false,
    },
    uiid:{
        type:Sequelize.BIGINT,
        allowNull:false,
    },
    is_bot:{
        type:Sequelize.BOOLEAN,
        allowNull:true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    language_code:{
        type:Sequelize.STRING,
        allowNull:true
    }

});
const createUserIfNotExist = async (data, chatId)=>{
    let createdUser = null;
    if(await User.findOne({where: {uiid:data.id}})===null) {
            createdUser = await User.create({
            uiid: data.id,
            is_bot: data.is_bot,
            first_name: data.first_name,
            last_name: data.last_name,
            username: data.username,
            language_code: data.language_code,
            chat_id:chatId,
        });
    }
    return  createdUser;
};


module.exports = {User,createUserIfNotExist};
