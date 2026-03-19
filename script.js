// Quiz
let questionNumber = 1;
let lessonsCompleted = 0;
let studyHours = 0;

function answer(choice){
    if(questionNumber === 1){
        if(choice === 96){
            document.getElementById("feedback").innerHTML = "Correct!";
            questionNumber = 2;
            document.getElementById("question").innerHTML = "Question 2: What is the square root of 81?";
            document.getElementById("btn1").innerHTML = "9";
            document.getElementById("btn2").innerHTML = "7";
            document.getElementById("btn3").innerHTML = "6";
            document.getElementById("btn1").setAttribute("onclick","answer(9)");
            document.getElementById("btn2").setAttribute("onclick","answer(7)");
            document.getElementById("btn3").setAttribute("onclick","answer(6)");
        } else{
            document.getElementById("feedback").innerHTML = "Try again.";
        }
    } else if(questionNumber === 2){
        if(choice === 9){
            document.getElementById("feedback").innerHTML = "Correct! Quiz Complete.";
            lessonsCompleted++;
        } else{
            document.getElementById("feedback").innerHTML = "Incorrect. Try again.";
        }
    }
}

// Lesson Progress
function completeLesson(){
    lessonsCompleted++;
    document.getElementById("lessonStatus").innerHTML =
    "Lesson saved! Total lessons completed: " + lessonsCompleted;
}

// Tutoring
function joinSession(num){
    let spot = document.getElementById("spot"+num);
    let remaining = parseInt(spot.innerHTML);
    if(remaining > 0){
        remaining--;
        spot.innerHTML = remaining;
        document.getElementById("joinMessage").innerHTML =
        "You successfully joined the tutoring session.";
    } else{
        document.getElementById("joinMessage").innerHTML = "Session is full.";
    }
}

// Dashboard
function updateStats(){
    lessonsCompleted++;
    studyHours++;
    document.getElementById("lessonCount").innerHTML = lessonsCompleted;
    document.getElementById("hours").innerHTML = studyHours;
    document.getElementById("bar1").style.width = Math.min(lessonsCompleted*20,100) + "%";
    document.getElementById("bar2").style.width = Math.min(studyHours*15,100) + "%";
}

// Community
function joinGroup(subject){
    document.getElementById("groupMessage").innerHTML =
    "You joined the " + subject + " study group.";
}

function earnPoints(){
    let points = document.getElementById("p3");
    points.innerHTML = parseInt(points.innerHTML) + 10;
}