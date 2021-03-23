// Links buttons to JavaScript.
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  // Converts user input to an integer.
  userInput = document.getElementById('input').value
  // Checks if user input is less than 0.
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
