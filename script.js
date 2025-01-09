;(function () {
  const userInput = document.querySelector('.user-input')
  const form = document.querySelector('form')
  const result = document.querySelector('.result')
  const allGuesses = document.querySelector('.all-guesses')
  const submitBtn = document.querySelector('.submit-btn')
  const startGameBtn = document.querySelector('.start-game')

  const allGuessesArray = []
  let randomNumber = Math.round(Math.random() * 100)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if (userInputValue < randomNumber) {
      result.innerText = 'Too Low!'
    } else if (userInputValue > randomNumber) {
      result.innerText = 'Too High!'
    } else {
      result.innerText = 'You Got It! Congrats'
      startGameBtn.disabled = false
      submitBtn.disabled = true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your Guesses: ' + allGuessesArray.join(', ')
    form.reset()
  })

  startGameBtn.addEventListener('click', () => {
    // result.innerText = ''
    // allGuesses.innerText = ''
    location.reload()
    startGameBtn.disabled = true
    submitBtn.disabled = false
    // Math.round(Math.random() * 100)
  })
})()
