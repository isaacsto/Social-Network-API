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
    .route('/:userId')
    .post(addThought)
   

  router
    .route('/:userId/thoughts')
    .get(getThoughts);
 

  router
    .route('/:userId/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

  router.route("/:thoughtId/reactions").post(addReaction);

  router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction)

module.exports = router;