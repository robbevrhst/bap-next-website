import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Planning.module.css';
import waves from './assets/waves.svg';
import dot from './assets/circle.svg';
import dinner from './assets/dinner.png';
let customcontentnumber = true;
const Planning = () => {
  const [state, setState] = useState(true);

  const customcontent = {
    one: {
      title: 'Restaurant Les Arcades',
      subtitle: 'Dinner & Natafelen',
      description:
        'Dit restaurant met een aangelegen hotel heeft een groot aanbod van vele soorten gerechten. Het is redelijk ruim waardoor je genoeg tijd hebt om na jullie dinner nog gezellig kunnen napraten over jullie gezellig dagje uit of de voorstelling die jullie net bezichtigd hebben. Opgelet dit restaurant bevindt zich wel in een medium prijsklasse.'
    },

    two: {
      title: 'Middag lunch',
      subtitle: 'Cultuur/Eten',
      description:
        'De Kunst- en Geschiedenisstad Cambrai beschikt over een rijk erfgoed, getuige de Notre-Damekathedraal uit de 18e eeuw, de Jezuïetenkapel in barokstijl, de Saint-Gérykerk, het belfort, de poort van Parijs, het Spaanse vakwerkhuis daterend uit de 16e eeuw en de Notre-Damepoort. Het Aristide Briandplein, gelegen in het hart van de drukte, wordt overschaduwd door de silhouet van de klokkentoren van het stadhuis en door de twee gekende jacquemarts Martin en Martine. Inclusief gezellige eet gelegenheden.'
    }
  };

  const toggle = () => {
    setState(true);
  };

  let click2 = e => {
    setState(false);
  };

  console.log(customcontentnumber);

  return (
    <div className={styles.container}>
      <img className={styles.waveimg} src={waves} alt="waves" />
      <h1 className={styles.h1}>
        Mag het wat meer zijn?
        <br />
        Geen stress! Wij hebben aan alles gedacht
      </h1>

      <div className={styles.contentcontainer}>
        <div>
          <img src={dinner} alt="" />
        </div>

        <div className={styles.textcontainer}>
          {console.log(customcontentnumber)}
          {state ? (
            <>
              {console.log(customcontent.one.subtitle)}
              <h3 className={styles.subtitle}>{customcontent.one.subtitle}</h3>
              <h2 className={styles.title2}>{customcontent.one.title}</h2>
              <p className={styles.info}>{customcontent.one.description}</p>
            </>
          ) : (
            <>
              {console.log(customcontent.two.subtitle)}
              <h3 className={styles.subtitle}>{customcontent.two.subtitle}</h3>
              <h2 className={styles.title2}>{customcontent.two.title}</h2>
              <p className={styles.info}>{customcontent.two.description}</p>
            </>
          )}
        </div>
        <div className={styles.shedulecontainer}>
          <h4 className={styles.planningtitle}>Uw persoonlijke planning</h4>
          <div className={styles.timecontainer}>
            <span className={styles.timeslot}>09:00</span>
            <img className={styles.dot} src={dot} alt="" />
            <p className={styles.timeinfotext}>Vertrek Kortrijk</p>
          </div>

          <div className={styles.timecontainer}>
            <span className={styles.timeslot}>10:30</span>
            <img className={styles.dot} src={dot} alt="" />
            <button onClick={toggle} className={styles.timeinfotext}>
              De abdij van Vaucelles
            </button>
          </div>

          <div className={styles.timecontainer}>
            <span className={styles.timeslot}>12:00</span>
            <img className={styles.dot} src={dot} alt="" />
            <button onClick={click2} className={styles.timeinfotext}>
              Middag Lunch in Cambrai
            </button>
          </div>

          <div className={styles.timecontainer}>
            <span className={styles.timeslot}>15:30</span>
            <img className={styles.dot} src={dot} alt="" />
            <p className={styles.timeinfotext}>
              Aankomst VALENCIENNES - LE PHÉNIX
            </p>
          </div>

          <div className={styles.timecontainer}>
            <span className={styles.timeslot}>16:00</span>
            <img className={styles.dot} src={dot} alt="" />
            <p className={styles.timeinfotext}>Cris Blanco</p>
          </div>

          <div className={styles.timecontainer}>
            <span className={styles.timeslot}>18:00</span>
            <img className={styles.dot} src={dot} alt="" />
            <p className={styles.timeinfotext}>
              Dinner + Natafelen in Valenciennes
            </p>
          </div>

          <a className={styles.buybutton} href="">
            Dit volledige pakket voor slechts €8*
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Planning);
