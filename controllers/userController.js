const { ObjectId } = require('mongoose').Types;
const { Student, Course } =  require('../models');
const User = require('../models/user');

const friendCount = async () => {
const thisUser = await User.findOne({ _id: req.params.userId})
return thisUser.friends.length
}
