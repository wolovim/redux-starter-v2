import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        <ReactCSSTransitionGroup
          transitionName="flashes"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {flashMessages}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

FlashMessages.propTypes = {
  dispatch: PropTypes.func.isRequired,
  flashMessages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    flashMessages: state.flashMessages.list
  };
}

export default connect(mapStateToProps)(FlashMessages);
