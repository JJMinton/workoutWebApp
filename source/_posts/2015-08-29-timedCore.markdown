---
layout: workoutApp
title:  "Timed Core"
date:   2015-08-16 18:43:00
categories: workouts js 20min core
description: "Timed, with three reps of core superset."

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
                         
        for(var i=0;i<3;i++){
            exercises.push({exercise: library.tipOvers, time: 30, reps: 0});
            exercises.push({exercise: library.pikeVSnaps, time: 30, reps: 0});
            exercises.push({exercise: library.russianTwists, time: 30, reps: 0});
            exercises.push({exercise: library.sidePlankLeft, time: 20, reps: 0});
            exercises.push({exercise: library.sidePlankRight, time: 20, reps: 0});
            exercises.push({exercise: library.flutterKicks, time: 30, reps: 0});
            exercises.push({exercise: library.bicycleKicks, time: 30, reps: 0});
            exercises.push({exercise: library.plank, time: 30, reps: 0});
            exercises.push({exercise: library.rest, time: 30, reps: 0});
        };
        exercises.pop();
        return exercises;
    }
</script>
