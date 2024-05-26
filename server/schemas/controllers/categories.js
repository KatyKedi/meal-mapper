const { Category } = require('../../models')

module.exports = {

  categories: async () => await Category.find(),

  addCategory: async (parent, args) => {
    if (context.user) {
      return await Category.create(args)
    }
    throw AuthenticationError;
  },

  updateCategory: async (parent, { _id, name }) => {
    if (context.user) {
      return await Category.findByIdAndUpdate(_id, { name }, { new: true })
    }
    throw AuthenticationError;
  },

  deleteCategory: async (parent, { _id }) => {
    if (context.user) {
      return await Category.findByIdAndDelete(_id)
    }
    throw AuthenticationError;
  }
}