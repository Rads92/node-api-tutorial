const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutPlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["TRISET", "CIRCUIT", "SPLIT"],
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
