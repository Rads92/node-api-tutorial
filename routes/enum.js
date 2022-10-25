const express = require("express");
const { body } = require("express-validator");
const enumController = require("../controllers/enum");
const enumValidators = require("../validators/enum");

const router = express.Router();

router.get("/enums/:enumType?", enumController.getEnums);
router.post(
  "/enum",
  body("name").custom(enumValidators.validateEnumTypeAndName),
  enumController.postEnum
);

module.exports = router;
