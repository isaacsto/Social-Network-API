const { Schema, model } = require('mongoose');
const { reactionSchema } = require('reaction.js');

const thoughtSchema = new Schema (
    {
        thoughtTest: {
            type: String, 
            required: true, 
            validated: {
                notEmpty: true,
                len: [1, 280],
            },
        },
        createdAt: {
            type: Date, 
            defaultValue: () => new Date().toISOString(),
        },
        username: {
            type: String, 
            required: true, 
        },
        reactions: [
            reactionSchema,
        ],
    }
)



/* class Thought extends Model {}
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
    ) */