import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <>
      <section className="chat-entry local">
        <h2 className="entry-name">{props.senderName}</h2>
        <section className="entry-bubble">
          <p>{props.messageBody}</p>
          <p className="entry-time"><TimeStamp>{props.timeStamp}</TimeStamp></p>
          <button className="like">🤍</button>
        </section>
    </section>
    </>
  );
};

ChatEntry.propTypes = {
  senderName: PropTypes.string.isRequired,
  messageBody: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  // liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
