const checkValidationError = require("../utils/checkValidationError");
const Enum = require("../models/enum");

const getEnums = (req, res, next) => {
  const enumType = req.params.enumType;
  const queryData = enumType ? { type: enumType } : {};
  Enum.find(queryData, { name: 1, type: 1 })
    .then((enums) => {
      res.status(200).json({
        enums,
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
        enum: result,
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  getEnums,
  postEnum,
};
