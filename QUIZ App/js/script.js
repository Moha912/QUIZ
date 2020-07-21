let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

let questions = quiz.sort(function () {
    return 0.5 - Math.random();
}) ;

let totalQuestion  = questions.length;

$(function(){
    // timer code start from here

    let totaTime = 200; // 200 seconds for timer
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totaTime - counter) / 60); //calculating min
        sec = totaTime - (min * 60) -counter;

        $(".timerBox span").text(min + ":" + sec);

        if(counter == totaTime){
            alert("Time's up. Press ok to show the result");
            result();
            clearInterval(timer);
        }
    }, 1000); // timer set for 1 seconds intarval

    // timer code end here

    // print Question

    printQuestion(index);

});

// Function to print question start

function printQuestion(i) {
    console.log(questions[0]);

    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3 ]);
}

// Function to print question end


// Fuction to check answer start

function checkAnswer (option) {
    attempt++;

    let optionClicked = $(option).data("opt");

    //console.log(questions[index]);

    if(optionClicked == questions[index].answer){
        $(option).addClass("right");
        score++;
    }
    else {
        $(option).addClass("wrong ");
        wrong++;
    }
    
    $(".scoreBox span").text(score);

    $(".optionBox span").attr("onclick","");
}

// Fuction to check answer end


// Fuction for the next question stat

function showNext(){

    if(index >= questions.length - 1) {
        showResult(0);
        return;
    }

    index++;

    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick",  "checkAnswer(this)"); 


    printQuestion(index ); 
}

// Fuction for the next question end

// Fuction for result start

function showResult(j) {
    if(
        j == 1 &&
        index < questions.length - 1 &&
        !confirm(
            "Quiz has ,ot finished yet. Press ok to skip quiz & get you final result."
        )
    ){
        return;
    }

    result();
}

// Fuction for result end


// Result function start

function result() {
    $("#questionScreen").hide();
    $("#resuleScreen").show(); 

    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score); 
    $("#wrongAnswers").text(wrong);
}

// Result function end