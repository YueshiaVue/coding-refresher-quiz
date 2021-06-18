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

