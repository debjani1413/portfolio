import Memory from "../Images/MemoryCard.png";
import Hangman from "../Images/Hangman.png";
import Type from "../Images/Typingspeed.png";
import Word from "../Images/Wordguess.png";
import Quiz from "../Images/Quiz.png";
import Snake from "../Images/SnakeGame.png";
import SortV from "../Images/SortV.png";

const workData = [
  {
    image: Hangman,
    tag: "Hangman",
    link: "https://hangman-ruhi.netlify.app/",
    desc: "A Hangman game built with JavaScript challenging players to guess a hidden word by selecting letters. With each incorrect guess, a part of the hangman figure is drawn. The game typically includes a word bank, a display for guessed letters, and a reset option for new rounds."
  },
  {
    image: Type,
    tag: "Typing Speed",
    link: "https://typing-speed-test-ruhi.netlify.app/",
    desc: "A typing speed game built with JavaScript tests how quickly and accurately players can type a given set of words. It includes features like word-per-minute (WPM) calculation, accuracy percentage, and a reset option for multiple rounds."
  },
  {
    image: SortV,
    tag: "SortV",
    link: "https://sortv-github.netlify.app/",
    desc: "A Sorting Visualizer is an interactive web tool built with JavaScript that visually demonstrates various sorting algorithms, such as Bubble Sort, Selection Sort, and Insertion Sort. It uses animations to represent how data elements are compared and swapped in real-time, allowing users to understand the sorting process step by step."
  },
  {
    image: Memory,
    tag: "Memory Card Game",
    link: "https://memory-game-ruhi.netlify.app/",
    desc: "A memory card game built with JavaScript involving flipping pairs of cards to find matching ones. The goal is to match all pairs using as few moves as possible. The game typically includes features like a move counter, and reset functionality."
  },
  {
    image: Word,
    tag: "Word Guess",
    link: "https://word-guessing-game-ruhi.netlify.app/",
    desc: "A word guessing game built with JavaScript requires players to guess a hidden word by entering letters. It features a counter for wrong guesses, a hint system, and the ability to restart the game."
  },
  {
    image: Quiz,
    tag: "Quiz App",
    link: "https://quiz-app-ruhi.netlify.app/",
    desc: "A quiz game built with JavaScript presents players with multiple-choice questions, tracking their answers and scoring based on correctness. Features include a timer, a score counter, and a final result screen summarizing performance."
  },
  {
    image: Snake,
    tag: "Snake Game",
    link: "https://snake-game-ruhi.netlify.app/",
    desc: "A snake game built with JavaScript involves controlling a growing snake to eat food while avoiding collisions with itself and the walls. The game features real-time movement, score tracking, and game-over conditions when the snake hits a wall or itself."
  },


];

export default workData;
