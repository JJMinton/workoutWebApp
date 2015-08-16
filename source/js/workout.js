---
---

"use strict";
function main(){
    var exercises = get_exercises();
    if(exercises.length==0){
        alert('This workout is empty!');
    }
    var lights = [document.getElementById("light1"),
                  document.getElementById("light2"),
                  document.getElementById("light3"),];
    var timer = document.getElementById("timer");
    var index = 0;
    var time = loadNextExercise(exercises, index, lights, timer);
    var countdownTimer;
    //var noises = [new Audio('shortBeep.mp3'), new Audio('longBeep.mp3'), new Audio('finish.mp3')]
    var noises = [new Audio("{{ "/media/shortBeep.mp3" | prepend: site.baseurl }}"),
                  new Audio("{{ "/media/longBeep.mp3" | prepend: site.baseurl }}"),
                  new Audio("{{ "/media/finish.mp3" | prepend: site.baseurl }}")];

    function nextExerciseContinue(){
        clearInterval(countdownTimer);
        index++;
        time = loadNextExercise(exercises, index, lights, timer)
        resumeWorkout(time);
    }

    function resumeWorkout(time){
        document.getElementById("button_start").onclick = null;
        if(time[1]>0){
            countdownTimer = setInterval(function(){time = secondPassed(time, lights, timer, noises, nextExerciseContinue);}, 1000);
        }else{
            countdownTimer = setInterval(function(){time = secondPassed(time, lights, timer, noises,
                function(){document.getElementById("button_start").onclick = nextExerciseContinue;})},1000);
        }
    }
    document.getElementById("button_start").onclick = function(){resumeWorkout(time)};
    document.getElementById("button_start").focus();
}



function secondPassed(time, lights, timer, noises, finishFunction){
    //Set lights
    if(time[0]>0){
        time[0]--;
        if(time[0]==0){
            changeLights(lights, time[0], noises[1])
        }else{
            changeLights(lights, time[0], noises[0])
        } 
    }else if(time[1]>0){
        time[1]--;
        if(time[1]==0){
            changeTime(timer, time[1], noises[2]);
        }else{
            changeTime(timer, time[1], null);
        }
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
    changeLights(lights, time[0]);
    return time;
}


function setRepsTimer(obj, exercise){
    if(exercise.time > 0){
        changeTime(obj, exercise.time);
        return [3,exercise.time];
    }else if(exercise.reps > 0){
        obj.innerHTML = exercise.reps + " repetions.";
        return [3,0];
    }else{
        obj.innerHTML = "0:00";
        return [0,0];
    }
}

function changeLights(lights, time, beep){
    for(var i=0; i<time; i++){
        lights[i].style = "fill:#ff002d;fill-opacity:1;stroke:black;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
    }
    for(i=time; i<lights.length; i++){
        lights[i].style = "fill:#00ff2d;fill-opacity:1;stroke:black;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
    }
    if(beep){beep.play();}
}

function changeTime(obj, time, beep){
    var seconds = time % 60;
    var minutes = (time-seconds)/60;
    if (seconds < 10){
        seconds = "0"+seconds;
    }
    obj.innerHTML = "Go for " + minutes + ":" + seconds;
    if(beep){beep.play();}
}


window.onload = main;
