document.addEventListener('DOMContentLoaded', function () {
  var randomWordButton = document.getElementById('randomWordButton');
  var displayWord = document.getElementById('displayWord');
  var jsonDisplay = document.getElementById('jsonDisplay');

  // Load the JSON file
  fetch('words.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
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

      // JSON data
      var jsonData = {
        words: [
          'YOU ARE AS HAPPY AS YOU DECIDE TO BE. RIGHT NOW - DECIDE YOU’RE ECSTATIC. WHY NOT? YOURE ALIVE?',
          'FEMALES ARE OBJECTIVELY BEAUTIFUL. SEPARATE TO BEING A PERSON, THEY ARE GORGEOUS AS AN OBJECT. EVEN STRAIGHT WOMEN WANT TO KISS A TRULY BEAUTIFUL WOMAN.    AS A MAN YOU WILL NEVER HAVE INTRINSIC VALUE. YOU’VE EITHER MADE YOURSELF IMPORTANT OR YOU HAVEN’T.',
          'REFUSAL TO DO THE BRAVE THING SHOULD RESULT IN DEEP SHAME. TRUE REGRET WILL ENSURE BRAVE ACTS IN THE FUTURE.\n\nWHY DIDN’T YOU ACT?\nWHY DIDN’T YOU TAKE THE RISK?\n\nTHOSE WITHOUT GUILT HAVE SLAVE MINDS, CONDITIONED FOR SAFETY, EUNUCHS.\n\nAVOID.',
        ],
      };

      // Function to format JSON with line breaks as HTML <br> tags
      function formatJSONWithLineBreaks(data) {
        return data.replace(/\n/g, '<br>');
      }

      // Display the JSON data with line breaks as HTML
      jsonDisplay.innerHTML = formatJSONWithLineBreaks(
        JSON.stringify(jsonData, null, 2)
      );
    })
    .catch((error) => console.error('Error loading JSON:', error));
});
