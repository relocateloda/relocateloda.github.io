import styles from "./Cards.module.scss"

import relocation from "../../assets/icon/location-pin.png";
import currency from "../../assets/icon/currency.png";
import arrow from "../../assets/icon/arrow.png"

const Cards = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.cardOne}>
          <img className={styles.icon} src={relocation} alt="car" />
          <h2 className={styles.title}>Ви релокований бізнес?</h2>
          <div className={styles.subtitle}>
            переглянути пропозицію
            <img className={styles.arrow} src={arrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.cardSecond}>
          <img className={styles.icon} src={currency} alt="car" />
          <h2 className={styles.title}>Ви існуючий бізнес?</h2>
          <div className={styles.subtitle}>
            подати ипропозицію
            <img className={styles.arrow} src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Cards;