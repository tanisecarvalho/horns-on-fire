/*  jshint esversion: 11 */

/* main variables to control the game */

// receives the leaderboard saved on the localStorage
let leaderboard = localStorage.leaderboard;
// used to control the navigation during the game
let currentQuestion = 0;
// array that receives the answers for the current game being played
let currentGame = [];
// array that receives the questions of the current game
let questions = [];
// constant that defines the limit of questions and games saved on the leaderboard
const GAME_LIMIT = 10;

// object that receives the information about the player and the current game
const player = {
  "name": "",
  "category": "",
  "points": 0
};

// Load current year on footer
document.getElementById("year").innerHTML = new Date().getFullYear();

/**
 * Shuffle the options from the questions.
 * @param {array} options - The array of options from the question being added to the game.
 */
function shuffleOptions(options) {

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
}

/**
 * Define the questions to be used on the game according to the category selected by the user.
 * Choose the GAME_LIMIT number of random questions from the main array.
 * @param {array} chosenCategory - The array with the category selected by the user
 */
function defineQuestions(chosenCategory) {  
  let safeCopy = chosenCategory.slice();
  for (let i = 0; i < GAME_LIMIT; i++) {
    let newQuestion = Math.floor(Math.random() * safeCopy.length);
    questions.push(safeCopy.splice(newQuestion, 1)[0]);
    shuffleOptions(questions[i].options);
  }
}

/**
 * Show the correct answer of the questions, disable the options and displays the option selected by the user.
 */
function displayAnswer() {
  let options = document.getElementsByClassName("options");
  for (let option of options) {
    option.setAttribute("disabled", "");
    if (option.value === questions[currentQuestion].correct) {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }

    if (option.value === currentGame[currentQuestion]) {
      option.classList.add("selected");
    }

    if (player.category === "albums") {
      document.getElementById("album-img").classList.remove("album-cover");
    }
  }
}

/**
 * Load the question and options according to the currentQuestion variable.
 * If the questions has already been answererd, it calls the function displayAnswer to show the user selection.
 */
function loadQuestion() {
  if (currentQuestion === 0) {
    document.getElementById("previous").setAttribute("disabled", "");
  } else {
    document.getElementById("previous").removeAttribute("disabled");
  }

  if (player.category === "albums") {
    let imageAlbum = "<img id='album-img' class='album-cover' src='assets/images/albums/" + questions[currentQuestion].album + "' alt='Album cover' width='128' height='128'>";
    document.getElementById("album").innerHTML = imageAlbum;
  }

  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  let options = document.getElementById("options");
  options.innerHTML = "";
  for (let opt of questions[currentQuestion].options) {
    let optButton = document.createElement("input");
    optButton.type = "button";
    optButton.setAttribute("class", "options");
    optButton.setAttribute("onclick", "checkAnswer(this)");
    optButton.value = opt;
    options.appendChild(optButton);
  }

  if (currentGame[currentQuestion] !== null) {
    displayAnswer();
  }
}

/**
 * Starts the game, it's called when the start button is clicked.
 * It checks if the name was informed and set the questions div to visible.
 * Calls the function loadQuestion to load the first question of the game.
 */
function startGame() {
  for (let i = 0; i < GAME_LIMIT; i++) {
    currentGame[i] = null;
  }
  player.name = document.getElementById("name").value;
  if (document.querySelector("input[name='category']:checked") !== null) {
    player.category = document.querySelector("input[name='category']:checked").value;
  }

  if (player.name === "" || player.category === "") {
    document.getElementById("message").style.display = "block";
  } else {
    switch (player.category) {
      case "guess" :
        defineQuestions(guessWho);
        break;
      case "ballads" :
        defineQuestions(powerBallads);
        break;
      case "albums" :
        defineQuestions(guessAlbum);
        break;
      default :
        defineQuestions(guessAlbum);
    }
    
    document.getElementById("username").innerHTML = player.name;
    document.getElementById("start-game").style.display = "none";
    document.getElementById("questions-game").style.display = "flex";

    loadQuestion();
  }
}

/**
 * Close the span message showed when the user doesn't enter a name
 */
function closeMessage(idMessage) {
  let messageDisplay = document.getElementById(idMessage);
  if (messageDisplay.style.display !== "none") {
    messageDisplay.style.display = "none";
  }
}

/**
 * Start a new game. Set divs and buttons to their initial state. Set variables to the start game values.
 */
function newGame() {
  closeMessage("finish-message");
  document.getElementById("score").innerHTML = "Are you ready to rock?";
  document.getElementById("album").innerHTML = "";
  document.getElementById("finish").style.display = "none";
  document.getElementById("next").style.display = "initial";
  document.getElementById("finish-game").style.display = "none";
  document.getElementById("questions-game").style.display = "none";
  document.getElementById("start-game").style.display = "flex";

  currentQuestion = 0;
  player.points = 0;
  currentGame = [];
  questions = [];
}

/**
 * Decreases the value of the global variable currentQuestion and loads it.
 */
function previousQuestion() {
  closeMessage("finish-message");
  if (document.getElementById("finish").style.display === "initial") {
    document.getElementById("finish").style.display = "none";
    document.getElementById("next").style.display = "initial";
  }
  currentQuestion--;
  loadQuestion();
}

/**
 * Increases the value of the global variable currentQuestion and loads it.
 */
function nextQuestion() {
  if (currentQuestion === questions.length-2) {
    document.getElementById("next").style.display = "none";
    document.getElementById("finish").style.display = "initial";
  }
  currentQuestion++;
  loadQuestion();
}

/**
 * Check if all questions have been answered
 * @returns boolean - True if all the questions have been answered
 */
function isGameCompleted() {
  return currentGame.indexOf(null) === -1 ? true : false;
}

