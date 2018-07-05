import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ComponentBlog = (props) => {
  const { BlogTitle, BlogContent, BlogAuthor } = props;
  return (
    <div className={styles.BlogPost}>
      <div className={styles.BlogTitle}>{BlogTitle}</div>
      <div className={styles.BlogContent}>{BlogContent}</div>
      <div className={styles.BlogAuthor}>{BlogAuthor}</div>
    </div>
  );
};
ComponentBlog.propTypes = {
  BlogTitle: PropTypes.string.isRequired,
  BlogContent: PropTypes.string.isRequired,
  BlogAuthor: PropTypes.number.isRequired,
};
export default ComponentBlog;
