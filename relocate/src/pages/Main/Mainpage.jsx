import styles from "./Mainpage.module.scss";

import relocation from "../../assets/icon/location-pin.png";
import currency from "../../assets/icon/currency.png";
import arrow from "../../assets/icon/arrow.png"
import Navbar from "../../Atom/Navbar/Navbar"

const MainPage = () => {
  return (
    <div className={styles.container}>
      <span>
      <Navbar/>
      </span>
      <div className={styles.wrapper}>
      <div className={styles.cardOne}>
      <img className={styles.icon}src={relocation} alt="car" />
        <h2 className={styles.title}>Ви релоковане підприємство?</h2>
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
      </div>
  );
};

export default MainPage;
