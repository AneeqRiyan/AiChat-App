// src/components/ChatMessage.tsx
import React from 'react';
import './ChatMessage.css';

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => (
  <div className={`chat-message ${sender}`}>
    <p>{text}</p>
  </div>
);

export default ChatMessage;
