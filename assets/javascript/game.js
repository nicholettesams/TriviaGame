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

function buildQuiz(quizNumber){
    console.log("buildQuiz")
    console.log(myQuestions[quizNumber].question)

    //display 
    $("#question").text(myQuestions[quizNumber].question)

    for (letter in myQuestions[quizNumber].answers){
        console.log(myQuestions[quizNumber].answers[letter])
        $("#answers").append("<input type='radio'>" + myQuestions[quizNumber].answers[letter] + "</input>")
    }
    

}   

//Every 30 seconds display a new question and answers
var i = 0;
//for(i; i<myQuestions.length; i++){
    buildQuiz(i);
//}


