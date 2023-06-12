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
        console.log(err);
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
    const updateThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, 
        { $set: req.body },
        { runValidators: true, new: true }
    );
    if(!updateThought) {
        return res
        .status(404)
        .json({ message : "No thought to update"})
    }
    res.json(updateThought);
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
},

async deleteThought(req, res) {
    try {
        const oldThought = await Thought.findOneAndRemove(
            { _id: req.params.thoughtId },
                );

        if (!oldThought) {
            return res
            .status(404)
            .json({ message: 'No user thought found '})
        }

        res.json(oldThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
},

async addReaction(req, res) {
    try{ 
    const addReact = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }

    );
        console.log(addReact);
        if (!addReact) {
         return res
         .status(404)
         .json({ message: "No thought with that id" });
        }

        res.json(addReact);
     } catch(err){
        console.log(err);
        res.status(500).json(err);
        
     }
    },

  async deleteReaction(req, res) {
    try {
    const deleteReaction = await Thought.findOneAndUpdate(
      { _id: rew.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true  }
    )
    if(!deleteReaction) {
        return res
        .status(404)
            .json({ message: "No reaction to delete"});
    }
    res.json(deleteReaction);
  } catch(err) {
    console.log(err);
    res.status(500).json(err)
  }
}
}
