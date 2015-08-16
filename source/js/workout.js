"use strict";
function main(){
    var exercises = get_exercises();
    if(exercises.length==0){
        alert('This workout is empty!');
    }
    var lights = {1: document.getElementById("light1"),
                    2: document.getElementById("light2"),
                    3: document.getElementById("light3"),
                    4: document.getElementById("light4"),
                    5: document.getElementById("light5")};
    var timer = document.getElementById("timer");
    var index = 0;
    var time = loadNextExercise(exercises, index, lights, timer);
    var countdownTimer;

    function nextExerciseContinue(){
        clearInterval(countdownTimer);
        index++;
        time = loadNextExercise(exercises, index, lights, timer)
        console.log(time)
        resumeWorkout(time);
    }

    function resumeWorkout(time){
        if(time[1]>0){
            countdownTimer = setInterval(function(){time = secondPassed(time, lights, timer, nextExerciseContinue);}, 1000);
        }else{
            countdownTimer = setInterval(function(){time = secondPassed(time, lights, timer,
                function(){document.getElementById("button_start").onclick = nextExerciseContinue;})},1000);
        }
    }

    document.getElementById("button_start").onclick = function(){resumeWorkout(time)};
    document.getElementById("button_start").focus();
}



function secondPassed(time, lights, timer, finishFunction){
    console.log(time)
    //Set lights
    if(time[0]>0){
        time[0]--;
        for(var i=0; i<time[0]; i++){
           changeLight(lights[i+1], true); 
        }
        for(i=time[0]; i<5; i++){
            changeLight(lights[i+1], false);
        }
    }else if(time[1]>0){
        time[1]--;
        changeTime(timer, time[1]);
    }else{
        finishFunction();
    }
    return time;
}

function pauseWorkout(){

}


function loadNextExercise(exercises, index, lights, timer){
    var finish= {exercise:
                {name: "Finished!",
                image: "http://blog.griffieworld.com/wp-content/uploads/2010/12/FinishFlag.jpg",
                description: "Congratulations, you're done!"},
                reps: 0, time: 0};
    var current, next; 
    if(index<exercises.length){
        current = exercises[index];
        if(index+1<exercises.length){
            next=exercises[index+1];
        }else{
            next=finish;
        }
    }else{
        current = finish;
        next = finish;
    }
    document.getElementById("current-name").innerHTML = current.exercise.name;
    document.getElementById("current-descrip").innerHTML = current.exercise.description;
    document.getElementById("current-img").src = current.exercise.image;
    var time = setRepsTimer(timer, current);
    document.getElementById("next-name").innerHTML = next.exercise.name;
    document.getElementById("next-descrip").innerHTML = next.exercise.description;
    document.getElementById("next-img").src = next.exercise.image;
    setRepsTimer(document.getElementById("next-time"), next);
    for(var i=0;i<5;i++){
        changeLight(lights[i+1], true);
    }
    return time;
}


function setRepsTimer(obj, exercise){
    if(exercise.time > 0){
        changeTime(obj, exercise.time);
        return [5,exercise.time];
    }else if(exercise.reps > 0){
        obj.innerHTML = exercise.reps + " repetions.";
        return [5,0];
    }else{
        obj.innerHTML = "0:00";
        return [0,0];
    }
}

function changeLight(obj, stop){
    if(stop==true){
        obj.style = "fill:#ff002d;fill-opacity:1;stroke:black;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
    }else{
        obj.style = "fill:#00ff2d;fill-opacity:1;stroke:black;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
    }
}

function changeTime(obj, time){
    var seconds = time % 60;
    var minutes = (time-seconds)/60;
    if (seconds < 10){
        seconds = "0"+seconds;
    }
    obj.innerHTML = "Go for " + minutes + ":" + seconds;
}


window.onload = main;
