let leaderboard = localStorage.leaderboard;
let currentQuestion = 0;

const score = {
  "name": "",
  "points": 0
};

let currentGame = [];

function startGame() {
  for (let i in hardRock) {
    currentGame[i] = null;
  }
  score.name = document.getElementById("name").value;

  if(score.name === "") {
    alert("A name must be informed to start the game");
  } else {
    document.getElementById("username").innerHTML = score.name;
    document.getElementById("start-game").style.display = "none";
    document.getElementById("questions-game").style.display = "flex";

    loadQuestion();
  }
  
}

function loadQuestion() {
  if(currentQuestion === 0) {
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

  if(currentGame[currentQuestion] !== null) {
    displayAnswer();
  }
}

function nextQuestion() {
  if(currentQuestion === hardRock.length-2) {
    document.getElementById("next").style.display = "none";
    document.getElementById("finish").style.display = "initial";
  }
  currentQuestion++;
  loadQuestion();
}

function previousQuestion() {
  if(document.getElementById("finish").style.display === "initial") {
    document.getElementById("finish").style.display = "none";
    document.getElementById("next").style.display = "initial";
  }
  currentQuestion--;
  loadQuestion();
}

function restartGame() {
  document.getElementById("finish").style.display = "none";
  document.getElementById("next").style.display = "initial";
  document.getElementById("finish-game").style.display = "none";
  document.getElementById("questions-game").style.display = "none";
  document.getElementById("start-game").style.display = "flex";
  currentQuestion = 0;
  score.points = 0;
  currentGame = [];
  document.getElementById("score").innerHTML = "Are you ready to rock?";
  loadQuestion();
}

function finishGame() {
  document.getElementById("questions-game").style.display = "none";

  let resultMessage = document.getElementById("result-message");
  let resultImage = document.getElementById("result-image");

  if(score.points >= 0 && score.points <= 1) {
    resultMessage.innerHTML = "I think you might have misunderstood the type of rock we are talking about.";
    resultImage.style.backgroundImage = "url('assets/images/low.jpg')";
  } else if (score.points > 1 && score.points <= 3) {
    resultMessage.innerHTML = "As AC/DC would say: <em>'It's a long way to the top if you wanna rock n' roll'</em>, but you're getting there.";
    resultImage.style.backgroundImage = "url('assets/images/medium.jpg')";
  } else {
    resultMessage.innerHTML = "Well, well... We have a rockstar here. Congratualations!";
    resultImage.style.backgroundImage = "url('assets/images/high.jpg')";
  }

  saveLeaderboard();

  document.getElementById("finish-game").style.display = "flex";
}

function updateScore() {

  document.getElementById("score").innerHTML = "Score: " + score.points + "/" + hardRock.length;

}

function checkAnswer(answer) {
  saveCurrentGame(answer.value);
  displayAnswer();
  if(answer.value === hardRock[currentQuestion].correct) {
    score.points++;
  }
  updateScore();
}

function saveCurrentGame(choice) {
  currentGame[currentQuestion] = choice;
}

function displayAnswer() {
  let options = document.getElementsByClassName("options");
  for (let option of options) {
    option.setAttribute("disabled", "");
    if(option.value === hardRock[currentQuestion].correct) {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }

    if(option.value === currentGame[currentQuestion]) {
      option.classList.add("selected");
    }
  }
}

function showRules(show) {
  let rulesDisplay = document.getElementById("rules");
  if(show) {
    rulesDisplay.style.display = "flex";
  } else {
    rulesDisplay.style.display = "none";
  }
}

function showLeaderboard(show) {
  let leaderboardDisplay = document.getElementById("leaderboard");
  if(show) {
    leaderboardDisplay.style.display = "flex";
    loadLeaderboard();
  } else {
    leaderboardDisplay.style.display = "none";
  }
}

function saveLeaderboard() {
  let currentLeaderboard = [];

  if (leaderboard !== undefined) {
    currentLeaderboard = JSON.parse(leaderboard);
  }

  currentLeaderboard.push(score);
  localStorage.setItem("leaderboard", JSON.stringify(currentLeaderboard));
  leaderboard = localStorage.leaderboard;
}

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