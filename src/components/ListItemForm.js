import React, { Component, PropTypes } from 'react';


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
      <div>
        <input
          type="text"
          value={this.state.formValue}
          onChange={e => this.setState({ formValue: e.target.value })} />
        <button onClick={e => this.handleSubmit(e)}>Add Item</button>
      </div>
    );
  }
}

ListItemForm.propTypes = {
  handleAddItem: PropTypes.func.isRequired
};

export default ListItemForm;
