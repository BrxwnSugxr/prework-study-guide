// Sample quotes array (replace with your quotes)
const quotes = [
  `Young men go to war and young men die so the old men can get
what they want. Do you know what you’re fighting for?`,
  'YOU ARE AS HAPPY AS YOU DECIDE TO BE. RIGHT NOW - DECIDE YOU’RE ECSTATIC. WHY NOT? YOU’RE ALIVE?  WHY WASTE TIME BEING SAD. SMILE. LET’S GO.',
  'FEMALES ARE OBJECTIVELY BEAUTIFUL. SEPARATE TO BEING A PERSON, THEY ARE GORGEOUS AS AN OBJECT. EVEN STRAIGHT WOMEN WANT TO KISS A TRULY BEAUTIFUL WOMAN. AS A MAN YOU WILL NEVER HAVE INTRINSIC VALUE. YOU’VE EITHER MADE YOURSELF IMPORTANT OR YOU HAVEN’T.',
  'REFUSAL TO DO THE BRAVE THING SHOULD RESULT IN DEEP SHAME. TRUE REGRET WILL ENSURE BRAVE ACTS IN THE FUTURE. WHY DIDN’T YOU ACT? WHY DIDN’T YOU TAKE THE RISK? THOSE WITHOUT GUILT HAVE SLAVE MINDS, CONDITIONED FOR SAFETY, EUNUCHS. AVOID.',
  'DEFEAT TASTES BITTER - LIKE ASH. I WAS FORCED TO TASTE A LITTLE ONCE, AND INSTANTLY SPAT IT BACK IN THE FACE OF MY AGGRESSOR. MOST MEN ENJOY THEIRS WITH A CAN OF COKE AFTER A LONG DAY OF SLAVERY. THEY SEEM TO ENJOY IT. AN ACQUIRED TASTE. AVOID.',
];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  return randomQuote;
}

// Function to update the quote display
function updateQuoteDisplay() {
  const displayWord = document.getElementById('displayWord');
  displayWord.textContent = generateRandomQuote();
}

// Event listener for the "GENERATE" button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', updateQuoteDisplay);

// Initial quote display
updateQuoteDisplay();
