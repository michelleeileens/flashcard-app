import '../Flashcard.css';

function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="card-content">
        <p>{isFlipped ? card.answer : card.question}</p>
      </div>
    </div>
  );
}

export default Flashcard;
