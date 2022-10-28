const checkValidationError = require("../utils/checkValidationError");
const Enum = require("../models/enum");

const getEnums = (req, res, next) => {
  const enumType = req.params.enumType;
  const queryData = enumType ? { type: enumType } : {};
  Enum.find(queryData, { name: 1, type: 1 })
    .then((enums) => {
      res.status(200).json({
        data: enums,
      });
    })
    .catch((err) => next(err));
};

const postEnum = (req, res, next) => {
  const { type, name } = req.body;

  checkValidationError(req, "Validation failed, entered data are incorrect.");

  const newEnum = new Enum({ type, name });

  newEnum
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Enum created successfully",
        data: result,
      });
    })
    .catch((err) => next(err));
};

const patchEnum = (req, res, next) => {
  const id = req.params.id;
  const { name, description, bodyPart, public } = req.body;

  Enum.findByIdAndUpdate(id, { $set: { name, description, bodyPart, public } })
    .then(() => {
      res.status(204).json();
    })
    .catch((e) => {
      const error = new Error(`Exercise with "${id}" was not found.`);
      next(error);
    });
};
const deleteEnum = (req, res, next) => {
  const id = req.params.id;

  Enum.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        throw new Error();
      }
      res
        .status(200)
        .json({ message: "Successfully deleted", data: result });
    })
    .catch(() => {
      const error = new Error(`Enum with "${id}" was not found.`);
      next(error);
    });
};

module.exports = {
  getEnums,
  postEnum,
  patchEnum,
  deleteEnum,
};
