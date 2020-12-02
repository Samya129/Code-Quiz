var body = document.body

//Create all necessary elements
const startBtn = document.getElementById('startBtn')
const submitBtn = document.getElementById('submitBtn')
const highscoresBtn = document.getElementById('highscoresBtn')

const questionsDiv = document.getElementById('questions')
const answersBtn = document.getElementById('answersBtn')
const nextBtn = document.getElementById('nextBtn')
const timer = document.getElementById('timer')
const counterDiv = document.getElementById('counter')
let currentQuestion = 0

//Timer and counter Section
document.getElementById("startBtn").addEventListener("click", function(){
  var timeleft = 120;

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
  document.getElementById('introPage').style.display = 'none'
  

  // Make a question
  var h1Tag = document.createElement('h1')

  //h1Tag.setAttribute('class', question(s))
  h1Tag.textContent = questions[currentQuestion].q
  document.querySelector('#questionContainer').appendChild(h1Tag)

  console.log(questions[currentQuestion].answers)

  // Make buttons and array of those answers to the current question
  answersBtn.onclick = function() {
    // We start the quiz with a score of 0.
      var score = 0;
      var response = window.q(questions[i].answers);
      if (response === questions[i].correctAnswer){
      score++;
      alert("Correct!");
      } else {
    var timeDeduction = timeleft - 8
    alert("WRONG!");
    }
  //Final score total
  alert("You got " + score + "/" + questions.length);
    
  }

  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var questionButtons = document.createElement('answersBtn')
    questionButtons.setAttribute('class', 'btn')
    questionButtons.textContent = questions[currentQuestion].answers[i]
    document.querySelector('#questionContainer').appendChild(questionButtons)
    answersList = document.createElement('ul');
    listItem = document.createElement('li')
    //listItem.innerHTML = listData(answers.length);??
  }
}


highscoresBtn.onclick = ()=> {
  getElementById('introPage').style.display = 'none'
  //Make highscores input sheet

}

//Event Listeners for buttons
//submitBtn.addEventListener('click', finalResults)
//highscoresBtn.addEventListener('click', )

// The array of questions for this coding quiz
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
//questions[currentQuestion].answers[i]
//questions[currentQuestion].answers.length; i++
//     /*if Wrong deduct time 
//     */

//     if (correctAnswer === questions[i].correctAnswer) {
//       // Increase score
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("WRONG!"); // deduct time --
//       time--;
//     }
//   }
//compare users choice to the actual answer
//highscores sheet and save with local storage
//document.addEventListener("click", function showResults(){
//}