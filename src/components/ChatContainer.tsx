// src/components/ChatContainer.tsx
import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import ChatMessage from './ChatMessage';
import './ChatContainer.css';

const ChatContainer: React.FC = () => {
  const chatContext = useContext(ChatContext);

  if (!chatContext) return null; // handle case if context is undefined

  const { messages } = chatContext;

  return (
    <div className="chat-container">
      {messages.map((message) => (
        <ChatMessage key={message.id} text={message.text} sender={message.sender} />
      ))}
    </div>
  );
};

export default ChatContainer;
