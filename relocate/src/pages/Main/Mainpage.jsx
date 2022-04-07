import styles from "./Mainpage.module.scss";
import { useNavigate } from "react-router-dom";
import relocation from "../../assets/icon/location-pin.png";
import currency from "../../assets/icon/currency.png";
import arrow from "../../assets/icon/arrow.png";
import Navbar from "../../Atom/Navbar/Navbar";
import { RoutesConst } from "../../common/Routes";

const MainPage = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span>
        <Navbar />
      </span>
      <div className={styles.wrapper}>
        <div className={styles.cardOne} onClick={()=>navigate(RoutesConst.OFFERS)}>
          <img className={styles.icon} src={relocation} alt="car" />
          <h2 className={styles.title}>Ви релоковане підприємство?</h2>
          <div className={styles.subtitle}>
            переглянути пропозицію
            <img className={styles.arrow} src={arrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.cardSecond} onClick={()=>navigate(RoutesConst.SEND_OFFER)}>
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
