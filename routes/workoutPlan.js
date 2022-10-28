const express = require("express");
const { body } = require("express-validator");

const workoutPlanController = require("../controllers/workoutPlan");
const enumValidators = require("../validators/enum");
const { WORKOUT_PLAN_TYPE } = require("../constants/enumsTypes");

const router = express.Router();

router.get("/workoutPlans", workoutPlanController.getWorkoutPlans);
router.get("/workoutPlan/:id", workoutPlanController.getWorkoutPlan);
router.patch("/workoutPlan/:id", workoutPlanController.patchWorkoutPlan);
router.delete("/workoutPlan/:id", workoutPlanController.deleteWorkoutPlan);
router.post(
  "/workoutPlan",
  body("name").isString(),
  body("type").custom((workoutPlanType) =>
    enumValidators.validateEnumByNameAndType(workoutPlanType, WORKOUT_PLAN_TYPE)
  ),
  workoutPlanController.postWorkoutPlan
);

module.exports = router;
