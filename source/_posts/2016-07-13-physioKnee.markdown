---
layout: workoutApp
title:  "Knee Strengthening"
date:   2015-09-13 18:43:00
categories: physio js 10min
description: The twice daily routine I was given to strengthen my knee (5minutes).

---

<script type="text/javascript">
    function get_exercises(){
        var elibrary = exerciseLibrary();
        var slibrary = stretchLibrary();
        var exercises = [];

        for(i=0:i<3:i++){
            exercises.push({exercise: elibrary.sittingOneLegRaisesLeft, time: 16, reps: 15});
            exercises.push({exercise: elibrary.sittingOneLegRaisesRight, time: 16, reps: 15});
            exercises.push({exercise: elibrary.butterFlyHipAbductorsLeft, time: 60, reps: 0});
            exercises.push({exercise: elibrary.butterFlyHipAbductorsRight, time: 60, reps: 0});
            exercises.push({exercise: slibrary.leftLayingTwist, time: 30, reps: 0});
            exercises.push({exercise: slibrary.rightLayingTwist, time: 30, reps: 0});
        }

        return exercises;
    }
</script>
