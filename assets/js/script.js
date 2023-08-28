//Variable declarations
var playButton = document.querySelector(".play-button");
var countdown = document.querySelector("#countdown");
var timer = document.querySelector("#timer");
var wordDisplay = document.querySelector("#word");

var words = ["absurd", "cobweb", "youthful", "stronghold", "vaporize", 
"grogginess", "megahertz", "thumbscrew", "gnarly", "embezzle"];

var chosenWord = [];

timer.setAttribute("Style", "color: green;");

function startGame()
{
    pickWord();
    startTimer();
}

function pickWord()
{
    wordDisplay.textContent = "";
    var choice = Math.floor(Math.random() * words.length);
    chosenWord = words[choice].split('');
    console.log(chosenWord);
    
    for (var i = 0; i < chosenWord.length; i++)
    {
        wordDisplay.textContent += " - ";
    }
}

function startTimer()
{
    var secondsLeft = 60;
    var timerInterval = setInterval(function() {

    secondsLeft--;
    countdown.textContent = secondsLeft;
    
    if(secondsLeft <= 30)
    {
        timer.setAttribute("style", "color: yellow;");
    }

    if (secondsLeft <= 15)
    {
        timer.setAttribute("Style", "color: red;");
    }


    if (secondsLeft === 0)
    {
    clearInterval(timerInterval);
    }

    }, 1000);
}

function checkGuess(guess)
{
    if (chosenWord.includes(guess))
    {
        console.log("Correct");
    }
    
    else
    {
        console.log("False");
    }
}

function keydownEvent(event)
{
    var letters = "abcdefghijklmnopqrstuvwxyz".split('');
    var key = event.key.toLowerCase();

    if (letters.includes(key))
    {
        checkGuess(key);
    }
}

playButton.addEventListener("click", startGame);
document.addEventListener("keydown", keydownEvent);