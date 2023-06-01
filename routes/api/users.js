const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser, 
    updateUser,
    createFriend,
    deleteFriend,

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId').put(updateUser);

router.route('/:userId/friends').post(createFriend);

router.route('/:userId/friends/id').delete(deleteFriend);

module.exports = router;