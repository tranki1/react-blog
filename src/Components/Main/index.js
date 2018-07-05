import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ComponentBlogList from './ComponentBlogList';
import ComponentAddNew from './ComponentAddNew';
import data from '../../dumbData.json';

export default class Main extends React.Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    const { blogs } = this.state;
    if (blogs.length === 0) {
      this.setState({ blogs: data });
    }
  }

  addNewSubmit = (newBlog) => {
    const { blogs } = this.state;
    this.setState({
      blogs: [newBlog, ...blogs],
    });
  };

  render() {
    const { blogs } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/posts/newpost"
            render={props => (
              <ComponentAddNew {...props} addNewSubmit={this.addNewSubmit} newId={blogs[0].id} />
            )}
          />
          <Route exact path="/" render={props => <ComponentBlogList {...props} blogs={blogs} />} />
        </Switch>
      </div>
    );
  }
}
