import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const ComponentBlog = (props) => {
  const {
    blogTitle, blogDescription, blogPhotoThumbnail, categories,
  } = props;
  let blogPhotoThumbnailURL = '';
  if (Object.keys(blogPhotoThumbnail).length !== 0) {
    blogPhotoThumbnailURL = `https:${blogPhotoThumbnail.fields.file.url}`;
  }
  const renderCategories = categories.map(category => (
    <div key={category.fields.category} className={styles.blogCategory}>
      {category.fields.category}
    </div>
  ));
  return (
    <div className={styles.blogPost}>
      <img className={styles.blogPhotoThumbnail} src={blogPhotoThumbnailURL} alt="" />
      <div className={styles.blogBody}>
        <div className={styles.blogTitle}>{blogTitle}</div>
        <div className={styles.blogContent}>{blogDescription}</div>
      </div>
      {categories.length !== 0 && (
        <div className={styles.blogFooter}>
          <div className={styles.blogCategories}>{renderCategories}</div>
        </div>
      )}
    </div>
  );
};
ComponentBlog.propTypes = {
  blogTitle: PropTypes.string,
  blogDescription: PropTypes.string,
  blogPhotoThumbnail: PropTypes.shape({}),
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};
ComponentBlog.defaultProps = {
  blogTitle: '',
  blogDescription: '',
  blogPhotoThumbnail: {},
  categories: [],
};
export default ComponentBlog;
