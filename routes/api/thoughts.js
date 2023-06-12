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


  router
    .route('/:userId/thoughts')
    .post(addThought)
    .get(getThoughts);
 

  router
    .route('/:userId/thoughts/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

  router.route("/:thoughtId/reactions").post(addReaction);

  router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;