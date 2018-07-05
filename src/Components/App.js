import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
);
export default withRouter(App);
