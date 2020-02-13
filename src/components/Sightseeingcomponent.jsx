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
              Had u daar nog graag iets
              <br /> voor te eten bij?
            </h1>
            <h2 className={styles.subtitle}>Dinner@next</h2>
            <p className={styles.description}>
              Een festival wordt des te fascinerender wanneer je de ervaring
              deelt met anderen. Schuif mee aan tafel bij de medetoeschouwers
              van over de grens. Een gastheer en/of - vrouw nodigen je voor of
              na de voorstelling uit voor een zelfgekozen huisbereid diner. Als
              bedanking kies je wat je meebrengt, zoals een aperitief of een
              fles wijn. <br />
              <br />
              Wil je graag zelf gastvrouw of -heer zijn en toeschouwers rond
              jouw tafel verwelkomen?
            </p>
            <a className={styles.button} href="">
              Word zelf gastheer/vrouw
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sightseeingcomponent;
