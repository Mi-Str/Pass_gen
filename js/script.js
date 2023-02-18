// Array of special characters to be included in password

var length = 0
var choices = []

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function writePassword(){
  var prompt = getPasswordOptions();
  console.log(prompt)
  
  if(prompt){
    var newPassword = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = newPassword;
  }
  else{
    
    alert("Please enter a number between 10 and 64")
  }
}

function generatePassword(){
  
  var pass = '';
  
  for(var i = 0; i < length; i++){
    var random = Math.floor(Math.random()*choices.length);
    
    pass = pass + choices[random];
  
  }

  return pass;
}

 function getPasswordOptions(){
  choices = []
  length = Number(prompt("How many characters your password should contain between 10 and 64?"))
  if(!length || !(length >= 10 && length <= 64)) {
    return false;
  }
  if(confirm("Do you want password to contain lower case characters?")){choices = choices.concat(lowerCasedCharacters);}
  if(confirm("Do you want password to contain upper case characters?")){choices = choices.concat(upperCasedCharacters);}
  if(confirm("Do you want password to contain numbers?")){choices = choices.concat(numericCharacters);}
  if(confirm("Do you want password to contain special characters?")){choices = choices.concat(specialCharacters);}

  return choices
 }


function getRandomLower(){
  return lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)]
  
} console.log(getRandomLower())

function getRandomUpper(){
  return upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)]
} console.log(getRandomUpper())

function getRandomNumeric(){
  return numericCharacters[Math.floor(Math.random()*numericCharacters.length)]
} console.log(getRandomNumeric())

function getRandomSpecial(){
  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
} console.log(getRandomSpecial())


password.innerText = generatePassword(
  
)
