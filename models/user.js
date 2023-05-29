const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true, 
            trim: true,
        },
        email: {
            type: String, 
            required: true, 
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            },
        ],
    },
    {
    toJSON: {
        virtuals: true,
    },
},
)

const User = model('User', userSchema);

module.exports = User; 
