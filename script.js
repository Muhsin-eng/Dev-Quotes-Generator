// Tableau de citations inspirantes pour développeurs
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "Talk is cheap. Show me the code. – Linus Torvalds"
];

// Fonction pour générer une citation aléatoire
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];

  // petite animation
  quoteElement.style.opacity = 0.3;
  setTimeout(() => {
    quoteElement.style.opacity = 1;
  }, 150);
}
