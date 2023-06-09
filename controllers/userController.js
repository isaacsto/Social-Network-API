const { ObjectId } = require('mongoose').Types;
const User = require('../models/user');





module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find()/* .populate({
                path: 'friends',
                select: 'id'
            }) */
            const userObj = {
                users, 
            };
            return res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .lean();

            if (!user) {
                return res.status(404).json({ message: 'No user with that id'})
            }

            res.json({
                user, 
               /*  friendCount: await friendCount(req.params.userId) */
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
          const updatedData = req.body; 
          const userId = req.params.userId;
      
          const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
            new: true, // Return the updated user in the response
            runValidators: true, 
          });
      
          if (!updatedUser) {
            return res.status(404).json({ message: 'No user with that id' });
          }
      
          res.json(updatedUser);
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
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
            const oldUser = await User.findOneAndRemove({ _id: req.params.userId });
    
            if (!oldUser) {
                return res.status(404).json({ message: 'No such user'})
            }
        res.json({ message: 'User deleted' });
         } catch (err) {
            console.log(err);
            res.status(500).json(err);
         }
    },

    createFriend(req, res) {
        console.log("You are adding a friend");
        console.log(req.body);
        User.findOneAndUpdate(
            {
                _id: req.params.userId,
            },
            {
                $addToSet: {
                    friends: req.params.friendId,
                },
            },
            {
                runValidators: true,
                new: true,
            }
        )
            .then((user) => 
            !user 
            ? res.status(404).json({ message: "No friend with that ID found"})
            : res.json({ message: "friend added !"})
        )
            .catch ((err) => 
            res.status(500).json(err));
        },


async deleteFriend (req, res) {
    console.log(req.body)
    User.findOneAndUpdate(
        {
            _id: req.params.userId,
        },
        {
            $pull: {
                friends: req.params.friendId,
            },
        },
        {
            runValidators: true,
            new: false, 
        }
    )
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No friends found with that Id"})
        : res.json({ message: "friend deleted successfully!"})
        )
        .catch ((err) => 
        res.status(500).json(err))
    }
};
