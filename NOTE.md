WorkoutPlan

- name
- type: triset/circuit/single
- essentialExercises: [
    {
        exerciseId,
        exerciseName,
        plannedReps,
    }
  ]
- variantExercises: [
    {
        exerciseId,
        exerciseName,
        plannedReps,
        variantFor, <exerciseId in workoutPlan this is variant for>
    }
  ]
- coreExercises: [ 
    {
        order, <exercise order in plan - check if we need that>
        exerciseId,
        exerciseName,
        plannedReps,
    }
  ]
