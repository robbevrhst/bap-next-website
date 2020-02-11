import React from 'react';
import styles from './Stappencomponent.module.css';

const Stappencomponent = items => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Mag het wat meer zijn?
        <br />
        Kijk hier voor jullie nextperience
      </h1>
      <p className={styles.intro}>
        Zin in iets avontuurlijks? Ga samen met je kammeraad naar je gematchte
        evenement en zoek jullie spannende extra match!
      </p>
      <div className={styles.opsomming}>
        <div className={styles.number1}>
          <span className={styles.numberone}>1.</span>
          <p className={styles.numbertext}>
            Bestel tickets voor je gematchte evenement via de link bovenaan.
          </p>
        </div>

        <div className={styles.number2}>
          <span className={styles.numberone}>2.</span>
          <p className={styles.numbertext2}>
            Print dit ticket uit. Daarop staat een symbool.
          </p>
        </div>

        <div className={styles.number3}>
          <span className={styles.numberthree}>3.</span>
          <p className={styles.numbertext1}>
            Aan de ingang van het evenement krijg je een houder, plaats daarin
            je gevouwen ticket met het symbool naar voor.
          </p>
        </div>

        <div className={styles.number4}>
          <span className={styles.numberone}>4.</span>
          <p className={styles.numbertext4}>
            Print dit ticket uit. Daarop staat een symbool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stappencomponent;
