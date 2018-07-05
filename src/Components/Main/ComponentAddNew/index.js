import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentAddNew extends Component {
  state = {
    BlogTitle: '',
    BlogContent: '',
    BlogAuthor: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { addNewSubmit, newId } = this.props;
    const { BlogAuthor } = this.state;
    addNewSubmit({ ...this.state, BlogAuthor: Number(BlogAuthor), id: newId + 1 });
    this.handleClose();
  };

  handleClose = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { BlogTitle, BlogContent, BlogAuthor } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="BlogTitle" value={BlogTitle} onChange={this.handleChange} />
        <input type="text" name="BlogContent" value={BlogContent} onChange={this.handleChange} />
        <input type="number" name="BlogAuthor" value={BlogAuthor} onChange={this.handleChange} />
        <button type="submit">Add</button>
        <button type="button" onClick={this.handleClose}>
          Close
        </button>
      </form>
    );
  }
}

ComponentAddNew.propTypes = {
  addNewSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  newId: PropTypes.number.isRequired,
};

export default ComponentAddNew;
