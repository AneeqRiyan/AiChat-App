// // src/App.tsx
// import React from 'react';
// import Logo from './components/Logo';
// import FeatureCard from './components/FeatureCard';
// import ChatInput from './components/ChatInput';
// import './App.css';

// const App: React.FC = () => {
//   const handleSendMessage = (message: string) => {
//     // Handle message send
//     console.log("User message:", message);
//   };

//   return (
//     <div className="app">
//       <Logo />
//       <div className="feature-container">
//         <FeatureCard icon="icon1.svg" text="Create a cartoon illustration of my pet" />
//         <FeatureCard icon="icon2.svg" text="Count the number of items in an image" />
//         <FeatureCard icon="icon3.svg" text="Content calendar for TikTok" />
//         <FeatureCard icon="icon4.svg" text="Explain nostalgia to a kindergartener" />
//       </div>
//       <ChatInput onSend={handleSendMessage} />
//     </div>
//   );
// };

// export default App;


// src/App.tsx
import React from 'react';
import Logo from './components/Logo';
import ChatContainer from './components/ChatContainer';
import ChatInput from './components/ChatInput';
import { ChatProvider } from './context/ChatContext';
import './App.css';

const App: React.FC = () => (
  <ChatProvider>
    <div className="app">
      <Logo />
      <ChatContainer />
      <ChatInput />
    </div>
  </ChatProvider>
);

export default App;
