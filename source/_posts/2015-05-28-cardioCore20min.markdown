---
layout: workoutApp
title:  "Cardio Core"
date:   2015-08-27 18:43:00
categories: workouts js core 20min
description: "4:1 Cardio focusing on core exercises."

---

<script type="text/javascript">
    function get_exercises(){
        var library = exerciseLibrary();
        var exercises = [];

        for(var i=0; i<2; i++){
            exercises.push({exercise: library.trunkRotations, time: 20, reps: 0});
            exercises.push({exercise: library.itbRolls, time: 10, reps: 0});
            exercises.push({exercise: library.itbRolls, time: 10, reps: 0});
            exercises.push({exercise: library.steamEngine, time: 20, reps: 0});
            exercises.push({exercise: library.oneLeggedSquats, time: 30, reps: 10});
            exercises.push({exercise: library.oneLeggedSquats, time: 30, reps: 10});
        }
        exercises.push({exercise: library.trunkRotations, time: 20, reps: 0});
        exercises.push({exercise: library.steamEngine, time: 20, reps: 0});
                         
        for(var i=0;i<2;i++){
            exercises.push({exercise: library.mountainClimber, time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
            exercises.push({exercise: library.sideHipRaises,  time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
            exercises.push({exercise: library.bicycleKicks, time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
            exercises.push({exercise: library.sideHipRaises, time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
        };
        exercises.push({exercise: library.backExtensions, time: 60, reps: 0});
        exercises.push({exercise: library.rest, time: 15, reps: 0});
        exercises.push({exercise: library.mountainClimber, time: 60, reps: 0});
        exercises.push({exercise: library.rest, time: 15, reps: 0});
        exercises.push({exercise: library.backExtensions, time: 60, reps: 0});
        return exercises;
    }
</script>
