//set all vars up here//
var questions = [];
var count = 30;
displayQ = setInterval(next, 3000);

var intervalId;

$("#questionDiv").on("click", next);


function next() {
    clearQuestion(intervalId);
    intervalId = setInterval(decrement, 3000);
}

function decrement() {

    count--;

    $("#timerDiv").text("<h2>" + count + "</h2>");

    if (number === 0) {

        next();
    }

    run();

};