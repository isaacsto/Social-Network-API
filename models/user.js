const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}};

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
        }
    }
)