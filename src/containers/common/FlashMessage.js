import React, { Component } from 'react';


class FlashMessage extends Component {
  render() {
    const { dismiss, message, timestamp } = this.props;

    return (
      <div className="flash-message" onClick={() => dismiss(timestamp)}>
        {message}
      </div>
    );
  }
}

export default FlashMessage
