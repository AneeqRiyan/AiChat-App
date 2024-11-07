// src/components/ChatInput.tsx
import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { getBotResponse } from '../services/apiService';
import { v4 as uuidv4 } from 'uuid';
import './ChatInput.css';

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const chatContext = useContext(ChatContext);

  if (!chatContext) return null;

  const { addMessage } = chatContext;

  const handleSend = async () => {
    if (message.trim()) {
      const userMessage = { id: uuidv4(), text: message, sender: 'user' as 'user' };
      addMessage(userMessage);
      setMessage('');

      // Fetch bot response
      const botReply = await getBotResponse(message);
      const botMessage = { id: uuidv4(), text: botReply, sender: 'bot' as 'bot'};
      addMessage(botMessage);
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Message ChatGPT"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
