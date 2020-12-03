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

HighscoreButton.addEventListener("click", function(event) {
  event.preventDefault();
    //user information for submission
  var initials = document.querySelector("#initials").value.trim();
  var highscore = document.querySelector("#highscore").value.trim();
    //validation
  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else if (highscore === "") {
    displayMessage("error", "Highscore cannot be blank");
  } else {
    displayMessage("success", "Your initials and highscore has been saved");

  // Save initials and highscore to localStorage and render a list of previous scores list
  //first argument part is a string, second part is the variable. Stringify step 2 
  localStorage.setItem("initials", JSON.stringify(initials));
  localStorage.setItem("highscore", JSON.stringify(highscore));
  renderLastRegistered();  
  //end of storage added
  //Note:Local storage can only handle strings
}
});


