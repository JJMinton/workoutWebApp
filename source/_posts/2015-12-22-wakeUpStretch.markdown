---
layout: workoutApp
title:  "Wake Up Stretch"
date:   2015-09-13 18:43:00
categories: stretching js 20min
description: All round 15 minute stretching routine to relax you into sleeping.

---

<script type="text/javascript">
    function get_exercises(){
        var elibrary = exerciseLibrary();
        var slibrary = stretchLibrary();
        var exercises = [];

        //Laying legs and back
        exercises.push({exercise: slibrary.layingButterflyStretch, time: 60, reps: 0});
        exercises.push({exercise: slibrary.leftLayingTwist, time: 60, reps: 0});
        exercises.push({exercise: slibrary.rightLayingTwist, time: 60, reps: 0});
        exercises.push({exercise: slibrary.leftLayingKneeToChest, time: 60, reps: 0});
        exercises.push({exercise: slibrary.rightLayingKneeToChest, time: 60, reps: 0});
        exercises.push({exercise: slibrary.leftLayingQuadStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightLayingQuadStretch, time: 30, reps: 0});

        //Sitting legs and back
        exercises.push({exercise: slibrary.catStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.butterflyStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.leftSittingTwist, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightSittingTwist, time: 30, reps: 0});

        //Leaning stretching
        exercises.push({exercise: slibrary.standingToeTouchesStretch,  time: 30, reps: 0});
        exercises.push({exercise: slibrary.boxSplits, time: 60, reps: 0});
        exercises.push({exercise: slibrary.leftStandingHipFlexors, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightStandingHipFlexors, time: 30, reps: 0});

        //Standing arms
        exercises.push({exercise: slibrary.leftShoulderStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightShoulderStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.leftTricepStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightTricepStretch, time: 30, reps: 0});

        //Standing legs
        exercises.push({exercise: slibrary.leftShortCalfStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightShortCalfStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.leftLongCalfStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.rightLongCalfStretch, time: 30, reps: 0});

        exercises.push({exercise: slibrary.doorwayChestStretch, time: 30, reps: 0});
        exercises.push({exercise: slibrary.doorwayChestStretch, time: 30, reps: 0});

        for(var i=0;i<2;i++){
            exercises.push({exercise: elibrary.trunkRotations, time: 20, reps: 0});
            exercises.push({exercise: elibrary.armCircles, time: 20, reps: 0});
            exercises.push({exercise: elibrary.dynamicSideStretch, time: 20, reps: 0});
            exercises.push({exercise: slibrary.headCircles, time: 20, reps: 0});
        }
        return exercises;
    }
</script>
