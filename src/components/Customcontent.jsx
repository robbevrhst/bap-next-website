import React from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../firebase.js';
let db = firebase.database();

const Customcontent = items => {
  let custom = [];
  let { id } = useParams();
  console.log(items);

  db.ref(id).on('value', snapshot => {
    items = snapshot.val();
    console.log(custom);
    custom.push(items);
  });
  //console.log(custom[0]);
  //<h1>{custom[0].title}</h1>
  return (
    <div>
      <h1>CIE XY & RACHID OURAMDANE</h1>
    </div>
  );
};

export default Customcontent;
