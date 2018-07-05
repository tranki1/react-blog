import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => (
  <Router>
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  </Router>
);
export default App;
