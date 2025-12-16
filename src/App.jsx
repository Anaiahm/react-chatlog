import './App.css';
import ChatLog from './components/ChatLog';
import MessageData from './data/messages.json';
import { useState } from 'react';
import likedCount from './components/ChatEntry.jsx';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* <h2>Liked Count:{likedCount}</h2> */}
        <ChatLog entries={MessageData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
