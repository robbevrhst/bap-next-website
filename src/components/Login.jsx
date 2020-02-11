import React from 'react';
import firebase from '../firebase.js';
import { withRouter, useHistory } from 'react-router-dom';

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="input" ref={codeInput} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default withRouter(Login);
