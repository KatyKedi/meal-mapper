const { Schema, model }= require('mongoose');

const mealPlanSchema = new Schema({
  recipes: [{
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
  }],
  date: {
    type: Date,
    required: true
  }
});

const MealPlan = model('MealPlan', mealPlanSchema);

module.exports = MealPlan;