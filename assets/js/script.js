// Assignment code here
// TODO: make a window prompt that ask for a numerical value between 8-128
// TODO: make a confirm window that asks for special characters
// TODO: make a confirm window that asks for numerical characters
// TODO: make a confirm window that asks for lowercas charaters
// TODO: make a confirm windo that asks for uppercase characters

var passwordLength = window.prompt('How long of a password should I generate? tip: choose a number between 8-128.');
var passwordSpecial = window.confirm('Would you like special characters in your password? tip: OK for Yes and CANCEL for NO');
var passwordNumber = window.confirm('Would you like numerical characters in your password? tip: OK for Yes and CANCEL for NO');
var passwordLowerCase = window.confirm('Would you like lowercase characters in your password? tip: OK for Yes and CANCEL for NO');
var passwordUpperCase = window.confirm('Would you like UPPERCASE characters in your password? tip: OK for Yes and CANCEL for NO');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
