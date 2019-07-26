$(document).ready(function () {
    //event listener//
    
    
    //set all vars up here//
    var count = 30;
    var elem = $('#seconds');
    var timerId;
    var playerAns;
    var questionNum = 0; // this serves as index//
    var right = 0; // tally for right answers//
    var wrong = 0; //tally for wrong answers//

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
        $("#answerDiv").empty();
        $("#questions").next(questions[questionNum].q)       
        }

        //display next question, hide old question and hide old answers and display new anwer choice//
        //if/else statement to compare # of questions to 
    });

    function setQuestion() {
        count = 30;
        timerId = setInterval(countdown, 1000);
        $('#questions').html(questions[questionNum].q);
        nextQuestion();

      // Clear button div of any newly created buttons

      };
    
          //for loop for answers in obj array -->//

        for (var i = 0; i < questions[questionNum].answer.length; i++) {
            var button = $('<p class = choice>' + questions[questionNum].answer[i] + '</p>')
            button.attr('data-value', questions[questionNum].answer[i])
            $("#answerDiv").append(button);

        };
        //empty the answerdiv after user click/time is out//
        // return button;
    

    $(document).on('click', '.choice', function () {
        clearInterval(timerId);
        setQuestion();
        playerAns = ($(this).attr('data-value'));
        var rightAnswer = questions[questionNum].correct;

        if (rightAnswer === playerAns) {
            right++;
            nextQuestion();
            questionOver();

        } else {
            wrong++;
            nextQuestion();
            questionOver();
          
        }

    });
   
// to account for all the questions in the array, to see if you're on the last one or to keep going//
    var questionOver = (questions[questionNum].length - 1) === setQuestion;
    if (questionOver) {

        resultDisplay();
        console.log("Game over!")

    } else {
        questionNum++;
        nextQuestion();

    };


    function resultDisplay() {
        $("#resultTally").empty();
        $("#resultTally").html("<p> Correct: " + right + "</p")
        $("#resultTally").html("<p> Inorrect: " + wrong + "</p")
        console.log(right);
        console.log(wrong);

    }


    $(document).on('click', '#resetBtn', function () {
        count = 30;
        questionNum = 0;
        right = 0;
        wrong = 0;
        timerId = null;
        $("#resetBtn").html();
        $("#startBtn").on('click', function () {
            $("#startBtn").hide();
            setQuestion();
        });
    });


    // var questionStore = Math.floor((Math.random() * questions.length)); randomly generates questions from array//
