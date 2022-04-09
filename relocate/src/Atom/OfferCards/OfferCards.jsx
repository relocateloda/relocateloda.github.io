import styles from "./OfferCards.module.scss";


import lampIcon from "../../assets/icon/lamp.png";
import arrowWhite from "../../assets/icon/arrowWhite.png";
import { Link } from "react-router-dom";



const OffersCards = ({categorie}) => {
        return (
          <Link className={`${styles[`card${categorie.position}`]} ${styles.card}`} to={`/${categorie.value}`}>
              <img className={styles.lampicon} src={lampIcon}></img>
            <h2 className={styles.title}>
                {categorie.name}
            </h2>
            <p className={styles.apply}>
              <a className={styles.link} href="#">
               Детальніше
              </a>
              <img className={styles.arrowWhite} src={arrowWhite} />
            </p>
          </Link>
        );
}


export default OffersCards;