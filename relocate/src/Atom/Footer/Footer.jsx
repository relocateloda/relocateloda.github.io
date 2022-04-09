import styles from "./Footer.module.scss";

import emblem from "../../assets/Emblem.png"



const Footer = () => {
  return (
    <div className={styles.footer}>
            <img className={styles.logo} src={emblem} />
      <p className={styles.title}>Русский военный корабль, иди на х@й !!</p> 
    </div>
  );
};


export default  Footer;