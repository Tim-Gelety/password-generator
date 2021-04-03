// TODO: Fix the return exception 
// HINT: pull the recursive statements out of the main function 
// DESCRIBE: generatePassword's function
var generatePassword = function () { // <-- this line is tricky because its has to be this variable to work
  // DESCRIBE: gets a value between 8-128 for variable passwordLength
  var passwordLength = window.prompt('How long of a password should I generate? tip: choose a whole number between 8-128.');

  // DESCRIBE: keeping the value of passwordLength an interger to be valid
  var passwordLength = parseInt(passwordLength);

  // DESCRIBE: IF the values entered into passwordLength are between 8  and 128 then
  if (passwordLength > 7 && passwordLength < 129) {

    // NOTE: buncha' boolean soup
    // DESCRIBE: boolean prompt for passwordSpecial. TRUE returns a string of 26 special characters FALSE returns a NULL value
    var passwordSpecial = window.confirm('Would you like special characters in your password? tip: OK for Yes and CANCEL for NO');
    if (passwordSpecial === true) {
      passwordSpecial = "!@#$%^*&(){}\<>?/.,~:;[]=+";
    } else {
      passwordSpecial = ""
    }
    // DESCRIBE: boolean prompt for passwordNumber. TRUE returns a string of 20 numbers FALSE returns a NULL value
    // NOTE: the number values are repeated to give a more even distribution
    var passwordNumber = window.confirm('Would you like numerical characters in your password? tip: OK for Yes and CANCEL for NO');
    if (passwordNumber === true) {
      passwordNumber = "12345678901234567890";
    } else {
      passwordNumber = ""
    }
    // DESCRIBE: boolean prompt for passwordLowerCase. TRUE returns a string of 26 characters FALSE returns a NULL value
    var passwordLowerCase = window.confirm('Would you like lowercase characters in your password? tip: OK for Yes and CANCEL for NO');
    if (passwordLowerCase === true) {
      passwordLowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      passwordLowerCase = ""
    }
    // DESCRIBE: boolean prompt for passwordUpperCase. TRUE returns a string of 26 characters FALSE returns a NULL value
    var passwordUpperCase = window.confirm('Would you like UPPERCASE characters in your password? tip: OK for Yes and CANCEL for NO');
    if (passwordUpperCase === true) {
      passwordUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      passwordUpperCase = ""
    }
    // DESCRIBE: charSet variable is then defined as a concatenation of all previous boolean variables TRUE and FALSE
    var charSet = passwordSpecial + passwordNumber + passwordLowerCase + passwordUpperCase;

    // DESCRIBE: password variable defined outside of the for loop  
    var password = ""
    // DESCRIBE: this  is a 'for loop' 
    for (var i = 0; i < passwordLength; i++) {
      // DESCRIBE: this part is tricky to explain, it chooses the characters randomly from the set then adds them to the password 
      password += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    // DESCRIBE: if the length of the password variable and the passwordLength variable are equal, then
    if (password.length === passwordLength) {

      // DESCRIBE: return the newly minted password 
      return (password);
      // DESCRIBE: otherwise go do it again
    } else {
      window.alert('ERROR: no variables given to generate');
      generatePassword();
    }
    // DESCRIBE: if the value in passwordLength isn't a whole number between 8-128
  } else {
    // DESCRIBE:  returns for another generatePassword for non-valid inputs  
    window.alert('please enter a whole number value between 8 and 128');
    generatePassword();
  }
} // <-- this is where everything breaks
// DEBUGGER: the recursive steps to bring the argument back totally work and everything is going great untill we leave the function
// DEBUGGER: thats when the program reverts to the old value for whatever the first error was

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

