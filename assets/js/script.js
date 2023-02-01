console.log(hardRock);
let currentQuestion = 0;
let score = 0;

function startGame() {
  let username = document.getElementById("name").value;

  if(username === "") {
    alert("A name must be informed to start the game");
  } else {
    document.getElementById("username").innerHTML = username;
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
  currentQuestion = 0;
  score = 0;
  document.getElementById("score").innerHTML = "Are you ready to rock?";
  loadQuestion();
}

function finishGame() {
  alert("End of game");
}

function updateScore() {

  document.getElementById("score").innerHTML = "Score: " + score + "/" + hardRock.length;

}

function checkAnswer(answer) {
  if(answer.value === hardRock[currentQuestion].correct) {
    answer.classList.add("correct");
    score++;
  } else {
    answer.classList.add("incorrect");
  }

  updateScore();
}