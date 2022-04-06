import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png"


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p>Львівська Обласна</p> 
      <img className={styles.logo} src={logo} />
      <p>Державна Aдмінісрація</p>
    </div>
  );
};


export default Navbar;