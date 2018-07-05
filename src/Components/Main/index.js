import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import styles from './index.css';
import ComponentBlogList from './ComponentBlogList';
import ComponentBlogPost from './ComponentBlogPost';
import ComponentAddNew from './ComponentAddNew';
import data from '../../dumbData.json';

export default withRouter(
  class Main extends React.Component {
    state = {
      blogs: [],
    };

    componentDidMount() {
      const { blogs } = this.state;
      if (blogs.length === 0) {
        this.setState({ blogs: data });
      }
    }

    handleDelete = (id) => {
      const { blogs } = this.state;
      const newBlogList = [...blogs];
      this.setState({ blogs: newBlogList.filter(post => post.id !== id) });
    };

    addNewSubmit = (newBlog) => {
      const { blogs } = this.state;
      this.setState({
        blogs: [newBlog, ...blogs],
      });
    };

    render() {
      const { blogs } = this.state;
      return (
        <div className={styles.Main}>
          <Switch>
            <Route
              exact
              path="/posts/newpost"
              render={props => (
                <ComponentAddNew {...props} addNewSubmit={this.addNewSubmit} newId={blogs[0].id} />
              )}
            />
            <Route
              exact
              path="/posts/:id"
              render={props => (
                <ComponentBlogPost {...props} blogs={blogs} blogPostDelete={this.handleDelete} />
              )}
            />
            <Route
              exact
              path="/"
              render={props => <ComponentBlogList {...props} blogs={blogs} />}
            />
          </Switch>
        </div>
      );
    }
  },
);
