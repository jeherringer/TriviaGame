// All my variables
let count=32;
let answer1 = false;
let answer2 = false;
let answer3 = false;
let answer4 = false;
let userCorrect = 0;
let userWrong = 0;
var counter = setInterval(timer, 1000);

// Function that checks the answers of each question and adds to wrong/correct counters
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
    alert(`You got ${userCorrect} answers correct and ${userWrong} answers wrong!`);
    $("#timeLeft").text("Game over!");
    $("#countdown").hide();

}

// Function to setup the timer
function timer() {
    count=count-1
    if (count == 0) {
        $("#question1audio").trigger("pause");
        $("#question2audio").trigger("pause");
        $("#question3audio").trigger("pause");
        $("#question4audio").trigger("pause");
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

// What actually makes everything work in the game
$(document).ready(function () {
    $(".container").hide(); // Makes sure everything is hidden except start game button at the start
    

    $("#showGame").click(function() { // will show everything on the HTML and run startGame function to get timer going
        $(".container").show();
        setInterval(timer, 1000);
        timer();
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
    
    // Functions to play audio on click and pause all other audio
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

    // function that will pause all playing audio and check the user's answers
    $("#showAnswers").on("click", function() {
        $("#question1audio").trigger("pause");
        $("#question2audio").trigger("pause");
        $("#question3audio").trigger("pause");
        $("#question4audio").trigger("pause");
        answerCheck();
        userCorrect=0;
        userWrong=0;
        startGame();
    })
})
   




