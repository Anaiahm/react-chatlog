import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [likedCount, setlikedCount] = useState(0);
  const [heart, setHeart] = useState('🤍');
  
  // let heartColor = 'white';
  // let heartColor = '🤍';
  // let filledHeart = '❤️';
  // const setHeartColor = (event) => {
  //   if (heartColor === '🤍') {
      // event.target.style.color = 'white'
    //   heartColor = '❤️';
    //   console.log({heartColor});
    // } else {
      // event.target.style.color = 'red'
  //     heartColor = '🤍';
  //     console.log({heartColor});
  //   }
  // };

  return (
    <article className="chat-entry  local ">
      <section className="chat-entry local">
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
          <button className="like" onClick={() => setHeart(heart === '🤍' ? '❤️' : '🤍')}>{heart}</button>
        </section>
    </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
