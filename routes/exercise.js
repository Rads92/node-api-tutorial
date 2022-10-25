const express = require("express");
const { body } = require("express-validator");

const exerciseController = require("../controllers/exercise");
const exerciseValidators = require("../validators/exercise");

const router = express.Router();

router.get("/exercises", exerciseController.getExercises);
router.get("/exercise/:id", exerciseController.getExercise);
router.patch("/exercise/:id", exerciseController.patchExercise);
router.post(
  "/exercise",
  body("name").isString(),
  body("bodyPart").custom(exerciseValidators.validateBodyPart),
  exerciseController.postExercise
);

module.exports = router;
