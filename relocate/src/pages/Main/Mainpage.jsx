import styles from "./Mainpage.module.scss";


import Navbar from "../../Atom/Navbar/Navbar"
import AboutRelocation from "../../Atom/AboutRelocation/AboutRelocarion";
import Cards from "../../Atom/Cards/Cards"

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Cards/>
      <AboutRelocation />
    </div>
  );
};

export default MainPage;
