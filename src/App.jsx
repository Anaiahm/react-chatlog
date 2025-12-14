import './App.css';
import ChatLog from './components/ChatLog';
import MessageData from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={MessageData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
