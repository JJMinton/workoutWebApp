---
layout: workoutApp
title:  "Explosive Legs"
date:   2015-08-28 18:43:00
categories: workouts js legs 20min
description: "Explosive Legs with a touch of core to finish."

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
            exercises.push({exercise: library.calfRaisesLeft, time: 25, reps: 24});
            exercises.push({exercise: library.calfRaisesRight, time: 40, reps: 24});
            exercises.push({exercise: library.jumpSideLunges,  time: 60, reps: 0});
            exercises.push({exercise: library.jumpSquats,  time: 18, reps: 12});
            exercises.push({exercise: library.jumpLunges, time: 18, reps: 12});
        };
        exercises.push({exercise: library.rest, time: 60, reps: 1});
        for(var i=0; i<5; i++){
            exercises.push({exercise: library.burpees, time: 30, reps: 0});
            exercises.push({exercise: library.reverseFlutterKicks,  time: 30, reps: 0});
            exercises.push({exercise: library.tuckVSnaps,  time: 30, reps: 0});
            exercises.push({exercise: library.rest,  time: 30, reps: 0});
        }
        exercises.pop();
        return exercises;
    }
</script>
