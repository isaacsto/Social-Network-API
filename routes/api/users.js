const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser, 
    updateUser,
    getThoughts,
    getSingleThought,
    addThought, 
    deleteThought,

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId').put(updateUser);

router.route('/:userId/thought').get(getThoughts);

router.route('/:userId/thought/:thoughtId').get(getSingleThought);

router.route('/:userId/thought').post(addThought);

router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);

module.exports = router;