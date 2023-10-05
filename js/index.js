document.addEventListener('DOMContentLoaded', function () {
  var randomWordButton = document.getElementById('randomWordButton');
  var displayWord = document.getElementById('displayWord');

  // Load the JSON file
  fetch('words.json')
    .then((response) => response.json())
    .then((data) => {
      var words = data.words;

      // Function to select a random word
      function getRandomWord() {
        var randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
      }

      // Initialize by displaying a random word
      displayWord.textContent = getRandomWord();

      // Button click event
      randomWordButton.addEventListener('click', function () {
        var randomWord = getRandomWord();
        displayWord.textContent = randomWord;
      });
    })
    .catch((error) => console.error('Error loading JSON:', error));
});
