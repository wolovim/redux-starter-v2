import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  componentWillMount() {
    this.autoDismiss();
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.isVisible) { return null; }
  }

  autoDismiss() {
    const { dismiss, dismissDelay } = this.props;
    setTimeout(() => { dismiss(); }, dismissDelay);
  }

  manualDismiss() {
    this.setState({ isVisible: false });
  }

  render() {
    const { message } = this.props;
    const flashMessageClasses = classNames(
      'flash-message',
      {
        'error': message.messageType === 'error',
        'notification': message.messageType === 'notification',
        'hide': !this.state.isVisible
      }
    );

    return (
      <div className={flashMessageClasses} onClick={() => this.manualDismiss()}>
        {message.text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  dismiss: PropTypes.func.isRequired,
  dismissDelay: PropTypes.number.isRequired,
  message: PropTypes.object.isRequired
};

export default FlashMessage;
