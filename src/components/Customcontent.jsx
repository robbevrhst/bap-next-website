import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Customcontent.module.css';
import customimg from './assets/eventimg.png';
import bustrack from './assets/bustrack.svg';
import bus from './assets/bus.svg';
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
      <h1 className={styles.welcomtitle}>
        Rico, hier is wat je samen kan beleven
      </h1>

      <div className={styles.artistcontainer}>
        <h3 className={styles.production}>bad translation</h3>
        <h2 className={styles.artist}>Cris Blanco</h2>

        <p className={styles.description}>
          Bad Translation is een gevecht waarbij het analoge wint van het
          digitale. Cris Blanco ziet de digitale wereld als een grote metafoor
          voor de samenleving. Daarin wordt ons ‘analoge’ leven steeds vaker
          omgezet in een ‘digitale’ taal die via een computer gedeeld wordt met
          de wereld.
        </p>
      </div>

      <img className={styles.eventimg} src={customimg} alt="" />
      <div className={styles.buscontainer}>
        <div className={styles.buttoncontainer}>
          <a className={styles.buybutton} href="">
            Koop ticket - €8
          </a>
          <h4 className={styles.freebustitle}>
            gratis bus richting cris blanco
          </h4>
          <div className={styles.bustrackcontainer}>
            <p className={styles.leavetext}>
              Vertrek aan de
              <br /> <span className={styles.bold}>Budafabriek</span>
            </p>
            <div>
              <img className={styles.bustrack} src={bustrack} alt="" />
              <div className={styles.bustrackercontainer}>
                <span className={styles.time}>14:15</span>
                <span className={styles.time}>14:15</span>
              </div>
            </div>
            <p className={styles.arrivetext}>
              Vertrek aan de
              <br /> <span className={styles.bold}>Budafabriek</span>
            </p>
          </div>
          <div className={styles.bustrackcontainer}>
            <p className={styles.leavetext}>
              Vertrek aan de
              <br /> <span className={styles.bold}>Budafabriek</span>
            </p>
            <div>
              <img className={styles.bustrack} src={bustrack} alt="" />
              <div className={styles.bustrackercontainer}>
                <span className={styles.time}>14:15</span>
                <span className={styles.time}>14:15</span>
              </div>
            </div>
            <p className={styles.arrivetext}>
              Vertrek aan de
              <br /> <span className={styles.bold}>Budafabriek</span>
            </p>
          </div>
        </div>
        <img className={styles.bus} src={bus} alt="" />
      </div>
    </div>
  );
};

export default Customcontent;
