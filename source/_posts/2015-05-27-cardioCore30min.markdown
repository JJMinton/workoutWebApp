---
layout: workoutApp
title:  "Cardio Core"
date:   2015-08-27 18:43:00
categories: workouts js core 30min
description: "Four sets of one minute core exercises then two minutes of pressups."

---

<script type="text/javascript">
    function get_exercises(){
        var library = exerciseLibrary();
        var exercises = [];

        for(var i=0; i<3; i++){
            exercises.push({exercise: library.trunkRotations, time: 20, reps: 0});
            exercises.push({exercise: library.itbRolls, time: 10, reps: 0});
            exercises.push({exercise: library.itbRolls, time: 10, reps: 0});
            exercises.push({exercise: library.steamEngine, time: 20, reps: 0});
            exercises.push({exercise: library.oneLeggedSquats, time: 30, reps: 10});
            exercises.push({exercise: library.oneLeggedSquats, time: 30, reps: 10});
        }
                         
        for(var i=0;i<4;i++){
            exercises.push({exercise: library.mountainClimber, time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
            exercises.push({exercise: library.sidePlankRight,  time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
            exercises.push({exercise: library.bicycleKicks, time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
            exercises.push({exercise: library.sidePlankLeft, time: 60, reps: 0});
            exercises.push({exercise: library.rest, time: 15, reps: 0});
        };
        exercises.push({exercise: library.backExtensions, time: 100, reps: 0});
        return exercises;
    }
</script>
