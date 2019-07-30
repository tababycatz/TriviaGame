$(document).ready(function () {
    //event listener//


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

    var count = 5;
    var elem = $('#seconds');
    var timerId;
    var playerAns;
    var questionNum = 0; // this serves as index//
    var right = 0; // tally for right answers//
    var wrong = 0; //tally for wrong answers//



    //functions//

    $("#startBtn").on('click', function () {
        $("#startBtn").hide();
        $(timerDiv).show();
        setQuestion()

    });


    function countdown() {
        if (count === 0) {
            clearTimeout(timerId);
            questionNum++;
            setQuestion();
            wrong++;

        } else {

            count--;
            $('#seconds').html(count + ' seconds'); //displays the time: replaces what is currently there//

        }
    };

    function nextQuestion() {

        $("#questions").next(questions[questionNum].q)
    }

    //display next question, hide old question and hide old answers and display new anwer choice//
    //if/else statement to compare # of questions to 

    function setQuestion() {
        $("#answerDiv").empty();
        count = 5;
        timerId = setInterval(countdown, 1000);
        $('#questions').html(questions[questionNum].q);
        // nextQuestion();

        //for loop for answers in obj array -->//
        for (var i = 0; i < questions[questionNum].answer.length; i++) {
            var button = $('<p class = choice>' + questions[questionNum].answer[i] + '</p>')
            button.attr('data-value', questions[questionNum].answer[i])
            $("#answerDiv").append(button);

            // return button;
        };

        // Clear button div of any newly created buttons

    };

    //empty the answerdiv after user click/time is out//
    
    
    $(document).on('click', '.choice', function () {
        clearInterval(timerId);
        playerAns = ($(this).attr('data-value'));
        
        var rightAnswer = questions[questionNum].correct;
        questionNum++;
        console.log(playerAns)
        console.log(rightAnswer);
        
        if (rightAnswer === playerAns) {
            right++;
            // nextQuestion();
            questionOver();
            console.log("correct");
            
        } else {
            wrong++;
            // nextQuestion();
            questionOver();
            
        }
        
    });

    function questionOver() {
        if (questionNum === 9) {
            resultDisplay();

        } else {
            setQuestion();
        }

    };

    // to account for all the questions in the array, to see if you're on the last one or to keep going//


    function resultDisplay() {
        $("#correctTally").empty();
        $("#incorrectTally").empty();
        $("#correctTally").html("<p> Correct: " + right + "</p>")
        $("#incorrectTally").html("<p> Incorrect: " + wrong + "</p>")
        console.log(right);
        console.log(wrong);

    }


    $(document).on('click', '#resetBtn', function () {
        count = 30;
        questionNum = 0;
        right = 0;
        wrong = 0;
        timerId = null;
        $("#resetBtn").html(); //look back to line 164/165//
    });
    
    $("#startBtn").on('click', function () {
                $("#startBtn").hide();
                setQuestion();
            });

});

    // var questionStore = Math.floor((Math.random() * questions.length)); randomly generates questions from array//
