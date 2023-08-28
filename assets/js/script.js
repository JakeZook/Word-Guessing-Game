//Variable declarations
var playButton = document.querySelector(".play-button");
var countdown = document.querySelector("#countdown");
var timer = document.querySelector("#timer");
var wordDisplay = document.querySelector("#word");

var words = ["absurd", "cobweb", "youthful", "stronghold", "vaporize", 
"grogginess", "megahertz", "thumbscrew", "gnarly", "embezzle"];

var chosenWord = [];
var wordProgress = [];

var lettersGuessed = 0;
var lettersNeeded;
var timerInterval;

timer.setAttribute("Style", "color: green;");

function startGame()
{
    pickWord();
    startTimer();
}

function pickWord()
{
    wordDisplay.textContent = "";
    wordProgress = [];
    lettersGuessed = 0;

    var choice = Math.floor(Math.random() * words.length);
    chosenWord = words[choice].split('');
    console.log(chosenWord);
    lettersNeeded = chosenWord.length;
    
    for (var i = 0; i < chosenWord.length; i++)
    {
        wordProgress[i] = " - ";
        wordDisplay.textContent += wordProgress[i];
    }
}

function startTimer()
{
    var secondsLeft = 60;
    timerInterval = setInterval(function() {

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
        wordDisplay.textContent = "";

        for (var i = 0; i < chosenWord.length; i++)
        {
            if (chosenWord[i] === guess)
            {
                wordProgress[i] = " " + guess + " ";
                lettersGuessed++;
                console.log(lettersGuessed);
            }
            wordDisplay.textContent += wordProgress[i];
        }

        if (lettersGuessed === lettersNeeded)
        {
            clearInterval(timerInterval);
        }
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