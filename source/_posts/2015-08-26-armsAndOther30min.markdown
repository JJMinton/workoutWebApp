---
layout: workoutApp
title:  "Arms and Other"
date:   2015-08-26 18:43:00
categories: workouts js arms general 30min
description: "Five sets of eleven 30sec exercises with a focus on arms."

---

<script type="text/javascript">
    function get_exercises(){
        var library = exerciseLibrary();
        var exercises = [];

        for(var i=0;i<3;i++){
            exercises.push({exercise: library.starjumps, time: 20, reps: 0});
            exercises.push({exercise: library.armCircles, time: 20, reps: 0});
            exercises.push({exercise: library.trunkRotations, time: 20, reps: 0});
        }
                         
        for(var i=0;i<5;i++){
            exercises.push({exercise: library.pushups, time: 27, reps: 0});
            exercises.push({exercise: library.lunges, time: 27, reps: 0});
            exercises.push({exercise: library.jumpSquats,  time: 27, reps: 0});
            exercises.push({exercise: library.widePushups,  time: 27, reps: 0});
            exercises.push({exercise: library.flutterKicks, time: 27, reps: 0});
            exercises.push({exercise: library.tipOvers, time: 27, reps: 0});
            exercises.push({exercise: library.closePushups, time: 27, reps: 0});
            exercises.push({exercise: library.sideLegRaises, time: 27, reps: 0});
            exercises.push({exercise: library.sideLegRaises, time: 27, reps: 0});
            exercises.push({exercise: library.tricepDips, time: 27, reps: 0});
            exercises.push({exercise: library.situps, time: 27, reps: 0});
        };
        return exercises;
    }
</script>
