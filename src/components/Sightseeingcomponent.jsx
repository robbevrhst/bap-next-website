import React from 'react';
import styles from './Sightseeing.module.css';
import sightsee from './assets/sightsee.png';
import lines from './assets/line.png';
const Sightseeingcomponent = items => {
  return (
    <div className={styles.container}>
      <div className={styles.skew}>
        <div className={styles.content}>
          <div>
            <img className={styles.lines} src={lines} alt="" />
            <img className={styles.sightseeimg} src={sightsee} alt="" />
          </div>
          <div className={styles.contentcontainer}>
            <h1 className={styles.title}>
              Hier is jullie engagerende <br />
              persoonlijke dagtrip
            </h1>
            <h2 className={styles.subtitle}>De abdij van Vaucelles</h2>
            <p className={styles.description}>
              De cisterciënzerabdij van Vaucelles, gelegen in de vallei van de
              Hoge Schelde, in Les Rues-des-Vignes, werd gesticht in de 12e eeuw
              door Saint-Bernard. Deze abdij is bijzonder omdat ze de grootste
              cisterciënzer kapittelzaal van Europa bezit. De bezoekers kunnen
              verder, bovenop dit juweeltje, de monnikenzaal, het auditorium, de
              heilige doorgang en de abdijtuin, versierd met een groentetuin,
              een boomgaard en een rozentuin, ontdekken.
            </p>
            <a className={styles.button} href="">
              Meer info over de abdij
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sightseeingcomponent;
