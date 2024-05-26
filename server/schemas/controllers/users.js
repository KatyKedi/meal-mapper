const { User } = require('../../models');
const { signToken, AuthenticationError } = require('../../utils/auth');

module.exports = {

  users: async () => await User.find().select('-email, -password'),

  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw AuthenticationError;
    }

    const correctPw = await user.isCorrectPassword(password);
    if (!correctPw) {
      throw AuthenticationError;
    }

    const token = signToken(user);

    return { token, user };
  },

  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
    return { token, user };
  },

  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    }
    throw AuthenticationError;
  },

  
  deleteUser: async () => {
    if (context.user) {
      return await User.findByIdAndDelete(context.user._id)
    }
    throw AuthenticationError;
  },

}