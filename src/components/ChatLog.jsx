import ChatEntry from "./ChatEntry"

const ChatLog = (props) => {
    const chatEntries = props.chatEntries.map((entry) => {
        return <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>;
    });
  return (
    <section className="chat-log">
      {chatEntries}
    </section>

    );
};

export default ChatLog;

