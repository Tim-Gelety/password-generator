// Assignment code here
//TODO: 
var passwordPrompt = function () {
  // gets a value between 8-128 for variable passwordLength
  var passwordLength = window.prompt('How long of a password should I generate? tip: choose a number between 8-128.');

  // START: if passwordLength is not a number between 8-128 recursive loop
  if (passwordLength < 8 || passwordLength > 128) {

    window.alert('please enter a value between 8 and 128');
    return (passwordPrompt);
    //  END: passwordLength recursive loop

  } else {


    //  rest of the code here 
    var passwordSpecial = window.confirm('Would you like special characters in your password? tip: OK for Yes and CANCEL for NO');
    var passwordNumber = window.confirm('Would you like numerical characters in your password? tip: OK for Yes and CANCEL for NO');
    var passwordLowerCase = window.confirm('Would you like lowercase characters in your password? tip: OK for Yes and CANCEL for NO');
    var passwordUpperCase = window.confirm('Would you like UPPERCASE characters in your password? tip: OK for Yes and CANCEL for NO');
  }
}
passwordLength()


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
