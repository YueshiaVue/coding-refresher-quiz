var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var initialsEl = document.getElementById('initials');
var responseEl = document.getElementById('response');

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "cloak");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
}

function clockTick() {
    time--;
    timerEl.textContent = time;
  }

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "cloak");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}