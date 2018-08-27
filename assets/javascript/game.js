const myQuestions = [
    {
        question: "On the movie poster, a person is pictured covered in this office supply...",
        answers: {
            a: "Glue",
            b: "Staples",
            c: "Paper",
            d: "Post-its"
        },
        correctAnswer: "d",
        image: "assets/images/movieposter.jpg"
    },
    {
        question: "What brand is Milton's stapler?",
        answers: {
            a: "Staples",
            b: "Stanley Bostitch",
            c: "Swingline",
            d: "Office Depot"
        },
        correctAnswer: "c",
        image: "assets/images/Swingline.gif"
    },
    {
        question: "How many pieced of flare did Joanna's co-worker, Brian, wear?",
        answers: {
            a: "47",
            b: "37",
            c: "15",
            d: "0"
        },
        correctAnswer: "b",
        image: "assets/images/Flare.gif"
    },
    {
        question: "What is the name of the character that shares their name with an American singer/songwriter?",
        answers: {
            a: "Bruce Springsteen",
            b: "Peter Cetera",
            c: "Bill Hudson",
            d: "Michael Bolton"
        },
        correctAnswer: "d",
        image: "assets/images/MichaelBolton.gif"
    },
    {
        question: "What piece of office equipment do Peter, Michael and Samir destroy?",
        answers: {
            a: "Printer",
            b: "Fax Machine",
            c: "Copier",
            d: "Stapler"
        },
        correctAnswer: "a",
        image: "assets/images/printer.gif"
    },
    {
        question: "What are the names of the two men that are in charge of evaluating the staff?",
        answers: {
            a: "Steve",
            b: "Bob",
            c: "Jim",
            d: "Lawrence"
        },
        correctAnswer: "b",
        image: "assets/images/bobs.gif"
    },
    {
        question: "What is the name of the company that Peter works for?",
        answers: {
            a: "Initrode",
            b: "Intel",
            c: "Initech",
            d: "Dunder Mifflin"
        },
        correctAnswer: "c",
        image: "assets/images/Initech.jpg"
    },
    {
        question: "How much 'actual work' did Peter say he does?",
        answers: {
            a: "15 minutes each day",
            b: "15 minutes each week",
            c: "15 minutes each month",
            d: "none"
        },
        correctAnswer: "b",
        image: "assets/images/actualwork.gif"
    }
]

var userAnswer = [];
var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;
var QuestionCount = 0;
var time = 30; //30 seconds to answer each question
var intervalId = 0;

var buildQuiz = function (quizNumber){
    console.log("buildQuiz")
    console.log(myQuestions[quizNumber].question)

    //display 
    $("#question").text(myQuestions[quizNumber].question)

    for (letter in myQuestions[quizNumber].answers){
        console.log(myQuestions[quizNumber].answers[letter])
        $("#answers").append("<input type='radio' class='answer-radio' letter='" + letter + "'>" + myQuestions[quizNumber].answers[letter] + "</input>")
    }
    

}   

var resetTimer = function(){
    time = 30; 
    clearInterval(intervalId)
    intervalId = setInterval(count, 1000) //one second

}

var count = function() {

    //  decrement time by 1
    time--
    console.log(time);

    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.
    var currentTime = timeConverter(time)

    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#timer").text(currentTime)

}

var displayCorrectAnswer = function(){


}

var timeConverter = function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

//START THE GAME
$("#start").on("click", function(){
    questionCount = 1;
    buildQuiz(questionCount);
    resetTimer();
});


//If a user answers the question, need an on click event
$(".answer-radio").on("click", function(){
    //Check to see if correct or incorrect
    if (this.attr("letter") === myQuestions[quizNumber].correctAnswer){
        totalCorrect++
    } else{
        totalIncorrect++
    }
    //display correct answer and image
    displayCorrectAnswer()
    //reset timer
    resetTimer()
    //display next question
    questionCount++
    if (questionCount < 9) {
        buildQuiz(questionCount);
    } else {
        displayResults();
    }
    

});


//If time runs out
if (time === 0) {
    totalUnanswered++
    //display correct answer and image
    displayCorrectAnswer()
    //reset timer
    resetTimer()
    //call buildQuiz with next question
    questionCount++
    if (questionCount < 9) {
        buildQuiz(questionCount);
    } else {
        displayResults();
    }

}

var displayResults = function(){
    //When game is over display results of the game
    clearInterval(intervalId)
    $("#question").empty
    $("#answers").empty
    $("#correct-answer").empty
    //TODO: display win/loss, display restart button
    $("#results").text("")
}