import styles from "./Mainpage.module.scss";
import Navbar from "../../Atom/Navbar/Navbar"
import AboutRelocation from "../../Atom/AboutRelocation/AboutRelocarion";
import Cards from "../../Atom/Cards/Cards"
import Team from "../../Atom/Team/Team";
import Footer from "../../Atom/Footer/Footer";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <AboutRelocation />
      <Cards />

      <Footer />
    </div>
  );
};

export default MainPage;
