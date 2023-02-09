// main variables to control the game
let leaderboard = localStorage.leaderboard;
let currentQuestion = 0;
let currentGame = [];

const score = {
  "name": "",
  "points": 0
};

/**
 * Starts the game, it's called when the start button is clicked.
 * It checks if the name was informed and set the questions div to visible.
 * Calls the function loadQuestion to load the first question of the game.
 */
function startGame() {
  for (let i in hardRock) {
    currentGame[i] = null;
  }
  score.name = document.getElementById("name").value;

  if (score.name === "") {
    document.getElementById("message").style.display = "block";
  } else {
    document.getElementById("username").innerHTML = score.name;
    document.getElementById("start-game").style.display = "none";
    document.getElementById("questions-game").style.display = "flex";

    loadQuestion();
  }
}

/**
 * Close the span message showed when the user doesn't enter a name
 */
function closeMessage() {
  let messageDisplay = document.getElementById("message");
  if (messageDisplay.style.display !== "none") {
    messageDisplay.style.display = "none";
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

  document.getElementById("question").innerHTML = hardRock[currentQuestion].question;
  let options = document.getElementById("options");
  options.innerHTML = "";
  for (let opt of hardRock[currentQuestion].options) {
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
 * Show the correct answer of the questions, disable the options and displays the option selected by the user.
 */
function displayAnswer() {
  let options = document.getElementsByClassName("options");
  for (let option of options) {
    option.setAttribute("disabled", "");
    if (option.value === hardRock[currentQuestion].correct) {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }

    if (option.value === currentGame[currentQuestion]) {
      option.classList.add("selected");
    }
  }
}

/**
 * Restart the game. Set divs and buttons to their initial state. Set variables to the start game values.
 */
function restartGame() {
  document.getElementById("score").innerHTML = "Are you ready to rock?";
  document.getElementById("finish").style.display = "none";
  document.getElementById("next").style.display = "initial";
  document.getElementById("finish-game").style.display = "none";
  document.getElementById("questions-game").style.display = "none";
  document.getElementById("start-game").style.display = "flex";

  currentQuestion = 0;
  score.points = 0;
  currentGame = [];
}

/**
 * Increases the value of the global variable currentQuestion and loads it.
 */
function nextQuestion() {
  if (currentQuestion === hardRock.length-2) {
    document.getElementById("next").style.display = "none";
    document.getElementById("finish").style.display = "initial";
  }
  currentQuestion++;
  loadQuestion();
}

/**
 * Decreases the value of the global variable currentQuestion and loads it.
 */
function previousQuestion() {
  if (document.getElementById("finish").style.display === "initial") {
    document.getElementById("finish").style.display = "none";
    document.getElementById("next").style.display = "initial";
  }
  currentQuestion--;
  loadQuestion();
}

/**
 * Finishes the game. Check the score to present a personalised image and message.
 * Calls the saveLeaderboard function to add the game to the leaderboard.
 */
function finishGame() {
  document.getElementById("questions-game").style.display = "none";

  let resultMessage = document.getElementById("result-message");
  let resultImage = document.getElementById("result-image");

  if (score.points >= 0 && score.points <= 1) {
    resultMessage.innerHTML = "I think you might have misunderstood the type of rock we are talking about.";
    resultImage.style.backgroundImage = "url('assets/images/low.jpg')";
  } else if (score.points > 1 && score.points <= 3) {
    resultMessage.innerHTML = "As AC/DC would say: <em>'It's a long way to the top if you wanna rock n' roll'</em>, but you're getting there.";
    resultImage.style.backgroundImage = "url('assets/images/medium.jpg')";
  } else {
    resultMessage.innerHTML = "Well, well... We have a rockstar here. Congratulations!";
    resultImage.style.backgroundImage = "url('assets/images/high.jpg')";
  }

  saveLeaderboard();

  document.getElementById("finish-game").style.display = "flex";
}

/**
 * Add game played to the localStorage variable leaderboard
 */
function saveLeaderboard() {
  let currentLeaderboard = [];

  if (leaderboard !== undefined) {
    currentLeaderboard = JSON.parse(leaderboard);
  }

  currentLeaderboard.push(score);
  localStorage.setItem("leaderboard", JSON.stringify(currentLeaderboard));
  leaderboard = localStorage.leaderboard;
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
  if (answer.value === hardRock[currentQuestion].correct) {
    score.points++;
  }
  updateScore();
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
  document.getElementById("score").innerHTML = "Score: " + score.points + "/" + hardRock.length;
}

/**
 * Shows and hide the Rules div to the user according to the parameter.
 * @param {boolean} show - Boolean to verify if its to show or close the div 
 */
function showRules(show) {
  closeMessage();
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
  closeMessage();
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
    let currentLeaderboard = JSON.parse(leaderboard);
    let leaderboardResults = document.getElementById("leaderboard-results");
    leaderboardResults.innerHTML = "";
    for (let result of currentLeaderboard) {
      let resultTr = document.createElement("tr");
      let resultName = document.createElement("td");
      let resultScore = document.createElement("td");
      resultName.innerHTML = result.name;
      resultScore.innerHTML = result.points;
      resultTr.appendChild(resultName);
      resultTr.appendChild(resultScore);
      leaderboardResults.appendChild(resultTr);
    }
  }
}