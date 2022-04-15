import styles from "./Footer.module.scss";

import { useNavigate } from "react-router-dom";
import { encryptStorageAdmin } from "../../utils/encryptStorage";
import { RoutesConst } from "../../common/Routes";

import PhoneIcon from "../../assets/call.png";
import email from "../../assets/email.png";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const user = encryptStorageAdmin.getItem("au");
    user === true
      ? navigate(RoutesConst.ADMIN_PROPOSALS)
      : navigate(RoutesConst.ADMIN_LOGIN);
  };
  return (
    <div className={styles.footer} onClick={handleClick}>
      <p className={styles.title}>
        Якщо Вам потрібна допомога щодо релокації бізнесу на терени Львівщини
        звертайтесь до спеціалістів відділу інвестиційної політики Департаменту
        економічної політики ЛОДА
      </p>
      <p className={styles.sectionNumber}>
        {" "}
        <img className={styles.icon} src={PhoneIcon} alt="phone" />
        <b className={styles.contact}>Контактні телефони:</b>{" "}
        <a className={styles.number} href="tel: +380322612040">
          {" "}
          +38 (032) 2612 040
        </a>
        ,{" "}
        <a className={styles.number} href="tel:+380322612040">
          +38 (093)4 499 108
        </a>
      </p>
      <p className={styles.sectionNumber}>
        {" "}
        <img className={styles.icon} src={email} alt="phone" />
        <b className={styles.contact}>Електронна пошта:</b>{" "}
        <a className={styles.email} href="investregionlviv@gmail.com">
          {" "}
          investregionlviv@gmail.com
        </a>
        ,{" "}
      </p>
    </div>
  );
};

export default Footer;
