var body = document.body;

//Create all necessary elements 
const quizDir = document.getElementById("quizDir");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const highscoresBtn = document.getElementById("highscoresBtn");

const questionsDiv = document.getElementById("questions");
const choicesDiv = document.getElementById("choices");
const timerDiv = document.getElementById("timer");
const counterDiv = document.getElementById("counter");
let currentQuestion = 0

//If start Quiz button is clicked
startBtn.onclick = ()=>{
 document.getElementById("home").style.display="none";
var h1Tag = document.createElement("h1");
h1Tag.textContent = questions[currentQuestion].q
document.querySelector(".container").appendChild(h1Tag)
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
quizDir.textContent = "Directions: Try to answer the following code-related questions within the time limit given. Keep in mind that if you get a question incorrect, your score time will be deducted by five seconds. Good luck!";
document.querySelector(".container").appendChild(quizDir)



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
    { q: "A method can be defined as... ",
        A: "a function containing a property",
        B: "an object",
        C: "console.log",
        D: "a variable with arrays",
        rAnswer: "A" },
    { q: "What must be included in your Javascript document to ensure that your code appears on the page?", 
        A: "Append the elements",
        B: "Set the text content of relevant elements",
        C: "Create a set of elements",
        D: "All of the above",
        rAnswer: "D" },
    { q: "If your document is bubbling, what should you implement into your code?", 
        A: "event.curentTarget();",
        B: "event.stopPropagation();",
        C: "document.querySelectorAll();",
        D: "parseFloat();",
        rAnswer: "B" },
    { q: "Which of the following is NOT considered a semantic element?", 
        A: "<form>",
        B: "<details>",
        C: "<span>",
        D: "<mark>",
        rAnswer: "C" },
    { q: "How are classes and ids coded into a CSS file?", 
        A: ".name / #name",
        B: "#name / .name",
        C: ".name / .name",
        D: "#name / #name",
        rAnswer: "A" },
    { q: "What would you need to type into your computer's terminal to add a file?", 
        A: "mkdir",
        B: "cp",
        C: "mv",
        D: "touch",
        rAnswer: "D" },

    { q: "Every HTML document displayed in the browser is governed by a concept called what?", 
        A: "A relative file path",
        B: "Block elements",
        C: "Flow",
        D: "An active state",
        rAnswer: "C" },
    { q: "How should you format a grid when using Bootstrap?", 
        A: "Containers, Columns, Rows",
        B: "Containers, Rows, Columns",
        C: "Columns, Containers, Rows",
        D: "Rows, Containers, Columns",
        rAnswer: "B" },
  ];

  // We start the quiz with a score of 0.
  var score = 0;

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
