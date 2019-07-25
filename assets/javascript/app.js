$(document).ready(function() {
    //event listener//
    $("#startBtn").on('click', startQuiz);


    //set all vars up here//
    var questions = [{
        q: "What is the sigil for House Mormont?",
        answer: ["Lion", "Stag", "Bear", "Direwolf"],
        correct: "Bear",
    },
    {
        q: "Who was responsible for creating the Night King?",
        answer: ["The Lord of Light", "The Children of the Forest", "The Drowned God", "The First Men"],
        correct: "The Children of the Forest",
    },
    {
        q: "Who was the leader of the Golden Company sellsword when Dany ransacked King's Landing? ",
        answer: ["Wes Borland", "Harry Strickland", "Kiefer Sutherland", "Robert Westland"],
        correct: "Harry Strickland",
    },
    {
        q: "Who is Jon Snow's real father?",
        answer: ["Ned Stark", "Rhaegar Targaryen", "Aegon Targaryen", "Robert Baratheon"],
        correct: "Rhaegar Targaryen",
    },
{
    q: "How many seasons did Game of Thrones have as a TV show?",
    answer: ["8", "7", "9", "6"],
    correct: "8",
},
{
    q: "What was the Valyrian Steel sword's name that Jon Snow received from Lord Commander Mormont?",
    answer: ["Bearclaw", "Needle", "Ice", "Longclaw"],
    correct: "Longclaw",
},
{
    q: "How many children did Cersei have?",
    answer: ["1", "2", "3", "4"],
    correct: "3",
},
{
    q: "What House did Jojen and Meera belong to?",
    answer: ["Tully", "Reed", "Redwyne", "Arryn"],
    correct: "Reed",
},
{
    q: "Who brought Jon Snow back to life?",
    answer: ["Daenerys", "Drogon", "Melisandre", "Night King"],
    correct: "Melisandre",
},
{
    q: "What did Stannis Baratheon call Davos Seaworth?",
    answer: ["Potato Knight", "Bread Knight", "Wine Knight", "Onion Knight"],
    correct: "Onion Knight",
}];

var count = 30;
var elem = $('#seconds');
var timerId;
var playerAns = []; //array for player's answers//
var questionNum = 0; // this serves as index//
var right = 0; // tally for right answers//
var wrong = 0; //tally for wrong answers//



//functions//
//need the start button to function on click event, then fade or go away so setQuestion can come into play//
function startQuiz() {
    
    questionNum = 0;
    right = 0;
    wrong = 0;
    clearInterval(timerID);
};

$(timerDiv).show();


function countdown() {
    if (count === 0) {
        clearInterval(timerId);
        questionNum++;
        wrong++;
        
    } else {
        
        count--;
        $('#seconds').html(count + ' seconds'); //displays the time: replaces what is currently there//
        
    }
};

function setQuestion() {
    count = 30;
    timerId = setInterval(countdown, 1000);
    $('#questions').html(questions[questionNum].q);
    
    
    //for loop for answers in obj array -->//
    
    for (var i = 0; i < questions[questionNum].answer.length; i++) {
        var button = $('<h4 class = choice>' + questions[questionNum].answer[i] + '</h4>')
        $("#answers").append(button)
        
    };

    return button;  
    
    
};

var questionOver = (questions[questionNum].length - 1) === setQuestion;
if (questionOver) {

    console.log("Game over!")

} else {
    questionNum++; 
    setQuestion();
};
    

$(document).on('click', '.choice', function() {
console.log("working!")

});

setQuestion();

// $('#results').text('<p>Right '+ right'</p>' + '<p>Wrong '+ wrong'</p>')//
    
            
            
 
            // $("#answers").on("click",);//
            
            
            
            // var questionStore = Math.floor((Math.random() * questions.length)); randomly generates questions from array//
            
});