import styles from "./Footer.module.scss";

import emblem from "../../assets/Emblem.png"
import { useNavigate } from "react-router-dom";
import { encryptStorageAdmin } from "../../utils/encryptStorage";
import { RoutesConst } from "../../common/Routes";



const Footer = () => {
    const navigate = useNavigate();
    const handleClick = ()=> {
        const user = encryptStorageAdmin.getItem("au");
        user === true ? navigate(RoutesConst.ADMIN_PROPOSALS) : navigate(RoutesConst.ADMIN_LOGIN)
    }
  return (
    <div className={styles.footer} onClick={handleClick}>
            <img className={styles.logo} src={emblem} />
      <p className={styles.title}>Русский военный корабль, иди на х@й !!</p> 
    </div>
  );
};


export default  Footer;