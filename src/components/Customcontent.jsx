import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Customcontent.module.css';

import eventimg1 from './assets/eventimg1.png';
import eventimg2 from './assets/eventimg2.png';
import eventimg3 from './assets/eventimg3.png';
import bustrack from './assets/bustrack.svg';
import bus from './assets/bus.svg';
import firebase from '../firebase.js';
let db = firebase.database();

const Customcontent = items => {
  let custom = [];
  let { id } = useParams();
  console.log(items);

  let img = [];

  db.ref(id).on('value', snapshot => {
    items = snapshot.val();
    console.log(custom);
    custom.push(items);
  });

  if (custom[0].img === 'eventimg1') {
    console.log('ik ga in de image');
    img.push('/static/media/eventimg1.7fdedc35.png');
  } else if (custom[0].img === 'eventimg2') {
    img.push('/static/media/eventimg2.38cb34d6.png');
  } else if (custom[0].img === 'eventimg3') {
    img.push('/static/media/eventimg3.b3dc49a4.png');
  }

  console.log(img);
  //<h1>{custom[0].title}</h1>
  return (
    <div>
      <h1 className={styles.welcomtitle}>
        {custom[0].name}, hier is wat je samen kan beleven {custom[0].opponent}
      </h1>

      <div className={styles.artistcontainer}>
        <div className={styles.datecontainer}>
          <div>
            <h3 className={styles.production}>{custom[0].production}</h3>
            <h2 className={styles.artist}>{custom[0].title}</h2>
          </div>
          <span className={styles.date}>{custom[0].date}</span>
        </div>
        <p className={styles.description}>{custom[0].description}</p>
      </div>

      <img className={styles.eventimg} src={img[0]} alt="" />
      <div className={styles.buscontainer}>
        <div className={styles.buttoncontainer}>
          <a className={styles.buybutton} href="">
            Koop ticket - €8
          </a>
          <h4 className={styles.freebustitle}>
            gratis bus richting {custom[0].title}
          </h4>
          <div className={styles.bustrackcontainer}>
            <p className={styles.leavetext}>
              Vertrek aan
              <br /> <span className={styles.bold}>{custom[0].vertrek}</span>
            </p>
            <div>
              <img className={styles.bustrack} src={bustrack} alt="" />
              <div className={styles.bustrackercontainer}>
                <span className={styles.time}>{custom[0].bustimeleave1}</span>
                <span className={styles.time}>{custom[0].bustimearrive1}</span>
              </div>
            </div>
            <p className={styles.arrivetext}>
              Vertrek aan
              <br /> <span className={styles.bold}>{custom[0].aankomst}</span>
            </p>
          </div>
          <div className={styles.bustrackcontainer}>
            <p className={styles.leavetext}>
              Vertrek aan
              <br /> <span className={styles.bold}>{custom[0].aankomst}</span>
            </p>
            <div>
              <img className={styles.bustrack} src={bustrack} alt="" />
              <div className={styles.bustrackercontainer}>
                <span className={styles.time}>{custom[0].bustimeleave2}</span>
                <span className={styles.time}>{custom[0].bustimearrive2}</span>
              </div>
            </div>
            <p className={styles.arrivetext}>
              Vertrek aan
              <br /> <span className={styles.bold}>{custom[0].vertrek}</span>
            </p>
          </div>
        </div>
        <img className={styles.bus} src={bus} alt="" />
      </div>
    </div>
  );
};

export default Customcontent;
