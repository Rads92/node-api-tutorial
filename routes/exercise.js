const express = require("express");
const { body } = require("express-validator");

const exerciseController = require("../controllers/exercise");
const enumValidators = require("../validators/enum");
const { BODY_PART } = require("../constants/enumsTypes");

const router = express.Router();

router.get("/exercises", exerciseController.getExercises);
router.get("/exercise/:id", exerciseController.getExercise);
router.patch("/exercise/:id", exerciseController.patchExercise);
router.delete("/exercise/:id", exerciseController.deleteExercise);
router.post(
  "/exercise",
  body("name").isString(),
  body("bodyPart").custom((enumName) =>
    enumValidators.validateEnumByNameAndType(enumName, BODY_PART)
  ),
  exerciseController.postExercise
);

module.exports = router;
