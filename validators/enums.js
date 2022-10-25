const Enum = require("../models/enum");

const validateEnumTypeAndName = (name, { req }) => {
  const type = req.body.type;

  return Enum.findOne({ name }).then((foundEnum) => {
    if (foundEnum?.type === type) {
      return Promise.reject("Those enum exists in DB.");
    }
  });
};

module.exports = {
  validateEnumTypeAndName,
};