/**
 * Add game played to the localStorage variable leaderboard
 */
function saveLeaderboard() {
  let currentLeaderboard = [];

  if (leaderboard !== undefined) {
    currentLeaderboard = JSON.parse(leaderboard);
  }

  if (currentLeaderboard.length >= GAME_LIMIT && player.points > currentLeaderboard[currentLeaderboard.length-1].points) {
    currentLeaderboard.pop();
  }

  if (currentLeaderboard.length < GAME_LIMIT) {
    currentLeaderboard.push(player);
    currentLeaderboard.sort((a, b) => b.points - a.points);
    localStorage.setItem("leaderboard", JSON.stringify(currentLeaderboard));
    leaderboard = localStorage.leaderboard;
  }
}

/**
 * Finishes the game. Check the score to present a personalised image and message.
 * Calls the saveLeaderboard function to add the game to the leaderboard.
 */
function finishGame() {
  if (isGameCompleted()) {
    document.getElementById("questions-game").style.display = "none";

    let resultMessage = document.getElementById("result-message");
    let resultImage = document.getElementById("result-image");

    resultMessage.innerHTML = "<p>You got " + player.points + " points out of " + GAME_LIMIT + "!</p>";

    if (player.points >= 0 && player.points <= (GAME_LIMIT / 3)) {
      resultMessage.innerHTML += "<p>I think you might have misunderstood the type of rock we are talking about.</p>";
      resultImage.style.backgroundImage = "url('assets/images/low.jpg')";
    } else if (player.points > (GAME_LIMIT / 3) && player.points <= (GAME_LIMIT - 3)) {
      resultMessage.innerHTML += "<p>As AC/DC would say: <em>'It's a long way to the top if you wanna rock n' roll'</em>, but you're getting there.</p>";
      resultImage.style.backgroundImage = "url('assets/images/medium.jpg')";
    } else {
      resultMessage.innerHTML += "<p>Well, well... We have a rockstar here. Congratulations!</p>";
      resultImage.style.backgroundImage = "url('assets/images/high.jpg')";
    }

    saveLeaderboard();

    document.getElementById("finish-game").style.display = "flex";
  } else {
    document.getElementById("finish-message").style.display = "block";
  }
  
}

/**
 * Save the option selected by the user for the current question and add to the global array currentGame.
 * @param {string} choice - The value of the option selected by the user
 */
function saveCurrentGame(choice) {
  currentGame[currentQuestion] = choice;
}

/**
 * Update the screen with the user's current score
 */
function updateScore() {
  document.getElementById("score").innerHTML = "Score: " + player.points + "/" + questions.length;
}

/**
 * Check if the option selected by the user is correct and in this case increases the score.
 * Calls the function saveCurrentGame to save the users choice.
 * Calls the function displayAnswer to show the correct/incorrect options.
 * Calls the function updateScore to display the user's current score
 * @param {element} answer - The option selected by the user
 */
function checkAnswer(answer) {
  saveCurrentGame(answer.value);
  displayAnswer();
  if (answer.value === questions[currentQuestion].correct) {
    player.points++;
  }
  updateScore();
}

/**
 * Shows and hide the Rules div to the user according to the parameter.
 * @param {boolean} show - Boolean to verify if its to show or close the div 
 */
function showRules(show) {
  closeMessage("message");
  let rulesDisplay = document.getElementById("rules");
  let startDisplay = document.getElementById("start-game");
  if (show) {
    startDisplay.style.display = "none";
    rulesDisplay.style.display = "flex";
  } else {
    rulesDisplay.style.display = "none";
    startDisplay.style.display = "flex";
  }
}

/**
 * Shows and hide the Leaderboard div to the user according to the parameter.
 * Calls the function loadLeaderboard to create the leaderboard table.
 * @param {boolean} show - Boolean to verify if its to show or close the div 
 */
function showLeaderboard(show) {
  closeMessage("message");
  let leaderboardDisplay = document.getElementById("leaderboard");
  let startDisplay = document.getElementById("start-game");
  if (show) {
    startDisplay.style.display = "none";
    leaderboardDisplay.style.display = "flex";
    loadLeaderboard();
  } else {
    leaderboardDisplay.style.display = "none";
    startDisplay.style.display = "flex";
  }
}

/**
 * Creates and displays the leadboard according with the games saved on the localStorage.
 */
function loadLeaderboard() {
  if (leaderboard !== undefined) {
    document.getElementById("clearLeaderboard").style.display = "initial";
    let currentLeaderboard = JSON.parse(leaderboard);
    let leaderboardResults = document.getElementById("leaderboard-results");
    leaderboardResults.innerHTML = "";
    for (let result of currentLeaderboard) {
      let resultTr = document.createElement("tr");
      let resultName = document.createElement("td");
      let resultCategory = document.createElement("td");
      let resultScore = document.createElement("td");

      switch (result.category) {
        case "guess" :
          resultCategory.innerHTML = "Who am I?";
          break;
        case "ballads" :
          resultCategory.innerHTML = "Power Ballads";
          break;
        case "albums" :
          resultCategory.innerHTML = "Guess the Album";
          break;
        default :
        resultCategory.innerHTML = "-";
      }

      resultName.innerHTML = result.name;
      resultScore.innerHTML = result.points;
      resultTr.appendChild(resultName);
      resultTr.appendChild(resultCategory);
      resultTr.appendChild(resultScore);
      leaderboardResults.appendChild(resultTr);
    }
  } else {
    document.getElementById("clearLeaderboard").style.display = "none";
  }
}

/**
 * Clear current leaderboard
 */
function clearLeaderboard() {
  localStorage.clear();
  leaderboard = undefined;
  document.getElementById("leaderboard-results").innerHTML = "";
  document.getElementById("clearLeaderboard").style.display = "none";
}