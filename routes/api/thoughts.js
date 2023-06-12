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
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

  router.route("/:thoughtId").post(addReaction);

  router.route("/:thoughtId/:reactionId").delete(deleteReaction)

module.exports = router;