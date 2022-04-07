import styles from "./OfferCards.module.scss";


import lampIcon from "../../assets/icon/lamp.png";
import arrowWhite from "../../assets/icon/arrowWhite.png"; 



const OffersCards = () => {
        return (
          <div className={styles.card}>
              <img className={styles.lampicon} src={lampIcon}></img>
            <h2 className={styles.title}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className={styles.apply}>
              <a className={styles.link} href="#">
                Детальніше
              </a>
              <img className={styles.arrowWhite} src={arrowWhite} />
            </p>
          </div>
        );
}


export default OffersCards;