import styles from "./Mainpage.module.scss";
import { useNavigate } from "react-router-dom";
import relocation from "../../assets/icon/location-pin.png";
import currency from "../../assets/icon/currency.png";
import arrow from "../../assets/icon/arrow.png";
import Navbar from "../../Atom/Navbar/Navbar";
import { RoutesConst } from "../../common/Routes";
import Navbar from "../../Atom/Navbar/Navbar"
import AboutRelocation from "../../Atom/AboutRelocation/AboutRelocarion";
import Cards from "../../Atom/Cards/Cards"
import Team from "../../Atom/Team/Team";

const MainPage = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Navbar />
      <Cards/>
      <AboutRelocation />
      <Team />
    </div>
  );
};

export default MainPage;
