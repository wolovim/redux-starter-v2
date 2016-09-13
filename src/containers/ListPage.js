import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItemForm from '../components/ListItemForm';
import { addItem } from '../actions/index';


class ListPage extends Component {
  handleAddItem(item) {
    this.props.dispatch(addItem(item));
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    return (
      <div>
        <ListItemForm handleAddItem={(item) => this.handleAddItem(item)} />
        <ul className="no-decoration">{items}</ul>
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
