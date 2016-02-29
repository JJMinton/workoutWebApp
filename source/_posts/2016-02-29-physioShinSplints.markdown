---
layout: workoutApp
title:  "Shin Splint Prevention"
date:   2015-09-13 18:43:00
categories: physio js 10min
description: The three time daily routine to fix shin splints (8minutes). Follow this with ice

---

<script type="text/javascript">
    function get_exercises(){
        var elibrary = exerciseLibrary();
        var slibrary = stretchLibrary();
        var exercises = [];

        exercises.push({exercise: elibrary.soleusCalfRaises, time: 15, reps: 15});
        exercises.push({exercise: slibrary.stepCalfStretchBentLegs, time: 45, reps: 0});
        exercises.push({exercise: slibrary.stepCalfStretch, time: 45, reps: 0});
        exercises.push({exercise: elibrary.soleusCalfRaises, time: 15, reps: 15});
        exercises.push({exercise: slibrary.stepCalfStretch, time: 45, reps: 0});
        exercises.push({exercise: slibrary.stepCalfStretchBentLegs, time: 45, reps: 0});
        exercises.push({exercise: elibrary.soleusCalfRaises, time: 15, reps: 15});
        exercises.push({exercise: slibrary.stepCalfStretch, time: 45, reps: 0});
        exercises.push({exercise: slibrary.stepCalfStretchBentLegs, time: 45, reps: 0});

        exercises.push({exercise: elibrary.hipAbductionsLeft, time: 20, reps: 15});
        exercises.push({exercise: elibrary.hipAbductionsRight, time: 20, reps: 15});
        exercises.push({exercise: elibrary.hipAbductionsLeft, time: 20, reps: 15});
        exercises.push({exercise: elibrary.hipAbductionsRight, time: 20, reps: 15});
        exercises.push({exercise: elibrary.hipAbductionsLeft, time: 20, reps: 15});
        exercises.push({exercise: elibrary.hipAbductionsRight, time: 20, reps: 15});

        return exercises;
    }
</script>
