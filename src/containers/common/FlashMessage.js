import React, { Component } from 'react';
import classNames from 'classnames';


class FlashMessage extends Component {
  render() {
    const { dismiss, message, timestamp } = this.props;
    console.log('type!', message.messageType);
    const flashMessageClasses = classNames(
      'flash-message',
      {
        'error': message.messageType === 'error',
        'notification': message.messageType === 'notification'
      }
    )

    return (
      <div className={flashMessageClasses} onClick={() => dismiss(timestamp)}>
        {message.text}
      </div>
    );
  }
}

export default FlashMessage
