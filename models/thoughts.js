const { Schema, model } = require('mongoose');
const  reactionSchema  = require('./reaction.js');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            required: true, 
            validated: {
                notEmpty: true,
                maxlength: 280,
            },
            
        },
        createdAt: {
            type: Date, 
            defaultValue: () => new Date().toISOString(),
            required: false,
        },
        username: {
            type: String, 
            required: true, 
        },
        reactions: [
            reactionSchema,
        ]
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 
