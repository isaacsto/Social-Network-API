const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class Thought extends Model {}
Thought.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        thoughtText: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                notEmpty: true, 
                len: [1, 280],
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: () => new Date().toISOString(),
        },
        toJSON: { 
            getters: true, 
            virtuals: true,
        },
        },
        {
            sequelize, 
            timestamps: false, 
            freezeTableName: true, 
            underscored: true,
            modelName: 'thought',
        },
    )