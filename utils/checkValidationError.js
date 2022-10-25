const { validationResult } = require("express-validator");

const checkValidationError = (
  req,
  errorMsg = "Something went wrong",
  statusCode = 422
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(errorMsg);
    error.statusCode = statusCode;
    throw error;
  }
};

module.exports = checkValidationError;
