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
        question: "What is the shared name of the two men that are in charge of evaluating the staff?",
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

var totalCorrect = 0;
var totalIncorrect = 0;
var totalUnanswered = 0;
var questionCount = 0;
var time = 0; 
var intervalId = 0;

var displayCorrectAnswer = function(){

    //Stop the timer
    stopTimer()

    //Display correct answer text and image
    var correctLetter = myQuestions[questionCount].correctAnswer
    $("#correct-answer").html("<h2>Correct Answer: " + myQuestions[questionCount].answers[correctLetter] + "</h2><br><img src=" + myQuestions[questionCount].image + " width='400px'>")
}

var displayResults = function(){
    //When game is over display results of the game
    clearInterval(intervalId)
    $("#timer").empty()
    $("#question").empty()
    $("#answers").empty()
    $("#correct-answer").empty()
    
    $("#results").append("<h2>Correct: " + totalCorrect + "</h2>")
    $("#results").append("<h2>Incorrect: " + totalIncorrect + "</h2>")
    $("#results").append("<h2>Unanswered: " + totalUnanswered + "</h2>")

    //display start button so user can reset the game
    $("#start").show()
}

var buildQuiz = function (){
    
    //clear answer from previous question
    $("#correct-answer").empty()
    
    //Check to see if we are on the last question
    if (questionCount < 8) {
        //if more questions, display question
    
        //reset the timer
        resetTimer()

        //display question
        $("#question").text(myQuestions[questionCount].question)
    
        //display answers
        $("#answers").empty()
        for (letter in myQuestions[questionCount].answers){
            $("#answers").append("<input type='radio' name='answer' class='answer-radio' letter='" + letter + "'>" + myQuestions[questionCount].answers[letter] + "</input>")
        }
    } else {
        //if no more questions, display results of the quiz
        displayResults();
    }

}   

var resetTimer = function(){
    time = 30; // 30 seconds to answer each question
    clearInterval(intervalId)
    intervalId = setInterval(count, 1000) //one second
}

var stopTimer = function() {
    clearInterval(intervalId)
}

var count = function() {

    //  decrement time by 1
    time--

    //  Get the current time, pass that into the timeConverter function
    var currentTime = timeConverter(time)

    //  Show the converted time in the "timer" section.
    $("#timer").text(currentTime)

    //If time runs out
    if (time === 0) {

        totalUnanswered++

        //display correct answer and image
        displayCorrectAnswer()
        
        //call buildQuiz with next question after a 4 second delay
        questionCount++
        setTimeout(buildQuiz, 4000)
    }
}

var timeConverter = function(t) {
    //  Code taken from a class activity
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

  $(document).ready(function() {
    //START THE GAME
    $("#start").on("click", function(){
        //clear results
        totalCorrect = 0;
        totalIncorrect = 0;
        totalUnanswered = 0;
        $("#results").empty()

        //Hide button
        $("#start").hide()

        //show first question
        questionCount = 0;
        buildQuiz();
    });

    //If a user answers the question, need an on click event
    $(document).on("click", ".answer-radio", function(){

        //Prevent user from clicking again on same question
        //Disable all unchecked radios with the same name
        $(":radio[name='answer']:not(:checked)").attr("disabled", true); 

        //Check to see if correct or incorrect
        if ($(this).attr("letter") === myQuestions[questionCount].correctAnswer){
            totalCorrect++
        } else{
            totalIncorrect++
        }
        //display correct answer and image
        displayCorrectAnswer()

        questionAnswered = true

        //call buildQuiz with next question after a 4 second delay
        questionCount++
        setTimeout(buildQuiz, 4000)
 
    });

  });

  