import { useState } from 'react';
import Flashcard from './components/Flashcard';
import FlashcardControls from './components/FlashcardControls';
import './App.css';

const cards = [
  { question: "Aku", answer: "I" },
  { question: "Kamu", answer: "You" },
  { question: "Makan", answer: "Eat" },
  { question: "Suka", answer: "Like" },
  { question: "Dia", answer: "He/She" },
  { question: "Untuk", answer: "For" },
  { question: "Tidak", answer: "No" },
  { question: "Bisa", answer: "Can" }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    let newIndex = Math.floor(Math.random() * cards.length);
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * cards.length);
    }
    setCurrentIndex(newIndex);
    setIsFlipped(false);
  };

  return (
    <div className="app">
      <h1>Flashcards: Indonesian - English</h1>
      <p>Test your knowledge with simple Q&A cards!</p>
      <p>Total Cards: {cards.length}</p>
      <Flashcard card={cards[currentIndex]} isFlipped={isFlipped} onFlip={handleFlip} />
      <FlashcardControls onNext={handleNext} />
    </div>
  );
}

export default App;
