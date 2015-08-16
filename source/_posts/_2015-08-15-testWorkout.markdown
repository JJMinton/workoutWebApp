---
layout: workoutApp
title:  "Test Workout"
date:   2015-08-15 11:03:00
categories: workouts js

---

<script type="text/javascript">
    function get_exercises(){
        var rest = {name: "Rest",
                    image: "https://sp.yimg.com/ib/th?id=JN.Wsri7b6Vztk9RKtI52de%2bQ&pid=15.1&P=0&w=300&h=300",
                    description: "Take it easy!"};
        var pushups = {name: "Push Ups",
                    image: "https://s.yimg.com/fz/api/res/1.2/sb2rU9l1LCEc0Z0OK.mgdA--/YXBwaWQ9c3JjaGRkO2g9MzAwO3E9OTU7dz0zMDA-/http://www.thefatlossninja.com/wp-content/uploads/2012/03/push-up-exercise.jpg",
                    description: "Keeping your body straight and your hands under your shoulders push up from a face down position."};
        var situps = {name: "Sit Ups",
                      image: "https://s.yimg.com/fz/api/res/1.2/YQwGWGIhSX5iVlcCjvjdaA--/YXBwaWQ9c3JjaGRkO2g9NzE0O3E9OTU7dz0xMzAw/http://thumbs.dreamstime.com/z/sit-up-22769821.jpg",
                      description: ""};

        var superset1 = {exercise:
                        [{exercise: pushups, time: 3, reps: 0},
                         {exercise: situps,  time: 3, reps: 0},
                         {exercise: rest, time: 3, reps: 0}],
                         reps: 2, rest: 5};
        var superset2 = {exercise:
                        [{exercise: pushups, time: 2, reps: 0},
                         {exercise: situps,  time: 0, reps: 10},
                         {exercise: rest, time: 3, reps: 0}],
                         reps: 1, rest: 3};

        var workout = [superset1, superset2];

        var exercises = [];
        for (var supersetInd = 0; supersetInd < workout.length; supersetInd++){
            for (var superrep=0; superrep < workout[supersetInd].reps; superrep++){
                for (var exerciseInd=0; exerciseInd < workout[supersetInd].exercise.length; exerciseInd++){
                    exercises.push(workout[supersetInd].exercise[exerciseInd]);
                }
            }
            exercises.push({exercise: rest, time: workout[supersetInd].rest, reps: 0});
        }

        //Onload set up first exercise
        return exercises;
    }
</script>
