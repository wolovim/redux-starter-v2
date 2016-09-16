import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItemForm from '../components/ListItemForm';
import { addItem, addFlashMessage } from '../actions/index';


class ListPage extends Component {
  handleAddItem(item) {
    this.props.dispatch(addItem(item));
  }

  generateError(e) {
    e.preventDefault();
    this.props.dispatch(addFlashMessage('An error has occurred!'));
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return (
      <div>
        <ListItemForm handleAddItem={(item) => this.handleAddItem(item)} />
        <ul className="no-decoration">{items}</ul>
        <button onClick={e => this.generateError(e)}>Generate Error</button>
      </div>
    );
  }
}

ListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { items: state.list.items };
}

export default connect(mapStateToProps)(ListPage);
