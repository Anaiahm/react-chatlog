import './App.css';
import ChatLog from './components/ChatLog';
import MessageData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(MessageData);

  const toggleLike = (id) => {
    setMessages(prevMessages => 
      prevMessages.map(message => 
        message.id === id 
        ? { ...message, liked: !message.liked } 
        : message
      )
    );
  };

  const totalLikes = messages.filter(message => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Messenger App</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onToggleLike={toggleLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
