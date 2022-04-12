import styles from "./Cards.module.scss"

import relocation from "../../assets/icon/team.png";
import currency from "../../assets/icon/business-proposal.png";
// import currency from "../../assets/icon/currency.png";
import arrow from "../../assets/icon/arrow.png"

import { RoutesConst } from "../../common/Routes";
import { Link } from "react-router-dom";

const Cards = () => {
    return (
        <div className={styles.wrapper}>
        <Link to={RoutesConst.CATEGORIES} className={styles.cardOne}>
          <img className={styles.icon} src={relocation} alt="car" />
          <h2 className={styles.title}>Ви релокований бізнес?</h2>
          <div className={styles.subtitle}>
            переглянути пропозицію
            <img className={styles.arrow} src={arrow} alt="arrow" />
          </div>
        </Link >
        <Link to={RoutesConst.SEND_OFFER} className={styles.cardSecond}>
          <img className={styles.icon} src={currency} alt="car" />
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