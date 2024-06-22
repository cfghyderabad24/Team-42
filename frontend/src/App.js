// src/App.js

import React from 'react';
import './App.css';
import ChatbotComponent from './ChatbotComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Chatbot App</h1>
      </header>
      <main>
        <ChatbotComponent />
      </main>
    </div>
  );
}

export default App;
