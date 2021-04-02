// Assignment code here
var passwordPrompt = function () {
  // gets a value between 8-128 for variable passwordLength
  var passwordLength = window.prompt('How long of a password should I generate? tip: choose a number between 8-128.');
  // FIXED: stupid non-whole numbers exception
  var passwordLength = parseInt(passwordLength);

  // START: if passwordLength is not a number between 8-128 recursive loop
  // FIXED: letters being included EVEN though the forum guy said javascript is dumb and if you perform math on it it will expect intergers if you perform operations! never trust a forum post 
  if (passwordLength > 7 && passwordLength < 129) {

    //  buncha boolean logic
    var passwordSpecial = window.confirm('Would you like special characters in your password? tip: OK for Yes and CANCEL for NO');
    
    var passwordNumber = window.confirm('Would you like numerical characters in your password? tip: OK for Yes and CANCEL for NO');

    var passwordLowerCase = window.confirm('Would you like lowercase characters in your password? tip: OK for Yes and CANCEL for NO');

    var passwordUpperCase = window.confirm('Would you like UPPERCASE characters in your password? tip: OK for Yes and CANCEL for NO');

     //TODO: iterate on the value from the passwordLength

    for(var i =0; i < passwordLength; i++){
      console.log(i);
    }

  }
   else {
    // FIXED: moved the recursion to the very end so everything is one big box and feels very awkward 
    window.alert('please enter a value between 8 and 128');
    return (passwordPrompt);
    //  END: passwordLength recursive loop
  }
}

passwordPrompt()
 


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
