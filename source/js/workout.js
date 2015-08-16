function main(){
    var exercises = get_exercises();

    var rest = {name: "Rest",
                image: "https://sp.yimg.com/ib/th?id=JN.Wsri7b6Vztk9RKtI52de%2bQ&pid=15.1&P=0&w=300&h=300",
                description: "Take it easy!"};
    
    if(exercises.length==0){
        alert('This workout is empty!');
    }
    document.getElementById("current-name").innerHTML = exercises[0].exercise.name;
    document.getElementById("current-descrip").innerHTML = exercises[0].exercise.description;
    document.getElementById("current-img").src = exercises[0].exercise.image;
    setRepsTimer(document.getElementById("timer"), exercises[0]);
    if(exercises.length>1){
        document.getElementById("next-name").innerHTML = exercises[1].exercise.name;
        document.getElementById("next-descrip").innerHTML = exercises[1].exercise.description;
        document.getElementById("next-img").src = exercises[1].exercise.image;
        setRepsTimer(document.getElementById("next-time"), exercises[1]);
    }else{
        document.getElementById("current-name").innerHTML = rest.name;
        document.getElementById("current-descrip").innerHTML = rest.image;
        document.getElementById("current-img").src = rest.description;
        document.getElementById("next-time").inerrHTML = "Ever and ever";
    }

    alert('hello world');

}

function changeLight(obj, stop){
    if(stop==True){
        obj.style = "fill:#ff002d;fill-opacity:1;stroke:black;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
    }else{
        obj.style = "fill:#00ff2d;fill-opacity:1;stroke:black;stroke-width:2;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
    }
}

function setRepsTimer(obj, exercise){
    if(exercise.time > 0){
        obj.innerHTML = "Go for " + exercise.time + " seconds.";
    }else if(exercise.reps > 0){
        obj.innerHTML = exercise.reps + " repetions.";
    }else{
        obj.innerHTML = "That's strange but I guess you're done";
    }
}


window.onload = main;
