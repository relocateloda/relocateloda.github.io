import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { RoutesConst } from "../../common/Routes";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar} onClick={() => navigate(RoutesConst.MAIN)}>
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Львівська Обласна Державна Адміністрація</p>
    </div>
  );
};

export default Navbar;
