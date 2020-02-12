import React from 'react';

import { withRouter } from 'react-router-dom';
import styles from './Footer.module.css';
import whitelogo from './assets/whitelogo.png';
import fblogo from './assets/fb-logo.png';
import insta from './assets/insta.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={whitelogo} alt="" />
      <div>
        <img className={styles.img2} src={fblogo} alt="" />
        <img className={styles.img2} src={insta} alt="" />
      </div>
    </div>
  );
};

export default withRouter(Footer);
