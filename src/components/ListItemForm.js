import React, { Component, PropTypes } from 'react';

import '../assets/css/ListItemForm.css';


class ListItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddItem(this.state.formValue);
    this.setState({ formValue: '' });
  }

  render() {
    return (
      <div className="list-form">
        <input
          className="list-form__input"
          type="text"
          placeholder="Add item name..."
          value={this.state.formValue}
          onChange={e => this.setState({ formValue: e.target.value })} />
        <a className="list-form__submit" onClick={e => this.handleSubmit(e)}>Add Item</a>
      </div>
    );
  }
}

ListItemForm.propTypes = {
  handleAddItem: PropTypes.func.isRequired
};

export default ListItemForm;
