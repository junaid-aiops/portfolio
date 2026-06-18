import "./SuggestedQuestions.css";

function SuggestedQuestions() {
  return (
    <div className="suggested-questions">
      <p className="suggested-questions__label">
        Try asking
      </p>

      <div className="suggested-questions__list">
        <button
          className="suggested-questions__button"
          type="button"
        >
          What projects has Junaid built?
        </button>

        <button
          className="suggested-questions__button"
          type="button"
        >
          What is Junaid’s experience?
        </button>

        <button
          className="suggested-questions__button"
          type="button"
        >
          What technologies does Junaid use?
        </button>

        <button
          className="suggested-questions__button"
          type="button"
        >
          Why should we hire Junaid?
        </button>
      </div>
    </div>
  );
}

export default SuggestedQuestions;