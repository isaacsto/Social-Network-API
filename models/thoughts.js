const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');

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
        userName: {
            type: DataTypes.Date, 
            allowNull: false,
        },
        reactions: {
            //array of nested documents created with reactionSchema
        },
        reactionCount: {
            //retrieve length of thought's reactions array in query
        }
        },
        {
            sequelize, 
            timestamps: false, 
            freezeTableName: true, 
            underscored: true,
            modelName: 'thought',
        },
    )