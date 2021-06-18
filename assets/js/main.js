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
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'cloak');
  questionsEl.removeAttribute('class');
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        endQuiz();
      }
  }

function getQuestion() {
  var currentQuestion = questions[questionIdx];
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = '';
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}

function startQuiz() {
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'cloak');
  questionsEl.removeAttribute('class');
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}


function questionClick() {
    if (this.value !== questions[questionIdx].answer) {
      time -= 10;

      if (time < 0) {
        time = 0;
      }

      timerEl.textContent = time;
  
      responseEl.textContent = 'Wrong!';
    } else {

      responseEl.textContent = 'Correct!';
    }

    responseEl.setAttribute('class', 'response');
    setTimeout(function() {
      responseEl.setAttribute('class', 'response cloak');
    }, 1000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      getQuestion();
    }
  }

function endQuiz() {
    clearInterval(timerId);
    var endPageEl = document.getElementById('end-page');
    endPageEl.removeAttribute('class');
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;
    questionsEl.setAttribute('class', 'cloak');
  }


  function saveScore() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {
      
      var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
      var newScore = {
        score: time,
        initials: initials
      };
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
      window.location.href = 'highscores.html';
    }
  }
  
  function checkForEnter(event) {
    if (event.key === 'Enter') {
      saveScore();
    }
  }
  
  submitBtn.onclick = saveScore;
  startBtn.onclick = startQuiz;
  initialsEl.onkeyup = checkForEnter;