const { ObjectId } = require('mongoose').Types;
const { Student, Course } =  require('../models');
const User = require('../models/user');


const friendCount = async () => {
const thisUser = await User.findOne({ _id: req.params.userId})
return thisUser.friends.length
}

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            const userObj = {
                users, 
                friendCount: await friendCount(),
            };
            return res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.studentId })
            .select('-__v')
            .lean();

            if (!user) {
                return res.status(404).json({ message: 'No user with that id'})
            }

            res.json({
                user, 
                friendCount: await friendCount(req.params.userId)
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body); 
            res.json(newUser);
        } catch (err) { 
            res.status(500).json(err);
        }
    },
    async deleteUser (req, res) {
        try {
            const oldUser = await User.findOneAndRemove({ _id: req.parans.userId });
    
            if (!oldUser) {
                return res.status(404).json({ message: 'No such user'})
            }
        res.json({ message: 'Student deleted' });
         } catch (err) {
            console.log(err);
            res.status(500).json(err);
         }
    },

    async addThought(req, res) {
        try {
            const userThought = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { thoughts: req.body } },
                { runValidators: true, new: true }
            );

            if(!userThought) {
                return res 
                .status(404)
                .json({ message: 'No user thought found' })
            }
            res.json(student);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const oldThought = await User.findOneAndUpdate(
                { _id: req.params.studentId },
                { $pull: { thought: { thoughtId: req.params.thoughtId } } },
                { runValidators: true, new: true }
            );

            if (!oldThought) {
                return res
                .status(404)
                .json({ message: 'No user thought found '})
            }

            res.json(oldThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

};