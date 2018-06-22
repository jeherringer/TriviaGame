// variables needed:

// var answer1,2,3,4 = 
// var count

//functions needed:

// timer function
// game start function (that shows the html holding the questions)
// win function
// lose function
// reset function
// on click functions for buttons

let count=32;
let answer1 = "";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let userCorrect = 0;
let userWrong = 0;
var timerRunning=false;
let counter=setInterval(timer, 1000);

function answerCheck () {
   if (answer1 === true) {
       userCorrect++;
   } else if (answer1 === false) {
       userWrong++;
   }
   if (answer2 === true) {
    userCorrect++;
    } else if (answer2 === false) {
        userWrong++;
    }
    if (answer3 === true) {
        userCorrect++;
    } else if (answer3 === false) {
        userWrong++;
    }
    if (answer4 === true) {
        userCorrect++;
    } else if (answer4 === false) {
        userWrong++;
    }
    $("#userAnswers").text(`You got ${userCorrect} answers correct and ${userWrong} answers wrong!`);
}

function timer() {
    count=count-1
    if (count == 0) {
        $("#question1audio").trigger("pause");
        $("#question2audio").trigger("pause");
        $("#question3audio").trigger("pause");
        $("#question4audio").trigger("pause");
        answerCheck();
    }
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    if (count >= 31) {
        clearInterval(counter);
        return;
    }

  $("#countdown").text(count);
}

function startGame() {
        setInterval(timer, 1000);
        timer();
}

$(document).ready(function () {
    $(".container").hide();
    

    $("#showGame").click(function() {
        $(".container").show();
        startGame();
    });

// Question 1 click functions
    $("#q1a").on("click", function () {
        answer1=false;
        console.log("your a1 choice is" + answer1);
        $(this).addClass("active");
        $("#q1b").removeClass("active");
        $("#q1c").removeClass("active");
    })
    $("#q1b").click(function () {
        answer1 = false;
        console.log("your a1 choice is" + answer1);
        $(this).addClass("active");
        $("#q1c").removeClass("active");
        $("#q1a").removeClass("active");
    })
    $("#q1c").click(function () {
        answer1 = true;
        console.log("your a1 choice is" + answer1);
        $(this).addClass("active");
        $("#q1b").removeClass("active");
        $("#q1a").removeClass("active");
    })

// Question 2 click functions
    $("#q2a").on("click", function () {
        answer2=true;
        console.log("your a2 choice is" + answer2);
        $(this).addClass("active");
        $("#q2b").removeClass("active");
        $("#q2c").removeClass("active");
    })
    $("#q2b").click(function () {
        answer2 =false;
        console.log("your a2 choice is" + answer2);
        $(this).addClass("active");
        $("#q2a").removeClass("active");
        $("#q2c").removeClass("active");
    })
    $("#q2c").click(function () {
        answer2 = false;
        console.log("your a2 choice is" + answer2);
        $(this).addClass("active");
        $("#q2a").removeClass("active");
        $("#q2b").removeClass("active");
    })

// Question 3 click functions
    $("#q3a").on("click", function () {
        answer3=true;
        console.log("your a3 choice is" + answer3);
        $(this).addClass("active");
        $("#q3b").removeClass("active");
        $("#q3c").removeClass("active");
    })
    $("#q3b").click(function () {
        answer3 =false;
        console.log("your a3 choice is" + answer3);
        $(this).addClass("active");
        $("#q3a").removeClass("active");
        $("#q3c").removeClass("active");
    })
    $("#q3c").click(function () {
        answer3 =false;
        console.log("your a3 choice is" + answer3);
        $(this).addClass("active");
        $("#q3a").removeClass("active");
        $("#q3b").removeClass("active");
    })

    // Question 4 functions
    $("#q4a").on("click", function () {
        answer4=false;
        console.log("your a3 choice is" + answer3);
        $(this).addClass("active");
        $("#q4b").removeClass("active");
        $("#q4c").removeClass("active");
    })
    $("#q4b").click(function () {
        answer4 =true;
        console.log("your a3 choice is" + answer3);
        $(this).addClass("active");
        $("#q4a").removeClass("active");
        $("#q4c").removeClass("active");
    })
    $("#q4c").click(function () {
        answer4 =false;
        console.log("your a3 choice is" + answer3);
        $(this).addClass("active");
        $("#q4a").removeClass("active");
        $("#q4b").removeClass("active");
    })

    $("#showAnswers").on("click", function() {
        $("#question1audio").trigger("pause");
        $("#question2audio").trigger("pause");
        $("#question3audio").trigger("pause");
        $("#question4audio").trigger("pause");
        answerCheck();
    })
    
    $("#start").click(function() {
        $("#question1audio").get(0).play();
        $("#question2audio").trigger("pause");
        $("#question3audio").trigger("pause");
        $("#question4audio").trigger("pause");
    })

    $("#q2start").click(function() {
        $("#question1audio").trigger("pause");
        $("#question2audio").get(0).play();
        $("#question3audio").trigger("pause");
        $("#question4audio").trigger("pause");
    })

    $("#q3start").click(function() {
        $("#question1audio").trigger("pause");
        $("#question2audio").trigger("pause");
        $("#question3audio").get(0).play();
        $("#question4audio").trigger("pause");
    })

    $("#q4start").click(function() {
        $("#question1audio").trigger("pause");
        $("#question2audio").trigger("pause");
        $("#question3audio").trigger("pause");
        $("#question4audio").get(0).play();
    })




    
})
   




