var body = document.body

//Create all necessary elements
const startBtn = document.getElementById('startBtn')
const submitBtn = document.getElementById('submitBtn')
const highscoresBtn = document.getElementById('highscoresBtn')

const questionsDiv = document.getElementById('questions')
const timer = document.getElementById('timer')
const counterDiv = document.getElementById('counter')
var introPageDiv = document.getElementById('introPage')
let currentQuestion = 0
// We start the quiz with a score of 0.
var score = 0;
var timeleft = 120
var timeDeduction = 25;

let questions = [
  {
    q: 'A method can be defined as... ',
    answers: [
      'a function containing a property',
      'an object',
      'console.log',
      'a variable with arrays'
    ],
    correctAnswer: 'a function containing a property' 
  },
  {
    q:
      'What must be included in your Javascript document to ensure that your code appears on the page?',
    answers: [
        'Append the elements',
        'Set the text content of relevant elements',
        'Create a set of elements',
        'All of the above',
    ],
    correctAnswer: 'All of the above'
  },
  {
    q:
      'If your document is bubbling, what should you implement into your code?',
    answers: [
        'event.curentTarget();',
        'event.stopPropagation();',
        'document.querySelectorAll();',
        'parseFloat();',
    ],
    correctAnswer: 'event.stopPropagation();'
  },
  {
    q: 'Which of the following is NOT considered a semantic element?',
    answers: [
        '<form>',
        '<details>',
        '<span>',
        '<mark>',
    ],
    correctAnswer: '<span>'
  },
  {
    q: 'How are classes and ids coded into a CSS file?',
    answers: [
        '.name / #name',
        '#name / .name',
        '.name / .name',
        '#name / #name',
    ],
    correctAnswer: '.name / #name'
  },
  {
    q:
      "What would you need to type into your computer's terminal to add a file?",
    answers: [
        'mkdir',
        'cp',
        'mv',
        'touch',
    ],
    correctAnswer: 'touch'
  },

  {
    q:
      'Every HTML document displayed in the browser is governed by a concept called what?',
    answers: [
        'A relative file path',
        'Block elements',
        'Flow',
        'An active state',
    ],
    correctAnswer: 'Flow'
  },
  {
    q: 'How should you format a grid when using Bootstrap?',
    answers: [
        'Containers, Columns, Rows',
        'Containers, Rows, Columns',
        'Columns, Containers, Rows',
        'Rows, Containers, Columns',
    ],
    correctAnswer: 'Containers, Rows, Columns'
  }
]

let lastQuestion = questions.length - 1;

//Timer and counter Section
document.getElementById("startBtn").addEventListener("click", function(){
  var downloadTimer = setInterval(function timer(){
  document.getElementById("counter").innerHTML = timeleft + " seconds remaining";
  
  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("counter").innerHTML = "No more time remaining";
  //if answer is wrong -
  }

  }, 2000);
  
});

//If start Quiz button is clicked
startBtn.onclick = () => {
introPageDiv.style.display = "none"
showQuestion();
showAnswers();
checkAnswer();

function checkAnswer() {
  const answersBtn = document.querySelectorAll('.answersBtn')
  answersBtn.forEach(function(button){
    button.onclick = function() {
      //console.log("This works??")
             var response = this.getAttribute("data-answers")
             if (response === questions[currentQuestion].correctAnswer){ 
            score++;
            alert("Correct!");
            } else {
          alert("WRONG!");
          timeleft = timeleft - timeDeduction;
          timeleft.textContent = timeleft
          }

          if (currentQuestion < lastQuestion){
            console.log("Next question!")
          currentQuestion++;
          showQuestion()
          showAnswers()
          checkAnswer()
        } else {
          alert("Game over. You've got " + score + "/" + questions.length + "questions correct!");
          //gameOver()
        }
          
         }

         //Create a gameOver function that hides the questions and answer buttons, alerts the user that it is game over, and then displays their final score and an input field to put their initials with a submit button, when user clicks submit, this should set the initials and scores to the local storage

         function gameOver() {
           
         }
        
         
  })
}
  function showQuestion(){
    var h1Tag = document.createElement('h1')
  document.getElementById("question").textContent = ""
  document.getElementById("choices").innerHTML = ""
    h1Tag.textContent = questions[currentQuestion].q
    document.querySelector('#question').appendChild(h1Tag)
  
  
    
  
  }
  
  function showAnswers(){
    //console.log("Showing answers")
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
      var questionButtons = document.createElement('button')
      questionButtons.setAttribute('class', 'btn answersBtn')
      questionButtons.setAttribute("data-answers", questions[currentQuestion].answers[i])
      questionButtons.textContent = questions[currentQuestion].answers[i]
      document.querySelector('#choices').appendChild(questionButtons)
    }
  }
  }
highscoresBtn.onclick = ()=> {
  getElementById('introPage').style.display = 'none'

  // Make a highscore page heading
  var h1Tag = document.createElement('h1')

  //h1Tag.setAttribute('class', question(s))
  //h1Tag.textContent = questions[currentQuestion].q
  //document.querySelector('.introContainer').appendChild(h1Tag)
}

//highscoresBtn.addEventListener('click', )
//highscores sheet and save with local storage
//document.addEventListener("click", function showResults(){
//}