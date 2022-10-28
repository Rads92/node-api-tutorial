const checkValidationError = require("../utils/checkValidationError");
const WorkoutPlan = require("../models/workoutPlan");

const getWorkoutPlans = (req, res, next) => {
  WorkoutPlan.find({})
    .then((workoutPlans) => res.status(200).json({ data: workoutPlans }))
    .catch((error) => next(error));
};

const getWorkoutPlan = (req, res, next) => {
  const id = req.params.id;
  WorkoutPlan.findById(id)
    .then((workoutPlan) => {
      if (!workoutPlan) {
        throw new Error(`Workout plan with "${id}" was not found.`);
      }
      res.status(200).json({
        ...workoutPlan._doc,
      });
    })
    .catch((error) => next(error));
};

const postWorkoutPlan = (req, res, next) => {
  const { name, type, coreExercises } = req.body;
  checkValidationError(req, "Validation failed, entered data are incorrect.");

  const newWorkoutPlan = new WorkoutPlan({
    name,
    type,
    coreExercises,
  });

  newWorkoutPlan
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Workout plan created successfully",
        data: result,
      });
    })
    .catch((error) => next(error));
};
const patchWorkoutPlan = (req, res, next) => {
  const id = req.params.id;
  const { name, type, coreExercises } = req.body;

  WorkoutPlan.findByIdAndUpdate(id, {
    $set: { name, type, coreExercises },
  })
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => next(error));
};

const deleteWorkoutPlan = (req, res, next) => {
  const id = req.params.id;

  WorkoutPlan.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        throw new Error();
      }
      res.status(200).json({ message: "Successfully deleted", data: result });
    })
    .catch(() => {
      const error = new Error(`Workout plan with "${id}" was not found.`);
      next(error);
    });
};

module.exports = {
  getWorkoutPlans,
  getWorkoutPlan,
  postWorkoutPlan,
  patchWorkoutPlan,
  deleteWorkoutPlan,
};
