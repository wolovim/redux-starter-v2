import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItemForm from '../components/ListItemForm';
import { addItem, addFlashMessage } from '../actions/index';

import '../assets/css/ListPage.css';


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
        <h4>This is a quick demonstration of Redux workflows.</h4>
        <p>
          Basic list-making and flash message features have been implemented.<br />
          If you're just getting started with Redux, try this{' '}
          <a href="//quickleft.com/blog/redux-plain-english-workflow/">blog post</a>.
        </p>

        <div className="generate-error">
          <a
            className="generate-error-btn"
            onClick={e => this.generateError(e)}>
            Generate Error
          </a>
        </div>

        <ListItemForm handleAddItem={(item) => this.handleAddItem(item)} />
        <div className="list-items-wrapper">
          <ul className="list-items">
            {items}
          </ul>
        </div>
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
