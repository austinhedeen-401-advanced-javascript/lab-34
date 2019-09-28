import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.category = '';
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ category: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewCategory(this.state.category);
  };

  render() {
    return (
      <>
        {/* eslint-disable-next-line react/jsx-key */}
        {this.props.categories.map((category) => <li>{category}</li>)}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.category}
            onChange={this.handleChange}
            placeholder="Enter a Category" />
          <button type="submit">Create a Category</button>
        </form>
      </>
    );
  }
}

App.propTypes = {
  categories: PropTypes.array.isRequired,
  createNewCategory: PropTypes.func.isRequired,
};

// Read from the state
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

// Send actions to the store
const mapDispatchToProps = (dispatch) => {
  return {
    createNewCategory: (categoryName) => {
      dispatch({
        type: 'CATEGORY_CREATE',
        payload: categoryName,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
