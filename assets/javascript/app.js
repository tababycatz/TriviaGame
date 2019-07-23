//set all vars up here//
var questions = [{
    q: "q1",
    answer: ["A1", "A2", "A3", "A4"],
    correct: "A2",
},
{
    q: "q2",
    answer: ["A1", "A2", "A3", "A4"],
    correct: "A3",
}];

var count = 5;
var elem = $('#seconds');
var timerId;
var usedQ = [];
var questionNum = 0; // this serves as index//


//functions//


function countdown() {
    if (count == 0) {
        clearTimeout(timerId);
        questionNum++;
        setQuestion();
        
        console.log(timerId)

    } else {

        count--;
        $('#seconds').html(count + ' seconds'); //displays the time: replaces what is currently there//

        console.log(count);
    }
}

function setQuestion() {
    
    count = 5;
    timerId=setInterval(countdown, 1000); 
    $('#questions').html(questions[questionNum].q);

    //need for loop for answers// --> 
    for(var i = 0; i < questions[questionNum].answer.length; i++) {
        var button =  $("<button>")
      
       button.text(questions[questionNum].answer[i]);

    }
   
    
    // var questionStore = Math.floor((Math.random() * questions.length)); randomly generates questions from array

    //setting question will be in questions array//
    console.log(questions[0].q);
}

// $("#questionDiv").on("click",);

setQuestion();