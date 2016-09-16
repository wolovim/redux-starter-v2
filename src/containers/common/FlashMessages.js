import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';

import '../../assets/css/FlashMessages.css';


class FlashMessages extends Component {
  dismissFlash(timestamp) {
    console.log('dismissing timestamp:', timestamp);
  }

  render() {
    const flashMessages = this.props.flashMessages.map((message, index) => {
      return <FlashMessage key={index} message={message.text} dismiss={() => this.dismissFlash(message.timestamp)} />;
    });

    return (
      <div className="flash-wrapper">
        {flashMessages}
      </div>
    );
  }
}

FlashMessages.propTypes = {

}

function mapStateToProps(state) {
  return {
    flashMessages: state.flashMessages.list
  };
}

export default connect(mapStateToProps)(FlashMessages);
