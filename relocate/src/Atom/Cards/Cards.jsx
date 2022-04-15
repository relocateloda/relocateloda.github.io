import styles from "./Cards.module.scss";

import arrow from "../../assets/arrow-right.png";
import lamp from "../../assets/icon/lamp.png";
import growth from "../../assets/iconsGrowth.png";

import { RoutesConst } from "../../common/Routes";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={RoutesConst.CATEGORIES} className={styles.cardOne}>
        <img className={styles.icon} src={growth} alt="growth" />
        <h2 className={styles.title}>Ви релокований бізнес?</h2>
        <div className={styles.subtitle}>
          переглянути пропозицію
          <img className={styles.arrow} src={arrow} alt="arrow" />
        </div>
      </Link>
      <Link to={RoutesConst.SEND_OFFER} className={styles.cardSecond}>
        <img className={styles.icon} src={lamp} alt="car" />
        <h2 className={styles.title}>Ви існуючий бізнес?</h2>
        <div className={styles.subtitle}>
          подати ипропозицію
          <img className={styles.arrow} src={arrow} alt="arrow" />
        </div>
      </Link>
    </div>
  );
};

export default Cards;
