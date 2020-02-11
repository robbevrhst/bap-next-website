import React from 'react';
import styles from './navigation.module.css';
import Logo from '../../svg/logo';

const navigation = () => {
  return (
    <header className={styles.headercontainer}>
      <div>
        <Logo />
      </div>
      <ul className={styles.languageselector}>
        <a href="/" className={[styles.language, styles.selected].join(' ')}>
          <li>NL</li>
        </a>
        <a href="/" className={styles.language}>
          <li>FR</li>
        </a>
        <a href="/" className={styles.language}>
          <li>EN</li>
        </a>
      </ul>
    </header>
  );
};

export default navigation;
