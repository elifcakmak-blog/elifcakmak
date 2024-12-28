import { useState } from 'react';
import styles from './chat.module.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'ai', content: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Something went wrong. Please try again.' },
      ]);
    }
  };

  return (
    <div className={styles.chat}>
      {!isOpen && <div className={styles.speechBubble}>Ask me anything!</div>}
      <button className={styles.chatButton} onClick={toggleChat}>
        <img src="/elif-logo/chat-icon.png" alt="Chat" />
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.messages}>
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role === 'user' ? styles.userMsg : styles.aiMsg}>
                {msg.content}
              </div>
            ))}
          </div>
          <input
            className={styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button className={styles.sendButton} onClick={sendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
