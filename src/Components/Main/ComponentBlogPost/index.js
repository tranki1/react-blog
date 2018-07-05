import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComponentBlogPost = ({ blogs, blogPostDelete, match }) => {
  const currentId = Number(match.params.id);
  const blogPost = blogs.find(post => post.id === currentId);
  return (
    <div>
      <h1>{blogPost.BlogTitle}</h1>
      <p>{blogPost.BlogContent}</p>
      <Link to="/">
        <button type="button" onClick={() => blogPostDelete(currentId)}>
          Delete
        </button>
      </Link>
    </div>
  );
};

ComponentBlogPost.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      BlogTitle: PropTypes.string.isRequired,
      BlogContent: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  blogPostDelete: PropTypes.func.isRequired,
};

export default ComponentBlogPost;
