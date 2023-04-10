const { User } = require("../models");

const resolvers = {
  // TODO: Implement User And Book Resolvers
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('savedBooks');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  // Mutation: {

  // }

  // Query: {
  //   thoughts: async () => {
  //     return Thought.find().sort({ createdAt: -1 });
  //   },

  //   thought: async (parent, { thoughtId }) => {
  //     return Thought.findOne({ _id: thoughtId });
  //   },
  // },

  // Mutation: {
  //   addThought: async (parent, { thoughtText, thoughtAuthor }) => {
  //     return Thought.create({ thoughtText, thoughtAuthor });
  //   },
  //   addComment: async (parent, { thoughtId, commentText }) => {
  //     return Thought.findOneAndUpdate(
  //       { _id: thoughtId },
  //       {
  //         $addToSet: { comments: { commentText } },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
  //   removeThought: async (parent, { thoughtId }) => {
  //     return Thought.findOneAndDelete({ _id: thoughtId });
  //   },
  //   removeComment: async (parent, { thoughtId, commentId }) => {
  //     return Thought.findOneAndUpdate(
  //       { _id: thoughtId },
  //       { $pull: { comments: { _id: commentId } } },
  //       { new: true }
  //     );
  //   },
  // },
};

module.exports = resolvers;
