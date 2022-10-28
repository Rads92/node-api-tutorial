const checkValidationError = require("../utils/checkValidationError");
const Exercise = require("../models/exercise");

const getExercises = (req, res, next) => {
  Exercise.find({})
    .then((exercises) => {
      res.status(200).json({
        data: exercises,
      });
    })
    .catch((error) => next(error));
};

const getExercise = (req, res, next) => {
  const id = req.params.id;
  Exercise.findById(id, {
    _id: 1,
    name: 1,
    description: 1,
    bodyPart: 1,
    public: 1,
  })
    .then((exercise) => {
      if (!exercise) {
        throw new Error(`Exercise with "${id}" was not found.`);
      }
      res.status(200).json({
        ...exercise._doc,
      });
    })
    .catch((error) => next(error));
};

const deleteExercise = (req, res, next) => {
  const id = req.params.id;

  Exercise.findByIdAndDelete(id)
    .then((exercise) => {
      if (!exercise) {
        throw new Error(`Exercise with "${id}" was not found.`);
      }
      res.status(200).json({ message: "Successfully deleted", data: exercise });
    })
    .catch((error) => next(error));
};

const patchExercise = (req, res, next) => {
  const id = req.params.id;
  const { name, description, bodyPart, public } = req.body;

  Exercise.findByIdAndUpdate(id, {
    $set: { name, description, bodyPart, public },
  })
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => next(error));
};

const postExercise = (req, res, next) => {
  const { name, description = "", bodyPart, public = false } = req.body;
  checkValidationError(req, "Validation failed, entered data are incorrect.");

  const newExercise = new Exercise({
    name,
    description,
    bodyPart,
    public,
  });

  newExercise
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Exercise created successfully",
        data: result,
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  getExercises,
  getExercise,
  postExercise,
  patchExercise,
  deleteExercise,
};
