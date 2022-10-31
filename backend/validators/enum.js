const Enum = require("../models/enum");

const validateEnumTypeAndName = (name, { req }) => {
  const type = req.body.type;

  return Enum.findOne({ name }).then((foundEnum) => {
    if (foundEnum?.type === type) {
      return Promise.reject("Those enum exists in DB.");
    }
  });
};

const validateEnumByNameAndType = (enumName, enumType) => {
  return Enum.findOne({ name: enumName, type: enumType }).then((foundEnum) => {
    if (!foundEnum) {
      return Promise.reject(
        `Enum with type: ${enumType} with name ${enumName} doesn't exist.`
      );
    }
  });
};

module.exports = {
  validateEnumTypeAndName,
  validateEnumByNameAndType,
};
