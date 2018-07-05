import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import styles from './index.css';
import Blog from './ComponentBlog';

const ComponentBlogList = ({ blogs }) => {
  const renderBlogPost = blogs.map(blog => (
    <Link to={`/posts/${blog.id}`} key={blog.id}>
      <Blog {...blog} />
    </Link>
  ));
  return <div className={styles.BlogList}>{renderBlogPost}</div>;
};

ComponentBlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      BlogAuthor: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      BlogTitle: PropTypes.string.isRequired,
      BlogContent: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withRouter(ComponentBlogList);
