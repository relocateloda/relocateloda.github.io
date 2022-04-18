import styles from "./getBackPage.module.scss";
import { Link } from "react-router-dom";

import arrow from "../../assets/arrow-left.png";

const Backpage = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/">
        <img className={styles.img} src={arrow} alt="arrow" />
        <h4 className={styles.text}>Повернутися до пепередньої сторінки</h4>
      </Link>
    </div>
  );
};

export default Backpage;
