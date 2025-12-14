import './App.css';
import ChatEntry from './components/ChatEntry';
import MessageData from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry senderName="Anaiah" messageBody="Can you see this?" timeStamp="2023-05-15T10:30:00Z"></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
