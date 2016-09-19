import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { dismissFlashMessage } from '../../actions/';

import '../../assets/css/FlashMessages.css';


class FlashMessages extends Component {
  dismissFlash(stamp) {
    this.props.dispatch(dismissFlashMessage(stamp));
  }

  render() {
    const flashMessages = this.props.flashMessages.map((message, index) => {
      return (
        <FlashMessage
          key={index}
          message={message}
          dismiss={() => { this.dismissFlash(message.timestamp); }}
          dismissDelay={3000} />
      );
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
