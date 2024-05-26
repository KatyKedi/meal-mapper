const { User, MealPlan } = require('../../models')

module.exports = {

  mealPlans: async (paret, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({path: 'mealPlans', populate: 'recipes'})
      return user.mealPlans
    }
    throw AuthenticationError;
  },

  addMealPlan: async (parent, args, context) => {
    if (context.user) {
      const plan = await MealPlan.create(args)

      await User.findByIdAndUpdate(context.user._id, { $push: { mealPlans: plan } });

      return plan;
    }
    throw AuthenticationError;
  },
  
  updateMealPlan: async (parent, args) => {
    if (context.user) {
      const { _id, ...plan } = args
      return await MealPlan.findByIdAndUpdate(_id, plan, { new: true }).populate('recipes')
    }
    throw AuthenticationError;
  },

  deleteMealPlan: async (parent, { _id }) => {
    if (context.user) {
      return await MealPlan.findByIdAndDelete(_id)
    }
    throw AuthenticationError;
  }
}