import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as contentful from 'contentful';
import styles from './index.css';
import ComponentBlogList from './ComponentBlogList';
import ComponentBlogPost from './ComponentBlogPost';
import ComponentAddNew from './ComponentAddNew';

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
          console.log('entries', entries);
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
