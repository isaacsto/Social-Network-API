const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtsController");

  router.route('/:userId/thought').get(getThoughts);

  router.route('/:userId/thought/:thoughtId').get(getSingleThought);
  
  router.route('/:userId/thought').post(addThought);
  
  router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);


router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;