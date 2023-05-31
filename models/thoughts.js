/* const mongoose = require('mongoose'); */
const  reactionSchema  = require('./reaction.js');

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

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 
