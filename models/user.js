const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

class User extends Model {checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}};

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

User.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            set(value) {
                this.setDataValue('username', value.trim());
            }
        }, 
        email: {
            type: DataTypes.String,
            allowNull: false,
            unique: true,
            validate: [validateEmail, 'Please fill in a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: {
            // array of _id values referencing thought model
        },
        friends: {
            // array of _id values referencing User model
        },
        friendCount: {
            // virtual retrieves length of user's freinds array
        }
    }
);

module.exports = User;