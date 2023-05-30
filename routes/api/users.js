const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser, 
    getThoughts,
    getSingleThought,
    addThought, 
    deleteThought,

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/thought').get(getThoughts);

route.rout('/:userId/thought/:thouthtId').get(getSingleThought);

router.route('/:userId/thought').post(addThought);

router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);

module.exports = router;