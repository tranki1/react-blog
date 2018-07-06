import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import styles from './index.css';
import Blog from './ComponentBlog';

const ComponentBlogList = ({ blogs }) => {
  if (Object.keys(blogs).length !== 0) {
    const renderBlogPost = Object.keys(blogs).map(id => (
      <Link className={styles.BlogLink} to={`/posts/${id}`} key={id}>
        <Blog {...blogs[id]} />
      </Link>
    ));

    return <div className={styles.BlogList}>{renderBlogPost}</div>;
  }
  return <h1>No Post</h1>;
};

ComponentBlogList.propTypes = {
  blogs: PropTypes.shape(
    PropTypes.shape({
      blogTitle: PropTypes.string.isRequired,
      blogDescription: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

ComponentBlogList.defaultProps = {
  blogs: {},
};

export default withRouter(ComponentBlogList);
