const { ObjectId } = require('mongoose').Types;
const Thought = require('../models/thoughts');
const User = require('../models/user');
const { json } = require('express');

module.exports = {
async getThoughts(req, res) {
    try {
        const thoughts = await  Thought.find();
      /*   const thoughtObj = {
            thoughts, 
        }; */
        res.json(thoughts);
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

async getSingleThought (req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
       /*  .select('-__v'); */

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
    const newThought = await Thought.create(req.body); 
        const userThought = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { thoughts: newThought._id } },
            { runValidators: true, new: true }
        );

        if(!userThought) {
            return res 
            .status(404)
            .json({ message: 'No user thought found' })
        }
        res.json(userThought);
    } catch (err) {
        res.status(500).json(err);
    }
},

async updateThought(req, res) {
try {
    const updatedThought = await Thought.findOneAndUpdate(
        { _id: params.id }, body, {
            new: true,
            runValidators: true,
          }
    );
    if(!updatedThought) {
        return res
        .status(404)
        .json({ message : "No thought to update"})
    }
    res.json(updatedThought);
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
