import '../FlashcardControls.css';

function FlashcardControls({ onNext }) {
  return (
    <div className="controls">
      <button onClick={onNext}>Next Card</button>
    </div>
  );
}

export default FlashcardControls;
