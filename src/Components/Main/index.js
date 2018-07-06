import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as contentful from 'contentful';
import styles from './index.css';
import ComponentBlogList from './ComponentBlogList';
import ComponentBlogPost from './ComponentBlogPost';

export default withRouter(
  class Main extends React.Component {
    client = contentful.createClient({
      space: 'xkor0eghrby7',
      accessToken: '515944213e81ffc3acb08f71ffd6da52732a953a0fee385cdfb570339cda92a7',
      resolveLinks: true,
      dynamic_entries: 'auto',
    });

    state = {
      blogs: {},
    };

    componentDidMount() {
      const { blogs } = this.state;
      let id = 0;
      if (Object.keys(blogs).length === 0) {
        this.client.getEntries({ content_type: 'blog' }).then((entries) => {
          const importBlog = {};
          entries.items.forEach((entry) => {
            if (entry.fields) {
              importBlog[id] = entry.fields;
              id += 1;
            }
          });
          this.setState({ blogs: { ...importBlog } });
        });
      }
    }

    handleDelete = (id) => {
      const { blogs } = this.state;
      const newBlogList = { ...blogs };
      delete newBlogList[id];
      this.setState({ blogs: newBlogList });
    };

    addNewSubmit = (newBlog) => {
      const { blogs } = this.state;
      const newId = Object.keys(blogs).length + 1;
      this.setState({
        blogs: { ...blogs, [newId]: newBlog },
      });
    };

    render() {
      const { blogs } = this.state;
      return (
        <div className={styles.Main}>
          <Switch>
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
