import React from 'react';
import firebase from '../firebase.js';
import { withRouter, useHistory } from 'react-router-dom';
import styles from './Login.module.css';
import login from './assets/login.svg';

let db = firebase.database();
const codeInput = React.createRef();

const Login = () => {
  let history = useHistory();

  console.log(history);
  const handleSubmit = e => {
    e.preventDefault();
    let code = codeInput.current.value;

    db.ref(code).on('value', snapshot => {
      let items = snapshot.val();
      console.log(items);
      if (items === null) {
        console.log('niet juist');
      } else {
        history.push('/' + code);
      }
    });
  };
  return (
    <div className={styles.container2}>
      <div className={styles.container}>
        <img className={styles.img} src={login} alt="" />

        <div className={styles.textcontainer}>
          <div>
            <h1 className={styles.title2}>
              scan de qr-code in op je mobiel of...
            </h1>
          </div>
          <div className={styles.inputcontainer}>
            <h1 className={styles.title}>
              Geef hier je 5-cijferige code in om je <br /> gepersonaliseerde
              planning te bekijken
            </h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input className={styles.input} type="input" ref={codeInput} />
              <input className={styles.button} type="submit" value="GO" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
