import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.css';

const Header = () => (
  <div className={styles.Header}>
    <h1>React-Blog</h1>
    <ul className={styles.ulNavLink}>
      <li className={styles.liNavLink}>
        <NavLink disabled activeClassName={styles.activeNavLink} exact to="/">
          Blog List
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
