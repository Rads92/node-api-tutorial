const express = require("express");
const { body } = require("express-validator");
const enumController = require("../controllers/enum");
const enumsValidators = require("../validators/enums");

const router = express.Router();

router.get("/enums/:enumType?", enumController.getEnums);
router.post(
  "/enum",
  body("name").custom(enumsValidators.validateEnumTypeAndName),
  //   body("name").custom((v) => console.log(v)),
  enumController.postEnum
);

module.exports = router;
