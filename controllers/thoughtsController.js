const { ObjectId } = require('mongoose').Types;
const User = require('../models/user');
const Thoughts = require('../models/thoughts');
const Thought = require('../models/thoughts');
const { json } = require('express');

module.exports = {
async getThoughts(req, res) {
    try {
        const thoughts = await  Thought.find();
        res.json(Thoughts);
    }catch (err) {
        res.status(500).json(err);
    }
},

async getSingleThought (req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

    if (!thought) {
        return res.status(404).json({ message: "No thoughts head empty :/" });
    }
    res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},

async addThought(req, res) {
    try {
        const userThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
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
        const oldThought = await Thought.findOneAndUpdate(
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
async addReaction(req, res) {
    try{ 
    const addReact = await Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body } },
      { new: true, runValidators: true }
    );
        if (!addReact) {
         return res
         .status(404)
         .json({ message: "No thought with that id" });
        }
        res.json(addReact);
     } catch(err){
        res.status(500).json(err);
     }
    },
  async deleteReaction(req, res) {
    try {
    const deleteReaction = await Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
    if(!deleteReaction) {
        return res
        .status(404)
            .json({ message: "No reaction to delete"});
    }
    res.json(deleteReaction);
  } catch(err) {
    res.status(500).json(err)
  }
}
}

module.exports = thoughtController;

