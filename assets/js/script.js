console.log(hardRock);

function start() {
  document.getElementById("start-game").style.display = "none";
  document.getElementById("questions-game").style.display = "flex";

  loadQuestion();
}

function loadQuestion() {
  document.getElementById("question").innerHTML = hardRock[0].question;
  let options = document.getElementById("options");
  for (let opt of hardRock[0].options) {
    let optButton = document.createElement("input");
    optButton.type = "button";
    optButton.value = opt;
    options.appendChild(optButton);
  }
}