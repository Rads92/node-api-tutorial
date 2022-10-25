const Enum = require("../models/enum");

const validateBodyPart = (bodyPart) => {
  return Enum.findOne({ name: bodyPart }).then((foundEnum) => {
    if (!foundEnum) {
      return Promise.reject(
        `Enum with type: BodyPart with name ${bodyPart} doesn't exist.`
      );
    }
  });
};

module.exports = {
  validateBodyPart,
};
