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

    count = 30;
    timerId = setInterval(countdown, 1000);
    $('#questions').html(questions[questionNum].q);

    //need for loop for answers// --> 
    for (var i = 0; i < questions[questionNum].answer.length; i++) {
        var button = $('<button>' + questions[questionNum].answer[i] + '</button')

        button.appendTo('#answerDiv')


        // button.html(questions[questionNum].answer[i]);
        // button.attr(questions[questionNum].answer[i])
    }

    if ($(this).text()===questions[questionNum.correct])
    win++;

    else {
        lose++;
    }
    
    //need to have an on click event for the buttons and compare that with the "correct" answer in the questions array//
    
    //setting question will be in questions array//
}

// $("#answerDiv").on("click",);
setQuestion();


// var questionStore = Math.floor((Math.random() * questions.length)); randomly generates questions from array