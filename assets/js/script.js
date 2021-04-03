// Assignment code here
var generatePassword = function () {

  // gets a value between 8-128 for variable passwordLength
  var passwordLength = window.prompt('How long of a password should I generate? tip: choose a number between 8-128.');
 
  // FIXED: stupid non-whole numbers exception
  var passwordLength = parseInt(passwordLength);

  // FIXED: +1 edge case
  if (passwordLength > 7 && passwordLength < 129) {

    //  buncha boolean codesoup
    var passwordSpecial = window.confirm('Would you like special characters in your password? tip: OK for Yes and CANCEL for NO');
    if(passwordSpecial === true) {
      passwordSpecial = "!@#$%^*&(){}\<>?/.,~:;[]=+";
    } else {
      passwordSpecial = ""
    }

    var passwordNumber = window.confirm('Would you like numerical characters in your password? tip: OK for Yes and CANCEL for NO');
    if(passwordNumber === true) {
      passwordNumber = "12345678901234567890123456";
    } else {
      passwordNumber = ""
    }

    var passwordLowerCase = window.confirm('Would you like lowercase characters in your password? tip: OK for Yes and CANCEL for NO');
    if(passwordLowerCase === true) {
      passwordLowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      passwordLowerCase = ""
    }

    var passwordUpperCase = window.confirm('Would you like UPPERCASE characters in your password? tip: OK for Yes and CANCEL for NO');
    if(passwordUpperCase === true) {
      passwordUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      passwordUpperCase = ""
    }

  var charSet = passwordSpecial + passwordNumber + passwordLowerCase + passwordUpperCase;

console.log(charSet);

// TODO: make it do
// iterates the sequence the number of times given in passwordLength 
var password = ""
for(var i = 0; i < passwordLength; i++ ){
   password += charSet.charAt(Math.floor(Math.random()* charSet.length))
// password iterates and replaces values until loop finishes, stop that 
}
  return(password)
    
  } else {
    //  returns for another generatePassword for non-valid inputs 
    window.alert('please enter a value between 8 and 128');
    return (generatePassword);
  }
}


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
