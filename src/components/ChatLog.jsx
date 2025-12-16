import ChatEntry from "./ChatEntry"

const ChatLog = (props) => {
  return (
    <section className="chat-log">
      {props.entries.map(entry => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleLike={() => props.onToggleLike(entry.id)}
        />
      ))}
    </section>
  );
};


export default ChatLog;

