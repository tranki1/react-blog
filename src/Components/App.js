import React from 'react';
import styles from './App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => (
  <div className={styles.App}>
    <Header />
    <Main>
      <h1>Hello to trungh13-react-boilerplate</h1>
    </Main>
    <Footer />
  </div>
);
export default App;
