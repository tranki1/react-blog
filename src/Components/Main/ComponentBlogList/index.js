import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';
import Blog from './ComponentBlog';

const ComponentBlogList = ({ blogs }) => {
  const renderBlogPost = blogs.map(blog => <Blog key={blog.id} {...blog} />);
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

export default ComponentBlogList;
