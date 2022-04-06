import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png"


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.title}>Львівська Обласна</p> 
      <img className={styles.logo} src={logo} />
      <p className={styles.title}>Державна Адміністрація</p>
    </div>
  );
};


export default Navbar;