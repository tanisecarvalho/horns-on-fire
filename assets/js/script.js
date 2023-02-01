console.log(hardRock);
let currentQuestion = 0;

function start() {
  document.getElementById("start-game").style.display = "none";
  document.getElementById("questions-game").style.display = "flex";

  loadQuestion();
}

function loadQuestion() {
  document.getElementById("question").innerHTML = hardRock[currentQuestion].question;
  let options = document.getElementById("options");
  options.innerHTML = "";
  for (let opt of hardRock[currentQuestion].options) {
    let optButton = document.createElement("input");
    optButton.type = "button";
    optButton.value = opt;
    options.appendChild(optButton);
  }
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}