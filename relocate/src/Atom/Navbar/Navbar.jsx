import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import lvivRegionLogo from "../../assets/lvivRegion.png";
import region  from "../../assets/region.png";
import { RoutesConst } from "../../common/Routes";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar} onClick={() => navigate(RoutesConst.MAIN)}>
      <img className={styles.logoLeft} src={logo} />
      <img className={styles.logoCentral} src={lvivRegionLogo}></img>
      <img className={styles.logoRight} src={region} />
    </div>
  );
};

export default Navbar;
