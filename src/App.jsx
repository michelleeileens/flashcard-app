import { useState } from 'react';
import Flashcard from './components/Flashcard';
import FlashcardControls from './components/FlashcardControls';
import './App.css';

const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What language is used in React?", answer: "JavaScript" }
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
      <h1>Flashcard Set: Quick Facts</h1>
      <p>Test your knowledge with simple Q&A cards!</p>
      <p>Total Cards: {cards.length}</p>
      <Flashcard card={cards[currentIndex]} isFlipped={isFlipped} onFlip={handleFlip} />
      <FlashcardControls onNext={handleNext} />
    </div>
  );
}

export default App;
