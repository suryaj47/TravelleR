import React, { useState, useEffect } from "react";
import { sendChatMessage } from "../services/aiChatService";
import "./styles/AiChatBox.css";

const renderInlineMarkdown = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
};

const FormattedAssistantMessage = ({ content }) => {
  const lines = content
    .replace(/\r/g, "")
    .split("\n")
    .flatMap((line) => line.split("|").map((part) => part.trim()))
    .map((line) => line.replace(/^-{3,}$/g, "").trim())
    .filter(Boolean);

  return (
    <div className="assistant-response">
      {lines.map((line, index) => {
        const isHeading = index === 0 && line.length < 90;
        const isListItem = /^[-*]\s+/.test(line);
        const cleanLine = isListItem ? line.replace(/^[-*]\s+/, "") : line;

        return isHeading ? (
          <p className="response-heading" key={`${line}-${index}`}>
            {renderInlineMarkdown(cleanLine)}
          </p>
        ) : (
          <p
            className={isListItem ? "response-list-item" : ""}
            key={`${line}-${index}`}
          >
            {isListItem && <span className="response-dot">•</span>}
            {renderInlineMarkdown(cleanLine)}
          </p>
        );
      })}
    </div>
  );
};

const AiChatBox = ({ destinationName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: `Hello! I’m your concierge for ${destinationName}. Ask me anything about how long to stay, what to see, or when to go.`,
      },
    ]);
  }, [destinationName]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    const newHistory = [...messages, { role: "user", content: userMsg }];
    setMessages(newHistory);
    setLoading(true);

    const apiHistory = newHistory.map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    }));

    const reply = await sendChatMessage(destinationName, userMsg, apiHistory);
    setMessages([...newHistory, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <div className="ai-chat-widget">
      <button
        type="button"
        className={`ai-chat-launcher ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
      >
        <img
          src="/logo/TravelleR_Mark_Transparent.png"
          alt=""
          className="ai-logo"
          aria-hidden="true"
        />
        <span className="toggle-mark">{isOpen ? "×" : ""}</span>
      </button>

      {isOpen && (
        <div className="ai-chat-wrapper">
          <div className="chat-header">
            <div>
              <h3>Destination Concierge</h3>
              <span className="chat-subtitle">Ask about {destinationName}</span>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`chat-bubble ${msg.role}`}
              >
                {msg.role === "assistant" ? (
                  <FormattedAssistantMessage content={msg.content} />
                ) : (
                  <p>{msg.content}</p>
                )}
              </div>
            ))}
            {loading && (
              <div className="chat-bubble assistant typing">
                Concierge is typing...
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="chat-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about this destination..."
            />
            <button type="submit" disabled={loading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AiChatBox;
