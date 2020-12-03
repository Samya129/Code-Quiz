var initialsInput = document.querySelector("#initials");
var highscoreInput = document.querySelector("#highscore");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");
var userHighscoreSpan = document.querySelector("#user-highscore");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // To get the last initials and highscore. If there is no input, return early from this function. Else set the text of the userinitialsSpan and userHighscoreSpan 
  // for the inputs make local storage step 1
  var initials = JSON.parse(localStorage.getItem("initials"));
  var highscore = JSON.parse(localStorage.getItem("highscore"));

  if (!initials || !highscore) {
    return;
  }

  userInitialsSpan.textContent = initials;
  userHighscoreSpan.textContent = highscore;
  //end of the storage added
}

