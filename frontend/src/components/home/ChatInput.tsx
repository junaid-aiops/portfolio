import "./ChatInput.css";

function ChatInput() {
  return (
    <div className="chat-input">
      <form className="chat-input__form">
        <input
          className="chat-input__field"
          type="text"
          placeholder="Ask anything about Junaid..."
        />

        <button className="chat-input__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;