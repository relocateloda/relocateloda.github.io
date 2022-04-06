import styles from "./Mainpage.module.scss";




import Navbar from "../../Atom/Navbar/Navbar"
import AboutRelocation from "../../Atom/AboutRelocation/AboutRelocarion";
import Cards from "../../Atom/Cards/Cards"
import Team from "../../Atom/Team/Team";

const MainPage = () => {
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
