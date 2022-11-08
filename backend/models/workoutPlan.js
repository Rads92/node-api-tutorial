const mongoose = require("mongoose");
const { WORKOUT_TYPES } = require("../constants/workoutTypes");
const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: WORKOUT_TYPES,
  },
  coreExercises: [
    {
      order: { type: Number, required: true },
      exerciseId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Exercise",
      },
      exerciseName: { type: String, required: true },
      plannedReps: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("WorkoutPlan", workoutPlanSchema);
