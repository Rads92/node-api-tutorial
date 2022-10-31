const workoutSchema = {
  name: "name",
  type: "triset/circuit/split",
  /**
   * essentialExercises 
   * - will be added before each set 
   * - has only name and planned Reps
   * 
   * WILL BE ADD LATER
   */ 
  essentialExercises: [
    {
      exerciseId,
      exerciseName,
      plannedReps,
    },
  ],
  /**
   * variantExercises 
   * - will be added to specific exercises in variantFor
   * - has only name and planned Reps
   * 
   * WILL BE ADD LATER
   */ 
  variantExercises: [
    {
      exerciseId,
      exerciseName,
      plannedReps,
      variantFor, // <exerciseId in workoutPlan this is variant for>
    },
  ],
  /**
   * coreExercises 
   * - will generate workout plan
   * - are sorted by order and group by workoutPlan
   *  - triset - exercises will be grouped by 3 exercises 
   *  - circuit -  all exercises will be listed one by one without break
   *  - split - there will steps one by one exercises
   */ 
  coreExercises: [
    {
      order, //<exercise order in plan check if we need that>
      exerciseId,
      exerciseName,
      plannedReps,
    },
  ],
};
