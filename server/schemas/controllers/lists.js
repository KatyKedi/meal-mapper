const { User, ShoppingList } = require('../../models')

module.exports = {
  shoppingLists: async (paret, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({path: 'shoppingLists', populate: 'ingredients'})
      return user.shoppingLists
    }
    throw AuthenticationError;
  },

  addShoppingList: async (parent, args, context) => {
    if (context.user) {
      const list = await ShoppingList.create(args)

      await User.findByIdAndUpdate(context.user._id, { $push: { shoppingLists: list } });

      return list;
    }
    throw AuthenticationError;
  },

  updateShoppingList: async (parent, args) => {
    if (context.user) {
      const { _id, ...list } = args
      return await ShoppingList.findByIdAndUpdate(_id, list, { new: true }).populate({ path: 'ingredients', populate: 'category' })
    }
    throw AuthenticationError;
  },

  deleteShoppingList: async (parent, { _id }) => {
    if (context.user) {
      return await ShoppingList.findByIdAndDelete(_id)
    }
    throw AuthenticationError;
  }
}