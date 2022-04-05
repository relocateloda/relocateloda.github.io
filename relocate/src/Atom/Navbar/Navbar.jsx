import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png"


const Navbar = () => {
  return(
     <h1 className={styles.title}>Львівська Обласна <img className={styles.logo} src={logo} /> Державна Aдмінісрація</h1>
  )
};


export default Navbar;