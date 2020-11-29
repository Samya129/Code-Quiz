var body = document.body

//Create all necessary elements
const quizDir = document.getElementById('quizDir')
const startBtn = document.getElementById('startBtn')
const submitBtn = document.getElementById('submitBtn')
const highscoresBtn = document.getElementById('highscoresBtn')

const questionsDiv = document.getElementById('questions')
const choicesDiv = document.getElementById('choices')
const timerDiv = document.getElementById('timer')
const counterDiv = document.getElementById('counter')
let currentQuestion = 0

//If start Quiz button is clicked
startBtn.onclick = () => {
  document.getElementById('home').style.display = 'none'
  quizDir.style.display = 'none'

  // Make question
  var h1Tag = document.createElement('h1')
  h1Tag.textContent = questions[currentQuestion].q
  document.querySelector('.container').appendChild(h1Tag)

  console.log(questions[currentQuestion].answers)

  // Make buttons 
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var questionButtons = document.createElement('a')
    questionButtons.setAttribute('class', 'btn')
    questionButtons.textContent = questions[currentQuestion].answers[i]
    document.querySelector('.container').appendChild(questionButtons)
  }
}
//highscoresBtn.onclick = ()=>{
//document.getElementById("home").style.display="none";
//var inputTag = document.createElement("input");
//inputTag.textContent = questions[currentChoices].A
//document.querySelector(".container").append(pTag)
//}

//create element for buttons
//append

//console.log(startBtn)
//Set text content of relevant elements
//quizDir.textContent =
  //'Directions: Try to answer the following code-related questions within the time limit given. Keep in mind that if you get a question incorrect, your score time will be deducted by five seconds. Good luck!'
//document.querySelector('.container').appendChild(quizDir)

//Append all of our elements to allow it's appearance on the page
//body.appendChild[1](quizDiv);

//Event Listeners for buttons
//startBtn.addEventListener('click', )
//nextBtn.addEventListener('click', )
//submitBtn.addEventListener('click', finalResults)
//highscoresBtn.addEventListener('click', )

//function finalResults(){}

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
    rAnswer: 'A' //console.log(answers[0])
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
    rAnswer: 'D'
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
    rAnswer: 'B'
  },
  {
    q: 'Which of the following is NOT considered a semantic element?',
    answers: [
        '<form>',
        '<details>',
        '<span>',
        '<mark>',
    ],
    rAnswer: 'C'
  },
  {
    q: 'How are classes and ids coded into a CSS file?',
    answers: [
        '.name / #name',
        '#name / .name',
        '.name / .name',
        '#name / #name',
    ],
    rAnswer: 'A'
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
    rAnswer: 'D'
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
    rAnswer: 'C'
  },
  {
    q: 'How should you format a grid when using Bootstrap?',
    answers: [
        'Containers, Columns, Rows',
        'Containers, Rows, Columns',
        'Columns, Containers, Rows',
        'Rows, Containers, Columns',
    ],
    rAnswer: 'B'
  }
]

// We start the quiz with a score of 0.
var score = 0

// Loop over every question object in the questions array
//   for (var i = 0; i < questionsDiv.length; i++) {
//     // Display current question to user and allow them to select from the choices given
//     var rAnswer = confirm(questionsDiv[i].q);

//     // Compare answers
//     /*if Wrong deduct time and play sound
//     */

//     if (rAnswer === questions[i].rAnswer) {
//       // Increase score
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("WRONG!"); // deduct time --
//       time--;
//     }
//   }

// Show total at end
//alert("You got " + score + "/" + questionsDiv.length);

//html with timer starting at 0
//timer should start with start button
//compare users choice to the actual answer
//counter?? the number that is changing
//highscores sheet and save with local storage
//timer and if else statement for time deduction

document.getElementById("startBtn").addEventListener("click", function(){
    var timeleft = 120;

    var downloadTimer = setInterval(function timerDiv(){
    document.getElementById("counter").innerHTML = timeleft + "seconds remaining";
    
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("counter").innerHTML = "No more time remaining";
    }

    }, 2000);
    console.log(countdown);
});