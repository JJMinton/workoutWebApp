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
    var progressBar = [null, null]
    progressBar[0] = document.getElementById("progressBar");
    progressBar[1] = document.getElementById("regressBar");
    progressBar[0].setAttribute('aria-valuemin',0);
    progressBar[0].setAttribute('aria-valuemax', getRemainingTime(exercises,0));
    var noises = [new Audio("{{ "/media/shortBeep.mp3" | prepend: site.baseurl }}"),
                  new Audio("{{ "/media/longBeep.mp3" | prepend: site.baseurl }}"),
                  new Audio("{{ "/media/finish.mp3" | prepend: site.baseurl }}")];
    var index = 0;
    var time = loadNextExercise(exercises, index, lights, timer, progressBar);
    var countdownTimer;
    //var noises = [new Audio('shortBeep.mp3'), new Audio('longBeep.mp3'), new Audio('finish.mp3')]

    function nextExerciseContinue(){
        clearInterval(countdownTimer);
        index++;
        time = loadNextExercise(exercises, index, lights, timer, progressBar)
        resumeWorkout(time);
    }

    function resumeWorkout(time){
        document.getElementById("button_start").innerHTML= "Pause";
        document.getElementById("button_start").onclick = pauseWorkout;
        if(time[1]>0){
            countdownTimer = setInterval(function(){time = secondPassed(time, lights, timer, progressBar, noises, nextExerciseContinue);}, 1000);
        }else{
            countdownTimer = setInterval(function(){time = secondPassed(time, lights, timer, progressBar, noises,
                function(){document.getElementById("button_start").innerHTML="Start";
                            document.getElementById("button_start").onclick = nextExerciseContinue;})},1000);
        }
    }

    function pauseWorkout(){
        clearInterval(countdownTimer);
        document.getElementById("button_start").innerHTML= "Start";
        document.getElementById("button_start").onclick = function(){resumeWorkout(time)};
        document.getElementById("button_start").focus();
    }

    document.getElementById("button_start").onclick = function(){resumeWorkout(time)};
    document.getElementById("button_start").focus();
}

function getRemainingTime(exercises, index){
    var totalTime = 0;
    for(var exercise of exercises.slice(index)){
        totalTime += 3;
        totalTime += exercise.time;
    }
    return totalTime;
}


function secondPassed(time, lights, timer, progressBar, noises, finishFunction){
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
    time[2]--;
    changeProgressBar(progressBar, time[2]);
    return time;
}


function loadNextExercise(exercises, index, lights, timer, progressBar){
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
    var time = setRepsTimer(timer, current);
    var totalTime = getRemainingTime(exercises, index);
    document.getElementById("current-name").innerHTML = current.exercise.name;
    document.getElementById("current-descrip").innerHTML = current.exercise.description;
    document.getElementById("current-img").src = current.exercise.image;
    document.getElementById("next-name").innerHTML = next.exercise.name;
    document.getElementById("next-descrip").innerHTML = next.exercise.description;
    document.getElementById("next-img").src = next.exercise.image;
    setRepsTimer(document.getElementById("next-time"), next);
    changeLights(lights, time[0]);
    changeProgressBar(progressBar, totalTime);
    return [time[0], time[1], totalTime] ;
}



function setRepsTimer(obj, exercise){
    //Updates the current time clock for the new exercise and returns [time to start, time of execise]
    if(exercise.reps > 0){
        obj.innerHTML = exercise.reps + " repetions.";
        return [3,0];
    }else if(exercise.time > 0){
        changeTime(obj, exercise.time);
        return [3,exercise.time];
    }else{ //exercise.time == 0 && exercise.reps == 0 indicates the end of the workout
        changeTime(obj, exercise.time);
        return [0,0];
    }
}

function changeLights(lights, time, beep){
    //Updates the countdown lights' colour and plays sound.
    for(var i=0; i<time; i++){
        lights[i].style.fill = "#ff002d";
    }
    for(i=time; i<lights.length; i++){
        lights[i].style.fill = "#00ff2d";
    }
    if(beep){beep.play();}
}

function changeTime(obj, time, beep){
    //Changes the current time clock and plays sound.
    var seconds = time % 60;
    var minutes = (time-seconds)/60;
    if (seconds < 10){
        seconds = "0"+seconds;
    }
    obj.innerHTML = "Go for " + minutes + ":" + seconds;
    if(beep){beep.play();}
}

function changeProgressBar(obj, time){
    //Updates progress bar with the total remaining time.
    var max = parseFloat(obj[0].getAttribute("aria-valuemax"));
    var seconds = time%60;
    var minutes = (time-seconds)/60;
    if (seconds <10){
        seconds = "0"+seconds;
    }
    obj[1].innerHTML = minutes + ":" + seconds;
    obj[1].setAttribute('aria-valuenow', time)
    obj[1].style.width = (100*time/max)+'%';
    time = max-time;
    seconds = time%60;
    minutes = (time-seconds)/60;
    if (seconds <10){
        seconds = "0"+seconds;
    }
    obj[0].innerHTML = minutes + ":" + seconds;
    obj[0].setAttribute('aria-valuenow', time)
    obj[0].style.width = (100*time/max)+'%';
}


window.onload = main;
