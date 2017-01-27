import React from 'react';

const ChatMessages = ({messages}) => {
  const messageList = messages.map(
    (message, index) => <li key={index}>{message.message} by: {message.author}</li>
  )

  return (
    <div>
      <ul>
        {messageList}
      </ul>
    </div>
  )
}

export default ChatMessages;
