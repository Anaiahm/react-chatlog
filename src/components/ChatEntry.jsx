import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <article className="chat-entry  local ">
      <section className="chat-entry local">
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
          <button className="like">🤍</button>
        </section>
    </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  // liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
